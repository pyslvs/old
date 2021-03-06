(function() {
    var ready = false;
    var listeners = [];
    var numListeners = 0;

    $.pbOnNewContent = function(fn) {
        listeners.push(fn);
        numListeners++;
        if (ready) {
            fn($(document.body));
        }
    };

    $.pbNewContent = function(container) {
        var $container = $(container);
        for (var i = 0; i < numListeners; i++) {
            listeners[i]($container);
        }
    };

    $(function() {
        ready = true;
        $.pbNewContent(document.body);
    });
})();

(function() {
    var BLUR_TIME = 200;
    var ACTIVE_CLASS = 'active';
    var POPUP_OPTIONS = { closeOnMouseLeave: false };

    AUTOCOMPLETE_DEFAULTS = {
        matchGroup:         0,
        beforeGroup:        -1,
        afterGroup:         -1,
        rms:                null,
        regex:              null,
        action:             null,
        usePopup:           null,
        suggestionSelector: '[data-autocomplete-value]',
    };

    $.fn.pbAutocompleteEnable = function(inputs, options) {
        var $suggestions = this;

        options = processOptions($suggestions, options);

        if (!options) {
            return;
        }

        findInputs(inputs, options, function() {
            enableForInput($(this), options);
        });

        options.$suggestions.on('click', options.suggestionSelector, suggestionClickListener);
        options.$suggestions.on('mouseenter', options.suggestionSelector, suggestionMouseEnterListener);
    };

    $.pbOnNewContent(function($container) {
        $container.find('.pb-autocomplete-scope[pb-auto-autocomplete] .pb-autocomplete-suggestions').each(function() {
            $(this).pbAutocompleteEnable();
        });
    });

    function findInputs(inputs, options, eachFn) {
        var $inputs;
        if (inputs) {
            $inputs = $(inputs);
        }
        else {
            $inputs = options.$suggestions.parents('.pb-autocomplete-scope').find('input[type=text],textarea,[contenteditable]');
        }

        if (eachFn) {
            $inputs.each(eachFn);
        }

        return $inputs;
    }

    function enableForInput($input, options) {
        $input.on('focus', function() {
            clearTimeout($input.data('blurtimeout'));
            $(this).on('input', inputlistener);
        });
        $input.on('blur', function() {
            var $input = $(this);
            $input.off('input', inputlistener);

            $input.data('blurtimeout', setTimeout(function() {
                closeMatcher($input);
            }, BLUR_TIME));
        });

        if ($input.is(':focus')) {
            $input.on('input', inputlistener);
        }

        var matchers = $input.data('autocomplete-matchers');
        if (!matchers) {
            matchers = [];
        }

        matchers.push(options);
        $input.data('autocomplete-matchers', matchers);
    }

    function inputlistener() {
        var $input = $(this);
        var line = $input.pbTextfieldCurrentLine();
        matchLine(line, $input);
    }

    function matchLine(line, $input) {
        var matchers = $input.data('autocomplete-matchers');
        for (var i = 0; i < matchers.length; i++) {
            var match = line.match(matchers[i].regex);

            if (match) {
                var text = match[matchers[i].matchGroup];
                text = text.replace('___','');

                haveMatch($input, text, matchers[i]);

                // return as we don't need to look for another match, we found
                // one.  We only match one matcher at a time.
                return;
            }
        }

        closeMatcher($input);
    }

    function haveMatch($input, text, matcher) {
        matcher.action(text, matcher, haveSuggestionsForMatcher);

        function haveSuggestionsForMatcher(suggestions) {
            if (suggestions) {
                matcher.$suggestions.html(suggestions);

                openMatcher($input, matcher);
                ensureHaveSelection(matcher);
            }
            else {
                closeMatcher($input);
            }
        }
    }

    function suggestionMouseEnterListener() {
        var $suggestion = $(this);
        var $suggestions = $suggestion.parents('.pb-autocomplete-suggestions');
        var matcher = $suggestions.data('matcher');
        selectSuggestion(matcher, $suggestion);
    }

    function suggestionClickListener() {
        var $suggestion = $(this);

        var value = $suggestion.data('autocompleteValue');
        var $suggestions = $suggestion.parents('.pb-autocomplete-suggestions');
        var matcher = $suggestions.data('matcher');

        var $input = matcher.$input;

        var line        = $input.pbTextfieldCurrentLine();

        var matchStart  = line.search(matcher.regex);
        var match       = line.match(matcher.regex);
        var before      = matcher.beforeGroup > -1 ? match[matcher.beforeGroup] : '';
        var after       = matcher.afterGroup > -1 ? match[matcher.afterGroup] : '';
        var replacement = before + value + after;
        var newLine     = line.replace(matcher.regex, replacement);

        $input.pbTextfieldCurrentLine(newLine, matchStart + replacement.length);
        closeMatcher($input);
    }

    function ensureHaveSelection(matcher) {
        var $selectedSuggestion = matcher.$suggestions.find('.'+ACTIVE_CLASS);
        if (!$selectedSuggestion.length) {
            // no selection, so select first one
            var $firstSuggestion = matcher.$suggestions.find(matcher.suggestionSelector).first();
            selectSuggestion(matcher, $firstSuggestion);
        }
    }

    function selectSuggestion(matcher, $suggestion) {
        matcher.$suggestions.find('.'+ACTIVE_CLASS).removeClass(ACTIVE_CLASS);
        $suggestion.addClass(ACTIVE_CLASS);
    }

    function rmsSearchAction(text, matcher, cb) {
        var data = jQuery.extend({}, matcher.rms);
        data.search = text;

        $.rmsSend(data, function(response) {
            cb(response.rmsD.list);
        });
    }

    function suggestionsKeydownListener(e) {
        var $input = $(this);
        var matcher = $input.data('open-matcher');

        switch(e.keyCode) {
            case 13: // enter
                matcher.$suggestions.find('.'+ACTIVE_CLASS).click();
                e.preventDefault();
                break;
            case 27: // escape
                closeMatcher($input);
                break;
            case 38: // up
                var $prev = matcher.$suggestions.find('.'+ACTIVE_CLASS).prevAll(matcher.suggestionSelector).first();
                if ($prev.length < 1) {
                    $prev = matcher.$suggestions.find(matcher.suggestionSelector).last();
                }
                selectSuggestion(matcher, $prev);

                e.preventDefault();
                break;
            case 40: // down
                var $next = matcher.$suggestions.find('.'+ACTIVE_CLASS).nextAll(matcher.suggestionSelector).first();
                if ($next.length < 1) {
                    $next = matcher.$suggestions.find(matcher.suggestionSelector).first();
                }
                selectSuggestion(matcher, $next);

                e.preventDefault();
                break;
        }
    }

    function processOptions($suggestions, options) {
        options = $suggestions.pbGetOptions(options, 'autocomplete', AUTOCOMPLETE_DEFAULTS);

        options.$suggestions = $suggestions;
        options.$suggestions.data('matcher', options);

        if (options.regex) {
            if (options.regex instanceof RegExp) {
                // already good
            }
            else {
                options.regex = new RegExp(options.regex.substr(1,options.regex.length-2));
            }
        }
        else {
            // need a regular expression, so if one wasn't specified, then just
            // match all text
            options.regex = /^.*$/;
            options.matchGroup = 0;
            options.beforeGroup = -1;
            options.afterGroup = -1;
        }

        if (options.usePopup === null) {
            options.usePopup = options.$suggestions.hasClass('pb-popup');
        }

        if (options.action === null) {
            if (options.rms) {
                if (!$.isPlainObject(options.rms)) {
                    console.error('could not parse rms call for autocomplete');
                    return;
                }
                else {
                    options.action = rmsSearchAction;
                }
            }
            else {
                console.error('could not find action for this autocomplete');
                return;
            }
        }

        return options;
    }

    function openMatcher($input, matcher) {
        var prevmatcher = $input.data('open-matcher');
        if (prevmatcher) {
            if (prevmatcher !== matcher) {
                // another matcher is open!  close it
                console.error('another matcher is open! this should not happen!')
                closeMatcher($input);
            }
            else {
                // already open, don't do anything
                return;
            }
        }
        matcher.$input = $input;
        $input.on('keydown', suggestionsKeydownListener);

        $input.data('open-matcher', matcher);

        if (matcher.usePopup) {
            matcher.$suggestions.pbOpenPopup($input, POPUP_OPTIONS);
        }
        else {
            //
        }
    }

    function closeMatcher($input) {
        var matcher = $input.data('open-matcher');
        if (matcher) {
            $input.off('keydown', suggestionsKeydownListener);

            $input.removeData('open-matcher');
            matcher.$input = null;

            if (matcher.usePopup) {
                matcher.$suggestions.pbClosePopup(POPUP_OPTIONS);
            }
            else {
                matcher.$suggestions.html('');
            }
        }
    }

})();

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD (Register as an anonymous module)
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {

  var pluses = /\+/g;

  function encode(s) {
    return config.raw ? s : encodeURIComponent(s);
  }

  function decode(s) {
    return config.raw ? s : decodeURIComponent(s);
  }

  function stringifyCookieValue(value) {
    return encode(config.json ? JSON.stringify(value) : String(value));
  }

  function parseCookieValue(s) {
    if (s.indexOf('"') === 0) {
      // This is a quoted cookie as according to RFC2068, unescape...
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }

    try {
      // Replace server-side written pluses with spaces.
      // If we can't decode the cookie, ignore it, it's unusable.
      // If we can't parse the cookie, ignore it, it's unusable.
      s = decodeURIComponent(s.replace(pluses, ' '));
      return config.json ? JSON.parse(s) : s;
    } catch(e) {}
  }

  function read(s, converter) {
    var value = config.raw ? s : parseCookieValue(s);
    return $.isFunction(converter) ? converter(value) : value;
  }

  var config = $.cookie = function (key, value, options) {

    // Write

    if (arguments.length > 1 && !$.isFunction(value)) {
      options = $.extend({}, config.defaults, options);

      if (typeof options.expires === 'number') {
        var days = options.expires, t = options.expires = new Date();
        t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
      }

      return (document.cookie = [
        encode(key), '=', stringifyCookieValue(value),
        options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
        options.path    ? '; path=' + options.path : '',
        options.domain  ? '; domain=' + options.domain : '',
        options.secure  ? '; secure' : ''
      ].join(''));
    }

    // Read

    var result = key ? undefined : {},
      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all. Also prevents odd result when
      // calling $.cookie().
      cookies = document.cookie ? document.cookie.split('; ') : [],
      i = 0,
      l = cookies.length;

    for (; i < l; i++) {
      var parts = cookies[i].split('='),
        name = decode(parts.shift()),
        cookie = parts.join('=');

      if (key === name) {
        // If second argument (value) is a function it's a converter...
        result = read(cookie, value);
        break;
      }

      // Prevent storing a cookie that we couldn't decode.
      if (!key && (cookie = read(cookie)) !== undefined) {
        result[name] = cookie;
      }
    }

    return result;
  };

  config.defaults = {};

  $.removeCookie = function (key, options) {
    // Must not alter options, thus extending a fresh object...
    $.cookie(key, '', $.extend({}, options, { expires: -1 }));
    return !$.cookie(key);
  };

}));

(function() {
    var DEFAULT_OPTIONS = {
        changeURL:               true,
        replaceHistory:          true,
        loadingContentClass:     'pb-loading-content',
        doneLoadingContentClass: 'pb-done-loading-content',
    };

    $.fn.pbFormDynamicLoad = function(loadInto, options) {
        this.each(function() {
            load($(this), $(loadInto), options);
        });
        return this;
    };

    $.pbOnNewContent(function($container) {
        //$container.find('[pb-form-dynamic-load]').each(function(i,el) { console.log(el); });
        $container.find('[pb-form-dynamic-load]').on('submit', dynamicForm_submit_listener);
    });

    function dynamicForm_submit_listener(e) {
        var $this = $(this);
        var loadIntoSelector = $this.attr('pb-form-dynamic-load');
        var $loadInto = $(loadIntoSelector);

        $(this).pbFormDynamicLoad($loadInto);

        e.preventDefault();
        return false;
    }

    function load($form, $loadInto, options) {

        options = $form.pbGetOptions(options, 'dynamic-form', DEFAULT_OPTIONS);

        if ($loadInto.length < 1) {
            console.error('cannot find target for dynaminc form, skipping');
            return;
        }

        var method = ($form.attr('method') || 'GET');

        if (method.toUpperCase() !== 'GET') {
            console.error('pbjquery dynamic form only works with GET requests right now');
            return;
        }

        var data       = parseQueryString($form.serialize());
        var url        = ($form.attr('action') || window.location+'');
        var query      = '';
        var queryIndex = url.indexOf('?');

        if (queryIndex > -1) {
            query = url.slice(queryIndex+1);
            url = url.slice(0, queryIndex);

            data = $.extend(parseQueryString(query), data);
        }

        url += '?' + $.param(data);

        var loadOptions = {
            changeURL:      options.changeURL,
            replaceHistory: options.replaceHistory,
        };

        //console.log(url, loadOptions);

        $loadInto.addClass(options.loadingContentClass).removeClass(options.doneLoadingContentClass);
        $loadInto.pbLoadFrom(url, loadOptions, function() {
            $loadInto.removeClass(options.loadingContentClass).addClass(options.doneLoadingContentClass);
        });

        return false;
    }

    // https://gist.github.com/kares/956897
    function parseQueryString(query) {
        var re = /([^&=]+)=?([^&]*)/g;
        var decodeRE = /\+/g;  // Regex for replacing addition symbol with a space
        var decode = function (str) {return decodeURIComponent( str.replace(decodeRE, " ") );};

        var params = {}, e;
        while ( e = re.exec(query) ) {
            var k = decode( e[1] ), v = decode( e[2] );
            if (k.substring(k.length - 2) === '[]') {
                k = k.substring(0, k.length - 2);
                (params[k] || (params[k] = [])).push(v);
            }
            else params[k] = v;
        }
        return params;
    }


})();

(function() {
    var DEFAULT_OPTIONS = {
        changeURL:               true,
        replaceHistory:          true,
        loadingContentClass:     'pb-loading-content',
        doneLoadingContentClass: 'pb-done-loading-content',
    };

    $.fn.pbLinkDynamicLoad = function(url, loadInto, options) {
        this.each(function() {
            load($(this), url, $(loadInto), options);
        });
        return this;
    };

    $.pbOnNewContent(function($container) {
        $container.find('[pb-link-dynamic-load]').on('click', dynamicLink_click_listener);
    });

    function dynamicLink_click_listener(e) {
        var $this = $(this);
        var loadIntoSelector = $this.attr('pb-link-dynamic-load');
        var $loadInto = $(loadIntoSelector);

        var href = $this.attr('href');

        $(this).pbLinkDynamicLoad(href, $loadInto);

        e.preventDefault();
        return false;
    }

    function load($link, url, $loadInto, options) {

        options = $link.pbGetOptions(options, 'dynamic-link', DEFAULT_OPTIONS);

        if ($loadInto.length < 1) {
            console.error('cannot find target for dynaminc link, skipping');
            return;
        }

        //var $parent = $loadInto.parent().first();
        //$loadInto.remove();
        $loadInto.addClass(options.loadingContentClass).removeClass(options.doneLoadingContentClass);
        $loadInto.pbLoadFrom(url, {changeURL: options.changeURL, replaceHistory: options.replaceHistory}, function() {
            $loadInto.removeClass(options.loadingContentClass).addClass(options.doneLoadingContentClass);
        });

        return false;
    }


})();

$.fn.pbGetOptions = function(options, namespace, defaults) {
    var $el = this;

    if (!$.isPlainObject(options)) {
        options = {};
    }

    if ($el && namespace) {
        for (var key in defaults) {
            var datakey = namespace+key.substr(0,1).toUpperCase()+key.substr(1).toLowerCase();
            if (typeof options[key] === 'undefined' && $el.data(datakey)) {
                options[key] = $el.data(datakey);
            }
        }
    }

    options = $.extend({}, defaults, options);

    return options;
};

(function() {
    var CAN_CHANGE_HISTORY = window.history && ('replaceState' in window.history) && ('pushState' in window.history);

    var popStateListenerAdded = false;

    // this is definitely a potential memory leak
    var targets = [];

    $.pbCheckIfLoadFromWorks = function() {
        return CAN_CHANGE_HISTORY;
    };

    $.fn.pbLoadFrom = function(url, options, cb) {
        if (typeof cb == 'undefined') {
            cb = options;
            options = {};
        }

        if (typeof options == 'undefined') {
            options = {};
        }

        url = ensureNotRelative(url);

        var context = {
            $target: this,
            options: options,
            cb: cb,
            url: url,
        };

        url += (url.indexOf('?') >= 0 ? '&' : '?') + 'viaajax=1';

        if (context.options.changeURL) {
            if (CAN_CHANGE_HISTORY) {
                setHistory(context.url, context.$target, context.options.replaceHistory);
                $.ajax({
                    dataType: 'json',
                    url: url,
                    success: onSuccess,
                    error: onError,
                    context: context,
                });
            }
            else {
                window.location = context.url;
            }
        }

    };

    function ensurePopStateListenerAdded() {
        if (popStateListenerAdded) {
            return;
        }
        popStateListenerAdded = true;

        // TODO figure out how to get this to work properly.  Until I do, disable
        // it
        //$(window).bind('popstate', popStateListener);
    }

    function popStateListener(e) {
        var state = e.originalEvent.state;
        if (state) {
            var url = state.url;
            var target = targets[state.index];
        }
    }

    function setHistory(url, $target, replace) {
        ensurePopStateListenerAdded();

        if (replace) {
            window.history.replaceState({url: url}, 'title', url);
        }
        else {
            var target = $target[0];
            for (var i = 0; i < targets.length; i++) {
                if (target == targets[i]) {
                    break;
                }
            }
            var targetIndex = i;
            if (i == targets.length) {
                targets.push(target);
            }
            window.history.pushState({url: url, index: targetIndex}, 'title', url);
        }
    }

    function onSuccess(response) {
        // set content of page to returned content
        this.$target.html(response.content);

        if (response.js) {
            /*
            // TODO THINK THROUGH THIS SOME MORE
            if (response.js.files) {
                for (var i = 0; i < response.js.files.length; i++) {
                    // run js for the new content
                    var s = document.createElement('script');
                    s.src = response.js.files[i];
                    document.body.appendChild(s);
                }
            }
            */

            if (response.js.scripts) {
                for (var i = 0; i < response.js.scripts.length; i++) {
                    // run js for the new content
                    var s = document.createElement('script');
                    pb.setHTML(s, response.js.scripts[i]);
                    document.body.appendChild(s);
                }
            }
        }

        $.pbNewContent(this.$target);

        document.title = response.title;

        // google analytics page view
        window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
        try {
            ga('set', 'location', this.url);
            ga('send', 'pageview');
        } catch (er) {}

        // refresh google ads
        if (typeof googletag != 'undefined') {
            //(ad blockers block loading of googleads code so method may not be there)
            if (googletag.hasOwnProperty('pubads')) {
                try {
                    googletag.pubads().refresh();
                }
                catch (er) {}
            }
        }

        if (this.cb) {
            this.cb();
        }
    }

    function onError() {
        //alert('error');
        //console.log(arguments);
        window.location.reload();
    }

    function ensureNotRelative(url) {
        if (url.indexOf('http://') > -1 || url.indexOf('https://') > -1) {
            // do nothing
        }
        else if (url.indexOf('/') === 0) {
            // do nothing
        }
        else if (url.indexOf('?') === 0) {
            url = window.location.pathname + url;
        }
        else {
            var parts = window.location.pathname.split('/');
            var popped = parts.pop();
            if (popped === '') {
                parts.pop();
            }
            var pathname = parts.join('/') + '/';
            url = pathname + url;
        }

        return url;
    }
})();

$.fn.pbToggleModal = function() {
    return this.each(function() {
        var $contents = $(this);

        if ($contents.parents('.modal-container').length > 0) {
            $contents.pbCloseModal();
        }
        else {
            $contents.pbOpenModal();
        }
    });
};

$.fn.pbOpenModal = function() {
    return this.each(function() {
        var $contents = $(this);

        var $screen = $('<div class="modal-background"></div>');
        var $modal = $('<div class="modal-container"></div>');
        $screen.append($modal);

        // try and keep the contents in the original dom position (so forms are
        // kept and tact, and they can easily be put back later), but if it isn't
        // in the dom, then just append to the body
        if ($contents.parents('body').length) {
            $contents.after($screen);
        }
        else {
            $(document.body).append($screen);
        }

        $modal.append($contents);

        $contents.trigger('pbModalOpened');

        $screen.on('click', function(e) {
            if (e.target == $screen[0]) {
                $contents.pbToggleModal();
            }
        });
    });
};

$.fn.pbCloseModal = function() {
    return this.each(function() {
        var $contents = $(this);

        var $screen = $contents.parents('.modal-background');
        $contents.detach();

        $screen.off();
        $screen.remove();

        $contents.trigger('pbModalClosed');
    });
};

(function() {
    var BUTTON_ACTIVE_CLASS = 'target-visible';

    var DEFAULT_OPTIONS = {
        toggleButtonActive: true,
        closeOnBodyClick:   true,
        closeOnMouseLeave:  1500, // if false then it won't close on mouseleave
        fadeInTime:         75,
        fadeOutTime:        75,
        alignment:          '',
        windowEdgeBuffer:   25,
    };

    $.fn.pbTogglePopup = function(anchor, options) {
        this.each(function() {
            toggle($(this), anchor, options);
        });
        return this;
    };

    $.fn.pbOpenPopup = function(anchor, options) {
        this.each(function() {
            open($(this), anchor, options);
        });
        return this;
    };

    $.fn.pbClosePopup = function(options) {
        this.each(function() {
            close($(this), options);
        });
        return this;
    };

    $.pbOnNewContent(function($container) {
        $container.find('.pb-popup-anchor[pb-auto-popup]').on('click', popup_click_listener);
    });

    function popup_click_listener(e) {
        var $popup = $(this).find('.pb-popup');

        if ($popup[0] !== e.target && !$popup.has(e.target).length) {
            $popup.pbTogglePopup();
        }
    }

    function toggle($el, anchor, options) {
        var opening = $el.is(':hidden');
        if (opening) {
            open($el, anchor, options);
        }
        else {
            close($el, options);
        }
    }

    function findAnchor($el, anchor, options) {
        if (anchor) {
            return $(anchor);
        }
        else {
            return $el.parents('.pb-popup-anchor');
        }
    }

    function toggleButtonActive($anchor, options) {
        if (options.toggleButtonActive) {
            var $btn;
            if ($anchor.is('.pb-button')) {
                $btn = $anchor;
            }
            else if ($anchor.find('> .pb-button').length) {
                $btn = $anchor.find('> .pb-button');
            }

            if ($btn) {
                $btn.toggleClass(BUTTON_ACTIVE_CLASS);

                $btn[0].blur();
            }
        }
    }

    function position($el, $anchor, options) {
        var visible = $el.is(':visible');
        if (!visible) {
            $el.show();
        }

        var anchorOffset = $anchor.offset();
        anchorOffset.height = $anchor.outerHeight();
        anchorOffset.width = $anchor.outerWidth();
        anchorOffset.bottom = anchorOffset.top+anchorOffset.height;
        anchorOffset.right = anchorOffset.left+anchorOffset.width;
        anchorOffset.center = (anchorOffset.left+anchorOffset.right)/2;

        var elOffsetParent = $el.offsetParent().offset();
        var elWidth = $el.outerWidth();
        var windowWidth = $(window).width();

        if (options.alignment === 'right' || (!options.alignment && anchorOffset.center+elWidth/2 > anchorOffset.right && (anchorOffset.center+elWidth/2+options.windowEdgeBuffer) > windowWidth)) {
            // right align
            $el.css({
                top: anchorOffset.bottom - elOffsetParent.top,
                left: anchorOffset.right - elWidth - elOffsetParent.left,
            });

            $el.pbSetArrow(anchorOffset.width/2, true);
        }
        else if (options.alignment === 'left' || (!options.alignment && anchorOffset.center-elWidth/2 < anchorOffset.left && (anchorOffset.center-elWidth/2-options.windowEdgeBuffer) < 0)) {
            // left align
            $el.css({
                top: anchorOffset.bottom - elOffsetParent.top,
                left: anchorOffset.left -  elOffsetParent.left,
            });

            $el.pbSetArrow(anchorOffset.width/2);
        }
        else {
            // center
            $el.css({
                top: anchorOffset.bottom - elOffsetParent.top,
                left: anchorOffset.center - elWidth/2 - elOffsetParent.left
            });

            $el.pbSetArrow();
        }

        if (!visible) {
            $el.hide();
        }
    }

    function addListeners($el, $anchor, options) {
        if (!$el.data('pb-popup-resizelistener')) {
            $el.data('pb-popup-resizelistener', function() {
                position($el, $anchor, options);
            });
        }
        $(window).on('resize', $el.data('pb-popup-resizelistener'));

        if (options.closeOnBodyClick) {
            if (!$el.data('pb-popup-bodyclicklistener')) {
                $el.data('pb-popup-bodyclicklistener', function (e) {
                    if ($anchor[0] !== e.target && !$anchor.has(e.target).length && $el[0] !== e.target && !$el.has(e.target).length) {
                        close($el, options);
                    }
                });
            }
            // run this in a timeout to avoid clicks from other buttons triggering
            // this immediately as the event bubbles up the DOM
            setTimeout(function() {
                $(document.body).on('click', $el.data('pb-popup-bodyclicklistener'));
            },13);
        }

        if (options.closeOnMouseLeave !== false) {
            if (!$el.data('pb-popup-mouseenter')) {
                $el.data('pb-popup-mouseenter', function(e) {
                    clearTimeout($el.data('pb-popup-hide_timeout'));
                });
            }
            $anchor.on('mouseenter', $el.data('pb-popup-mouseenter'));
            $el.on('mouseenter', $el.data('pb-popup-mouseenter'));

            if (!$el.data('pb-popup-mouseleave')) {
                $el.data('pb-popup-mouseleave', function(e) {
                    clearTimeout($el.data('pb-popup-hide_timeout'));

                    var t = setTimeout(function() {
                        close($el, options);
                    }, options.closeOnMouseLeave);
                    $el.data('pb-popup-hide_timeout', t);
                });
            }
            $anchor.on('mouseleave', $el.data('pb-popup-mouseleave'));
            $el.on('mouseleave', $el.data('pb-popup-mouseleave'));
        }
    }

    function removeListeners($el, $anchor) {
        if ($el.data('pb-popup-resizelistener')) {
            $(window).off('resize', $el.data('pb-popup-resizelistener'));
        }

        if ($el.data('pb-popup-bodyclicklistener')) {
            $(document.body).off('click', $el.data('pb-popup-bodyclicklistener'));
        }

        if ($el.data('pb-popup-mouseenter')) {
            $el.off('mouseenter', $el.data('pb-popup-mouseenter'));
            $anchor.off('mouseenter', $el.data('pb-popup-mouseenter'));
        }

        if ($el.data('pb-popup-mouseleave')) {
            $el.off('mouseleave', $el.data('pb-popup-mouseleave'));
            $anchor.off('mouseleave', $el.data('pb-popup-mouseleave'));
        }
    }

    function open($el, anchor, options) {
        options = $el.pbGetOptions(options, 'popup', DEFAULT_OPTIONS);

        var $anchor = findAnchor($el, anchor, options);

        var $currentanchor = $el.data('pb-popup-currentanchor');
        if ($currentanchor && $currentanchor[0] === $anchor[0]) {
            // already open and at this anchor

            // we toggle the listeners on and off to ensure that the body
            // click listener doesn't close this popup right away
            removeListeners($el, $anchor);
            addListeners($el, $anchor, options);

            // reposition in case that's what's needed
            position($el, $anchor, options);
        }
        else {
            // not open, need to open it
            if ($currentanchor) {
                // the popup is already open some where on the page, so close it
                // first...
                close($el, options);
                $el.hide();
            }

            position($el, $anchor, options);
            toggleButtonActive($anchor, options);
            addListeners($el, $anchor, options);

            if (options.fadeInTime > 0) {
                $el.stop(true);

                // if not fully visible, then animate from there, otherwise, set
                // to hidden and then fade in
                var o = $el.css('opacity');
                if (o == 1) { $el.css('opacity', 0); }

                $el.show();
                $el.animate({opacity: 1}, options.fadeInTime);
            }
            else {
                $el.show();
            }

            $el.data('pb-popup-currentanchor', $anchor);
            $el.trigger('pbPopupOpened');
        }
    }

    function close($el, options) {
        options = $el.pbGetOptions(options, 'popup', DEFAULT_OPTIONS);

        var $anchor = $el.data('pb-popup-currentanchor');
        if ($anchor) {
            toggleButtonActive($anchor, options);
            removeListeners($el, $anchor);

            if (options.fadeOutTime > 0) {
                $el.stop(true);
                $el.animate({opacity: 0}, options.fadeOutTime, done);
            }
            else {
                done();
            }

            $el.removeData('pb-popup-currentanchor');
        }

        function done() {
            // always leave it fully visible, but hidden (so a $.fn.show() call
            // will show it)
            $el.css('opacity', 1);
            $el.hide();

            $el.trigger('pbPopupClosed');
        }
    }
})();

$.rmsSend = function(rmsData, rmsSuccess, rmsError) {
    var data = {
        rmsP: 'j1',
        rmsD: JSON.stringify(rmsData),
    };

    var url = '/rms/index.php';

    $.ajax({
        dataType: 'json',
        type: 'post',
        url: url,
        data: data,
        success: ajaxSuccess,
        error: ajaxError,
    });

    function ajaxSuccess(data, details) {
        if (data.rmsS) {
            if (typeof rmsSuccess == 'function') { rmsSuccess(data, details); }
        }
        else if (rmsError) {
            rmsError(data.rmsM, details);
        }
        else {
            alert(data.rmsM);
        }
    }

    function ajaxError(xhr, message, details) {
        if (rmsError) {
            rmsError(details);
        }
        else {
            pb.errorHandler({message: message, error: details});
        }
    }
};

(function(undefined) {

    var index = 0;
    var cssRules = [];
    var rulesSheet;

    $.fn.pbSetArrow = function(offset, rightSide) {
        this.each(function() {
            $el = $(this);

            var uniqueClass;
            if (!$el.data('pb-arrow-unique-class')) {
                uniqueClass = 'pb-arrow-'+index;
                index++;
                $el.addClass(uniqueClass);
                $el.data('pb-arrow-unique-class', uniqueClass);
            }
            else {
                uniqueClass= $el.data('pb-arrow-unique-class');
            }

            if (offset === undefined) {
                removeRulesForSelector('.'+uniqueClass+':before');
                removeRulesForSelector('.'+uniqueClass+':after');
            }
            else {
                var rule = {};
                rule[rightSide ? 'right' : 'left'] = Math.ceil(offset) + 'px';
                rule[rightSide ? 'left' : 'right'] = 'auto';

                var beforeruleid = addRule('.'+uniqueClass+':before', rule);
                var afterruleid = addRule('.'+uniqueClass+':after', rule);
            }
        });
    };

    function addRule(selector, css) {
        if (rulesSheet === undefined) {
            var style = document.createElement('style');
            rulesSheet = document.head.appendChild(style).sheet;
        }

        propText = '';
        for (var p in css) {
            propText += p+':'+css[p]+';';
        }
        rulesSheet.insertRule(selector + "{" + propText + "}", rulesSheet.cssRules.length);
        cssRules.push(selector);
    }

    function removeRulesForSelector(selector) {
        if (rulesSheet === undefined) {
            // no sheet, so nothing to do
            return;
        }

        // remove rule
        for (var i = 0; i < cssRules.length; i++) {
            if (cssRules[i] == selector) {
                rulesSheet.deleteRule(i);
                cssRules.splice(i,1);
                i--;
            }
        }
    }

})();

(function() {
    $.fn.pbTextfieldValue = function(val) {
        if (typeof val == 'undefined') {
            return getValue.call(this);
        }
        else {
            // set value
            setValue.call(this, val);
        }
    };

    $.fn.pbTextfieldCursorPosition = function(val) {
        if (typeof val == 'undefined') {
            return getCursorPosition.call(this);
        }
        else {
            // set value
            setCursorPosition.call(this, val);
        }
    };

    $.fn.pbTextfieldCurrentLine = function(val, cursorOffset) {
        var curval    = this.pbTextfieldValue();
        var caret     = this.pbTextfieldCursorPosition();
        var lineStart = curval.lastIndexOf("\n", caret-1)+1;
        var lineEnd   = curval.indexOf("\n", caret);
        if (lineEnd < 0) {
            lineEnd =  curval.length;
        }

        if (typeof  val === 'undefined') {
            var line = curval.substring(lineStart, caret)+'___'+curval.substring(caret,lineEnd);
            return line;
        }
        else {
            var newval = curval.substr(0,lineStart)+val+curval.substr(lineEnd);
            this.pbTextfieldValue(newval);
            if (typeof cursorOffset !== 'undefined') {
                this.pbTextfieldCursorPosition(lineStart + cursorOffset);
            }
        }
    };

    function getValue() {
        var $element = this;

        switch($element[0].nodeName) {
            case 'INPUT':
            case 'TEXTAREA':
                return $element.val();
            default:
                // contenteditable
                // http://jsfiddle.net/nick_craver/UjZEN/2/
                var ce = $("<pre />").html($element.html());
                if ($.browser.webkit) {
                    ce.find("div").replaceWith(function() { return "\n" + this.innerHTML; });
                }
                else if ($.browser.msie) {
                    ce.find("p").replaceWith(function() { return this.innerHTML + "<br>"; });
                }
                else if ($.browser.mozilla || $.browser.opera || $.browser.msie) {
                    ce.find("br").replaceWith("\n");
                }

                return ce.text();
        }
    }

    function setValue(val) {
        var $element = this;

        switch($element[0].nodeName) {
            case 'INPUT':
            case 'TEXTAREA':
                $element.val(val);
                break;
            default:
                // contenteditable
                $element.text(val);
        }
    }

    function getCursorPosition() {
        var $element = this;
        var element = $element[0];

        switch(element.nodeName) {
            case 'INPUT':
            case 'TEXTAREA':
                var iCaretPos = 0;

                // IE Support
                if (document.selection) {
                    element.focus();
                    range = document.selection.createRange();

                    if (range && range.parentElement() == element) {
                        len = element.value.length;
                        normalizedValue = element.value.replace(/\r\n/g, "\n");

                        // Create a working TextRange that lives only in the input
                        textInputRange = element.createTextRange();
                        textInputRange.moveToBookmark(range.getBookmark());

                        // Check if the start and end of the selection are at the very end
                        // of the input, since moveStart/moveEnd doesn't return what we want
                        // in those cases
                        endRange = element.createTextRange();
                        endRange.collapse(false);

                        if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
                            start = len;
                        } else {
                            start = -textInputRange.moveStart("character", -len);
                            //start += normalizedValue.slice(0, start).split("\n").length - 1;
                        }

                        iCaretPos = start;
                    }
                }

                // Firefox support
                else if (element.selectionStart || element.selectionStart == '0') {
                    iCaretPos = element.selectionStart;
                }

                // Return results
                return iCaretPos;
            default:
                // http://stackoverflow.com/questions/4811822/get-a-ranges-start-and-end-offsets-relative-to-its-parent-container/4812022#4812022
                var caretOffset = 0;
                var doc = element.ownerDocument || element.document;
                var win = doc.defaultView || doc.parentWindow;
                var sel;
                if (typeof win.getSelection != "undefined") {
                    var range = win.getSelection().getRangeAt(0);
                    var preCaretRange = range.cloneRange();
                    preCaretRange.selectNodeContents(element);
                    preCaretRange.setEnd(range.endContainer, range.endOffset);
                    caretOffset = preCaretRange.toString().length;
                } else if ( (sel = doc.selection) && sel.type != "Control") {
                    var textRange = sel.createRange();
                    var preCaretTextRange = doc.body.createTextRange();
                    preCaretTextRange.moveToElementText(element);
                    preCaretTextRange.setEndPoint("EndToEnd", textRange);
                    caretOffset = preCaretTextRange.text.length;
                }
                return caretOffset;
        }
    }

    function setCursorPosition(val) {
        var $element = this;
        var element = $element[0];

        switch(element.nodeName) {
            case 'INPUT':
            case 'TEXTAREA':
                element.selectionStart = element.selectionEnd = val;
                break;
            default:
                // contenteditable
                console.log('cannot set cursor position of contenteditable yet');
                break;
        }
    }
})();

(function() {
    var tooltipTimeout;

    var DEFAULT_OPTIONS = {
        classNames:        '',
        fadeInTime:        200,
        fadeOutTime:       200,
        closeOnMouseLeave: 200,
    };

    $.fn.pbShowTooltip = function(msg, options) {
        if (msg !== "" && msg !== undefined) {
            $('.pb-tooltip').detach();

            var $el = $(this);
            options = $el.pbGetOptions(options, 'tooltip', DEFAULT_OPTIONS);

            var $tooltip = $el.data('$tooltip');

            if (!$tooltip) {
                // if they set the title element, remove it, so they don't get
                // double titles from built-in browser tooltips
                if ($el.attr('title')) {
                    $el.data('pb-tooltip-title', $el.attr('title'));
                    $el.removeAttr('title');
                }

                $tooltip = $('<div class="pb-tooltip"></div>');

                if (options.classNames) {
                    $tooltip.addClass(options.classNames);
                }

                $tooltip.hide();

                $tooltip.on('pbPopupClosed', function() {
                    $tooltip.detach();
                });

                $el.data('$tooltip', $tooltip);
            }

            $tooltip.html(msg);
            $(document.body).append($tooltip);
            $tooltip.pbOpenPopup($el, options);
        }
    };


    $.fn.pbHideTooltip = function(msg, options) {
        $el = $(this);
        options = $el.pbGetOptions(options, 'tooltip', DEFAULT_OPTIONS);

        var $tooltip = $('.pb-tooltip');
        $tooltip.pbClosePopup(options);
    };

    $.pbOnNewContent(function($container) {
        $container.find('[pb-auto-tooltip]').on('mouseenter', tooltip_mouseenter_listener);
    });

    function tooltip_mouseenter_listener() {
        $el = $(this);
        var msg = $el.attr('title') ||$el.data('pb-tooltip-title');
        $el.pbShowTooltip(msg);
    }

})();

(function() {
    var undefined;

    function indexOf(arr, val) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === val) {
                return i;
            }
        }

        return -1;
    }

    $.fn.pbValidation_watchField = function() {
        if(this.length !== 1) {
            this.each(function() {
                $(this).pbValidation_watchField();
            });
            return;
        }

        var $container = this;
        $container.find('textarea,input,select').on('input change', function() {
            var $field = $(this);
            var $parent = $field.parents('.pb-validation-container');

            if ($parent.hasClass('invalid')) {
                $(this).pbValidation_validateField(true);
            }
        });
        $container.find('textarea,input,select').on('blur', function() {
            var $field = $(this);
            $field.pbHideTooltip();
        });
    };

    $.fn.pbValidation_validateForm = function(e) {
        if(this.length !== 1) {
            this.each(function() {
                $(this).pbValidation_validateForm(e);
            });
            return;
        }

        var $form = this;
        var fieldstack = [];
        var fields = {};

        var serialized = $form.serializeArray();
        for (var i = 0; i < serialized.length; i++) {
            var name = serialized[i].name;
            var value = serialized[i].value;

            var match = name.match(/^fieldstack\[([0-9]+)\]$/);
            if (match) {
                fieldstack[match[1]] = value;
            }
            else {
                var nameParts = name.split('-');

                if (indexOf(fieldstack, nameParts[0]) > -1) {
                    fields[nameParts[0]] = {
                        'validators': nameParts.slice(1),
                        'value': value,
                        'inputName': name,
                    };
                }
            }
        }
        for (i = 0; i < fieldstack.length; i++) {
            var fieldName = fieldstack[i];
            var field = fields[fieldName];

            if (field) {
                var $field = $form.find('[name="'+field.inputName+'"]');
                var valid = $field.pbValidation_validateField(true);

                if (!valid) {
                    // TODO check if the element is visible first
                    $('html, body').animate({scrollTop: Math.max(0,$field.offset().top-50)}, 200);

                    if (e) {
                        wO = undefined;
                        e.preventDefault();
                    }
                    return false;
                }
            }
        }

        return true;
    };

    $.fn.pbValidation_validateField = function(markinvalid) {
        var $field = this;

        var value = $field.val();

        var name = $field.attr('name');
        var nameParts = name.split('-');
        var validators = nameParts.slice(1);

        var err = checkTypes(value, validators);
        if (err) {
            if (markinvalid) {
                markFieldAsInvalid($field, err);
            }
            return false;
        }
        else {
            removeInvalidFieldMark($field);
            //markFieldAsValid($field);
            return true;
        }
    };

    function removeInvalidFieldMark(field) {
        var $field = $(field);
        var $parent = $field.parents('.pb-validation-container');

        $field.pbHideTooltip();

        if ($parent.length > 0) {
            if ($parent.attr('data-has-form-validation-class')) {
                $parent.attr('data-has-form-validation-class',0);
            }
            $parent.removeClass('invalid');
        }
    }

    function markFieldAsInvalid(field, err) {
        var $field = $(field);

        var $tooltipAnchor = $field.attr('type') === 'hidden' ? $field.parent() : $field;
        $tooltipAnchor.pbShowTooltip(err, {classNames: 'error', closeOnMouseLeave: false});

        var $parent = $field.parents('.pb-validation-container');

        if ($parent.length > 0) {
            if (!$parent.hasClass('invalid') && !$parent.hasClass('valid') && !$parent.attr('data-has-form-validation-class')) {
                $parent.attr('data-has-form-validation-class',1);
            }
            $parent.addClass('invalid');
        }
    }

    function markFieldAsValid(field) {
        var $field = $(field);

        var $parent = $field.parents('.pb-validation-container');

        if ($parent.length > 0) {
            $parent.addClass('valid');
        }
    }

    function checkTypes(value, validators) {
        // special case the 'emptyok' validation
        if (validators[0] === 'emptyok' && value === '') {
            return;
        }

        for (var i = 0; i < validators.length; i++) {
            var err = checkType(value, validators[i]);
            if (err) {
                return err;
            }
        }
    }

    function checkType(value, validator) {
        for (var i = 0; i < validatorFns.length; i++) {
            var checkFn = validatorFns[i][1];
            var checked = checkFn(validator);
            if (checked) {
                var validateFn = validatorFns[i][2];
                var err = validateFn(value, validator);

                if (err) {
                    return err;
                }

                break;
            }
        }
    }

    var validatorFns = [
        ['>', check_gt, validate_gt],
        ['<', check_lt, validate_lt],
        ['locationselect', check_locationselect, validate_locationselect],
        ['float=<', check_floatlte, validate_floatlte],
        ['float<', check_floatlt, validate_floatlt],
        ['float=>', check_floatgte, validate_floatgte],
        ['float>', check_floatgt, validate_floatgt],
        ['email', check_email, validate_email],
        ['alpha', check_alpha, validate_alpha],
        ['alphanum', check_alphanum, validate_alphanum],
        ['float', check_float, validate_float],
        ['int', check_int, validate_int],
        ['intplus', check_intplus, validate_intplus],
        ['username', check_username, validate_username],
        ['text', check_text, validate_text],
        ['productname', check_productname, validate_productname],
    ];

    function check_gt(validator) {
        return validator.substr(0,2) === 'gt' || validator.substr(0,1) === '>';
    }
    function validate_gt(value, validator) {
        var len = Number(validator.substr(2));

        if (value.length <= len) {
            var limit = len + 1;
            var msg = 'This field must have at least '+limit+' character'+(limit == 1 ? '' : 's');
            return msg;
        }
    }


    function check_lt(validator) {
        return validator.substr(0,2) === 'lt' || validator.substr(0,1) === '<';
    }
    function validate_lt(value, validator) {
        var len = Number(validator.substr(2));

        if (value.length < len) {
            return false;
        }
        else {
            var limit = len + 1;
            var msg = 'This field must have fewer than '+limit+' character'+(limit == 1 ? '' : 's');
            return msg;
        }
    }

    function check_locationselect(validator) {
        return validator === 'locationselect';
    }
    function validate_locationselect(value, validator) {
        if (value == -1 || value == -99) {
            var msg = 'Must select';
            return msg;
        }
        else {
            return false;
        }
    }

    function check_floatlt(validator) {
        return validator.substr(0,6) === 'float<' || validator.substr(0,7) === 'floatlt';
    }
    function validate_floatlt(value, validator) {
        if (!$.isNumeric(value)) {
            return 'This field must be a number';
        }

        var f;
        var numValue = Number(value);
        if (validator.substr(0,6) === 'float<') {
            f = Number(validator.substr(6));
        }
        else {
            f = Number(validator.substr(7));
        }
        console.log('hi', f, numValue);

        if (numValue >= f) {
            return 'This field must be less than '+f;
        }
    }

    function check_floatlte(validator) {
        return validator.substr(0,7) === 'float=<' || validator.substr(0,8) === 'floatlte' || validator.substr(0,8) === 'float=lt';
    }
    function validate_floatlte(value, validator) {
        if (!$.isNumeric(value)) {
            return 'This field must be a number';
        }

        var f;
        var numValue = Number(value);
        if (validator.substr(0,7) === 'float=<') {
            f = Number(validator.substr(7));
        }
        else {
            f = Number(validator.substr(8));
        }

        if (numValue > f) {
            return 'This field must be less than or equal to '+f;
        }
    }

    function check_floatgt(validator) {
        return validator.substr(0,6) === 'float>' || validator.substr(0,7) === 'floatgt';
    }
    function validate_floatgt(value, validator) {
        if (!$.isNumeric(value)) {
            return 'This field must be a number';
        }

        var f;
        var numValue = Number(value);
        if (validator.substr(0,6) === 'float>') {
            f = Number(validator.substr(6));
        }
        else {
            f = Number(validator.substr(7));
        }

        if (numValue <= f) {
            return 'This field must be greater than '+f;
        }
    }

    function check_floatgte(validator) {
        return validator.substr(0,7) === 'float>=' || validator.substr(0,8) === 'floatgte' || validator.substr(0,8) === 'float=gt';
    }
    function validate_floatgte(value, validator) {
        if (!$.isNumeric(value)) {
            return 'This field must be a number';
        }

        var f;
        var numValue = Number(value);
        if (validator.substr(0,7) === 'float>=') {
            f = Number(validator.substr(7));
        }
        else {
            f = Number(validator.substr(8));
        }

        if (numValue < f) {
            return 'This field must be greater than or equal to '+f;
        }
    }

    function check_email(validator) {
        return validator.substr(0,6) === 'email';
    }
    function validate_email(value, validator) {
        // http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(value)) {
            return 'Invalid email address';
        }
    }

    function check_alpha(validator) {
        return validator === 'alpha';
    }
    function validate_alpha(value, validator) {
        var re = /^[A-Za-z]*$/;
        if (!re.test(value)) {
            return 'Only letter characters allowed. No white space or numbers.';
        }
    }

    function check_alphanum(validator) {
        return validator === 'alpha';
    }
    function validate_alphanum(value, validator) {
        var re = /^[A-Za-z0-9]+$/;
        if (!re.test(value)) {
            return 'Only letter and number characters allowed. No white space.';
        }
    }

    function check_float(validator) {
        return validator === 'float';
    }
    function validate_float(value, validator) {
        if (!$.isNumeric(value)) {
            return 'This field must be a number';
        }
    }

    function check_int(validator) {
        return validator === 'int';
    }
    function validate_int(value, validator) {
        if (value != parseInt(value)) {
            return 'Only integers';
        }
    }

    function check_intplus(validator) {
        return validator === 'int+';
    }
    function validate_intplus(value, validator) {
        if (value != parseInt(value)) {
            return 'Only integers';
        }
        if (value < 0) {
            return 'Must be greater than or equal to zero';
        }
    }

    function check_username(validator) {
        return validator === 'username';
    }
    function validate_username(value, validator) {
        var re = /^[A-Za-z0-9\-]+$/;
        if (!re.test(value)) {
            return 'Only letters, numbers and dashes allowed. No white space.';
        }
    }

    function check_text(validator) {
        return validator === 'text' || validator === 'textplain';
    }
    function validate_text(value, validator) {
        var re = /^[A-Za-z0-9\-]+$/;
        if (!re.test(value)) {
            return 'Only letters, numbers, dashes and spaces allowed';
        }
    }

    function check_productname(validator) {
        return validator === 'productname';
    }
    function validate_productname(value, validator) {
        var re = /^[A-Za-z0-9\-_.\,\(\)'\"\+ ]+$/;
        if (!re.test(value)) {
            return 'Only letters, numbers dashes, underlines, periods, commas, (, ), \', ", +, and spaces allowed';
        }
    }
})();

(function() {
    $.fn.pbToggleZoom = function() {
        return this.each(function() {
            var $contents = $(this);
            if ($contents.data('$placeholder')) {
                $contents.pbCloseZoom();
            }
            else {
                $contents.pbOpenZoom();
            }
        });
    };

    $.fn.pbCloseZoom = function() {
        return this.pbCloseModal();
    };

    $.fn.pbOpenZoom = function() {
        return this.each(function() {
            var $contents = $(this);
            // opening
            var $placeholder = $('<div class="modal-placeholder"></div>');

            var width = $contents.outerWidth();
            var height = $contents.outerHeight();
            $placeholder.width(width);
            $placeholder.height(height);
            $placeholder.css('margin-bottom', $contents.css('margin-bottom'));
            $placeholder.css('margin-top', $contents.css('margin-top'));
            $placeholder.css('margin-right', $contents.css('margin-right'));
            $placeholder.css('margin-left', $contents.css('margin-left'));

            $contents.after($placeholder);
            $contents.data('$placeholder', $placeholder);
            $contents.pbOpenModal();

            $contents.on('pbModalClosed', modalClosed);

            $contents.trigger('pbZoomOpened');
        });
    };

    function modalClosed(e) {
        var $contents = $(this);
        var $placeholder = $contents.data('$placeholder');
        $placeholder.before($contents);
        $placeholder.remove();
        $contents.removeData('$placeholder');

        $contents.off('pbModalClosed', modalClosed);
        $contents.trigger('pbZoomClosed');
    }
})();

//# sourceMappingURL=pbjq.js.map