pb = window.pb || {};

pb.global_unloading = false;
pb.RMSPATH = '/rms/';
pb.JSONPATH = 'json.js';

pb.useragent = function() {
    // this is a super simple user agent function, doesn't get version
    // info or anything, it returns a string which is:
    // 'webkit', 'ie', 'gecko' or 'opera'
    var nua = navigator.userAgent
      , ua
      ;

    // simple regex checks againss the user agent string
    if (nua.search(/AppleWebKit\/(\S*)/) >= 0) ua = 'webkit';
    else if (nua.search(/MSIE\s([^;]*)/) >= 0) ua = 'ie';
    else if (nua.search(/Gecko\/(\S*)/) >= 0) ua = 'gecko';
    else if (nua.search(/Opera\/(\S*)/) >= 0) ua = 'opera';

    // we don't want to do the above code every time, so we rewrite the function
    // to return the calculated
    pb.useragent = function useragent() { return ua }

    return ua;
}

// lifted from: http://snipplr.com/view/3561/addclass-removeclass-hasclass/
// pretty self explanatory
pb.hasClass = function(selector, cls) {
    var found = true;

    var count = 0;
    pb.elements(selector, function(el) {
        count++;
        found = found === false ? false : (el.className || '').search(new RegExp('(\\s|^)' + cls + '(\\s|$)')) >= 0
    });

    return count > 0 && found;
}
pb.addClass = function(selector, cls) {
    pb.elements(selector, function(el) {
        if (!pb.hasClass(el, cls)) {
            el.className += " " + cls;
        }
    });
}
pb.removeClass = function(selector,cls) {
    pb.elements(selector, function(el) {
        if (typeof cls == 'undefined' || cls == null) {
            el.className = '';
        }
        if (pb.hasClass(el, cls)) {
            el.className=el.className.replace(new RegExp('(\\s|^)'+cls+'(\\s|$)'), ' ')
        }
    })
}
pb.toggleClass = function(selector, cls) {
    pb.elements(selector, function(el) {
        if (pb.hasClass(el, cls)) {
            pb.removeClass(el, cls);
        }
        else {
            pb.addClass(el, cls);
        }
    });
}

// inspired by http://ejohn.org/projects/flexible-javascript-events/,
pb.addEvent = function(selector, type, fn) {
    var cachedSelector = typeof selector === 'string' ? selector : null;

    pb.elements(selector, function(el) {
        if (type == 'ready') {
            // this only works correctly if the listener is added at the end of
            // a page.  all it does is just call the passed in function.
            fn.call(el);
        }
        else if(type === 'load' && el === window && pb.windowAlreadyLoaded) {
            fn.call(el);
        }
        else if (type.indexOf('dirkey') == 0) {
            pb.onDirectionKey(type.substr(6), fn);
        }
        else {
            // make sure we don't have duplicates...
            pb.removeEvent(el, type, fn);

            if ( el.attachEvent ) {
                el['e'+type+fn] = fn;
                el[type+fn] = function(){
                    var e = window.event;
                    e.target = e.srcElement;
                    el['e'+type+fn](e);
                }
                el.attachEvent( 'on'+type, el[type+fn] );
            }
            else {
                el.addEventListener( type, fn, false );
            }
            el.pbEvents = el.pbEvents || {};
            el.pbEvents[type] = el.pbEvents[type] || [];
            el.pbEvents[type].push({ selector: cachedSelector, func: fn});
        }
    })
};
pb.removeEvent = function(selector, type, fn) {
    pb.elements(selector, function(el) {
        if (el.detachEvent) {
            if (el[type+fn]) {
                el.detachEvent( 'on'+type, el[type+fn] );
                el[type+fn] = null;
            }
        }
        else {
            el.removeEventListener( type, fn, false );
        }

        if (el.pbEvents && el.pbEvents[type]) {
            for (var i = 0; i < el.pbEvents[type].length; i++) {
                if (fn === el.pbEvents[type][i].func) {
                    el.pbEvents[type].splice(i++,1);
                }
            }
            if (el.pbEvents[type].length == 0) {
                delete el.pbEvents[type];
            }
        }
    });
};

pb.removeAllEvents = function(selector) {
    pb.elements(selector, function(el) {
        if (el.pbEvents) {
            for (var type in el.pbEvents) {
                while (el.pbEvents[type]) {
                    pb.removeEvent(el, type, el.pbEvents[type][0].func);
                }
            }
        }
    });
};

pb.getEvents = function(selector, recursive) {
    if (typeof recursive === 'undefined') recursive = true;
    var events = {};

    pb.elements(selector, eachElement);

    return events;

    function eachElement(el) {
        var cur = recursive && el.firstChild ? el.firstChild : el;

        while (cur) {
            // if this element has events, copy them over
            if (cur.pbEvents) foundEvents(el, cur);

            // if we are the el then we've processed all possible children and gotten here, so stop
            if (cur === el) break;

            // descend down if we can
            if (cur.firstChild) cur = cur.firstChild;

            // if we can't descend down, we move to the next sibling
            else if (cur.nextSibling) cur = cur.nextSibling;

            // if we can't go down or to the the next sibling, we have to go back up the
            // tree to find the next parent that had a sibling, if one exists...
            else {
                // keep moving up the tree until we have a parent with a sibling
                while (!cur.parentNode.nextSibling && cur.parentNode !== el) {
                    cur = cur.parentNode;
                }

                // if the parent we are moving to is the el, just process it and then
                // stop
                if (cur.parentNode === el) {
                    cur = el;
                }
                // otherwise move to the sibling of the parent we found
                else {
                    cur = cur.parentNode.nextSibling;
                }
            }
        }
    }

    function foundEvents(ancestor, current) {
        // loop through each type of event that the current element has
        for (var type in current.pbEvents) {
            // make sure we have a place to store the events
            events[type] = events[type] || [];
            // loop through all the events of this type
            for (var i = 0; i < current.pbEvents[type].length; i++) {
                // we only care if we have a selector, or this is the ancestor, this
                // should maybe be just if we have a selector...
                if (current.pbEvents[type][i].selector || current === ancestor) {
                    // loop through all events already found to make sure we don't
                    // already have it
                    var already = false;
                    for (var j = 0; j < events[type].length; j++) {
                        // check if we already have it
                        if (events[type][j].selector === current.pbEvents[type][i].selector && events[type][j].func === current.pbEvents[type][i].func) {
                            already = true;
                        }
                    }
                    if (!already) {
                        // finally add the event
                        events[type].push(current.pbEvents[type][i]);
                    }
                }
            }
        }
    }
}

pb.addEvents = function(selector, events, recursive) {
  if (typeof recursive === 'undefined') recursive = true;

  pb.elements(selector, function(el) {
    for (var type in events) {
      for (var i = 0; i < events[type].length; i++) {
        var elSelector = events[type][i].selector;
        if (   !elSelector
            || (elSelector.charAt(0) === '.' && pb.hasClass(el, elSelector.substr(1)))
            || el.id === elSelector.substr(1)
           ) {
          pb.addEvent(el, type, events[type][i].func);
        }
        else if (recursive) {
          pb.elements(elSelector, el, function(subEl) {
            pb.addEvent(subEl, type, events[type][i].func);
          });
        }
      }
    }
  });
}

pb.clone = function(selector, recursive) {
    if (typeof recursive === 'undefined') recursive = true;

    var src = pb.firstElement(selector)
      , clone = src.cloneNode(true)
      ;

    clone.removeAttribute('id');

    // we now loop through all children copying over events.  The cloned elements
    // don't have a copy of the src's pbEvents property, so we have to keep
    // track of both of them.

    // the loop uses the src element to know when to stop, so if we aren't going
    // recursive we just specify the src element and it will process it and then
    // stop, otherwise, we use the firstChild if it has it
    if (recursive && src.firstChild) {
      var srcCur = src.firstChild, cloneCur = clone.firstChild;
    }
    else {
      var srcCur = src, cloneCur = clone;
    }

    while (srcCur) {
      // if this element has events, copy them over
      if (srcCur.pbEvents) {
          // pbEvents references get copied over, we want each element to have
          // their own unique one.
          cloneCur.pbEvents = {};
          for (var type in srcCur.pbEvents) {
              for (var i = 0; i < srcCur.pbEvents[type].length; i++) {
                  pb.addEvent(cloneCur, type, srcCur.pbEvents[type][i].func);
              }
          }
      }

      // if we are the src then we've processed all possible children and gotten
      // here, so stop
      if (srcCur === src) {
        break;
      }

      // descend down if we can
      if (srcCur.firstChild) {
        srcCur = srcCur.firstChild;
        cloneCur = cloneCur.firstChild;
      }

      // if we can't descend down, we move to the next sibling
      else if (srcCur.nextSibling) {
        srcCur = srcCur.nextSibling;
        cloneCur = cloneCur.nextSibling;
      }

      // if we can't go down or to the the next sibling, we have to go back up the
      // tree to find the next parent that had a sibling, if one exists...
      else {
        // keep moving up the tree until we have a parent with a sibling
        while (!srcCur.parentNode.nextSibling && srcCur.parentNode !== src) {
          srcCur = srcCur.parentNode;
          cloneCur = cloneCur.parentNode;
        }

        // if the parent we are moving to is the src, just process it and then
        // stop
        if (srcCur.parentNode === src) {
          srcCur = src;
          cloneCur = clone;
        }
        // otherwise move to the parent we found's sibling
        else {
          srcCur = srcCur.parentNode.nextSibling;
          cloneCur = cloneCur.parentNode.nextSibling;
        }
      }
    }

    // finally return the new element
    return clone;
};

pb.ajax =
    { json: function(url, options) {
            options = options || {};

            var success = options.success
              , data, details
              , isJSONLoaded = false
              ;

            options.success = loaded;

            // we start the ajax call right away, it doesn't matter if json is
            // loaded yet, we'll check for that in the loaded callback
            pb.ajax.load(url, options);

            pb.requireJSONLib(loaded);

            function loaded() {
                if (arguments.length) {
                    data = arguments[0];
                    details = arguments[1];
                }
                else {
                    isJSONLoaded = true;
                }

                if (data != null && isJSONLoaded) {
                    try {
                        var parsed = JSON.parse(data);
                    }
                    catch(e) {
                        details.source  = 'pb.ajax.json';
                        details.url     = url;
                        details.data    = options.data;
                        details.json    = data;
                        details.stack   = e.stack;
                        details.message = e.message;

                        if (typeof options.error == 'function') {
                            options.error(details);
                        }
                        else {
                            pb.errorHandler(details);
                        }
                        return;
                    }
                    success(parsed, details);
                }
            }
        }
    };

(function() {
  pb.ajax = pb.ajax || {};

  var ajaxLocation = location.href;
  var ajaxLocParts = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/.exec( ajaxLocation.toLowerCase() ) || [];

  var // #5280: Internet Explorer will keep connections alive if we don't abort on unload
    xhrOnUnloadAbort = window.ActiveXObject ? function() {
      // Abort all pending requests
      for ( var key in xhrCallbacks ) {
        xhrCallbacks[ key ]( 0, 1 );
      }
    } : false,
    xhrId = 0,
    xhrCallbacks;

  // Functions to create xhrs
  function createStandardXHR() {
    try {
      return new window.XMLHttpRequest();
    } catch( e ) {}
  }

  function createActiveXHR() {
    try {
      return new window.ActiveXObject( "Microsoft.XMLHTTP" );
    } catch( e ) {}
  }

  // Create the request object
  // (This is still attached to ajaxSettings for backward compatibility)
  makeXHR = window.ActiveXObject ?
    /* Microsoft failed to properly
     * implement the XMLHttpRequest in IE7 (can't request local files),
     * so we use the ActiveXObject when it is available
     * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
     * we need a fallback.
     */
    function() {
      return createStandardXHR() || createActiveXHR();
    } :
    // For all other browsers, use the standard XMLHttpRequest object
    createStandardXHR;

  var ajaxTransport = function( s ) {
    var callback;

    return {
      send: function( headers, complete ) {

        // Get a new xhr
        var xhr = s.xhr(), handle, i;

        // Open the socket
        xhr.open( s.type, s.url, true );

        // Apply custom fields if provided
        if ( s.xhrFields ) {
          for ( i in s.xhrFields ) {
            xhr[ i ] = s.xhrFields[ i ];
          }
        }

        // Override mime type if needed
        if ( s.mimeType && xhr.overrideMimeType ) {
          xhr.overrideMimeType( s.mimeType );
        }

        // X-Requested-With header
        // For cross-domain requests, seeing as conditions for a preflight are
        // akin to a jigsaw puzzle, we simply never set it to be sure.
        // (it can always be set on a per-request basis or even using ajaxSetup)
        // For same-domain requests, won't change header if already provided.
        if ( !headers["X-Requested-With"] ) {
          headers[ "X-Requested-With" ] = "XMLHttpRequest";
        }

        // Need an extra try/catch for cross domain requests in Firefox 3
        try {
          for ( i in headers ) {
            xhr.setRequestHeader( i, headers[ i ] );
          }
        } catch( _ ) {}

        // Do send the request
        // This may raise an exception which is actually
        // handled in jQuery.ajax (so no try/catch here)
        xhr.send( ( s.hasContent && s.data ) || null );

        // Listener
        callback = function( _, isAbort ) {

          var status,
            statusText,
            responseHeaders,
            response,
            xml;

          // Firefox throws exceptions when accessing properties
          // of an xhr when a network error occured
          // http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
          try {

            // Was never called and is aborted or complete
            if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

              // Only called once
              callback = undefined;

              // Do not keep as active anymore
              if ( handle ) {
                xhr.onreadystatechange = function() {};
                if ( xhrOnUnloadAbort ) {
                  delete xhrCallbacks[ handle ];
                }
              }

              // If it's an abort
              if ( isAbort ) {
                // Abort it manually if needed
                if ( xhr.readyState !== 4 ) {
                  xhr.abort();
                }
              } else {
                status = xhr.status;
                responseHeaders = xhr.getAllResponseHeaders();
                response = xhr.responseText;

                // Firefox throws an exception when accessing
                // statusText for faulty cross-domain requests
                try {
                  statusText = xhr.statusText;
                } catch( e ) {
                  // We normalize with Webkit giving an empty statusText
                  statusText = "";
                }

                // Filter status for non standard behaviors

                // IE - #1450: sometimes returns 1223 when it should be 204
                if ( status === 1223 ) {
                  status = 204;
                }
              }
            }
          } catch( firefoxAccessException ) {
            if ( !isAbort ) {
              complete( -1, firefoxAccessException );
            }
          }

          // Call complete if needed
          if ( response ) {
              complete( status, statusText, response, responseHeaders );
          }
          else if (xhr.readyState === 4) {
                complete();
          }
        };

        // if it's in cache
        // and has been retrieved directly (IE6 & IE7)
        // we need to manually fire the callback
        if ( xhr.readyState === 4 ) {
          callback();
        } else {
          handle = ++xhrId;
          if ( xhrOnUnloadAbort ) {
            // Create the active xhrs callbacks list if needed
            // and attach the unload handler
            if ( !xhrCallbacks ) {
              xhrCallbacks = {};
              window.onunload = xhrOnUnloadAbort;
            }
            // Add to list of active xhrs callbacks
            xhrCallbacks[ handle ] = callback;
          }
          xhr.onreadystatechange = callback;
        }
      },

      abort: function() {
        if ( callback ) {
          callback(0,1);
        }
      }
    };
  }

  pb.ajax.load = function( url, options ) {
    // Force options to be an object
    options = options || {};

    options.type = 'GET';
    options.contentType = options.contentType || "application/x-www-form-urlencoded";
    options.xhr = makeXHR;

    if (typeof options.data == 'string') {
      options.type = 'POST';
      options.data = options.data || ' ';
    }

    /*
    timeout: 0,
    data: null,
    */

    var // Create the final options object
      s = options,
      // Headers (they are sent all at once)
      requestHeaders = {},
      requestHeadersNames = {},
      // Response headers
      responseHeadersString,
      responseHeaders,
      // transport
      transport,
      // timeout handle
      timeoutTimer,
      // The jqXHR state
      state = 0,
      // How long the request took
      duration,
      // when we started
      startTime,
      // Loop variable
      i,
      // Fake xhr
      jqXHR = {

        readyState: 0,

        // Caches the header
        setRequestHeader: function( name, value ) {
          if ( !state ) {
            var lname = name.toLowerCase();
            name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
            requestHeaders[ name ] = value;
          }
          return this;
        },

        // Raw string
        getAllResponseHeaders: function() {
          return state === 2 ? responseHeadersString : null;
        },

        // Builds headers hashtable if needed
        getResponseHeader: function( key ) {
          var rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg;
          var match;
          if ( state === 2 ) {
            if ( !responseHeaders ) {
              responseHeaders = {};
              while( ( match = rheaders.exec( responseHeadersString ) ) ) {
                responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
              }
            }
            match = responseHeaders[ key.toLowerCase() ];
          }
          return match === undefined ? null : match;
        },

        // Overrides response content-type header
        overrideMimeType: function( type ) {
          if ( !state ) {
            s.mimeType = type;
          }
          return this;
        },

        // Cancel the request
        abort: function( statusText ) {
          statusText = statusText || "abort";
          if ( transport ) {
            transport.abort( statusText );
          }
          done( 0, statusText );
          return this;
        }
      };

    // Callback for when everything is done
    // It is defined here because jslint complains if it is declared
    // at the end of the function (which would be more logical and readable)
    function done( status, statusText, response, headers ) {
      // Called once
      if ( state === 2 ) {
        return;
      }

      duration = new Date() - startTime;

      // State is "done" now
      state = 2;

      // Clear timeout if it exists
      if ( timeoutTimer ) {
        clearTimeout( timeoutTimer );
      }

      // Dereference transport for early garbage collection
      // (no matter how long the jqXHR object will be used)
      transport = undefined;

      // Cache response headers
      responseHeadersString = headers || "";

      // Set readyState
      jqXHR.readyState = status ? 4 : 0;

      var isSuccess,
        success,
        error;

      // If successful, handle type chaining
      if ( status >= 200 && status < 300 || status === 304 ) {

        // If not modified
        if ( status === 304 ) {

          statusText = "notmodified";
          isSuccess = true;

        // If we have data
        }
        else {
          success = response;
          statusText = "success";
          isSuccess = true;
        }
      } else {
        // We extract error from statusText
        // then normalize statusText and status for non-aborts
        error = statusText;
        if( !statusText || status ) {
          statusText = "error";
          if ( status < 0 ) {
            status = 0;
          }
        }
      }

      // Set data for the fake xhr object
      jqXHR.status = status;
      jqXHR.statusText = statusText;

      // Success/Error
      if ( isSuccess ) {
        if (s.success) { s.success(success, {status: status, duration: duration, statusText: statusText}); }
      } else {
        var details = {
          source:     'pb.ajax.load',
          url:        url,
          data:       options.data,
          type:       options.type,
          duration:   duration,
          statusText: statusText,
          status:     status,
          headers:    responseHeadersString,
          readyState: jqXHR.readyState
        }
        if (!error) {
            error = 'Incomplete response';
        }
        if (typeof error == 'string') {
          details.error = error;
        }
        else {
          details.error = { stack: error.stack, message: error.message };
        }
        if (s.error) { s.error(details); }
        else { pb.errorHandler(details); }
      }
    }

    // Remove hash character (#7531: and string promotion)
    // Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
    // We also use the url parameter if available
    s.url = url.replace( /#.*$/, "" ).replace( /^\/\//, ajaxLocParts[ 1 ] + "//" );

    // If request was aborted inside a prefiler, stop there
    if ( state === 2 ) {
      return false;
    }

    // Uppercase the type
    s.type = s.type.toUpperCase();

    // Determine if request has content
    s.hasContent = !/^(?:GET|HEAD)$/.test( s.type );

    // More options handling for requests with no content
    if ( !s.hasContent ) {

      // If data is available, append data to url
      if ( s.data ) {
        s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.data;
      }
    }

    // Set the correct header, if data is being sent
    if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
      jqXHR.setRequestHeader( "Content-Type", s.contentType );
    }

    // Get transport
    transport = ajaxTransport(s);

    jqXHR.readyState = 1;
    // Timeout
    if ( s.timeout > 0 ) {
      timeoutTimer = setTimeout( function(){
        jqXHR.abort( "timeout" );
      }, s.timeout );
    }

    startTime = new Date();
    try {
      state = 1;
      transport.send( requestHeaders, done );
    } catch (e) {
      // Propagate exception as error if not done
      if ( status < 2 ) {
        done( -1, e );
      // Simply rethrow otherwise
      } else {
        jQuery.error( e );
      }
    }

    return jqXHR;
  };

})();

pb.rmsSend = function(oData, rmsSuccess, rmsError, light) {
    pb.requireJSONLib(loaded);

    function loaded() {
        oData = "rmsP=j1&rmsD="+encodeURIComponent(JSON.stringify(oData));

        pb.ajax.json(pb.RMSPATH+(light ? 'light' : 'index')+'.php', {data: oData, success: ajaxSuccess, error: ajaxError});

        function ajaxSuccess(data, details) {
            
            if (data['rmsX']) {
              elDebugBarBottom = document.getElementById("debugbarbottom"); 
              if (elDebugBarBottom)
                elDebugBarBottom.insertAdjacentHTML("afterend",data['rmsX']);
                elRmsNumber = document.getElementById("rmsnumber"); 
                if (elRmsNumber) {
                  rmsnumber = document.getElementById("rmsnumber").innerHTML;
                  rmsnumber ++;
                  elRmsNumber.innerHTML = rmsnumber;
                  document.getElementById("rmscounter").style.color = "#396";
                }
            }

            if (data['rmsS']) {
                if (typeof rmsSuccess == 'function') { rmsSuccess(data, details); }
            }
            else if (rmsError) {
                rmsError(data.rmsM, details);
            }
            else {
                alert(data.rmsM);
            }
        }

        function ajaxError(details) {
            if (rmsError) {
                rmsError(details);
            }
            else {
                pb.errorHandler(details);
            }
        }
    }
}

pb.errorHandler = function(details) {
      if (details instanceof Error) {
          // make sure we can json stringify the error...
          details = { message: details.message, stack: details.stack };
      }

      details.window_location = window.location+'';
      details.unloading = pb.global_unloading;

      var img = new Image(0,0);
      img.src = pbwww+'system/jserror?details='+encodeURIComponent(JSON.stringify(details));
      document.body.appendChild(img);
}

window.onerror = function(msg, script, line, col, err) {
    var details = {
        source:  'globalErrorHandler',
        url:     script,
        lineNo:  line,
        col:     col,
        message: msg,
    };

    if (err) {
        details.message = err.message;
        details.stack = err.stack;
    }

    // we don't bother the user about this error if
    // a) there are no details (and thus not helpful to us)
    // b) it is related to a script from a domain that pinkbike doesn't control

    var differentDomain = details.url.search(/^https?:\/\/[^\/]+\.pinkbike.(com|org)\//) < 0;

    if (details.url && details.lineNo != 0 && !differentDomain) {
        pb.errorHandler(details);
    }
}
window.onbeforeunload = function() {
    // Note: this event doesn't fire in mobile safari
    pb.global_unloading = true;
};

pb.rmsRedirect = function(o) { window.parent.location = o['rmsD']['redirect']; }
pb.rmsReload = function(o) { window.location.reload(); }


// this function can take a string or an another element.  if given another element,
// that element is made the only child of the first matched element from the selector
pb.setHTML = function(selector, d) {
    if (typeof d === 'string' || typeof d === 'number') {
      pb.elements(selector, function(el) { el.innerHTML = d; });
    }
    else {
      var el = pb.firstElement(selector);
      while (el.firstChild) {
        el.removeChild(el.firstChild);
      }
      el.appendChild(d);
    }
}
pb.getHTML = function(selector) {
    return (pb.firstElement(selector) || {}).innerHTML;
}

pb.toggle = function(selector) {
    pb.elements(selector, function(el) {
        if (pb.getStyle(el, 'display') == 'none') pb.show(el);
        else pb.hide(el);
    });
};

(function() {
    pb.show = function(selector) {
        pb.elements(selector, function(el) {
            // only change if not already visible
            if (pb.getStyle(el, 'display') != 'none') return;

            // default to block if we have no previous value
            //alert(el.pbOldDisplay || defaultDisplay(el.nodeName));
            el.style.display = el.pbOldDisplay || defaultDisplay(el.nodeName);
        });
    }

    var cachedDisplays = {};

    function defaultDisplay(nodeName) {
      if ( !cachedDisplays[nodeName] ) {
          var el = document.createElement(nodeName);
          document.body.appendChild(el);
          var display = pb.getStyle(el, "display");

          document.body.removeChild(el);

          if ( display === "none" || display === "" ) {
              display = "block";
          }

          cachedDisplays[ nodeName ] = display;
      }

      return cachedDisplays[ nodeName ];
    }

    pb.hide = function(selector) {
        pb.elements(selector, function(el) {
            // only change if not already hidden
            if (pb.getStyle(el, 'display') == '' || pb.getStyle(el, 'display') == 'none') return;

            // save the old display in the element so we can set it back to what it was before
            el.pbOldDisplay = pb.getStyle(el, 'display');
            el.style.display = 'none';
        });
    }
})();

// inspired by http://www.quirksmode.org/dom/getstyles.html
pb.getStyle = function(selector, styleProp) {
    var el = pb.firstElement(selector);

    var val;
    if (el.currentStyle) {
        val = el.currentStyle[styleProp];
    }
    else if (window.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el,null).getPropertyValue(styleProp);
    }

    // ie returns different values for the height if it is auto, so
    // our preferred browsers
    if (styleProp == 'height' && val == 'auto') {
        val = el.offsetHeight;
        var properties = ['padding-top','padding-bottom','border-width-top','border-width-bottom'];
        for (var i = 0; i < properties.length; i++) {
            var nextVal = el.currentStyle[properties[i]];
            if (String(nextVal).search('^[0-9]+px$') > -1) {
               val -= parseInt(nextVal.replace('px',''));
            }
        }
        val += 'px';
    }
    return val;
}

// obtained from: http://www.quirksmode.org/js/findpos.html
pb.getPosition = function(selector) {
  var obj = pb.firstElement(selector)
    , curleft = curtop = 0
    ;

  if (obj.offsetParent) {
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);

    return {x: curleft, y: curtop};
  }
}

// lifted from: http://www.quirksmode.org/js/cookies.html
pb.setCookie = function(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";

    document.cookie = name+"="+value+expires+"; path=/; domain=" + pbcookiedomain;
}

pb.getCookie = function(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

pb.setCheck = function(selector, val) {
  pb.elements(selector, function(el) {
    el.checked = val;
  });
}

pb.getCheck = function(selector) {
  return (pb.firstElement(selector) || {}).checked;
}

pb.setVal = function(selector, val) {
  pb.elements(selector, function(el) {
    el.value = val;
  });
}

pb.getVal = function(selector) {
  return (pb.firstElement(selector) || {}).value;
}



pb.each = function(arr, func) {
    if (arr.forEach) arr.forEach(func);
    else {
        for (var i = 0; i < arr.length; i++) {
            func(arr[i], i, arr)
        }
    }
}

pb.elements = function(selector, firstArg, secondArg) {
    // allow first or second arguments to be interchangable.  This allows us
    // to add the scope argument but still keep this backwards compatible
    // with old code.
    //
    // since a function can't be a selector we can easily differentiate between
    // the two
    var scopeSelector;
    var func;

    if (typeof firstArg === 'function') func = firstArg;
    else if (firstArg) scopeSelector = firstArg;

    if (typeof secondArg === 'function') func = secondArg;
    else if (secondArg) scopeSelector = secondArg;

    var matches;

    if (typeof selector == 'undefined' || selector == null) {
        // passed in nothing, return empty array
        matches = [];
    }
    else if ((selector.nodeName && selector.nodeType) || selector === window) {
        // we have an element
        matches = [selector];
    }
    else if (selector.constructor === Array) {
        matches = selector;
    }
    else {
        if (selector.indexOf('#') === 0) {
            // #idName
            var el = document.getElementById(selector.substr(1));
            matches = el ? [el] : [];
        }
        else {
            // .className
            matches = document.getElementsByClassName(selector.substr(1));
        }
    }

    // make sure matches is an array (native getElementsByClassName implementations
    // return nodelists, which suck)
    if (typeof matches.constructor !== Array) {
      var newMatches = [];
      for (var i = 0; i < matches.length; i++) {
        newMatches.push(matches[i]);
      }
      matches = newMatches;
    }

    if (scopeSelector) {
      for (var i = 0; i < matches.length; i++) {
        // pb.isChildOf calls pb.elements so it is recursive, but works because
        // when we recurse we don't use the scope elements, so we don't get to
        // this code block
        if (!pb.isChildOf(matches[i], scopeSelector)) {
          matches.splice(i--, 1);
        }
      }
    }

    if (func) {
        pb.each(matches, func);
    }
    else {
        // I realize we're modify an object here, but it is so handy
        matches.first = matches[0];
        return matches;
    }
}

pb.firstElement = function(selector, firstArg, secondArg) {
    var scopeSelector;
    var func;

    if (typeof firstArg === 'function') func = firstArg;
    else if (firstArg) scopeSelector = firstArg;

    if (typeof secondArg === 'function') func = secondArg;
    else if (secondArg) scopeSelector = secondArg;

    var els = pb.elements(selector, scopeSelector);

    if (els && els.length > 0) {
      if (func) {
        pb.each([els[0]], func);
      }
      else {
        return els[0];
      }
    }
}

// isChildOf tests that all the found 'children' are descendents of at least one
// of the found parents
pb.isChildOf = function(childSelector, parentsSelector) {
  var r = true;
  var parents = pb.elements(parentsSelector);

  pb.elements(childSelector, function (el) {
    el = el.parentNode;
    while (el) {
      for (var i = 0; i < parents.length; i++) {
        if (el === parents[i]) break;
      }

      if (i < parents.length) break;

      el = el.parentNode;
    }

    r = r ? !!(el) : r;
  });

  return r;
}

pb.xy = function(e) {
    if(e.pageX) {
        return {
          x: e.pageX
        , y: e.pageY
        }
    }
    else {
        //ie
        return {
          x: e.clientX + document.documentElement.scrollLeft
        , y: e.clientY + document.documentElement.scrollTop
        }
    }
};

// closure for defining box functions
pb.box = (function() {
    var d = document
      , box
      , current = null
      ;


    function initializeBox() {
        box = d.createElement('DIV');
        box.id = 'pbBox';
        pb.hide(box);
        box.style.position = 'absolute';
        d.body.appendChild(box);
    }

    function positionBox(pos) {
        var diff = document.body.clientWidth - pos.x - box.offsetWidth - 10;
        var x = pos.x + (diff < 0 ? diff : 0)
          , y = pos.y // + 25
          ;

        if (d.body.currentStyle && d.body.currentStyle['marginTop'])
          y += parseInt(d.body.currentStyle['marginTop']);

        box.style.left = x + 'px';
        box.style.top = y + 'px';
    }

    return {
          close: function() {
                current = null;
                pb.hide(box);
                return false;
            }
        , load: function(html) {
                var className = '';

                // must call pb.box.open first
                if (!current) return;

                if (typeof html == 'undefined') {
                  // if we aren't showing a spinner while we are loading
                  // then just return
                  if (!current.spinner) return pb.hide(box);

                  html = '';
                  className = 'loading';
                }

                if (!box) initializeBox();

                pb.setHTML(box, html);
                box.className = className;

                // make sure the box is displayed in case the following code
                // needs to determine its size...
                pb.show(box);

                // style things differently depending on what mode box we have
                switch(current.mode) {
                    case 'tooltip':
                        box.style.width = current.size.x + 'px';
                        box.style.height = current.size.y + 'px';

                        positionBox(current.pos);
                        break;
                    default:
                        alert('unknown box mode: '+current.mode);
                }
            }
        // element is the element that caused this box to be opened, that
        // way we can know if to toggle it
        , open: function(element, mode, spinner, pos, size) {
                // clicking a second time closes
                if (current && element && element == current.el){
                  return pb.box.close();
                }

                current =
                    { mode: mode || 'tooltip'
                    , pos: pos
                    , size: size
                    , el: element
                    , spinner: spinner
                    }

                pb.box.load();
            }
        }
})();

pb.require = (function() {
    var queue = []
      , current
      , required = {}
      , d = document
      , head
      ;

    load.required = required;

    return load;

    function load(files, callback, args, scope) {
        // make sure files is an array
        if (typeof files === 'string') files = [files];

        // loop through files and add them to the queue array
        for (var i=0, len=files.length; i<len; i++) {
            queue.push([(files[i].indexOf('http') == 0 ? '' : pbjs) + files[i], i == len-1 ? callback : null, args, scope]);
        }

        popqueue();
        //setTimeout(popqueue, 1000);

        return false;
    }

    function popqueue() {
        // make sure nothing is being processed
        if (current) return;

        // grab the next file
        current = queue.shift();

        // nothing to do
        if (!current) return;

        // this file has already been loaded
        if (required[current[0]]) return done();

        var node = d.createElement('script');
        node.setAttribute('src', current[0]);
        node.setAttribute('charset', 'utf-8');

        setTimeout(function() {
          if (pb.useragent() == 'ie') {
              node.onreadystatechange = function() {
                  var rs = this.readyState;
                  if (rs === 'loaded' || rs === 'complete') {
                      this.onreadystatechange = null;
                      done();
                  }
              }
          }
          else {
              node.onload = done;
              node.onerror = doneWithError;
          }

          head = head || d.head || d.getElementsByTagName('head')[0];
          head.appendChild(node);
        }, 0);
    }

    function done() {
        required[current[0]] = true;

        if (typeof current[1] == 'string') {
            current[1] = pb.findProperty(current[1]);
        }

        // we have a callback, so call it with the supplied args and scope
        if (current[1]) current[1].apply(current[3] || {}, current[2] || []);

        // reset current
        current = null;

        // check queue
        popqueue();
    }

    function doneWithError() {
        var details = {
          src: 'pb.require',
          file:  current[0]
        };
        pb.errorHandler(details);

        done();
    }
})();

pb.findProperty = function(path) {
    var parts = path.split('.');
    var curr = window;
    while(curr && parts.length) {
        curr = curr[parts.shift()];
    }

    return curr;
}

pb.requireJSONLib = function(cb) {
    if (!window.JSON) pb.require(pb.JSONPATH, cb);
    else cb();
}

pb.nl = function(o, e, selector) {
    pb.box.open(o, 'tooltip', false, pb.xy(e), {x: 230, y: 109});

    //check if selector exists on page already, if not fetch it via rms
    if(document.getElementById(selector.substr(1)) == null) {
        pb.rmsSend({mod: 'user', op: 'tooltipContents', selector: selector.substr(1)}, function (oRmsR) {
            if (oRmsR['rmsS'] == true) {
                pb.box.load(oRmsR['rmsD']['response']);
            }
        });
    } else {
        pb.box.load(pb.getHTML(selector));
    }
}

pb.tooltip = function(o, e, selector) {
    pb.box.open(o, 'tooltip', false, pb.xy(e), {x: 230, y: 80});
    pb.box.load(pb.getHTML(selector));
}

if(typeof document.getElementsByClassName == 'undefined') {
    document.getElementsByClassName = function(className) {
        var hasClassName = new RegExp("(?:^|\\s)" + className + "(?:$|\\s)")
          , allElements = document.getElementsByTagName("*")
          , results = []
          ;

        for(var i = 0, element; (element = allElements[i]) != null; i++) {
            var elementClass = element.className;
            if (elementClass && elementClass.indexOf(className) != -1 && hasClassName.test(elementClass)) {
                results.push(element)
            }
        }

        return results;
    }
}

pb.sP = function(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    else {
        if (e) {
            e.cancelBuble = true;
        }
        else if(window.event) {
            window.event.cancelBuble=true;
        }
    }
}

if (typeof window.console === "undefined") {
    console = { log: function() {} };
}

pb.imagePrefetch = function(urls) {
    var index = 0;

    var loadNextImage = function() {
        if (index >= urls.length) { return; }

        var im = new Image();
        im.onload = loadNextImage;
        im.onerror = loadNextImage;
        im.src = urls[index];
        index++;
    }

    setTimeout(loadNextImage);
};

(function() {
    var directionKeysFns = {};
    var keyListenerAdded = false;

    var directionsCodes = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        space: 32
    };

    pb.onDirectionKey = function(dir, fn) {
        if (fn && !keyListenerAdded) {
            pb.addEvent(document, 'keydown', keyListener);
            keyListenerAdded = true;
        }

        if (fn) {
            directionKeysFns[dir] = {
                fn: fn
            };
        }
        else {
            delete directionKeysFns[dir];
            var otherListeners = false;
            for (var key in directionKeysFns) {
                otherListeners = true;
                break;
            }
            if (!otherListeners) {
                pb.removeEvent(document, 'keydown', keyListener);
                keyListenerAdded = false;
            }
        }
    }

    var modifiers = ['alt','ctrl','meta','shift'];
    modifiers.sort();

    function keyListener(e) {
        if (e.target != document.body && e.target.nodeName != 'HTML') {
            return;
        }

        var found = false;
        for (var key in directionKeysFns) {
            var parts = key.split('-');
            var dir = parts[0];
            parts = parts.slice(1);
            parts.sort();
            if (e.keyCode == directionsCodes[dir]) {
                var matches = true;
                var partsIndex = 0;
                for (var i = 0; i < modifiers.length; i++) {
                    if ((e[modifiers[i]+'Key'] && parts[partsIndex] != modifiers[i]) || (!e[modifiers[i]+'Key'] && parts[partsIndex] == modifiers[i])) {
                        matches = false;
                    }
                    if (parts[partsIndex] == modifiers[i]) {
                        partsIndex++;
                    }
                }

                if (matches) {
                    found = true;
                    directionKeysFns[key].fn();
                }
            }
        }

        if (found) {
            pb.sP(e);
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            if (e.preventManipulation) {
                e.preventManipulation()
            }
            return false;
        }
    }
})();

pb.fireEvent = function(element, event) {
    if (document.createEvent) {
        // dispatch for firefox + others
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent(event, true, true ); // event type,bubbling,cancelable
        return !element.dispatchEvent(evt);
    }
    else {
        // dispatch for IE
        var evt = document.createEventObject();
        return element.fireEvent('on'+event,evt)
    }
};

// pb.animate, animates first element in matched selector
// emile.js (c) 2009 Thomas Fuchs
// Licensed under the terms of the MIT license.
(function(emile, container){
  var parseEl = document.createElement('div'),
    props = ('backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth '+
    'borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize '+
    'fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight '+
    'maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft '+
    'paddingRight paddingTop right textIndent top width wordSpacing zIndex').split(' ');

  function interpolate(source,target,pos){ return (source+(target-source)*pos).toFixed(3); }
  function s(str, p, c){ return str.substr(p,c||1); }
  function color(source,target,pos){
    var i = 2, j, c, tmp, v = [], r = [];
    while(j=3,c=arguments[i-1],i--)
      if(s(c,0)=='r') { c = c.match(/\d+/g); while(j--) v.push(~~c[j]); } else {
        if(c.length==4) c='#'+s(c,1)+s(c,1)+s(c,2)+s(c,2)+s(c,3)+s(c,3);
        while(j--) v.push(parseInt(s(c,1+j*2,2), 16)); }
    while(j--) { tmp = ~~(v[j+3]+(v[j]-v[j+3])*pos); r.push(tmp<0?0:tmp>255?255:tmp); }
    return 'rgb('+r.join(',')+')';
  }

  function parse(prop){
    var p = parseFloat(prop), q = prop.replace(/^[\-\d\.]+/,'');
    return isNaN(p) ? { v: q, f: color, u: ''} : { v: p, f: interpolate, u: q };
  }

  function normalize(style){
    var css, rules = {}, i = props.length, v;
    parseEl.innerHTML = '<div style="'+style+'"></div>';
    css = parseEl.childNodes[0].style;
    while(i--) if(v = css[props[i]]) rules[props[i]] = parse(v);
    return rules;
  }

  container[emile] = function(el, style, opts, after){
    el = pb.firstElement(el);
    opts = opts || {};
    var target = normalize(style), comp = el.currentStyle ? el.currentStyle : getComputedStyle(el, null),
      prop, current = {}, start = +new Date, dur = opts.duration||200, finish = start+dur, interval,
      easing = opts.easing || function(pos){ return (-Math.cos(pos*Math.PI)/2) + 0.5; };
    for(prop in target) current[prop] = parse(comp[prop]);
    interval = setInterval(function(){
      var time = +new Date, pos = time>finish ? 1 : (time-start)/dur;
      for(prop in target)
        el.style[prop] = target[prop].f(current[prop].v,target[prop].v,easing(pos)) + target[prop].u;
      if(time>finish) { clearInterval(interval); opts.after && opts.after(); after && setTimeout(after,1); }
    },10);
  }
})('animate', pb);

pb.makeExpandingTextArea = function(selector, cb) {
    pb.elements(selector, function(el) {
        var textarea = el;
        if (!textarea.parentNode) { return; }

        var copy = document.createElement('div');
        copy.className = 'textarea-copy';

        // TODO ie prefixes
        var styles = [
            'border-top-width',
            'border-bottom-width',
            'border-left-width',
            'border-right-width',
            //'-webkit-border-radius',
            //'-moz-border-radius',
            'border-radius',
            //'-webkit-box-shadow',
            //'-moz-box-shadow',
            'box-shadow',
            'color',
            'display',
            'font-family',
            'font-size',
            'font-weight',
            'font-style',
            'font-variant',
            'line-height',
            'padding-top',
            'padding-bottom',
            'padding-left',
            'padding-right',
            'text-align',
            'text-transform',
            'width'
            ];
        for (var i = 0; i < styles.length; i++) {
            copy.style[toCssCamelCase(styles[i])] = pb.getStyle(textarea, styles[i]);
            //console.log(styles[i], toCssCamelCase(styles[i]), pb.getStyle(textarea, styles[i]),copy.style[toCssCamelCase(styles[i])]);
        }

        var pos = pb.getPosition(textarea);
        document.body.appendChild(copy);
        textarea.parentNode.insertBefore(copy, textarea);

        pb.addEvent(el, 'keyup', changeListener);
        pb.addEvent(el, 'input', changeListener);
        pb.addEvent(el, 'paste', changeListener);
        pb.addEvent(el, 'focus', changeListener);

        function changeListener(e) {
            if (e && (e.ctrlKey || e.altKey)) {
                return;
            }
            var val = pb.getVal(textarea);
            var oldval = pb.getHTML(copy);

            if (val+'m' == oldval) {
                return;
            }

            val = val.replace(/\n/g, ' ');
            pb.setVal(textarea, val);

            // add extra char to make sure our fake textarea wraps before the real one
            pb.setHTML(copy, val+'m');
            var height = pb.getStyle(copy, 'height');
            textarea.style.minHeight = height;

            if (cb) {
                cb();
            }
        }
    });

    function toCssCamelCase(variable) {
        var str = variable.replace(/-([a-z])/g, function(str,letter) {
            return letter.toUpperCase();
        });

        if (variable.substr(0,5) != '-moz-') {
            str = str.substr(0,1).toLowerCase() + str.substr(1);
        }
        return str;
    }
};

pb.addEvent(window, 'load', function() { pb.windowAlreadyLoaded = true; });

pb.addCommas = function addCommas(nStr) {
    //http://www.mredkj.com/javascript/nfbasic.html
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
};
