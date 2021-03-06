if (!('pb' in window)) {
    window.pb = {};
}

(function() {
    var BEFORE = 1;
    var AFTER  = 2;
    var IN     = 3;

    var pos = 0;
    var scrollListenerAdded;
    var index;
    var numElements;
    var elements     = [];
    var $window      = $(window);
    var windowHeight = $window.height();

    var hasRequestAnimationFrame = 'requestAnimationFrame' in window;

    var transformedPrefixed = 'transform';
    if (typeof document.body.style.WebkitTransform != 'undefined') { transformedPrefixed = 'WebkitTransform'; }
    else if (typeof document.body.style.MozTransform != 'undefined') { transformedPrefixed = 'MozTransform'; }
    else if (typeof document.body.style.OTransform != 'undefined') { transformedPrefixed = 'OTransform'; }
    else if (typeof document.body.style.msTransform != 'undefined') { transformedPrefixed = 'msTransform'; }
    else if (typeof document.body.style.transform != 'undefined') { transformedPrefixed = 'transform'; }

    pb.scrolleffects = {
        addElement: addElement,
    };

    window.recalculateScrollEffectDetails = function() {
        windowHeight = $window.height();
        for (var i = 0; i < elements.length; i++) {
            elements[i] = effectTypes[elements[i].type](elements[i].$el);
        }
    };

    function addElement(el) {
        var $el = $(el);
        var type = $el.attr('data-scrolleffect-type');

        var details = effectTypes[type]($el);
        if (details) {
            //console.log(details);
            elements.push(details);
            addScrollListener();
            numElements = elements.length;
        }
    }

    function removeElement(el) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].el == el) {
                elements.splice(i,1);
                break;
            }
        }
        numElements = elements.length;
    }

    function requestAnimationFrameScrollEffects() {
        for (index = 0; index < numElements; index++) {
            if (pos > elements[index].scrollStart && pos < elements[index].scrollEnd) {
                effectAnimations[elements[index].type](elements[index], IN);
            }
            else if (pos > elements[index].scrollEnd && elements[index].state != AFTER) {
                effectAnimations[elements[index].type](elements[index], AFTER);
            }
            else if (pos < elements[index].scrollStart && elements[index].state != BEFORE) {
                effectAnimations[elements[index].type](elements[index], BEFORE);
            }
        }
    }

    function addScrollListener() {
        if (!scrollListenerAdded) {
            if (hasRequestAnimationFrame) {
                $(document).bind('scroll', scrollListener);
            }
            scrollListenerAdded = true;
        }
    }
    function removeScrollListener() {
        if (scrollListenerAdded) {
            $(document).unbind('scroll', scrollListener);
            scrollListenerAdded = false;
        }
    }

    function scrollListener() {
        pos = window.pageYOffset || document.documentElement.scrollTop;
        requestAnimationFrame(requestAnimationFrameScrollEffects);
    }

    var effectTypes = {
        'parallax': function($el) {
            var startScale = 1;
            var startLeft  = Number($el.attr('data-scrolleffect-startLeft'));
            var startTop   = Number($el.attr('data-scrolleffect-startTop'));

            if (isNaN(startLeft)) { startLeft = 0; }
            if (isNaN(startTop)) { startTop = 0; }

            var endScale   = Number($el.attr('data-scrolleffect-scale'));
            var endLeft    = Number($el.attr('data-scrolleffect-offsetLeft'));
            var endTop     = Number($el.attr('data-scrolleffect-offsetTop'));
            if (isNaN(endScale)) { endScale = startScale; }
            if (isNaN(endLeft)) { endLeft = startLeft; }
            if (isNaN(endTop)) { endTop = startTop; }

            var diffScale = endScale - startScale;
            var diffTop   = endTop - startTop;
            var diffLeft  = endLeft - startLeft;
            //console.log('scale', startScale, endScale, diffScale);
            //console.log('left', startLeft, endLeft, diffLeft);
            //console.log('top', startTop, endTop, diffTop);

            if (diffTop === 0 && diffLeft === 0 && diffScale === 0) {
                return null;
            }
            else {
                var $parent       = $el.parent();
                var offset        = $parent.offset();
                var parent_height = $parent.outerHeight();
                var scrollStart   = Math.max(offset.top - windowHeight, 0);
                var scrollEnd     = offset.top + parent_height;
                var scrollDiff    = scrollEnd - scrollStart;

                //console.log(offset.top, offset.left, parent_height);

                return {
                    'type':        'parallax',
                    '$el':         $el,
                    'scrollStart': scrollStart,
                    'scrollEnd':   scrollEnd,
                    'scrollDiff':  scrollDiff,
                    'diffScale':   diffScale,
                    'startScale':  startScale,
                    'diffTop':     diffTop,
                    'startTop':    startTop,
                    'diffLeft':    diffLeft,
                    'startLeft':   startLeft,
                };
            }
        },
        'matchParent': function($el) {
            var $parent       = $el.parent();
            var parent_height = $parent.height();
            var el_height     = $el.height();

            if (parent_height == el_height) {
                return null;
            }
            else {
                var offset       = $parent.offset();
                var buffer       = 20;
                var scrollStart = offset.top - windowHeight + Math.min(el_height, windowHeight) + buffer;
                var scrollEnd   = offset.top + parent_height - Math.min(el_height, windowHeight) - buffer;

                //scrollStart = offset.top - windowHeight;
                //scrollEnd   = offset.top + parent_height;

                $el.css({position: 'relative',top:0});
                return {
                    'type':         'matchParent',
                    '$el':          $el,
                    'scrollStart':  scrollStart,
                    'scrollEnd':    scrollEnd,
                    'scrollDiff':   scrollEnd - scrollStart,
                    'height_diff':  parent_height - el_height,
                    'state':        null,
                };
            }
        },
        'videoPlay': function($el) {
            var $videoContainer = $el.find('.video-container');

            var offset        = $videoContainer.offset();
            var parent_height = $videoContainer.outerHeight();
            var scrollStart   = Math.max(offset.top - windowHeight, 0);
            var scrollEnd     = offset.top + parent_height;
            var scrollDiff    = scrollEnd - scrollStart;

            return {
                'type':          'videoPlay',
                '$el':           $el,
                'scrollStart':   scrollStart,
                'scrollEnd':     scrollEnd,
                'scrollDiff':    scrollDiff,
                'currentState':  null,
            };
        },
    };

    var effectAnimations = {
        'videoPlay': function(details, state) {
            if (state != details.currentState) {
                var $videoContainer = details.$el.find('.video-container');

                if ($videoContainer.hasClass('player-flash')) {
                    var videoType = 'flash';
                }
                else if ($videoContainer.hasClass('player-html5')) {
                    var videoType = 'html5';
                }

                var $videoElement = details.$el.find('.video-element');

                switch (state) {
                    case BEFORE:
                    case AFTER:
                        if (videoType === 'flash') {
                            $videoElement[0].pause();
                        }
                        else {
                            $videoElement[0].pause();
                        }
                        break;
                    default:
                        if (videoType === 'flash') {
                            $videoElement[0].play();
                        }
                        else {
                            $videoElement[0].play();
                            $videoElement.prop('muted', true)
                        }
                        break;
                }
                details.currentState = state;
            }
        },
        'parallax': function(details, state) {
            if (details.diffScale !== 0) {
                switch (state) {
                    case BEFORE:
                        details.$el[0].style[transformedPrefixed] = 'inherit';
                        break;
                    case AFTER:
                        details.$el[0].style[transformedPrefixed] = 'scale('+(details.startScale+details.diffScale)+')';
                        break;
                    default:
                        var s = (details.startScale+(pos-details.scrollStart)/details.scrollDiff*details.diffScale);
                        details.$el[0].style[transformedPrefixed] = 'scale('+s+')';
                        break;
                }
            }

            if (details.diffLeft !== 0) {
                switch (state) {
                    case BEFORE:
                        details.$el[0].style.left = details.startLeft;
                        break;
                    case AFTER:
                        details.$el[0].style.left = (details.startLeft+details.diffLeft)+'%';
                        break;
                    default:
                        var l = (details.startLeft+(pos-details.scrollStart)/details.scrollDiff*details.diffLeft);
                        details.$el[0].style.left = l + '%';
                        break;
                }
            }

            if (details.diffTop !== 0) {
                switch (state) {
                    case BEFORE:
                        details.$el[0].style.top = details.startTop;
                        break;
                    case AFTER:
                        details.$el[0].style.top = (details.startTop+details.diffTop)+'%';
                        break;
                    default:
                        var t = (details.startTop+(pos-details.scrollStart)/details.scrollDiff*details.diffTop);
                        details.$el[0].style.top = t + '%';
                        break;
                }
            }
            details.state = state;
        },
        'matchParent': function(details, state) {
            switch (state) {
                case BEFORE:
                    details.$el[0].style.top = 0;
                    break;
                case AFTER:
                    details.$el[0].style.top = details.height_diff + 'px';
                    break;
                default:
                    var t = Math.round((pos-details.scrollStart)/details.scrollDiff*details.height_diff) + 'px';
                    details.$el[0].style.top = t;
                    break;
            }
            details.state = state;
        }
    };

    $('[data-scrolleffect-type]').each(function(i, el) {
        addElement(el);
    });
})();
