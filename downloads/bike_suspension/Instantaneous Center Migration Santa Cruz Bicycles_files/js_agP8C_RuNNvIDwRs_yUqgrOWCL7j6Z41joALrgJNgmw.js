/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-backgroundsize-opacity-canvas-canvastext-history-geolocation-svg-svgclippaths-touch-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function A(a){j.cssText=a}function B(a,b){return A(m.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a){var e=a[d];if(!D(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),F(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={svg:"http://www.w3.org/2000/svg"},r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},r.canvastext=function(){return!!e.canvas&&!!C(b.createElement("canvas").getContext("2d").fillText,"function")},r.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:x(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},r.geolocation=function(){return"geolocation"in navigator},r.history=function(){return!!a.history&&!!history.pushState},r.backgroundsize=function(){return G("backgroundSize")},r.opacity=function(){return B("opacity:.55"),/^0.55$/.test(j.opacity)},r.svg=function(){return!!b.createElementNS&&!!b.createElementNS(q.svg,"svg").createSVGRect},r.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(l.call(b.createElementNS(q.svg,"clipPath")))};for(var H in r)z(r,H)&&(w=H.toLowerCase(),e[w]=r[H](),u.push((e[w]?"":"no-")+w));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},A(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=x,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;
/*! lazysizes - v1.4.0 */
!function(){"use strict";if(window.addEventListener){var a=/\s+/g,b=/\s*\|\s+|\s+\|\s*/g,c=/^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,d={contain:1,cover:1},e=window.requestAnimationFrame||setTimeout,f=function(a){var b=lazySizes.gW(a,a.parentNode);return(!a._lazysizesWidth||b>a._lazysizesWidth)&&(a._lazysizesWidth=b),a._lazysizesWidth},g=function(e,f,g){var h=document.createElement("picture"),i=f.getAttribute(lazySizesConfig.sizesAttr),j=f.getAttribute("data-ratio"),k=f.getAttribute("data-optimumx"),l=(getComputedStyle(f)||{getPropertyValue:function(){}}).getPropertyValue("background-size");!d[l]&&d[f.style.backgroundSize]&&(l=f.style.backgroundSize),!d[l]||"auto"!=i&&i||(g.setAttribute("data-parent-fit",l),i="auto"),f._lazybgset&&f._lazybgset.parentNode==f&&f.removeChild(f._lazybgset),Object.defineProperty(g,"_lazybgset",{value:f,writable:!0}),Object.defineProperty(f,"_lazybgset",{value:h,writable:!0}),e=e.replace(a," ").split(b),h.style.display="none",g.className=lazySizesConfig.lazyClass,1!=e.length||i||(i="auto"),e.forEach(function(a){var b=document.createElement("source");i&&"auto"!=i&&b.setAttribute("sizes",i),a.match(c)&&(b.setAttribute(lazySizesConfig.srcsetAttr,RegExp.$1),RegExp.$2&&b.setAttribute("media",lazySizesConfig.customMedia[RegExp.$2]||RegExp.$2)),h.appendChild(b)}),i&&(g.setAttribute(lazySizesConfig.sizesAttr,i),f.removeAttribute(lazySizesConfig.sizesAttr),f.removeAttribute("sizes")),k&&g.setAttribute("data-optimumx",k),j&&g.setAttribute("data-ratio",j),h.appendChild(g),f.appendChild(h)},h=function(a){if(a.target._lazybgset){var b=a.target,c=b._lazybgset,d=b.currentSrc||b.src;d&&(c.style.backgroundImage="url("+d+")"),b._lazybgsetLoading&&(lazySizes.fire(c,"_lazyloaded",{},!1,!0),delete b._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(a){var b,c,d;!a.defaultPrevented&&(b=a.target.getAttribute("data-bgset"))&&(d=a.target,c=document.createElement("img"),c.alt="",c._lazybgsetLoading=!0,a.detail.firesLoad=!0,g(b,d,c),setTimeout(function(){lazySizes.loader.unveil(c),e(function(){lazySizes.fire(c,"_lazyloaded",{},!0,!0),c.complete&&h({target:c})})}))}),document.addEventListener("load",h,!0),document.documentElement.addEventListener("lazybeforesizes",function(a){!a.defaultPrevented&&a.target._lazybgset&&(a.detail.width=f(a.target._lazybgset))})}}();;
/*! lazysizes - v1.4.0 */
!function(a,b){"use strict";function c(a,c){if(!e[a]){var d=b.createElement(c?"link":"script"),f=b.getElementsByTagName("script")[0];c?(d.rel="stylesheet",d.href=a):d.src=a,e[a]=!0,e[d.src||d.href]=!0,f.parentNode.insertBefore(d,f)}}var d,e={};b.addEventListener&&(d=function(a,c){var d=b.createElement("img");d.onload=function(){d.onload=null,d.onerror=null,d=null,c()},d.onerror=d.onload,d.src=a,d&&d.complete&&d.onload&&d.onload()},addEventListener("lazybeforeunveil",function(b){var e,f,g,h;b.defaultPrevented||("none"==b.target.preload&&(b.target.preload="auto"),e=b.target.getAttribute("data-link"),e&&c(e,!0),e=b.target.getAttribute("data-script"),e&&c(e),e=b.target.getAttribute("data-require"),e&&a.require&&require([e]),g=b.target.getAttribute("data-bg"),g&&(b.detail.firesLoad=!0,f=function(){b.target.style.backgroundImage="url("+g+")",b.detail.firesLoad=!1,lazySizes.fire(b.target,"_lazyloaded",{},!0,!0)},d(g,f)),h=b.target.getAttribute("data-poster"),h&&(b.detail.firesLoad=!0,f=function(){b.target.poster=h,b.detail.firesLoad=!1,lazySizes.fire(b.target,"_lazyloaded",{},!0,!0)},d(h,f)))},!1))}(window,document);;
/*! lazysizes - v1.4.0 */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports?module.exports=c:"function"==typeof define&&define.amd&&define(c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d=b.documentElement,e=a.HTMLPictureElement&&"sizes"in b.createElement("img"),f="addEventListener",g="getAttribute",h=a[f],i=a.setTimeout,j=a.requestAnimationFrame||i,k=/^picture$/i,l=["load","error","lazyincluded","_lazyloaded"],m={},n=Array.prototype.forEach,o=function(a,b){return m[b]||(m[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),m[b].test(a[g]("class")||"")&&m[b]},p=function(a,b){o(a,b)||a.setAttribute("class",(a[g]("class")||"").trim()+" "+b)},q=function(a,b){var c;(c=o(a,b))&&a.setAttribute("class",(a[g]("class")||"").replace(c," "))},r=function(a,b,c){var d=c?f:"removeEventListener";c&&r(a,b),l.forEach(function(c){a[d](c,b)})},s=function(a,c,d,e,f){var g=b.createEvent("CustomEvent");return g.initCustomEvent(c,!e,!f,d||{}),a.dispatchEvent(g),g},t=function(b,d){var f;!e&&(f=a.picturefill||c.pf)?f({reevaluate:!0,elements:[b]}):d&&d.src&&(b.src=d.src)},u=function(a,b){return(getComputedStyle(a,null)||{})[b]},v=function(a,b,d){for(d=d||a.offsetWidth;d<c.minSize&&b&&!a._lazysizesWidth;)d=b.offsetWidth,b=b.parentNode;return d},w=function(b){var c,d=0,e=a.Date,f=function(){c=!1,d=e.now(),b()},g=function(){i(f)},h=function(){j(g)};return function(){if(!c){var a=125-(e.now()-d);c=!0,6>a&&(a=6),i(h,a)}}},x=function(){var e,l,m,v,x,z,A,B,C,D,E,F,G,H,I,J=/^img$/i,K=/^iframe$/i,L="onscroll"in a&&!/glebot/.test(navigator.userAgent),M=0,N=0,O=0,P=0,Q=function(a){O--,a&&a.target&&r(a.target,Q),(!a||0>O||!a.target)&&(O=0)},R=function(a,c){var e,f=a,g="hidden"==u(b.body,"visibility")||"hidden"!=u(a,"visibility");for(C-=c,F+=c,D-=c,E+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=d;)g=(u(f,"opacity")||1)>0,g&&"visible"!=u(f,"overflow")&&(e=f.getBoundingClientRect(),g=E>e.left&&D<e.right&&F>e.top-1&&C<e.bottom+1);return g},S=function(){var a,b,f,h,i,j,k,n,o;if((x=c.loadMode)&&8>O&&(a=e.length)){b=0,P++,null==H&&("expand"in c||(c.expand=d.clientHeight>600?d.clientWidth>860?500:410:359),G=c.expand,H=G*c.expFactor),H>N&&1>O&&P>3&&x>2?(N=H,P=0):N=x>1&&P>2&&6>O?G:M;for(;a>b;b++)if(e[b]&&!e[b]._lazyRace)if(L)if((n=e[b][g]("data-expand"))&&(j=1*n)||(j=N),o!==j&&(A=innerWidth+j*I,B=innerHeight+j,k=-1*j,o=j),f=e[b].getBoundingClientRect(),(F=f.bottom)>=k&&(C=f.top)<=B&&(E=f.right)>=k*I&&(D=f.left)<=A&&(F||E||D||C)&&(m&&3>O&&!n&&(3>x||4>P)||R(e[b],j))){if(Y(e[b]),i=!0,O>9)break}else!i&&m&&!h&&4>O&&4>P&&x>2&&(l[0]||c.preloadAfterLoad)&&(l[0]||!n&&(F||E||D||C||"auto"!=e[b][g](c.sizesAttr)))&&(h=l[0]||e[b]);else Y(e[b]);h&&!i&&Y(h)}},T=w(S),U=function(a){p(a.target,c.loadedClass),q(a.target,c.loadingClass),r(a.target,U)},V=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},W=function(a){var b,d,e=a[g](c.srcsetAttr);(b=c.customMedia[a[g]("data-media")||a[g]("media")])&&a.setAttribute("media",b),e&&a.setAttribute("srcset",e),b&&(d=a.parentNode,d.insertBefore(a.cloneNode(),a),d.removeChild(a))},X=function(){var a,b=[],c=function(){for(;b.length;)b.shift()();a=!1};return function(d){b.push(d),a||(a=!0,j(c))}}(),Y=function(a){var b,d,e,f,h,j,l,u=J.test(a.nodeName),w=u&&(a[g](c.sizesAttr)||a[g]("sizes")),x="auto"==w;(!x&&m||!u||!a.src&&!a.srcset||a.complete||o(a,c.errorClass))&&(x&&(l=a.offsetWidth),a._lazyRace=!0,O++,X(function(){a._lazyRace&&delete a._lazyRace,(h=s(a,"lazybeforeunveil")).defaultPrevented||(w&&(x?(y.updateElem(a,!0,l),p(a,c.autosizesClass)):a.setAttribute("sizes",w)),d=a[g](c.srcsetAttr),b=a[g](c.srcAttr),u&&(e=a.parentNode,f=e&&k.test(e.nodeName||"")),j=h.detail.firesLoad||"src"in a&&(d||b||f),h={target:a},j&&(r(a,Q,!0),clearTimeout(v),v=i(Q,2500),p(a,c.loadingClass),r(a,U,!0)),f&&n.call(e.getElementsByTagName("source"),W),d?a.setAttribute("srcset",d):b&&!f&&(K.test(a.nodeName)?V(a,b):a.src=b),(d||f)&&t(a,{src:b})),q(a,c.lazyClass),(!j||a.complete)&&(j?Q(h):O--,U(h))}))},Z=function(){if(!m){if(Date.now()-z<999)return void i(Z,999);var a,b=function(){c.loadMode=3,T()};m=!0,c.loadMode=3,O||(P?T():i(S)),h("scroll",function(){3==c.loadMode&&(c.loadMode=2),clearTimeout(a),a=i(b,99)},!0)}};return{_:function(){z=Date.now(),e=b.getElementsByClassName(c.lazyClass),l=b.getElementsByClassName(c.lazyClass+" "+c.preloadClass),I=c.hFac,h("scroll",T,!0),h("resize",T,!0),a.MutationObserver?new MutationObserver(T).observe(d,{childList:!0,subtree:!0,attributes:!0}):(d[f]("DOMNodeInserted",T,!0),d[f]("DOMAttrModified",T,!0),setInterval(T,999)),h("hashchange",T,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b[f](a,T,!0)}),/d$|^c/.test(b.readyState)?Z():(h("load",Z),b[f]("DOMContentLoaded",T),i(Z,2e4)),T(e.length>0)},checkElems:T,unveil:Y}}(),y=function(){var a,d=function(a,b,c){var d,e,f,g,h=a.parentNode;if(h&&(c=v(a,h,c),g=s(a,"lazybeforesizes",{width:c,dataAttr:!!b}),!g.defaultPrevented&&(c=g.detail.width,c&&c!==a._lazysizesWidth))){if(a._lazysizesWidth=c,c+="px",a.setAttribute("sizes",c),k.test(h.nodeName||""))for(d=h.getElementsByTagName("source"),e=0,f=d.length;f>e;e++)d[e].setAttribute("sizes",c);g.detail.dataAttr||t(a,g.detail)}},e=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)d(a[b])},f=w(e);return{_:function(){a=b.getElementsByClassName(c.autosizesClass),h("resize",f)},checkElems:f,updateElem:d}}(),z=function(){z.i||(z.i=!0,y._(),x._())};return function(){var b,d={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.7,hFac:.8,loadMode:2};c=a.lazySizesConfig||a.lazysizesConfig||{};for(b in d)b in c||(c[b]=d[b]);a.lazySizesConfig=c,i(function(){c.init&&z()})}(),{cfg:c,autoSizer:y,loader:x,init:z,uP:t,aC:p,rC:q,hC:o,fire:s,gW:v}}});;
/*
 * jQuery FlexSlider v2.6.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */!function($){var e=!0;$.flexslider=function(t,a){var n=$(t);n.vars=$.extend({},$.flexslider.defaults,a);var i=n.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,r=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&n.vars.touch,o="click touchend MSPointerUp keyup",l="",c,d="vertical"===n.vars.direction,u=n.vars.reverse,v=n.vars.itemWidth>0,p="fade"===n.vars.animation,m=""!==n.vars.asNavFor,f={};$.data(t,"flexslider",n),f={init:function(){n.animating=!1,n.currentSlide=parseInt(n.vars.startAt?n.vars.startAt:0,10),isNaN(n.currentSlide)&&(n.currentSlide=0),n.animatingTo=n.currentSlide,n.atEnd=0===n.currentSlide||n.currentSlide===n.last,n.containerSelector=n.vars.selector.substr(0,n.vars.selector.search(" ")),n.slides=$(n.vars.selector,n),n.container=$(n.containerSelector,n),n.count=n.slides.length,n.syncExists=$(n.vars.sync).length>0,"slide"===n.vars.animation&&(n.vars.animation="swing"),n.prop=d?"top":"marginLeft",n.args={},n.manualPause=!1,n.stopped=!1,n.started=!1,n.startTimeout=null,n.transitions=!n.vars.video&&!p&&n.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var a in t)if(void 0!==e.style[t[a]])return n.pfx=t[a].replace("Perspective","").toLowerCase(),n.prop="-"+n.pfx+"-transform",!0;return!1}(),n.ensureAnimationEnd="",""!==n.vars.controlsContainer&&(n.controlsContainer=$(n.vars.controlsContainer).length>0&&$(n.vars.controlsContainer)),""!==n.vars.manualControls&&(n.manualControls=$(n.vars.manualControls).length>0&&$(n.vars.manualControls)),""!==n.vars.customDirectionNav&&(n.customDirectionNav=2===$(n.vars.customDirectionNav).length&&$(n.vars.customDirectionNav)),n.vars.randomize&&(n.slides.sort(function(){return Math.round(Math.random())-.5}),n.container.empty().append(n.slides)),n.doMath(),n.setup("init"),n.vars.controlNav&&f.controlNav.setup(),n.vars.directionNav&&f.directionNav.setup(),n.vars.keyboard&&(1===$(n.containerSelector).length||n.vars.multipleKeyboard)&&$(document).bind("keyup",function(e){var t=e.keyCode;if(!n.animating&&(39===t||37===t)){var a=39===t?n.getTarget("next"):37===t?n.getTarget("prev"):!1;n.flexAnimate(a,n.vars.pauseOnAction)}}),n.vars.mousewheel&&n.bind("mousewheel",function(e,t,a,i){e.preventDefault();var s=0>t?n.getTarget("next"):n.getTarget("prev");n.flexAnimate(s,n.vars.pauseOnAction)}),n.vars.pausePlay&&f.pausePlay.setup(),n.vars.slideshow&&n.vars.pauseInvisible&&f.pauseInvisible.init(),n.vars.slideshow&&(n.vars.pauseOnHover&&n.hover(function(){n.manualPlay||n.manualPause||n.pause()},function(){n.manualPause||n.manualPlay||n.stopped||n.play()}),n.vars.pauseInvisible&&f.pauseInvisible.isHidden()||(n.vars.initDelay>0?n.startTimeout=setTimeout(n.play,n.vars.initDelay):n.play())),m&&f.asNav.setup(),r&&n.vars.touch&&f.touch(),(!p||p&&n.vars.smoothHeight)&&$(window).bind("resize orientationchange focus",f.resize),n.find("img").attr("draggable","false"),setTimeout(function(){n.vars.start(n)},200)},asNav:{setup:function(){n.asNav=!0,n.animatingTo=Math.floor(n.currentSlide/n.move),n.currentItem=n.currentSlide,n.slides.removeClass(i+"active-slide").eq(n.currentItem).addClass(i+"active-slide"),s?(t._slider=n,n.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=$(this),a=t.index();$(n.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})})):n.slides.on(o,function(e){e.preventDefault();var t=$(this),a=t.index(),s=t.offset().left-$(n).scrollLeft();0>=s&&t.hasClass(i+"active-slide")?n.flexAnimate(n.getTarget("prev"),!0):$(n.vars.asNavFor).data("flexslider").animating||t.hasClass(i+"active-slide")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){n.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var e="thumbnails"===n.vars.controlNav?"control-thumbs":"control-paging",t=1,a,s;if(n.controlNavScaffold=$('<ol class="'+i+"control-nav "+i+e+'"></ol>'),n.pagingCount>1)for(var r=0;r<n.pagingCount;r++){if(s=n.slides.eq(r),void 0===s.attr("data-thumb-alt")&&s.attr("data-thumb-alt",""),altText=""!==s.attr("data-thumb-alt")?altText=' alt="'+s.attr("data-thumb-alt")+'"':"",a="thumbnails"===n.vars.controlNav?'<img src="'+s.attr("data-thumb")+'"'+altText+"/>":'<a href="#">'+t+"</a>","thumbnails"===n.vars.controlNav&&!0===n.vars.thumbCaptions){var c=s.attr("data-thumbcaption");""!==c&&void 0!==c&&(a+='<span class="'+i+'caption">'+c+"</span>")}n.controlNavScaffold.append("<li>"+a+"</li>"),t++}n.controlsContainer?$(n.controlsContainer).append(n.controlNavScaffold):n.append(n.controlNavScaffold),f.controlNav.set(),f.controlNav.active(),n.controlNavScaffold.delegate("a, img",o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(n.direction=a>n.currentSlide?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},setupManual:function(){n.controlNav=n.manualControls,f.controlNav.active(),n.controlNav.bind(o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(a>n.currentSlide?n.direction="next":n.direction="prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===n.vars.controlNav?"img":"a";n.controlNav=$("."+i+"control-nav li "+e,n.controlsContainer?n.controlsContainer:n)},active:function(){n.controlNav.removeClass(i+"active").eq(n.animatingTo).addClass(i+"active")},update:function(e,t){n.pagingCount>1&&"add"===e?n.controlNavScaffold.append($('<li><a href="#">'+n.count+"</a></li>")):1===n.pagingCount?n.controlNavScaffold.find("li").remove():n.controlNav.eq(t).closest("li").remove(),f.controlNav.set(),n.pagingCount>1&&n.pagingCount!==n.controlNav.length?n.update(t,e):f.controlNav.active()}},directionNav:{setup:function(){var e=$('<ul class="'+i+'direction-nav"><li class="'+i+'nav-prev"><a class="'+i+'prev" href="#">'+n.vars.prevText+'</a></li><li class="'+i+'nav-next"><a class="'+i+'next" href="#">'+n.vars.nextText+"</a></li></ul>");n.customDirectionNav?n.directionNav=n.customDirectionNav:n.controlsContainer?($(n.controlsContainer).append(e),n.directionNav=$("."+i+"direction-nav li a",n.controlsContainer)):(n.append(e),n.directionNav=$("."+i+"direction-nav li a",n)),f.directionNav.update(),n.directionNav.bind(o,function(e){e.preventDefault();var t;(""===l||l===e.type)&&(t=$(this).hasClass(i+"next")?n.getTarget("next"):n.getTarget("prev"),n.flexAnimate(t,n.vars.pauseOnAction)),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";1===n.pagingCount?n.directionNav.addClass(e).attr("tabindex","-1"):n.vars.animationLoop?n.directionNav.removeClass(e).removeAttr("tabindex"):0===n.animatingTo?n.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):n.animatingTo===n.last?n.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):n.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=$('<div class="'+i+'pauseplay"><a href="#"></a></div>');n.controlsContainer?(n.controlsContainer.append(e),n.pausePlay=$("."+i+"pauseplay a",n.controlsContainer)):(n.append(e),n.pausePlay=$("."+i+"pauseplay a",n)),f.pausePlay.update(n.vars.slideshow?i+"pause":i+"play"),n.pausePlay.bind(o,function(e){e.preventDefault(),(""===l||l===e.type)&&($(this).hasClass(i+"pause")?(n.manualPause=!0,n.manualPlay=!1,n.pause()):(n.manualPause=!1,n.manualPlay=!0,n.play())),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(e){"play"===e?n.pausePlay.removeClass(i+"pause").addClass(i+"play").html(n.vars.playText):n.pausePlay.removeClass(i+"play").addClass(i+"pause").html(n.vars.pauseText)}},touch:function(){function e(e){e.stopPropagation(),n.animating?e.preventDefault():(n.pause(),t._gesture.addPointer(e.pointerId),T=0,c=d?n.h:n.w,f=Number(new Date),l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c)}function a(e){e.stopPropagation();var a=e.target._slider;if(a){var n=-e.translationX,i=-e.translationY;return T+=d?i:n,m=T,x=d?Math.abs(T)<Math.abs(-n):Math.abs(T)<Math.abs(-i),e.detail===e.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){t._gesture.stop()}):void((!x||Number(new Date)-f>500)&&(e.preventDefault(),!p&&a.transitions&&(a.vars.animationLoop||(m=T/(0===a.currentSlide&&0>T||a.currentSlide===a.last&&T>0?Math.abs(T)/c+2:1)),a.setProps(l+m,"setTouch"))))}}function i(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!x&&null!==m){var a=u?-m:m,n=a>0?t.getTarget("next"):t.getTarget("prev");t.canAdvance(n)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?t.flexAnimate(n,t.vars.pauseOnAction):p||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}r=null,o=null,m=null,l=null,T=0}}var r,o,l,c,m,f,g,h,S,x=!1,y=0,b=0,T=0;s?(t.style.msTouchAction="none",t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",e,!1),t._slider=n,t.addEventListener("MSGestureChange",a,!1),t.addEventListener("MSGestureEnd",i,!1)):(g=function(e){n.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(n.pause(),c=d?n.h:n.w,f=Number(new Date),y=e.touches[0].pageX,b=e.touches[0].pageY,l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c,r=d?b:y,o=d?y:b,t.addEventListener("touchmove",h,!1),t.addEventListener("touchend",S,!1))},h=function(e){y=e.touches[0].pageX,b=e.touches[0].pageY,m=d?r-b:r-y,x=d?Math.abs(m)<Math.abs(y-o):Math.abs(m)<Math.abs(b-o);var t=500;(!x||Number(new Date)-f>t)&&(e.preventDefault(),!p&&n.transitions&&(n.vars.animationLoop||(m/=0===n.currentSlide&&0>m||n.currentSlide===n.last&&m>0?Math.abs(m)/c+2:1),n.setProps(l+m,"setTouch")))},S=function(e){if(t.removeEventListener("touchmove",h,!1),n.animatingTo===n.currentSlide&&!x&&null!==m){var a=u?-m:m,i=a>0?n.getTarget("next"):n.getTarget("prev");n.canAdvance(i)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?n.flexAnimate(i,n.vars.pauseOnAction):p||n.flexAnimate(n.currentSlide,n.vars.pauseOnAction,!0)}t.removeEventListener("touchend",S,!1),r=null,o=null,m=null,l=null},t.addEventListener("touchstart",g,!1))},resize:function(){!n.animating&&n.is(":visible")&&(v||n.doMath(),p?f.smoothHeight():v?(n.slides.width(n.computedW),n.update(n.pagingCount),n.setProps()):d?(n.viewport.height(n.h),n.setProps(n.h,"setTotal")):(n.vars.smoothHeight&&f.smoothHeight(),n.newSlides.width(n.computedW),n.setProps(n.computedW,"setTotal")))},smoothHeight:function(e){if(!d||p){var t=p?n:n.viewport;e?t.animate({height:n.slides.eq(n.animatingTo).height()},e):t.height(n.slides.eq(n.animatingTo).height())}},sync:function(e){var t=$(n.vars.sync).data("flexslider"),a=n.animatingTo;switch(e){case"animate":t.flexAnimate(a,n.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause()}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=$(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=f.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){f.pauseInvisible.isHidden()?n.startTimeout?clearTimeout(n.startTimeout):n.pause():n.started?n.play():n.vars.initDelay>0?setTimeout(n.play,n.vars.initDelay):n.play()})}},isHidden:function(){var e=f.pauseInvisible.getHiddenProp();return e?document[e]:!1},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(c),c=setTimeout(function(){l=""},3e3)}},n.flexAnimate=function(e,t,a,s,o){if(n.vars.animationLoop||e===n.currentSlide||(n.direction=e>n.currentSlide?"next":"prev"),m&&1===n.pagingCount&&(n.direction=n.currentItem<e?"next":"prev"),!n.animating&&(n.canAdvance(e,o)||a)&&n.is(":visible")){if(m&&s){var l=$(n.vars.asNavFor).data("flexslider");if(n.atEnd=0===e||e===n.count-1,l.flexAnimate(e,!0,!1,!0,o),n.direction=n.currentItem<e?"next":"prev",l.direction=n.direction,Math.ceil((e+1)/n.visible)-1===n.currentSlide||0===e)return n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),!1;n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),e=Math.floor(e/n.visible)}if(n.animating=!0,n.animatingTo=e,t&&n.pause(),n.vars.before(n),n.syncExists&&!o&&f.sync("animate"),n.vars.controlNav&&f.controlNav.active(),v||n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),n.atEnd=0===e||e===n.last,n.vars.directionNav&&f.directionNav.update(),e===n.last&&(n.vars.end(n),n.vars.animationLoop||n.pause()),p)r?(n.slides.eq(n.currentSlide).css({opacity:0,zIndex:1}),n.slides.eq(e).css({opacity:1,zIndex:2}),n.wrapup(c)):(n.slides.eq(n.currentSlide).css({zIndex:1}).animate({opacity:0},n.vars.animationSpeed,n.vars.easing),n.slides.eq(e).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing,n.wrapup));else{var c=d?n.slides.filter(":first").height():n.computedW,g,h,S;v?(g=n.vars.itemMargin,S=(n.itemW+g)*n.move*n.animatingTo,h=S>n.limit&&1!==n.visible?n.limit:S):h=0===n.currentSlide&&e===n.count-1&&n.vars.animationLoop&&"next"!==n.direction?u?(n.count+n.cloneOffset)*c:0:n.currentSlide===n.last&&0===e&&n.vars.animationLoop&&"prev"!==n.direction?u?0:(n.count+1)*c:u?(n.count-1-e+n.cloneOffset)*c:(e+n.cloneOffset)*c,n.setProps(h,"",n.vars.animationSpeed),n.transitions?(n.vars.animationLoop&&n.atEnd||(n.animating=!1,n.currentSlide=n.animatingTo),n.container.unbind("webkitTransitionEnd transitionend"),n.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(n.ensureAnimationEnd),n.wrapup(c)}),clearTimeout(n.ensureAnimationEnd),n.ensureAnimationEnd=setTimeout(function(){n.wrapup(c)},n.vars.animationSpeed+100)):n.container.animate(n.args,n.vars.animationSpeed,n.vars.easing,function(){n.wrapup(c)})}n.vars.smoothHeight&&f.smoothHeight(n.vars.animationSpeed)}},n.wrapup=function(e){p||v||(0===n.currentSlide&&n.animatingTo===n.last&&n.vars.animationLoop?n.setProps(e,"jumpEnd"):n.currentSlide===n.last&&0===n.animatingTo&&n.vars.animationLoop&&n.setProps(e,"jumpStart")),n.animating=!1,n.currentSlide=n.animatingTo,n.vars.after(n)},n.animateSlides=function(){!n.animating&&e&&n.flexAnimate(n.getTarget("next"))},n.pause=function(){clearInterval(n.animatedSlides),n.animatedSlides=null,n.playing=!1,n.vars.pausePlay&&f.pausePlay.update("play"),n.syncExists&&f.sync("pause")},n.play=function(){n.playing&&clearInterval(n.animatedSlides),n.animatedSlides=n.animatedSlides||setInterval(n.animateSlides,n.vars.slideshowSpeed),n.started=n.playing=!0,n.vars.pausePlay&&f.pausePlay.update("pause"),n.syncExists&&f.sync("play")},n.stop=function(){n.pause(),n.stopped=!0},n.canAdvance=function(e,t){var a=m?n.pagingCount-1:n.last;return t?!0:m&&n.currentItem===n.count-1&&0===e&&"prev"===n.direction?!0:m&&0===n.currentItem&&e===n.pagingCount-1&&"next"!==n.direction?!1:e!==n.currentSlide||m?n.vars.animationLoop?!0:n.atEnd&&0===n.currentSlide&&e===a&&"next"!==n.direction?!1:n.atEnd&&n.currentSlide===a&&0===e&&"next"===n.direction?!1:!0:!1},n.getTarget=function(e){return n.direction=e,"next"===e?n.currentSlide===n.last?0:n.currentSlide+1:0===n.currentSlide?n.last:n.currentSlide-1},n.setProps=function(e,t,a){var i=function(){var a=e?e:(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo,i=function(){if(v)return"setTouch"===t?e:u&&n.animatingTo===n.last?0:u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:n.animatingTo===n.last?n.limit:a;switch(t){case"setTotal":return u?(n.count-1-n.currentSlide+n.cloneOffset)*e:(n.currentSlide+n.cloneOffset)*e;case"setTouch":return u?e:e;case"jumpEnd":return u?e:n.count*e;case"jumpStart":return u?n.count*e:e;default:return e}}();return-1*i+"px"}();n.transitions&&(i=d?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)",a=void 0!==a?a/1e3+"s":"0s",n.container.css("-"+n.pfx+"-transition-duration",a),n.container.css("transition-duration",a)),n.args[n.prop]=i,(n.transitions||void 0===a)&&n.container.css(n.args),n.container.css("transform",i)},n.setup=function(e){if(p)n.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===e&&(r?n.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+n.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(n.currentSlide).css({opacity:1,zIndex:2}):0==n.vars.fadeFirstSlide?n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).css({opacity:1}):n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing)),n.vars.smoothHeight&&f.smoothHeight();else{var t,a;"init"===e&&(n.viewport=$('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(n).append(n.container),n.cloneCount=0,n.cloneOffset=0,u&&(a=$.makeArray(n.slides).reverse(),n.slides=$(a),n.container.empty().append(n.slides))),n.vars.animationLoop&&!v&&(n.cloneCount=2,n.cloneOffset=1,"init"!==e&&n.container.find(".clone").remove(),n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),n.newSlides=$(n.vars.selector,n),t=u?n.count-1-n.currentSlide+n.cloneOffset:n.currentSlide+n.cloneOffset,d&&!v?(n.container.height(200*(n.count+n.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){n.newSlides.css({display:"block"}),n.doMath(),n.viewport.height(n.h),n.setProps(t*n.h,"init")},"init"===e?100:0)):(n.container.width(200*(n.count+n.cloneCount)+"%"),n.setProps(t*n.computedW,"init"),setTimeout(function(){n.doMath(),n.newSlides.css({width:n.computedW,marginRight:n.computedM,"float":"left",display:"block"}),n.vars.smoothHeight&&f.smoothHeight()},"init"===e?100:0))}v||n.slides.removeClass(i+"active-slide").eq(n.currentSlide).addClass(i+"active-slide"),n.vars.init(n)},n.doMath=function(){var e=n.slides.first(),t=n.vars.itemMargin,a=n.vars.minItems,i=n.vars.maxItems;n.w=void 0===n.viewport?n.width():n.viewport.width(),n.h=e.height(),n.boxPadding=e.outerWidth()-e.width(),v?(n.itemT=n.vars.itemWidth+t,n.itemM=t,n.minW=a?a*n.itemT:n.w,n.maxW=i?i*n.itemT-t:n.w,n.itemW=n.minW>n.w?(n.w-t*(a-1))/a:n.maxW<n.w?(n.w-t*(i-1))/i:n.vars.itemWidth>n.w?n.w:n.vars.itemWidth,n.visible=Math.floor(n.w/n.itemW),n.move=n.vars.move>0&&n.vars.move<n.visible?n.vars.move:n.visible,n.pagingCount=Math.ceil((n.count-n.visible)/n.move+1),n.last=n.pagingCount-1,n.limit=1===n.pagingCount?0:n.vars.itemWidth>n.w?n.itemW*(n.count-1)+t*(n.count-1):(n.itemW+t)*n.count-n.w-t):(n.itemW=n.w,n.itemM=t,n.pagingCount=n.count,n.last=n.count-1),n.computedW=n.itemW-n.boxPadding,n.computedM=n.itemM},n.update=function(e,t){n.doMath(),v||(e<n.currentSlide?n.currentSlide+=1:e<=n.currentSlide&&0!==e&&(n.currentSlide-=1),n.animatingTo=n.currentSlide),n.vars.controlNav&&!n.manualControls&&("add"===t&&!v||n.pagingCount>n.controlNav.length?f.controlNav.update("add"):("remove"===t&&!v||n.pagingCount<n.controlNav.length)&&(v&&n.currentSlide>n.last&&(n.currentSlide-=1,n.animatingTo-=1),f.controlNav.update("remove",n.last))),n.vars.directionNav&&f.directionNav.update()},n.addSlide=function(e,t){var a=$(e);n.count+=1,n.last=n.count-1,d&&u?void 0!==t?n.slides.eq(n.count-t).after(a):n.container.prepend(a):void 0!==t?n.slides.eq(t).before(a):n.container.append(a),n.update(t,"add"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.added(n)},n.removeSlide=function(e){var t=isNaN(e)?n.slides.index($(e)):e;n.count-=1,n.last=n.count-1,isNaN(e)?$(e,n.slides).remove():d&&u?n.slides.eq(n.last).remove():n.slides.eq(e).remove(),n.doMath(),n.update(t,"remove"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.removed(n)},f.init()},$(window).blur(function(t){e=!1}).focus(function(t){e=!0}),$.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},$.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var t=$(this),a=e.selector?e.selector:".slides > li",n=t.find(a);1===n.length&&e.allowOneSlide===!0||0===n.length?(n.fadeIn(400),e.start&&e.start(t)):void 0===t.data("flexslider")&&new $.flexslider(this,e)});var t=$(this).data("flexslider");switch(e){case"play":t.play();break;case"pause":t.pause();break;case"stop":t.stop();break;case"next":t.flexAnimate(t.getTarget("next"),!0);break;case"prev":case"previous":t.flexAnimate(t.getTarget("prev"),!0);break;default:"number"==typeof e&&t.flexAnimate(e,!0)}}}(jQuery);;
/*! (c) Andrea Giammarchi - ISC */
var self=this||{};try{!function(t,n){if(new t("q=%2B").get("q")!==n||new t({q:n}).get("q")!==n||new t([["q",n]]).get("q")!==n||"q=%0A"!==new t("q=\n").toString()||"q=+%26"!==new t({q:" &"}).toString())throw t;self.URLSearchParams=t}(URLSearchParams,"+")}catch(t){!function(t,a,o){"use strict";var u=t.create,h=t.defineProperty,n=/[!'\(\)~]|%20|%00/g,e=/\+/g,r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},i={append:function(t,n){l(this._ungap,t,n)},delete:function(t){delete this._ungap[t]},get:function(t){return this.has(t)?this._ungap[t][0]:null},getAll:function(t){return this.has(t)?this._ungap[t].slice(0):[]},has:function(t){return t in this._ungap},set:function(t,n){this._ungap[t]=[a(n)]},forEach:function(n,e){var r=this;for(var i in r._ungap)r._ungap[i].forEach(t,i);function t(t){n.call(e,t,a(i),r)}},toJSON:function(){return{}},toString:function(){var t=[];for(var n in this._ungap)for(var e=g(n),r=0,i=this._ungap[n];r<i.length;r++)t.push(e+"="+g(i[r]));return t.join("&")}};for(var s in i)h(c.prototype,s,{configurable:!0,writable:!0,value:i[s]});function c(t){var n=u(null);switch(h(this,"_ungap",{value:n}),!0){case!t:break;case"string"==typeof t:"?"===t.charAt(0)&&(t=t.slice(1));for(var e=t.split("&"),r=0,i=e.length;r<i;r++){var a=(s=e[r]).indexOf("=");-1<a?l(n,p(s.slice(0,a)),p(s.slice(a+1))):s.length&&l(n,p(s),"")}break;case o(t):for(r=0,i=t.length;r<i;r++){var s;l(n,(s=t[r])[0],s[1])}break;case"forEach"in t:t.forEach(f,n);break;default:for(var c in t)l(n,c,t[c])}}function f(t,n){l(this,n,t)}function l(t,n,e){var r=o(e)?e.join(","):e;n in t?t[n].push(r):t[n]=[r]}function p(t){return decodeURIComponent(t.replace(e," "))}function g(t){return encodeURIComponent(t).replace(n,v)}function v(t){return r[t]}self.URLSearchParams=c}(Object,String,Array.isArray)}!function(l){var r=!1;try{r=!!Symbol.iterator}catch(t){}function t(t,n){var e=[];return t.forEach(n,e),r?e[Symbol.iterator]():{next:function(){var t=e.shift();return{done:void 0===t,value:t}}}}"forEach"in l||(l.forEach=function(e,r){var i=this,t=Object.create(null);this.toString().replace(/=[\s\S]*?(?:&|$)/g,"=").split("=").forEach(function(n){!n.length||n in t||(t[n]=i.getAll(n)).forEach(function(t){e.call(r,t,n,i)})})}),"keys"in l||(l.keys=function(){return t(this,function(t,n){this.push(n)})}),"values"in l||(l.values=function(){return t(this,function(t,n){this.push(t)})}),"entries"in l||(l.entries=function(){return t(this,function(t,n){this.push([n,t])})}),!r||Symbol.iterator in l||(l[Symbol.iterator]=l.entries),"sort"in l||(l.sort=function(){for(var t,n,e,r=this.entries(),i=r.next(),a=i.done,s=[],c=Object.create(null);!a;)n=(e=i.value)[0],s.push(n),n in c||(c[n]=[]),c[n].push(e[1]),a=(i=r.next()).done;for(s.sort(),t=0;t<s.length;t++)this.delete(s[t]);for(t=0;t<s.length;t++)n=s[t],this.append(n,c[n].shift())}),function(c){var o=c.defineProperty,u=c.getOwnPropertyDescriptor,h=function(t){var n=t.append;t.append=l.append,URLSearchParams.call(t,t._usp.search.slice(1)),t.append=n},f=function(t,n){if(!(t instanceof n))throw new TypeError("'searchParams' accessed on an object that does not implement interface "+n.name)},t=function(n){var e,r,t=n.prototype,i=u(t,"searchParams"),a=u(t,"href"),s=u(t,"search");!i&&s&&s.set&&(r=function(e){function r(t,n){l.append.call(this,t,n),t=this.toString(),e.set.call(this._usp,t?"?"+t:"")}function i(t){l.delete.call(this,t),t=this.toString(),e.set.call(this._usp,t?"?"+t:"")}function a(t,n){l.set.call(this,t,n),t=this.toString(),e.set.call(this._usp,t?"?"+t:"")}return function(t,n){return t.append=r,t.delete=i,t.set=a,o(t,"_usp",{configurable:!0,writable:!0,value:n})}}(s),e=function(t,n){return o(t,"_searchParams",{configurable:!0,writable:!0,value:r(n,t)}),n},c.defineProperties(t,{href:{get:function(){return a.get.call(this)},set:function(t){var n=this._searchParams;a.set.call(this,t),n&&h(n)}},search:{get:function(){return s.get.call(this)},set:function(t){var n=this._searchParams;s.set.call(this,t),n&&h(n)}},searchParams:{get:function(){return f(this,n),this._searchParams||e(this,new URLSearchParams(this.search.slice(1)))},set:function(t){f(this,n),e(this,t)}}}))};try{t(HTMLAnchorElement),/^function|object$/.test(typeof URL)&&URL.prototype&&t(URL)}catch(t){}}(Object)}(self.URLSearchParams.prototype,Object);
;
var user_can_support_localstorage;
try {
  var x = 'test-localstorage-' + Date.now();
  localStorage.setItem(x, x);
  var y = localStorage.getItem(x);
  localStorage.removeItem(x);
  if (y !== x) { user_can_support_localstorage = false; }
  else { user_can_support_localstorage = true; }
} catch (e) {
  user_can_support_localstorage = false;
}

//https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage
//not for safari private browsing this does not work as localStorage exists but isn't 'active'
//could potentially create own property of Window
if (!window.localStorage) {
  Object.defineProperty(window, "localStorage", new (function () {
    var aKeys = [], oStorage = {};
    Object.defineProperty(oStorage, "getItem", {
      value: function (sKey) { return sKey ? this[sKey] : null; },
      writable: false,
      configurable: false,
      enumerable: false
    });
    Object.defineProperty(oStorage, "key", {
      value: function (nKeyId) { return aKeys[nKeyId]; },
      writable: false,
      configurable: false,
      enumerable: false
    });
    Object.defineProperty(oStorage, "setItem", {
      value: function (sKey, sValue) {
        if(!sKey) { return; }
        document.cookie = escape(sKey) + "=" + escape(sValue) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
      },
      writable: false,
      configurable: false,
      enumerable: false
    });
    Object.defineProperty(oStorage, "length", {
      get: function () { return aKeys.length; },
      configurable: false,
      enumerable: false
    });
    Object.defineProperty(oStorage, "removeItem", {
      value: function (sKey) {
        if(!sKey) { return; }
        document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      },
      writable: false,
      configurable: false,
      enumerable: false
    });
    Object.defineProperty(oStorage, "clear", {
      value: function () {
        if(!aKeys.length) { return; }
        for (var sKey in aKeys) {
          document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        }
      },
      writable: false,
      configurable: false,
      enumerable: false
    });
    this.get = function () {
      var iThisIndx;
      for (var sKey in oStorage) {
        iThisIndx = aKeys.indexOf(sKey);
        if (iThisIndx === -1) { oStorage.setItem(sKey, oStorage[sKey]); }
        else { aKeys.splice(iThisIndx, 1); }
        delete oStorage[sKey];
      }
      for (aKeys; aKeys.length > 0; aKeys.splice(0, 1)) { oStorage.removeItem(aKeys[0]); }
      for (var aCouple, iKey, nIdx = 0, aCouples = document.cookie.split(/\s*;\s*/); nIdx < aCouples.length; nIdx++) {
        aCouple = aCouples[nIdx].split(/\s*=\s*/);
        if (aCouple.length > 1) {
          oStorage[iKey = unescape(aCouple[0])] = unescape(aCouple[1]);
          aKeys.push(iKey);
        }
      }
      return oStorage;
    };
    this.configurable = false;
    this.enumerable = true;
  })());
}

if(window.localStorage && !user_can_support_localstorage) {
  console.log('supports LS but not available - e.g. Safari Private Browsing');
};
/*
 * jQuery FlexSlider v2.1
 * http://www.woothemes.com/flexslider/
 *
 * Copyright 2012 WooThemes
 * Free to use under the GPLv2 license.
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Contributing author: Tyler Smith (@mbmufffin)
 */
(function(d){d.flexslider=function(j,l){var a=d(j),c=d.extend({},d.flexslider.defaults,l),e=c.namespace,q="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,u=q?"touchend":"click",m="vertical"===c.direction,n=c.reverse,h=0<c.itemWidth,s="fade"===c.animation,t=""!==c.asNavFor,f={};d.data(j,"flexslider",a);f={init:function(){a.animating=!1;a.currentSlide=c.startAt;a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=c.selector.substr(0,
c.selector.search(" "));a.slides=d(c.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(c.sync).length;"slide"===c.animation&&(c.animation="swing");a.prop=m?"top":"marginLeft";a.args={};a.manualPause=!1;var b=a,g;if(g=!c.video)if(g=!s)if(g=c.useCSS)a:{g=document.createElement("div");var p=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],e;for(e in p)if(void 0!==g.style[p[e]]){a.pfx=p[e].replace("Perspective","").toLowerCase();
a.prop="-"+a.pfx+"-transform";g=!0;break a}g=!1}b.transitions=g;""!==c.controlsContainer&&(a.controlsContainer=0<d(c.controlsContainer).length&&d(c.controlsContainer));""!==c.manualControls&&(a.manualControls=0<d(c.manualControls).length&&d(c.manualControls));c.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();t&&f.asNav.setup();a.setup("init");c.controlNav&&f.controlNav.setup();c.directionNav&&f.directionNav.setup();c.keyboard&&
(1===d(a.containerSelector).length||c.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;if(!a.animating&&(39===b||37===b))b=39===b?a.getTarget("next"):37===b?a.getTarget("prev"):!1,a.flexAnimate(b,c.pauseOnAction)});c.mousewheel&&a.bind("mousewheel",function(b,g){b.preventDefault();var d=0>g?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(d,c.pauseOnAction)});c.pausePlay&&f.pausePlay.setup();c.slideshow&&(c.pauseOnHover&&a.hover(function(){!a.manualPlay&&!a.manualPause&&a.pause()},
function(){!a.manualPause&&!a.manualPlay&&a.play()}),0<c.initDelay?setTimeout(a.play,c.initDelay):a.play());q&&c.touch&&f.touch();(!s||s&&c.smoothHeight)&&d(window).bind("resize focus",f.resize);setTimeout(function(){c.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");a.slides.click(function(b){b.preventDefault();b=d(this);var g=b.index();
!d(c.asNavFor).data("flexslider").animating&&!b.hasClass("active")&&(a.direction=a.currentItem<g?"next":"prev",a.flexAnimate(g,c.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var b=1,g;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===c.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var p=0;p<a.pagingCount;p++)g="thumbnails"===c.controlNav?
'<img src="'+a.slides.eq(p).attr("data-thumb")+'"/>':"<a>"+b+"</a>",a.controlNavScaffold.append("<li>"+g+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);f.controlNav.set();f.controlNav.active();a.controlNavScaffold.delegate("a, img",u,function(b){b.preventDefault();b=d(this);var g=a.controlNav.index(b);b.hasClass(e+"active")||(a.direction=g>a.currentSlide?"next":"prev",a.flexAnimate(g,c.pauseOnAction))});q&&a.controlNavScaffold.delegate("a",
"click touchstart",function(a){a.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls;f.controlNav.active();a.controlNav.live(u,function(b){b.preventDefault();b=d(this);var g=a.controlNav.index(b);b.hasClass(e+"active")||(g>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(g,c.pauseOnAction))});q&&a.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===c.controlNav?"img":"a"),
a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,c){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(c).closest("li").remove();f.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(c,b):f.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+
e+'direction-nav"><li><a class="'+e+'prev" href="#">'+c.prevText+'</a></li><li><a class="'+e+'next" href="#">'+c.nextText+"</a></li></ul>");a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));f.directionNav.update();a.directionNav.bind(u,function(b){b.preventDefault();b=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,c.pauseOnAction)});
q&&a.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var b=e+"disabled";1===a.pagingCount?a.directionNav.addClass(b):c.animationLoop?a.directionNav.removeClass(b):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b):a.directionNav.removeClass(b)}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?
(a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",a));f.pausePlay.update(c.slideshow?e+"pause":e+"play");a.pausePlay.bind(u,function(b){b.preventDefault();d(this).hasClass(e+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())});q&&a.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+"pause").addClass(e+
"play").text(c.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").text(c.pauseText)}},touch:function(){function b(b){k=m?d-b.touches[0].pageY:d-b.touches[0].pageX;q=m?Math.abs(k)<Math.abs(b.touches[0].pageX-e):Math.abs(k)<Math.abs(b.touches[0].pageY-e);if(!q||500<Number(new Date)-l)b.preventDefault(),!s&&a.transitions&&(c.animationLoop||(k/=0===a.currentSlide&&0>k||a.currentSlide===a.last&&0<k?Math.abs(k)/r+2:1),a.setProps(f+k,"setTouch"))}function g(){j.removeEventListener("touchmove",
b,!1);if(a.animatingTo===a.currentSlide&&!q&&null!==k){var h=n?-k:k,m=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(m)&&(550>Number(new Date)-l&&50<Math.abs(h)||Math.abs(h)>r/2)?a.flexAnimate(m,c.pauseOnAction):s||a.flexAnimate(a.currentSlide,c.pauseOnAction,!0)}j.removeEventListener("touchend",g,!1);f=k=e=d=null}var d,e,f,r,k,l,q=!1;j.addEventListener("touchstart",function(k){a.animating?k.preventDefault():1===k.touches.length&&(a.pause(),r=m?a.h:a.w,l=Number(new Date),f=h&&n&&a.animatingTo===
a.last?0:h&&n?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+c.itemMargin)*a.move*a.currentSlide:n?(a.last-a.currentSlide+a.cloneOffset)*r:(a.currentSlide+a.cloneOffset)*r,d=m?k.touches[0].pageY:k.touches[0].pageX,e=m?k.touches[0].pageX:k.touches[0].pageY,j.addEventListener("touchmove",b,!1),j.addEventListener("touchend",g,!1))},!1)},resize:function(){!a.animating&&a.is(":visible")&&(h||a.doMath(),s?f.smoothHeight():h?(a.slides.width(a.computedW),
a.update(a.pagingCount),a.setProps()):m?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(c.smoothHeight&&f.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(b){if(!m||s){var c=s?a:a.viewport;b?c.animate({height:a.slides.eq(a.animatingTo).height()},b):c.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var g=d(c.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":g.flexAnimate(e,c.pauseOnAction,!1,!0);break;case "play":!g.playing&&
!g.asNav&&g.play();break;case "pause":g.pause()}}};a.flexAnimate=function(b,g,p,j,l){t&&1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev");if(!a.animating&&(a.canAdvance(b,l)||p)&&a.is(":visible")){if(t&&j)if(p=d(c.asNavFor).data("flexslider"),a.atEnd=0===b||b===a.count-1,p.flexAnimate(b,!0,!1,!0,l),a.direction=a.currentItem<b?"next":"prev",p.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+
"active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;c.before(a);g&&a.pause();a.syncExists&&!l&&f.sync("animate");c.controlNav&&f.controlNav.active();h||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;c.directionNav&&f.directionNav.update();b===a.last&&(c.end(a),c.animationLoop||a.pause());if(s)q?(a.slides.eq(a.currentSlide).css({opacity:0,
zIndex:1}),a.slides.eq(b).css({opacity:1,zIndex:2}),a.slides.unbind("webkitTransitionEnd transitionend"),a.slides.eq(a.currentSlide).bind("webkitTransitionEnd transitionend",function(){c.after(a)}),a.animating=!1,a.currentSlide=a.animatingTo):(a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed,c.easing),a.slides.eq(b).fadeIn(c.animationSpeed,c.easing,a.wrapup));else{var r=m?a.slides.filter(":first").height():a.computedW;h?(b=c.itemWidth>a.w?2*c.itemMargin:c.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,
b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&b===a.count-1&&c.animationLoop&&"next"!==a.direction?n?(a.count+a.cloneOffset)*r:0:a.currentSlide===a.last&&0===b&&c.animationLoop&&"prev"!==a.direction?n?0:(a.count+1)*r:n?(a.count-1-b+a.cloneOffset)*r:(b+a.cloneOffset)*r;a.setProps(b,"",c.animationSpeed);if(a.transitions){if(!c.animationLoop||!a.atEnd)a.animating=!1,a.currentSlide=a.animatingTo;a.container.unbind("webkitTransitionEnd transitionend");a.container.bind("webkitTransitionEnd transitionend",
function(){a.wrapup(r)})}else a.container.animate(a.args,c.animationSpeed,c.easing,function(){a.wrapup(r)})}c.smoothHeight&&f.smoothHeight(c.animationSpeed)}};a.wrapup=function(b){!s&&!h&&(0===a.currentSlide&&a.animatingTo===a.last&&c.animationLoop?a.setProps(b,"jumpEnd"):a.currentSlide===a.last&&(0===a.animatingTo&&c.animationLoop)&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;c.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=
function(){clearInterval(a.animatedSlides);a.playing=!1;c.pausePlay&&f.pausePlay.update("play");a.syncExists&&f.sync("pause")};a.play=function(){a.animatedSlides=setInterval(a.animateSlides,c.slideshowSpeed);a.playing=!0;c.pausePlay&&f.pausePlay.update("pause");a.syncExists&&f.sync("play")};a.canAdvance=function(b,g){var d=t?a.pagingCount-1:a.last;return g?!0:t&&a.currentItem===a.count-1&&0===b&&"prev"===a.direction?!0:t&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b===a.currentSlide&&
!t?!1:c.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===d&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===d&&0===b&&"next"===a.direction?!1:!0};a.getTarget=function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1};a.setProps=function(b,g,d){var e,f=b?b:(a.itemW+c.itemMargin)*a.move*a.animatingTo;e=-1*function(){if(h)return"setTouch"===g?b:n&&a.animatingTo===a.last?0:n?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:a.animatingTo===
a.last?a.limit:f;switch(g){case "setTotal":return n?(a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+a.cloneOffset)*b;case "setTouch":return b;case "jumpEnd":return n?b:a.count*b;case "jumpStart":return n?a.count*b:b;default:return b}}()+"px";a.transitions&&(e=m?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",d=void 0!==d?d/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",d));a.args[a.prop]=e;(a.transitions||void 0===d)&&a.container.css(a.args)};a.setup=function(b){if(s)a.slides.css({width:"100%",
"float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(q?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+c.animationSpeed/1E3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed,c.easing)),c.smoothHeight&&f.smoothHeight();else{var g,p;"init"===b&&(a.viewport=d('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=
0,n&&(p=d.makeArray(a.slides).reverse(),a.slides=d(p),a.container.empty().append(a.slides)));c.animationLoop&&!h&&(a.cloneCount=2,a.cloneOffset=1,"init"!==b&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));a.newSlides=d(c.selector,a);g=n?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;m&&!h?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),
setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);a.setProps(g*a.h,"init")},"init"===b?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(g*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,"float":"left",display:"block"});c.smoothHeight&&f.smoothHeight()},"init"===b?100:0))}h||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+"active-slide")};a.doMath=function(){var b=a.slides.first(),
d=c.itemMargin,e=c.minItems,f=c.maxItems;a.w=a.width();a.h=b.height();a.boxPadding=b.outerWidth()-b.width();h?(a.itemT=c.itemWidth+d,a.minW=e?e*a.itemT:a.w,a.maxW=f?f*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-d*e)/e:a.maxW<a.w?(a.w-d*f)/f:c.itemWidth>a.w?a.w:c.itemWidth,a.visible=Math.floor(a.w/(a.itemW+d)),a.move=0<c.move&&c.move<a.visible?c.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:c.itemWidth>a.w?(a.itemW+2*d)*a.count-a.w-
d:(a.itemW+d)*a.count-a.w-d):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-a.boxPadding};a.update=function(b,d){a.doMath();h||(b<a.currentSlide?a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(c.controlNav&&!a.manualControls)if("add"===d&&!h||a.pagingCount>a.controlNav.length)f.controlNav.update("add");else if("remove"===d&&!h||a.pagingCount<a.controlNav.length)h&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),
f.controlNav.update("remove",a.last);c.directionNav&&f.directionNav.update()};a.addSlide=function(b,e){var f=d(b);a.count+=1;a.last=a.count-1;m&&n?void 0!==e?a.slides.eq(a.count-e).after(f):a.container.prepend(f):void 0!==e?a.slides.eq(e).before(f):a.container.append(f);a.update(e,"add");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.added(a)};a.removeSlide=function(b){var e=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,a.slides).remove():m&&n?a.slides.eq(a.last).remove():
a.slides.eq(b).remove();a.doMath();a.update(e,"remove");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.removed(a)};f.init()};d.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",
keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};d.fn.flexslider=function(j){void 0===j&&(j={});if("object"===typeof j)return this.each(function(){var a=d(this),c=a.find(j.selector?j.selector:".slides > li");1===c.length?(c.fadeIn(400),
j.start&&j.start(a)):void 0==a.data("flexslider")&&new d.flexslider(this,j)});var l=d(this).data("flexslider");switch(j){case "play":l.play();break;case "pause":l.pause();break;case "next":l.flexAnimate(l.getTarget("next"),!0);break;case "prev":case "previous":l.flexAnimate(l.getTarget("prev"),!0);break;default:"number"===typeof j&&l.flexAnimate(j,!0)}}})(jQuery);;
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");e&&b.setAttribute("viewBox",e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.parent,d.svg,e)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<o.length;){var h=o[c],i=h.parentNode,j=d(i),k=h.getAttribute("xlink:href")||h.getAttribute("href");if(!k&&g.attributeName&&(k=h.getAttribute(g.attributeName)),j&&k){if(f)if(!g.validate||g.validate(k,j,h)){i.removeChild(h);var l=k.split("#"),q=l.shift(),r=l.join("#");if(q.length){var s=m[q];s||(s=m[q]=new XMLHttpRequest,s.open("GET",q),s.send(),s._embeds=[]),s._embeds.push({parent:i,svg:j,id:r}),b(s)}else a(i,j,document.getElementById(r))}else++c,++p}else++c}(!o.length||o.length-p>0)&&n(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/,k=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;f="polyfill"in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537||k.test(navigator.userAgent)&&l;var m={},n=window.requestAnimationFrame||setTimeout,o=document.getElementsByTagName("use"),p=0;f&&e()}function d(a){for(var b=a;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});;
(function ($) {
  $(document).ready(function () {

    //primary nav
    $('.nav-links a').on('click', function(e) {
      var id = $(this).attr('class').split(/\s+/);

      if(!id[1] || !$('.nav-dropdown__display-container#'+id[1]).length) return; //ensure there is a drop-down to trigger (wheels)

      e.preventDefault();

      $(this).parent().toggleClass('js-nav-link--is-active').siblings().removeClass('js-nav-link--is-active');
      $("#"+id[1]).toggleClass('js-nav-link--is-active').siblings().removeClass('js-nav-link--is-active');

      if($('.nav-links li').hasClass('js-nav-link--is-active')) {
        //calculate the bottom of the menu and adjust the top of the DD menu
        var top = $('#header').offset().top + $('#header').outerHeight() - $(window).scrollTop();
        $('.nav-dropdown__display-container').css({'top': top+'px', 'position': 'fixed'});
        //calculate the top of the scrollable menu so we can subtract it from the vh
        var ntop = (top + 67)/16; 
        $('.nav-dropdown').css({'max-height': 'calc(100vh - '+ntop+'rem)'});
        $('body').addClass('u-freeze');
        $('html').addClass('js-modal-full__wrapper-darken--is-active');
      }else{
        $('body').removeClass('u-freeze');
        $('html').removeClass('js-modal-full__wrapper-darken--is-active');
      }
    })


    //$('.pager__list-item').first().css('background-color', 'yellow');
    $('.pager__list-item').first().addClass('js-pager-first__number');


    //dropdown nav close - desktop
    $('.nav-header__close').on('click', function(e) {
      e.preventDefault();

      //todo uncomment Chris - start
      $('.nav-dropdown__display-container').removeClass('js-nav-link--is-active');
      //todo uncomment Chris - end

      $('.nav-links li').removeClass('js-nav-link--is-active');
      $('body').removeClass('u-freeze');
      $('html').removeClass('js-modal-full__wrapper-darken--is-active');
    })

    //mobile Primary Nav click to display secondary nav
    $('.mobile-nav__primary--has-secondary-nav').on('click', function(e) {
      e.preventDefault();
      $(this).parent().addClass('js-mobile-nav__secondary-nav--is-active');
    })

    //close secondary nav
    $('.mobile-nav__secondary-title').on('click', function(e) {
      e.preventDefault();
      $(this).closest('li').removeClass('js-mobile-nav__secondary-nav--is-active');
    })


    //primary-nav toggle -  mobile burger
    $('.nav-toggle').on('click', function(e){
      //if closing the nav toggle, remove the secondary nav active so user is always shown primary nav when clicking burger to reveal nav
      if($('html').hasClass('js-mobile-menu--is-active')) {
        $('.mobile-nav__primary-list li').removeClass('js-mobile-nav__secondary-nav--is-active');
      }

      $('html').toggleClass('js-mobile-menu--is-active js-modal-full__wrapper-darken--is-active');
    })


    //primary-nav search
    //display search box and make primary nav "inactive"
    $('a.nav-icon__search').on('click', function(e){
      e.preventDefault();
      $('.search-form').addClass('js-search-form--is-active');
      $('.navigation').addClass('js-nav-links--inactive');
      $('.search-form__close').removeClass('js-search-form--is-active');
    })

    //hide search box and remove primary nav "inactive"
    $('.search-form__close').on('click', function(e){
      e.preventDefault();
      $('.search-form').removeClass('js-search-form--is-active');
      $('.navigation').removeClass('js-nav-links--inactive');
    })


    //DARKEN and MODAL
    //Darken Activate - general activate class
    $('.js-modal-full__wrapper-darken--activate').on('click', function(e) {
      e.preventDefault();
      $('body').addClass('u-freeze js-modal-full__wrapper-darken--is-active');
    })


    //Modal Activate- activate the Darken and modal-full__inner
    $('.js-modal-full--activate-modal').on('click', function(e) {
      e.preventDefault();
      $('body').addClass('u-freeze js-modal-full__wrapper-darken--is-active');
      if($(this).attr('id') !== undefined) {
        $('.'+$(this).attr('id')).addClass('js-modal-full__inner--is-active');
      }
    })

    $('footer .modal--language-selector').on('click', function(e) {
      var $this = $(this),
        $target = $(e.target)
      if ($this[0] == $target[0]) {
        $('.modal-full__close, .modal-full__wrapper-darken').trigger('click');
      }
      return false;
    });

    $('body').on('click', '.modal--gallery', function(e) {
      var $this = $(this),
        $target = $(e.target);

      if($this[0] == $target[0]) {
        $('.modal-full__close, .modal-full__wrapper-darken').trigger('click');
      }

      return false;
    });


    //Close Darken and modal-full__inner
    $('.modal-full__close, .modal-full__wrapper-darken').on('click', function(e) {
      e.preventDefault();

      //for Dropdown nav modal and mobile nav close
      $('html').removeClass('js-modal-full__wrapper-darken--is-active js-mobile-menu--is-active');

      //to close dropdown nav
      $('.nav-links__item').removeClass('js-nav-link--is-active');


      $('body').removeClass('u-freeze js-modal-full__wrapper-darken--is-active js-alert-footer--active');
      $('.modal-full__inner').removeClass('js-modal-full__inner--is-active');
    }).children().click(function(e) {
      return false;
    });


    //widow resize close all open nav items, search, modal etc...
    //for all of you window resizers out there, we salut you!
    $(window).resize(function() {

      //DESKTOP
      //CLOSE SEARCH
      //close search box
      $('.search-form').removeClass('js-search-form--is-active');

      //remove primary nav inactive
      $('nav').removeClass('js-nav-links--inactive');


      //CLOSE DROPDOWN
      //close dropdown
      $('.nav-links__list li').removeClass('js-nav-link--is-active');

      //close modal
      $('html').removeClass('js-modal-full__wrapper-darken--is-active');

      //remove body freeze
      $('body').removeClass('u-freeze');


      //MOBILE
      //MENU
      //remove secondary active class to reset mobile nav to display primary nav
      if($('html').hasClass('js-mobile-menu--is-active')) {
        $('.mobile-nav__primary-list li').removeClass('js-mobile-nav__secondary-nav--is-active');
      }

      //Toggle/Burger reset and modal
      $('html').removeClass('js-mobile-menu--is-active js-modal-full__wrapper-darken--is-active');

    })


    //run SVG for Everybody
    svg4everybody();

    //Hero Panel - search for 'Santa Cruz' string and add wrapping html so the two words never wrap
    $(".hero-panel__title").html(function(index, html) {
      var searchString = 'santa cruz';
      var regEx = new RegExp(searchString, 'ig');
      var replaceString = '<i style="white-space: nowrap; font-style: normal;">Santa Cruz</i>';
      
    	return html.replace(regEx, replaceString);
		});

    //toggles
    $('.toggle__option').on('click', function(e) {
      e.preventDefault();
      $(this).addClass('js-toggle__option--active').siblings().removeClass('js-toggle__option--active');
    })

    //scroll toggle - used in the secondary-navigation
    $('.scroll-toggle__option').on('click', function(e) {
      $(this).addClass('js-scroll-toggle__option--active').siblings().removeClass('js-scroll-toggle__option--active');
    })

    //tabs - used on the product detail page under tech support
    $('.tabs__option').on('click', function(e) {
      e.preventDefault();
      $(this).addClass('js-tabs__option--active').siblings().removeClass('js-tabs__option--active');
    })

    //swatch selected - color swatch selected for bike cards
    $('.swatch').on('click', function(e) {
      e.preventDefault();
      $(this).addClass('js-swatch--selected').siblings().removeClass('js-swatch--selected');
    })


    //flexslider - Media Block
    /*
     if($('body').hasClass('front')) {
     var flexBefore = '';
     var flexAfter = '';

     function flexsliderMediaBlock() {
     if($('.flex-viewport').length == 0) {
     if(flexBefore == '') {
     flexBefore = $('.flexslider-media-block').clone();
     }
     $('.flexslider-media-block').flexslider({
     animation: "slide",
     prevText: "",
     nextText: "",
     slideshow: false,
     });
     //delay by 100ms so that we make sure the image resize has actually happened
     setTimeout(function(){ getMediaImageSize(false); }, 100);
     }
     }

     $(window).resize(function() {
     if(window.outerWidth >= 768) {
     flexsliderMediaBlock();
     //delay by 10ms so that we make sure the image resize has actually happened
     setTimeout(function(){ getMediaImageSize(false); }, 10);
     }
     else {
     if(flexBefore != '') {
     if($('.flex-viewport').length > 0) {
     $('.flexslider-media-block').remove();
     flexAfter = flexBefore.clone();
     $('.flexslider-media-block__title').after(flexBefore);
     flexBefore = flexAfter;
     }
     }
     //revert images to responsive
     $('.flexslider-media-block .media-block__carousel--3-up .media-block:nth-of-type(1) .media-block__image img').css({'height': 'auto', 'width': '100%', 'margin-left': '0px'});
     }
     })

     if(window.outerWidth >= 768) {
     //initiate Flexslider
     flexsliderMediaBlock();

     //Set Flexslider - Media Block first image the same height as second block image top and third block image bottom
     $(window).load(function(){
     getMediaImageSize(true);
     })
     }


     //Set Flexslider - Media Block first image the same height as second block image top and third block image bottom
     function getMediaImageSize(loop) {
     if(window.outerWidth >= 768) {
     var media_block_two_top = $('.flexslider-media-block .media-block__carousel--3-up .media-block:nth-of-type(1) .media-block__image').offset().top;
     var media_block_three_top = $('.flexslider-media-block .media-block__carousel--3-up .media-block:nth-of-type(3) .media-block__image').offset().top;
     var media_block_three_height = $('.flexslider-media-block .media-block__carousel--3-up .media-block:nth-of-type(3) .media-block__image img').height();

     //try to get a decimal height
     var temp = $('.flexslider-media-block .media-block__carousel--3-up .media-block:nth-of-type(3) .media-block__image img')[0].getBoundingClientRect();
     if(temp.height) {
     media_block_three_height = temp.height;
     }

     //if the image height is > 0 or < 300 it is not the correct size and we need to delay 1s to try again
     if(media_block_three_height < 300) {
     loop = true;
     }
     if(media_block_three_height > 0 && media_block_three_height < 300) {
     var media_block_one_height = (parseFloat(media_block_three_top) - parseFloat(media_block_two_top)) + parseFloat(media_block_three_height);
     //the image will overflow the div but that's OK
     //then calculate how much bigger the image is and negative margin-left
     $('.flexslider-media-block .media-block__carousel--3-up .media-block:nth-of-type(1) .media-block__image img').css({'height': media_block_one_height, 'width': 'auto'});
     var widthDiv = $('.flexslider-media-block .media-block__carousel--3-up .media-block:nth-of-type(1) .media-block__image').width();
     var widthAfter = $('.flexslider-media-block .media-block__carousel--3-up .media-block:nth-of-type(1) .media-block__image img').width();
     //make sure the width is bigger then it was before
     if(widthAfter > widthDiv) {
     var marginAfter = (parseFloat(widthAfter) - parseFloat(widthDiv)) / 2;
     $('.flexslider-media-block .media-block__carousel--3-up .media-block:nth-of-type(1) .media-block__image img').css({'margin-left': '-'+marginAfter+'px'});
     }
     }
     else {
     //if we don't get a valid image height then try again in 1 sec
     //it it fails a second time then the image will remain it's natural size
     if(loop) {
     setTimeout(function(){ getMediaImageSize(false); }, 1000);
     return false;
     }
     }
     //position the direction navigation arrow between the second and third block on the first slide AND tight left and right
     var media_block_two_height = $('.flexslider-media-block .media-block__carousel--3-up .media-block:nth-of-type(3) .media-block__image img').height();
     var media_block_gap  = (parseFloat(media_block_three_top) - parseFloat(media_block_two_top)) - parseFloat(media_block_two_height) ;
     var direction_nav_position = parseFloat(media_block_two_height) + ((parseFloat(media_block_gap) / 2));

     if((window.outerWidth <= 1230)) {
     $('.flexslider-media-block .flex-direction-nav .flex-prev').css({'top': '0', 'left': '-30px', 'transform': 'translateY(' + direction_nav_position + 'px)'});
     $('.flexslider-media-block .flex-direction-nav .flex-next').css({'top': '0', 'right': '-30px', 'transform': 'translateY(' + direction_nav_position + 'px)'});
     }

     //position the direction navigation arrows left and right of viewport horizontally centred
     if((window.outerWidth > 1230) && (window.outerWidth < 1430)) {

     //var left_right_gap = $('.flexslider-media-block .media-block__carousel--3-up .media-block:nth-of-type(1) .media-block__image img').offset().left + 30;
     var left_right_gap = $('.l-wrapper').offset().left + 30;
     var left_right_offset = parseFloat(left_right_gap) / 2 + 15;

     $('.flexslider-media-block .flex-direction-nav .flex-prev').css(
     {
     top: 0,
     left: (left_right_offset * -1) + 'px',
     transform: 'translateY(' + direction_nav_position + 'px)'
     }
     );

     $('.flexslider-media-block .flex-direction-nav .flex-next').css(
     {
     top: 0,
     right: '-'+left_right_offset+'px',
     transform: 'translateY(' + direction_nav_position + 'px)'
     }
     );
     }

     //position the direction navigation arrows left and right max 50px (50px + 30px button width)
     if(window.outerWidth >= 1430) {
     $('.flexslider-media-block .flex-direction-nav .flex-prev').css({'top': '0', 'left': '-80px', 'transform': 'translateY(' + direction_nav_position + 'px)'});
     $('.flexslider-media-block .flex-direction-nav .flex-next').css({'top': '0', 'right': '-80px', 'transform': 'translateY(' + direction_nav_position + 'px)'});
     }
     }
     }//getMediaImageSize


     //because the images are lazyloaded, they don't have a height until they are loaded
     //make sure getMediaImageSize is only called once to avoid overloading the page
     var monitorScroll = true;
     window.addEventListener('scroll', function(e) {
     if(monitorScroll) {
     var media_block_three_height = $('.flexslider-media-block .media-block__carousel--3-up .media-block:nth-of-type(3) .media-block__image img').height();
     if(media_block_three_height > 0) {
     getMediaImageSize(false);
     monitorScroll = false;
     }
     }
     })

     }//end if front
     */


    var mediaCarousel = {};

    mediaCarousel.cfg = {
      carousels: $('.flexslider-media-block'),
      threeUpDivs: $('.media-block__carousel--3-up'),
      flexSliderActive: false,
      threshold: 768,
    };

    mediaCarousel.threeUpPanel = function(elem) {
      this.elem = elem;
      this.threshold = 786;
      this.ratio = null;
      this.resizeActions = function() {
        var first = this.elem.find('.media-block:nth-of-type(1)'),
          firstImgDiv = first.find('.media-block__image'),
          firstImgElem = first.find('.media-block__image img'),
          second = this.elem.find('.media-block:nth-of-type(2)'),
          third = this.elem.find('.media-block:nth-of-type(3)'),
          thirdImgDiv = third.find('.media-block__image'),
          height = second.outerHeight() +
            + parseInt(second.css('margin-bottom'))
            + thirdImgDiv.outerHeight();


        if($(window).width() <= this.threshold) {
          firstImgDiv.attr('style', '');
          firstImgElem.attr('style', '');
          return;
        }


        firstImgDiv.css({
          height: height,
          overflow: 'hidden'
        });

        if(this.ratio) {
          firstImgElem.attr('style', ''); //remove any styling from last resize

          var bw = firstImgDiv.outerWidth(), bh = firstImgDiv.outerHeight(),
            ih = firstImgElem.height();

          if(ih < bh) {
            var newWidth = bh * this.ratio
            firstImgElem.css({
              width: newWidth,
              marginLeft: (newWidth - bw) * -0.5,
            });
          }
        }
      }
    };

    mediaCarousel.init = function() {
      if(!mediaCarousel.cfg.carousels.length) return;

      mediaCarousel.cfg.copy = mediaCarousel.cfg.carousels.clone();

      //three-up panel display
      mediaCarousel.cfg.threeUpDivs.each(function(i) {
        var e = new mediaCarousel.threeUpPanel($(this));
        $(window).resize(function() {
          e.resizeActions();
        }).resize();

        $(this).find('.media-block:nth-of-type(1) .media-block__image img').on('load', function() {
          e.ratio = ($(this).width() / $(this).height()); //set the ratio
        })

        //after every image, run the resizing actions
        $(this).find('.media-block .media-block__image img').on('load', function() {
          e.resizeActions(); //resize again
        });
      })

      $(window).resize(function() {
        mediaCarousel.resize();
      }).resize();

    }

    mediaCarousel.resize = function() {
      var ww = $(window).width();
      if(ww >= mediaCarousel.cfg.threshold && !mediaCarousel.cfg.flexSliderActive) {
        $('.flexslider-media-block').flexslider({
          animation: "slide",
          prevText: "",
          nextText: "",
          slideshow: false
        });
        mediaCarousel.cfg.flexSliderActive = true;
      }
      if(ww < mediaCarousel.cfg.threshold && mediaCarousel.cfg.flexSliderActive) {
        console.log('cloning');
        mediaCarousel.cfg.carousels.empty().append(mediaCarousel.cfg.copy.clone().html());
        mediaCarousel.cfg.flexSliderActive = false;
      }
    }

    mediaCarousel.init();




    function fadeInNews(tgs, cb) {
      if(tgs.length < 1 && isFunction(cb)) { cb(); }
      if(tgs.length) {
        var t = tgs.shift();
        t.addClass('mobile_show');
        setTimeout(function(){ fadeInNews(tgs, cb); }, 200);
      }
    }

    //more media on mobile
    $('.flexslider-media-block__load-more a').on('click', function(e) {
      e.preventDefault();
      var cnt = 0;
      var media = [];
      var showButton = false;
      $('.media-block__carousel--6-up .media-block').each(function() {
        if(!$(this).hasClass('mobile_show')) {
          if(cnt < 6) {
            media.push($(this));
          }
          else {
            showButton = true;
          }
          cnt++;
        }
      })
      fadeInNews(media, function(){
        if(!showButton) {
          $('.flexslider-media-block__load-more').hide();
        }
      })
    })


    //isFunction - determine if funciton exists
    var isFunction = function(fnName) {
      var getType = {};
      return fnName && getType.toString.call(fnName) === '[object Function]';
    }



    //product explorer Desktop - inactive, active and inactive states
    $('.product-explorer li').mouseout(function() {
      //if this isn't active
      if(!$(this).hasClass('js-product-explorer--active')) {
        //if has hover class remove and add inactive class
        if($(this).hasClass('js-product-explorer--hover')) {
          $(this).removeClass('js-product-explorer--hover');
          $(this).addClass('js-product-explorer--inactive');
        }
      }
    })

    $('.product-explorer li').mouseover(function() {
      //if this isn't active
      if(!$(this).hasClass('js-product-explorer--active')) {
        //if is inactive remove inactive class and and add hover class
        if($(this).hasClass('js-product-explorer--inactive')) {
          $(this).removeClass('js-product-explorer--inactive');
          $(this).addClass('js-product-explorer--hover');
        }
      }
    })

    $('.product-explorer li').on('click', function() {
      $(this)
        .addClass('js-product-explorer--active')
        .removeClass('js-product-explorer--inactive js-product-explorer--hover')
        .siblings()
        .removeClass('js-product-explorer--active')
        .siblings()
        .not($(this))
        .addClass('js-product-explorer--inactive');

      var $this = $(this),
        image = $this.find('.product-explorer__image').clone(),
        l_wrapper_image_wrapper = $this.parents('.l-wrapper').find('.product-explorer__image-wrapper');

      //Empty the Image Wrapper contents
      l_wrapper_image_wrapper.html('');

      //Add clone image to Image Wrapper
      l_wrapper_image_wrapper.append(image);

    })


    //product explorer Mobile - inactive, active and inactive states
    $('.product-explorer-toggle__item').on('click', function() {

      //display active toggle
      $(this).addClass('js-product-explorer-toggle--active').siblings().removeClass('js-product-explorer-toggle--active');

      //display active toggle content
      var bike_active = $(this).data('bikeid');

      $('.product-explorer li').removeClass('js-product-explorer--active');
      $('.product-explorer').find('#' + bike_active).addClass('js-product-explorer--active');
    })

    //Alert Banners
    //alert header overlay -> sales
    $('.alert-header-overlay__close').on('click', function(e) {
      $('body').removeClass('js-alert-header-overlay--active');
    })

    //alert header -> cookies -> slides site down
    /*$('.alert-header__close').on('click', function(e) {
      $('.alert-header').slideToggle(250);
    })*/

    //alert footer -> region
    $('.alert-footer__close').on('click', function(e) {
      //e.preventDefault();
      $('body').removeClass('js-alert-footer--active');
    })


    //Share This - toggle channels
    $('.share-this a.btn-tertiary').on('click', function(e) {
      e.preventDefault();
      $('.share-this').toggleClass('js-share-this--active');
    })

    //Share functionality
    $('.share-this__list-item a').on('click', function(e) {
      e.preventDefault();
      windowPopup(this, socialShare(this));
    })

    function windowPopup(target, url) {
      var width = 0,
        height = 0;

      if ($(target).attr("id") == "social_share_facebook") {
        width = 500;
        height = 300;
      } else if ($(target).attr("id") == "social_share_twitter") {
        width = 500;
        height = 300;
      } else if ($(target).attr("id") == "social_share_pinterest") {
        width = 750;
        height = 600;
      }

      // Calculate the position of the popup so
      // it’s centered on the screen.
      var left = ((screen.width / 2) - (width / 2)),
        top = ((screen.height / 2) - (height / 2)) * .5;

      window.open(
        url,
        "",
        "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
      );
    }

    function socialShare(target) {

      var url = '';
      var share_title = encodeURIComponent(getMetaProperty("property", "og:title") + " #SantaCruzBicycles");

      var share_image = getMetaProperty("name","twitter:image:src");
      if (share_image == false) {
        share_image = "https://www.santacruzbicycles.com/files/styles/medium/public/ike.jpg";
      }
      share_image = encodeURIComponent(share_image);

      var share_description = getMetaProperty("name","twitter:description");
      if (share_description == false) {
        share_description = getMetaProperty("property", "og:title");
      }
      share_description = encodeURIComponent(share_description + ' #SantaCruzBicycles');

      var page_url =  encodeURIComponent(location.href);

      // var jqxhr =  getBitlyURL(location.href, function(bitly_url){
      if ($(target).attr("id") == "social_share_facebook") {
        url = 'https://www.facebook.com/sharer/sharer.php?u=' + page_url;
      } else if ($(target).attr("id") == "social_share_twitter") {
        url = 'https://twitter.com/intent/tweet/?text=' + share_title +  '&url=' + encodeURIComponent(page_url);
      } else if ($(target).attr("id") == "social_share_pinterest") {
        url = 'https://www.pinterest.com/pin/create/button/?url=' +  encodeURIComponent(location.href) + ' &media=' + share_image + '&description=' + share_description;
      }
      // });

      return url;
    }

    // gets meta property content from HEAD by property="id"
    function getMetaProperty(meta_property_attribute, meta_property_attribute_key) {
      var metaTags=document.getElementsByTagName("meta");

      var meta_property_content = false;
      for (var i = 0; i < metaTags.length; i++) {
        if (metaTags[i].getAttribute(meta_property_attribute) == meta_property_attribute_key) {
          meta_property_content = metaTags[i].getAttribute("content");
          break;
        }

      }

      return meta_property_content;
    }


    //responsive tables
    $('.responsive-table').each(function() {
      var thetable=($(this));
      $(this).find('tbody td').each(function() {
        $(this).attr('data-heading',thetable.find('thead th:nth-child('+($(this).index()+1)+')').text());
      });
    });


  });
})(jQuery);

;

//@todo decide on preferred formatting and function layout and clean this entire file up


(function ($) {

  Drupal.settings.scb2017 = (typeof Drupal.settings.scb2017 == "undefined") ? (
      (localStorage.getItem('scb2017') ? JSON.parse(localStorage.getItem('scb2017')) : {
        measurement: 'm',
      })
    )  : Drupal.settings.scb2017;

  
  
  Drupal.behaviors.vwmisc = {
    attach: function(context) {
      
      //! ---------------------------- Drupal Messages on/off
      $('#messages .wrapper').append('<span class="close icon icon-cancel" />').find('span.close').unbind('click').bind('click', function(){
        $('#messages').remove();
      });
      
      $('iframe[src*="youtube.com"]').each(function() {
        var ratio = this.height / this.width;
        $(this).data('aspectRatio', ratio)
            // and remove the hard coded width/height
            .removeAttr('height')
            .removeAttr('width')
            .wrap('<div class="u-video-wrapper" style="padding-bottom: '+(ratio * 100)+'%" />');


      });
      
      $('iframe[src*="vimeo.com"]').each(function() {
        if($('body').hasClass('not-front')) {
          var ratio = this.height / this.width;
          $(this).data('aspectRatio', ratio)
              // and remove the hard coded width/height
              .removeAttr('height')
              .removeAttr('width')
              .wrap('<div class="u-video-wrapper" style="padding-bottom: '+(ratio * 100)+'%" />');
        }                      
      });
      
      //loop through the panel flexsliders and initialize them (Allows multiple)
      $('.panel-flexslider').each(function() {
        $("#"+$(this).attr("id")).flexslider({
          animation: "slide",
          prevText: "",
          nextText: "",
          slideshow: false
        });
        //@todo set height of parent to slideshow height (on resize too!)
        //alert("xxxx"+$(this).find('img').height());
        //$(this).parent().height($(this).height());
      });
      
      //play button in a panel
      $('.media-panel__image .icon__video-play--overlay').on('click', function(e) {
         e.preventDefault();
        if(!$('body').hasClass('u-freeze')) {
          $('body').addClass('u-freeze js-modal-full__wrapper-darken--is-active');
          $('html').addClass('js-modal-full__wrapper-darken--is-active');
          $('#modal--'+$(this).attr("id")).addClass('js-modal-full__inner--is-active');
          var vid = $('#modal--'+$(this).attr("id")+' .panel-video .u-video-wrapper').parent().html();
          if(vid.indexOf('media-vimeo-player') > 0) {
            vid = vid.replace("?", "?autoplay=1&");
          }
          if(vid.indexOf('media-youtube-player') > 0) {
            vid = vid.replace("?", "?autoplay=1&");
          }
          $('#modal--'+$(this).attr("id")+' .text-editor').html(vid);
        } 
        else {
          $('body').removeClass('u-freeze js-modal-full__wrapper-darken--is-active');
          $('html').removeClass('js-modal-full__wrapper-darken--is-active');
          $('#modal--'+$(this).attr("id")).removeClass('js-modal-full__inner--is-active');
          $('#modal--'+$(this).attr("id")+' .text-editor').html("");
        }
      });
      
      //play button in a panel
      $('#panel--3897 .btn-primary').on('click', function(e) {
         e.preventDefault();
        var id = 3897;
        if(!$('body').hasClass('u-freeze')) {
          $('body').addClass('u-freeze js-modal-full__wrapper-darken--is-active');
          $('html').addClass('js-modal-full__wrapper-darken--is-active');
          $('#modal--video-'+id).addClass('js-modal-full__inner--is-active');
          var vid = '<div class="u-video-wrapper" style="padding-bottom: 56.25%"><iframe class="media-youtube-player" title="The New Santa Cruz Nomad - More Travel Than a White Van // ft. Sam Dale" src="https://www.youtube.com/embed/Z3dry_eUHL8?wmode=opaque&amp;controls=&amp;rel=0&amp;showinfo=0&amp;theme=light&amp;autohide=1" name="The New Santa Cruz Nomad - More Travel Than a White Van // ft. Sam Dale" frameborder="0" allowfullscreen="">The New Santa Cruz Nomad - More Travel Than a White Van // ft. Sam Dale</iframe></div>';
          if(vid.indexOf('media-vimeo-player') > 0) {
            vid = vid.replace("?", "?autoplay=1&");
          }
          if(vid.indexOf('media-youtube-player') > 0) {
            vid = vid.replace("?", "?autoplay=1&");
          }
          $('#modal--video-'+id+' .text-editor').html(vid);
        } 
        else {
          $('body').removeClass('u-freeze js-modal-full__wrapper-darken--is-active');
          $('html').removeClass('js-modal-full__wrapper-darken--is-active');
          $('#modal--'+$(this).attr("id")).removeClass('js-modal-full__inner--is-active');
          $('#modal--'+$(this).attr("id")+' .text-editor').html("");
        }
      });
      
      $('.modal-full__panel .modal-full__close').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('u-freeze js-modal-full__wrapper-darken--is-active');
        $('html').removeClass('js-modal-full__wrapper-darken--is-active');
        $('.modal-full__panel').removeClass('js-modal-full__inner--is-active');
        $('.modal-full__panel .text-editor').html('');
      });
      
      var animation = 'fade';
      $('.frame-panel-flexslider').each(function() {
        $("#"+$(this).attr("id")).flexslider({
          animation: animation,
          prevText: "",
          nextText: "",
          slideshow: false,
          controlNav: false,
          directionNav: false,
          animateHeight: false,
        });
        animation = "slide";
      });
      
      $(".slide-ctrl--prev").bind('click', function(){
        $('#frame-panel-flexslider-1').flexslider('prev');
        $('#frame-panel-flexslider-2').flexslider('prev');
        $('#frame-panel-flexslider-3').flexslider('prev');
      });
      
      $(".slide-ctrl--next, .panel-slideshow__next").bind('click', function(e){
        e.preventDefault();
        $('#frame-panel-flexslider-1').flexslider('next');
        $('#frame-panel-flexslider-2').flexslider('next');
        $('#frame-panel-flexslider-3').flexslider('next');
      });
      
      function fixFlexsliderHeight() {
          // Set fixed height based on the tallest slide
          $('#frame-panel-flexslider-1').each(function(){
              var sliderHeight = 0;
              $(this).find('.slides > li').each(function(){
                  slideHeight = $(this).height();
                  if (sliderHeight < slideHeight) {
                      sliderHeight = slideHeight;
                  }
              });
              $(this).find('ul.slides li').css({'height' : sliderHeight});
              $(this).find('ul.slides li').css({'display' : 'none'});
              $(this).find('ul.slides li.flex-active-slide').css({'display' : 'block'});
          });
      }
      
      $(window).resize(function() {
          fixFlexsliderHeight();
      });
      
      $(document).ready(function() {
          fixFlexsliderHeight();
      });
      
    } 
    
    
    
  }  //end Drupal.behaviors.vwmisc
  
})(jQuery);


//GLOBAL FUNCTIONS GO HERE

//! ---------------------------- isFunction - determine if funciton exists
var isFunction = function(fnName) {
    var getType = {};
    return fnName && getType.toString.call(fnName) === '[object Function]';
};

//@todo decide on preferred formatting and function layout and clean this entire file up

(function ($) {

  Drupal.settings.scb2017 = (typeof Drupal.settings.scb2017 == "undefined") ? {} : Drupal.settings.scb2017; //set in scripts.js
  Drupal.settings.scb2017.measurement = (typeof Drupal.settings.scb2017.measurement == "undefined") ? 'm' : Drupal.settings.scb2017.measurement;

  //tabs - used on the product detail page under tech support
  Drupal.behaviors.scbMeasurements = {
    attach: function(context) {
      var toggle = $('.measure-toggle'),
          activeClass = 'js-toggle__option--active',
          currentMeasure = Drupal.settings.scb2017.measurement,
          keyed = {
            i: 'imperial',
            m: 'metric',
          };

      var setBodyClasses = function() {
        $('body').removeClass('measure-imperial measure-metric').addClass('measure-' + keyed[Drupal.settings.scb2017.measurement]);
      }

      var setActiveToggle = function() {
        if(user_can_support_localstorage) {
          localStorage.setItem('scb2017', JSON.stringify(Drupal.settings.scb2017)); //update Drupal theme settings
        }
        toggle.removeClass(activeClass);
        toggle.filter('.measure-toggle--' + Drupal.settings.scb2017.measurement).addClass(activeClass);
        //body stuff
        setBodyClasses();
        $(window).trigger('scbMeasurementsChange'); //trigger an event
      }

      toggle.on('click', function() {
        Drupal.settings.scb2017.measurement = $(this).data().measure;
        setActiveToggle();
      })
      //on load
      setActiveToggle();
      setBodyClasses();
    }
  }

})(jQuery);;
(function ($) {

  Drupal.behaviors.scbModal = {
    attach: function(context) {

      //listen for react modal actions and perform theme-specific actions

      document.addEventListener('builderModalOpen', function (e) {
        console.log('builderModalOpen!');
        $('body').addClass('u-freeze');
      }, false);

      document.addEventListener('builderModalClose', function (e) {
        console.log('builderModalClose!');
        $('body').removeClass('u-freeze');
      }, false);

    }
  }

})(jQuery);

;
(function($) {
  Drupal.behaviors.vwlangmobile = {
    attach: function(context, settings) {
      $('footer #language-menu', context).once('mobile-switcher', function() {
        var $this = $(this),
          lang_list = $this.find('.mobile-select-ui select option'),
          client = new CrossStorageClient(settings.base_url + '/' + settings.pathPrefix + 'vwmageclient/x-domain-hub', {
            frameId: 'vwlang',
            timeout: 10000
          }),
          p_mb_select = new Promise(function(resolve, reject) {
            if (lang_list.length) {
              resolve({
                current_prefix: VWLANG.LangPrefix.getLangPrefix(new String(window.location.pathname)),
                languages: VWLANG.LangPrefix.getLangPrefixCollection(lang_list)
              });
            } else {
              reject(new Error('Languages not found.'));
            }
          });

        var toselect = '';
        lang_list.each(function() {
            var region = VWLANG.LangPrefix.getLangPrefix(new String(window.location.pathname));
            var str = $(this).val();
            if(str.indexOf(region.getPrefix()) >= 0) toselect = str;
        });
        $(".mobile-select-ui select").val(toselect);
        
        $this.find('.mobile-select-ui').on('click', 'input[type="button"]', function() {
          var $button = $(this);

          p_mb_select
            .then(
              function(languages) {
                var selected = lang_list.filter(':selected');
                if (!selected.length) {
                  throw new Error('No selected language found.');
                }

                selected = VWLANG.LangPrefix.getLangPrefix(selected);
                if (
                  selected.getPrefix() == languages.current_prefix.getPrefix() ||
                  VWLANG.LangPrefix.matchPrefixFromCollection(selected, languages.languages) == false
                ) {
                  return Promise.reject(languages);
                }

                // Set the storage value.
                client
                  .onConnect()
                  .then(function() {
                    return client.set('SCB_language_val', selected.getPrefix());
                  })
                  .catch(function(err) {
                    console.log(err);
                  });

                window.location.href = selected.value;
              },
              function(err) {
                console.log(err);
                // Close the modal.
                $('body').removeClass('u-freeze js-modal-full__wrapper-darken--is-active');
                $('.modal-full__inner').removeClass('js-modal-full__inner--is-active');
              }
            )
            .catch(function(err) {
              console.log(err);
              // Close the modal.
              $('body').removeClass('u-freeze js-modal-full__wrapper-darken--is-active');
              $('.modal-full__inner').removeClass('js-modal-full__inner--is-active');
            });

          return false;
        });
      });
    }
  };

  Drupal.behaviors.vwlang = {
    attach: function(context, settings) {
      $('footer #language-menu', context).once('lang-switcher', function() {
        
        var $this = $(this),
          lang_list = $this.find('.regions .select-ui-list'),
          client = new CrossStorageClient(settings.base_url + '/' + settings.pathPrefix + 'vwmageclient/x-domain-hub', {
            frameId: 'vwlang',
            timeout: 10000
          });
        if (lang_list) {
          $('a.icon-flag__link, .language-menu__go-usa a').on('click', function() {
            var $this = $(this),
              prefix = VWLANG.LangPrefix.getLangPrefix($this.attr('href')).getPrefix(),
              temp_a = document.createElement('a');
            if (prefix) {
              client
                .onConnect()
                .then(function() {
                  return client.set('SCB_language_val', prefix);
                })
                .catch(function(err) {
                  console.log(err);
                });

              temp_a.href = $this.attr('href');

              window.location.href = temp_a.pathname;

              return false;
            }
          });
        }
      });
    }
  };

  Drupal.behaviors.vwlangpopup = {
    attach: function(context, settings) {
      
      //create datalayer array if it doesn't exist
      window.dataLayer = window.dataLayer || [];
      
      //function to push to datalayer
      var dataLayerSetAcceptance = function() {
          dataLayer.push({
              event: "COOKIE_MONSTER_SET_COOKIES",
              payload: {status: 1},
          });
      }
      
      $(
        'body.not-logged-in footer .footer-social .js-modal-full--activate-modal',
        context
      ).once('lang-popup', function() {
        var $this = $(this),
          client = VWLANG.Utils.getDefaultRegion(
            settings.base_url + '/' + settings.pathPrefix + 'vwmageclient/x-domain-hub',
            'vwlang'
          ),
          bilingual_regions = [
            VWLANG.LangPrefix.getLangPrefix(function(region) {
              return region == 'en-CA' ? region : '';
            }),
            VWLANG.LangPrefix.getLangPrefix(function(region) {
              return region == 'fr-CA' ? region : '';
            }),
            VWLANG.LangPrefix.getLangPrefix(function(region) {
              return region == 'fr-CH' ? region : '';
            }),
            VWLANG.LangPrefix.getLangPrefix(function(region) {
              return region == 'de-CH' ? region : '';
            }),
            VWLANG.LangPrefix.getLangPrefix(function(region) {
              return region == 'en-US' && settings.scbLocation.ip_type !== 'US' ? region : '';
            })
          ];

        client
          .then(
            function(s_prefix) {
              return new Promise(function(resolve, reject) {
                if (s_prefix == null) {
                  reject(new Error('Region is empty.'));
                } else {
                  resolve(s_prefix);
                }
              });
            },
            function(err) {
              console.log('Client does not support local storage');
              return Promise.resolve('en-US');
            }
          )
          .then(
            function(region) {
              var current_prefix = VWLANG.LangPrefix.getLangPrefix(new String(window.location.pathname));
              if (current_prefix.getPrefix() !== region) {
                $('body').addClass('js-alert-footer--active');
              }
              return current_prefix.getPrefix();
            },
            function(no_region) {
              console.log('No region');
              var show_popup = bilingual_regions.filter(function(v) {
                var current_prefix = VWLANG.LangPrefix.getLangPrefix(new String(window.location.pathname));
                return VWLANG.LangPrefix.applyPrefixFn(v, current_prefix).getPrefix();
              });

              if (show_popup.length) {
                $this.trigger('click');
              }
              return 'en-US';
            }
          )
          .then(function(region) {
            var eu_cookie = Cookies.get('scbeunotice');
            if (eu_cookie && eu_cookie === 'true') {
              dataLayerSetAcceptance();
              return Promise.reject(region);
            } else {
              return region;
            }
          })
          .then(
            function(region) {
              $('body').addClass('js-alert-header--active');
              return region;
            },
            function(err_region) {
              $('body').removeClass('js-alert-header--active');
              return err_region;
            }
          );

        $('footer .modal--language-selector').on('click', '.modal-full__close', function() {
          var client = new CrossStorageClient(
            settings.base_url + '/' + settings.pathPrefix + 'vwmageclient/x-domain-hub',
            { frameId: 'vwlang', timeout: 10000 }
          );
          client.onConnect().then(function() {
            return client.set(
              'SCB_language_val',
              VWLANG.LangPrefix.getLangPrefix(new String(window.location.pathname)).getPrefix()
            );
          });
        });

        $('.alert-footer').on('click', '.alert-footer__close', function() {
          var client = new CrossStorageClient(
            settings.base_url + '/' + settings.pathPrefix + 'vwmageclient/x-domain-hub',
            { frameId: 'vwlang', timeout: 10000 }
          );
          client
            .onConnect()
            .then(function() {
              return client.set(
                'SCB_language_val',
                VWLANG.LangPrefix.getLangPrefix(new String(window.location.pathname)).getPrefix()
              );
            })
            .then(function() {
              $('body').removeClass('js-alert-footer--active');
            })
            .catch(function(err) {
              console.log(err);
              $('body').removeClass('js-alert-footer--active');
            });
        });

        $('.alert-footer').on('click', '#modal--language-selector', function() {
          $('body.not-logged-in footer .footer-social .js-modal-full--activate-modal').trigger('click');
        });

        $('.alert-header').on('click', '.alert-header__close', function() {
          Cookies.set('scbeunotice', 'true', { path: '/', domain: '.' + settings.vwmageclient.root_domain });
          dataLayerSetAcceptance();
          $('body').removeClass('js-alert-header--active');
        });
      });
    }
  };
})(jQuery);
;
(function ($) {

  //tabs - used on the product detail page under tech support
  Drupal.behaviors.scbTabs = {
    attach: function(context) {

      var tabOption = $('.js-tab-trigger', context),
          activeClass = 'js-tab--active',
          itemSelector = '.js-tab-target',
          tabsetSelector = '.js-tabset';


      tabOption.on('click', function(e) {
        e.preventDefault();
        var _this = $(this),
          targ = _this.find('a').attr('href'),
          parent = $(this).parents(tabsetSelector),
          sibs = $(this).siblings(),
          contents = parent.find(itemSelector);

        _this.addClass(activeClass);
        sibs.removeClass(activeClass);
        contents.hide();
        $(targ).show();
      })

      //onload - ensure first is active.
      $('.js-tabset .js-tab-target:first-of-type', context).show();
    }
  }

})(jQuery);;
(function ($) {
   
  //news page
  Drupal.behaviors.scbNews = {
    attach: function(context) {
      
      if(!$('#newsfeed').length) return;

      function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
      }

      var newslist = {}

      newslist.cfg = {
        url: "/news",
        toggleCatBtn: $('#newsfeed .toggle__option a', context),
        loadMoreBtn: $('#news-list-footer .show-more', context),
        cat: 0,
        currentPage: 0,
        loading: false,
        totalPages: $('#newsfeed .newsfeed--dynamic').data().totalpages,
        loadedItems: $('#newsfeed .media-blocks .media-block').length,
        container: $('#newsfeed .newsfeed--dynamic'),
        content: $('#newsfeed .newsfeed--dynamic').html(),
        noresults: $('#news-list-noresults'),
        loader: $('#newsfeed .news-loader')
      }

      newslist.init = function () {



        newslist.toggleClick();
        newslist.loadMoreClick();
        newslist.updateActions();


        //start by showing a particular tab based on the query string
        var qs = getParameterByName('show');
        if(qs != '' && qs != null) {
          var target = null;
          if(qs == 'news') target = $('.toggle__option-link.cat-560');
          if(qs == 'community') target = $('.toggle__option-link.cat-963');
          if(qs == 'racing') target = $('.toggle__option-link.cat-8');
          if(target) {
            target.trigger("click");
            target.parent().addClass('js-toggle__option--active').siblings().removeClass('js-toggle__option--active');
          }
        }
      }

      //loads a news url, calls a callback function
      newslist.loadNewsPage = function (callback) {
        var loadUrl = newslist.cfg.url;
        if(newslist.cfg.cat > 0) { loadUrl = loadUrl + "/" + newslist.cfg.cat }
        if(newslist.cfg.currentPage > 0) { loadUrl = loadUrl + "?page=" + newslist.cfg.currentPage }
        newslist.uiLoading(true);
        $.ajax({
          url: loadUrl,
          success: function(data) {
            if(typeof callback == "function") {
              newslist.uiLoading(false);
              callback(data);
            }
          }
        });
      }

      //when a category toggle is clicked
      newslist.toggleClick = function () {
        newslist.cfg.toggleCatBtn.on('click', function() {
          if(newslist.cfg.loading) return;
          newslist.cfg.noresults.hide();
          newslist.cfg.cat = $(this).data().cat;
          newslist.cfg.currentPage = 0; //start from the beginning when toggling news

          newslist.cfg.container.animate({opacity: 0}, 500, function() {
            newslist.cfg.container.empty(); //@TODO - better handle empty
            newslist.cfg.loadMoreBtn.hide();

            //replace
            newslist.loadNewsPage(function(data) {
              var posts = $(data).find('#newsfeed .newsfeed--dynamic');
              newslist.cfg.totalPages = posts.data().totalpages;
              newslist.cfg.container.animate({opacity: 1}, 500);
              if(newslist.cfg.totalPages < 1) {
                newslist.cfg.noresults.show();
              } else {
                newslist.cfg.container.append(posts.html());
                newslist.cfg.loadMoreBtn.show();
                newslist.updateActions();
              }
            });
          })

        });
      }

      //when the load more button is clicked
      newslist.loadMoreClick = function () {
        newslist.cfg.loadMoreBtn.on('click', function() {
          if(newslist.cfg.loading) return;
          newslist.cfg.currentPage = newslist.cfg.currentPage + 1;

          //append
          newslist.loadNewsPage(function(data) {
            var hasPosts = $(data).find('#newsfeed .media-blocks').length;
            if(hasPosts) {
              var posts = $(data).find('#newsfeed .media-blocks');
              posts.find('.media-block').hide();
              newslist.cfg.container.find('.media-blocks').append(posts.html());
              newslist.cfg.container.find('.media-block:hidden').fadeIn();
            }
            newslist.updateActions();
          });
        });
      }


      newslist.setLoadedItems = function() {
        newslist.cfg.loadedItems = $('#newsfeed .media-blocks .media-block').length
      }

      newslist.updateActions = function() {
        newslist.setLoadedItems();
        newslist.cfg.noresults.hide();
        // console.log("update", newslist.cfg.currentPage, ">=", (newslist.cfg.totalPages -1));
        if(newslist.cfg.currentPage >= (newslist.cfg.totalPages - 1)) {
          newslist.cfg.loadMoreBtn.hide();
        } else {
          newslist.cfg.loadMoreBtn.show();
        }
      }

      newslist.uiLoading = function(isLoading) {
        if(isLoading) {
          newslist.cfg.loading = true;
          $('#newsfeed').addClass('js-loading');
          newslist.cfg.loader.fadeIn();
        } else {
          newslist.cfg.loading = false;
          $('#newsfeed').removeClass('js-loading');
          newslist.cfg.loader.fadeOut();
        }
      }



      newslist.init();

      
    }
  }

})(jQuery);;
(function ($) {

  //tabs - used on the product detail page under tech support
  Drupal.behaviors.scbGallery = {
    attach: function(context) {

      // $('.gallery__item').on('_lazyloaded', function(e) {
      //   console.log('gallery__item loaded', $(this), e);
      //   var parent = $(this);
      //   var url = parent.data().bg;
      //   console.log(url);
      //   var img = $('<img />', {
      //     load: function() {
      //       console.log(this.width, this.height);
      //       parent.attr('data-w', this.width);
      //       parent.attr('data-h', this.height);
      //       parent.attr('data-ratio', (this.width / this.height))
      //     }
      //   }).attr('src', url);
      //
      //
      // })
      //
      // console.log('foo');
      // $(document).on('_lazyloaded', function(e){
      //   console.log(e.target);
      //   //use width of parent node instead of the image width itself
      //   //e.detail.width = $(e.target).closest(':not(picture)').innerWidth() || e.detail.width;
      // });

      $('.gallery-trigger').unbind('click');
      $('.gallery-trigger').bind('click', function() {
        //if($(window).width() <= 767) {
          //window.open($(this).data().gallerysrc);
          //return;
        //}
        
        var galleryID = $(this).data().galleryid;
        var slide, img, inner, src, videoType, video;
        var startAt = 0;
        var _that = $(this);
  
  
        var slideshow = $('<div/>').addClass('flexslider flexslider-gallery');
        var slides = $('<ul/>').addClass('slides');
        slideshow.append(slides);
  
        //get the contents for each in the gallery
        $('body .gallery-trigger[data-galleryid='+galleryID+']').each(function(i) {
          slide = $('<li/>');
          inner = $('<div/>').addClass('gallery-slide-inner');
          slide.append(inner);
          src = $(this).data().gallerysrc;
          
          if(typeof $(this).data().galleryvideo == 'undefined') {
            img = $('<img />', {
              load: function() {
                //console.log(this.width, this.height);
              }
            }).attr('src', src).attr('alt', 'Image');
            inner.append(img);
            
            //caption for news articles
            if(typeof $(this).data().caption != 'undefined' && $(this).data().caption != "") {
              caption = $('<div/>').addClass('gallery-slide-caption').html($(this).data().caption);
              inner.append(caption);
            }
          } else {
            videoType = $(this).data().galleryvideo;
            inner.addClass('gallery-video');
            switch(videoType) {
  
              case 'html5':
                //@TODO
                video = null;
                break;
  
              case 'youtube':
              case 'vimeo':
              default:
                video = $('<iframe src="'+src+'" width="1000" height="563" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
                break;
  
            }
            inner.append(video);
          }
  
          if(_that[0] == $(this)[0]) {
           startAt = i;
          }
  
          slides.append(slide);
        });
        
        //compute max width for the flex slider
        //TODO
        var mw = 1200;
        var vh = 0;
        var vw = 0;
        //style="width: '+mw+'px"
        
        var modal = '<div class="modal-full__inner modal--gallery js-modal-full__inner--is-active" ><div class="modal-full__close"><a href="">Close</a></div><div class="flexslider-gallery">'+$(slideshow).html()+'</div></div>';
        $('body').append(modal);
        
        //similar to functionality found on .js-modal-full--activate-modal CLICK
        $('body').addClass('u-freeze js-modal-full__wrapper-darken--is-active');
        
        $('.flexslider-gallery').flexslider({
          multipleKeyboard: true,
          startAt: startAt,
          animation: "slide",
          prevText: "",
          nextText: "",
          slideshow: false,
          before: function(slideshow) {
            slideshow.find('.gallery-video').each(function() {
              //stop and replace all videos
              var contents = $(this).html();
              $(this).html(contents);
            });
          },
          start: function(slideshow) {
            slideshow.find('.gallery-slide-caption').each(function() {
              //adjust the bottom of the caption if it is off screen
              var offset = $(this).offset();
              var top = offset.top;
              var scroll = window.pageYOffset || document.documentElement.scrollTop;
              var bottom = top + $(this).outerHeight();
              var win = $(window).height()+scroll;
              var diff = win - bottom;
              if(diff < 0) {
                $(this).css({"bottom": Math.abs(diff)+"px"});
              }
            });
          }
        });
        
        
  
  /*
        var overlay = overlayInit('overlay');
        overlay.addClass('modal-gallery');
        overlay.append(slideshow);
  
        
        */
        
        // REPEAT - Close Darken and modal-full__inner
        // TODO - centralize this
        $('.modal-full__close').on('click', function(e) {
          e.preventDefault();
          $('body').removeClass('u-freeze js-modal-full__wrapper-darken--is-active');   
          $('.modal-full__inner').removeClass('js-modal-full__inner--is-active');  
        }).children().click(function(e) {
          return false;
        });
        
      });
      
      
      
    }
  }

})(jQuery);
;
(function ($) {

  Drupal.behaviors.scbFrameHero = {
    attach: function(context) {
      Drupal.settings.scb2017 = (typeof Drupal.settings.scb2017 == "undefined") ? {} : Drupal.settings.scb2017; //set in scripts.js

      var heroHeight = function(caller) {
        var h = $('.frame-hero__images .hero-panel:visible').outerHeight();
        if(h > 100) {
          $('.frame-hero').css('height', h);
        }
      }

      var swatchPosition = function() {
        if(
          Drupal.settings.scb2017 &&
          Drupal.settings.scb2017.secondaryNavState &&
          Drupal.settings.scb2017.secondaryNavState == "fixedBottom"
        ) {
          $('.frame-hero__swatches').addClass('fixedBottom');
        } else {
          $('.frame-hero__swatches').removeClass('fixedBottom');
        }
      }

      $('.frame-hero__images img').each(function() {
        var t = $(this)[0];
        t.onload = function() {
          heroHeight('load');
        }
      });


      //toggle image show/hide
      $('.frame-hero__swatches .swatch:first-child',context).addClass('js-swatch--selected');
      $('.frame-hero__swatches .swatch', context).on('click', function(e) {
        var i = $(this).index(),
            c = $('.frame-hero__images').children(),
            t = c.eq(i),
            img,
            pic;


        if(t.length) {
          img = t.find('img')[0];

          img.onload = function () {
            c.hide();
            t.show();
            // console.log('loaded', img.width, img.height);
            // heroHeight('load');
          }

          if(img.complete) {
            //trigger onload
            img.onload();
          }

          t.show();
        }
      })
      
      $('.polaroid__color-swatch .swatch:first-child').addClass('js-swatch--selected');

      //function that creates a video from a span class
      var makeVideo = function(context) {
        //see css that shows picture element in this instance
        if($(window).width() < 600) return;

        $('span.video', context).each(function() {
          var sv = $(this),
            src = sv.data().src,
            poster = sv.data().poster;
          var v = $('<video />').attr({
            autoplay: 'autoplay',
            loop: 'loop',
            muted: 'muted',
            preload: 'auto',
            poster: 'todo'
          });
          var s = $('<source />').attr({
            src: src,
            type: 'video/mp4'
          });
          v.append(s);
          sv.after(v);
          sv.remove();
        });
      }
      makeVideo(context);


      $(window).resize(function() {
        heroHeight('resize');
        swatchPosition();
        makeVideo(context);
      });
      $(window).scroll(function() {
        swatchPosition();
      });
    }
  }

})(jQuery);

;
(function ($) {

  Drupal.behaviors.scbSecondaryNav = {
    attach: function(context) {
      Drupal.settings.scb2017 = (typeof Drupal.settings.scb2017 == "undefined") ? {} : Drupal.settings.scb2017; //set in scripts.js

      var resizeFn = [];
      var scrollFn = [];


      var secondaryNav = {};

      secondaryNav.cfg = {
        scrollTop: 0,
        secondaryNavItems: $('.secondary-navigation__scroll-nav li'),
        secondaryNavClassHold: false,
      }

      //keep track of all these settings
      secondaryNav.updateCfg = function() {

        var last = secondaryNav.cfg.scrollTop,
            current = $(window).scrollTop();

        var getSections = function() {
          if(secondaryNav.cfg.secondaryNavClassHold) return secondaryNav.cfg.secondarySections; //has been clicked
          var r = [], link, isTriggered;
          secondaryNav.cfg.secondaryNavItems.each(function(i,el) {
            link = $(el).find('a');
            if($(link.attr('href')).length) {
              isTriggered = secondaryNav.cfg.scrollTop > ($(link.attr('href')).offset().top - (secondaryNav.cfg.secondaryHeight * 2))
              r.push({
                item: $(el),
                link: link,
                isTriggered: isTriggered,
              });
            } else {
              link.remove();
            }
          })
          return r;
        }

        secondaryNav.cfg = {
          ww: $(window).width(),
          wh: $(window).height(),
          scrollTop: current,
          lastScroll: last,
          scrollDirection: current >= last ? 'down' : 'up',
          secondaryNavItems: secondaryNav.cfg.secondaryNavItems,
          secondaryOffset: $('#frame_page').offset().top,
          secondaryHeight: $('.secondary-navigation').outerHeight(),
          secondaryWidth: $('.secondary-navigation').outerWidth(),
          secondaryThreshold: 860,
          lastWidth: 0,
          navContainerSelector: '.secondary-navigation__scroll-nav',
          heroHeight: $('#frame_hero').outerHeight(),
          heroOffset: $('#frame_hero').offset(),
          secondarySections: getSections(),
          secondaryActiveClass: 'js-scroll-toggle__option--active',
          secondaryNavClassHold: secondaryNav.cfg.secondaryNavClassHold,
        }
      }

      resizeFn.push(secondaryNav.updateCfg);
      scrollFn.push(secondaryNav.updateCfg);


      //remove class when mobile resized to desktop and mobile menu had active class
      secondaryNav.mobileClassTidy = function() {
        secondaryNav.cfg.ww = $(window).width();
        if(secondaryNav.cfg.ww >= secondaryNav.cfg.threshold && secondaryNav.cfg.oldWidth < secondaryNav.cfg.threshold) {
          $(secondaryNav.cfg.navContainerSelector).removeClass('js-active');
        }
        secondaryNav.cfg.oldWidth = secondaryNav.cfg.ww;
      }

      resizeFn.push(secondaryNav.mobileClassTidy);


      secondaryNav.stickySecondary = function () {
        var c = secondaryNav.cfg; //more readable

        //is the bottom of the hero below the current window
        var isBelow = (c.heroHeight + c.heroOffset.top) > (c.wh + c.scrollTop);

        var o = (c.wh - ((c.scrollTop + c.wh) - (c.secondaryOffset)));
        var isTop = (o <= 0);

        var isAttached = ((!isBelow && !isTop) && (c.scrollTop + c.wh >= c.secondaryOffset + c.secondaryHeight));

        if(isBelow && !$('.secondary-navigation').hasClass('fixedBottom')) {
          Drupal.settings.scb2017.secondaryNavState = 'fixedBottom';
          $('.secondary-navigation').removeClass('fixedTop moveWithContent').addClass('fixedBottom');
          return;
        }

        if(isAttached && !$('.secondary-navigation').hasClass('moveWithContent')) {
          Drupal.settings.scb2017.secondaryNavState = 'moveWithContent';
          $('.secondary-navigation').removeClass('fixedTop fixedBottom').addClass('moveWithContent');
          return;
        }

        if(isTop && !$('.secondary-navigation').hasClass('fixedTop')) {
          Drupal.settings.scb2017.secondaryNavState = 'fixedTop';
          $('.secondary-navigation').removeClass('moveWithContent fixedBottom').addClass('fixedTop');
          return;
        }

      }

      resizeFn.push(secondaryNav.stickySecondary);
      scrollFn.push(secondaryNav.stickySecondary);



      secondaryNav.whichSection = function() {
        var c = secondaryNav.cfg; //more readable
        if(c.secondaryNavClassHold) return; //has been clicked
        var active = -1;
        for(var i in c.secondarySections) {
          if(c.secondarySections[i].isTriggered == true) active = i;
        }
        if(active >= 0) {
          for(var i in c.secondarySections) {
            if(i == active && !c.secondarySections[i].item.hasClass(c.secondaryActiveClass)) {
              c.secondarySections[i].item.addClass(c.secondaryActiveClass).siblings().removeClass(c.secondaryActiveClass);
            }
          }
        } else {
          c.secondaryNavItems.removeClass(c.secondaryActiveClass);
        }
      }

      resizeFn.push(secondaryNav.whichSection);
      scrollFn.push(secondaryNav.whichSection);



      secondaryNav.clickActions = function() {
        var trigger = $('.secondary-navigation__scroll-nav li a'),
          _this,
          target,
          targetOffset, originalTargetOffset;

        trigger.on('click', function(e) {
          $('.secondary-navigation').removeClass('js-page-nav-active');
          _this = $(this);
          target = _this.attr('href');
          if(!target || "#" != target.charAt(0)|| !$(target).length) return;
          e.preventDefault();

          target = $(target);
          targetOffset = target.offset().top - secondaryNav.cfg.secondaryHeight;

          //custom behaviours that mean we can't use smoothscroll
          secondaryNav.cfg.secondaryNavClassHold = true;
          _this.parent().addClass(secondaryNav.cfg.secondaryActiveClass).siblings().removeClass(secondaryNav.cfg.secondaryActiveClass);



          $('html, body').animate({
            scrollTop: targetOffset
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = target;
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
            secondaryNav.cfg.secondaryNavClassHold = false;
          });
        })

        $('.secondary-navigation__toggle').on('click', function() {
          $('.secondary-navigation').toggleClass('js-page-nav-active');
        })
      }


      //kick it off
      secondaryNav.init = function() {

        if(!$('#frame_page').length) return;

        secondaryNav.updateCfg;
        secondaryNav.clickActions();

        //ensure happens after image load too.
        //TODO - picture element
        $('.frame-hero img').on('load', function() {
          secondaryNav.updateCfg();
          secondaryNav.stickySecondary();
        });


        //run all resize functions etc
        $(window).resize(function() {
          for(var i in resizeFn) {
            resizeFn[i]();
          }
        }).scroll(function() {
          for(var i in scrollFn) {
            scrollFn[i]();
          }
        });

        $(window).resize().scroll();
      }

      secondaryNav.init();

    }
  }

})(jQuery);

;
(function ($) {

  Drupal.behaviors.scbSmoothScroll = {
    attach: function(context) {
      var trigger = $('.js-smoothscroll'),
          target,
          targetOffset, originalTargetOffset, targetAdjustment = 0;

      trigger.on('click', function(e) {
        target = $(this).attr('href');

        if(!target || "#" != target.charAt(0)|| !$(target).length) return;
        e.preventDefault();

        target = $(target);
        targetOffset = target.offset().top;
        originalTargetOffset = target.offset().top; //not sure if needed


        $(window).scroll(function() {
          //as scrolling check and update target offset
          targetOffset = target.offset().top;
          if(targetOffset !== originalTargetOffset) {
            targetAdjustment = targetOffset;
          }
        });


        $('html, body').animate({
          scrollTop: targetOffset
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = target;
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      })

    }
  }

})(jQuery);

;
(function ($) {

  //tabs - used on the product detail page under tech support
  Drupal.behaviors.scbBikes = {
    attach: function(context) {
      /* ! ----------------------------  Bike Finder */
      var bikefinder = {}
      
      bikefinder.cfg = {
        targets:   $('.view-bike-page .polaroid'),
        navItem:   $('.view-bikefinder-nav .toggle__option'),
        noResults: $('.view-bike-page .view-footer')
      }

      bikefinder.clicks = function () {
        
       //toggle__option click
       bikefinder.cfg.navItem.bind('click', function(){
           
           //get the class we are going to target
           var target_class = $(this).attr('class').replace(' toggle__option', '').replace(' js-toggle__option--active', '');
           
           //1. Fade out any visible bikes - from last to first
           var reversed = [];
           $(bikefinder.cfg.targets.not('.off').get().reverse()).each(function(){
             reversed.push($(this));
           }); 
           bikefinder.cfg.noResults.fadeOut(250);
           bikefinder.doFadeOut(reversed, function(){
             
             var sorts = [];
             if(target_class == 'all') {
               //show everything
               bikefinder.cfg.targets.removeClass('off');
               bikefinder.cfg.targets.each(function(){ sorts.push($(this)); });
             }
             else {
               //figure out which ones to show
               bikefinder.cfg.targets.each(function(){
                 var classes = $(this).attr('class');
                 var t = $(this);
                 
                 var show = false;
                 if (classes.indexOf(target_class) >= 0) {
                   //make sure we are not finding 275quotplus when we are looking for 275quot
                   if(target_class != "275quot") {
                     show = true;
                   }
                   else if (classes == "275quot 275quotplus polaroid" || classes == "275quot 275quotplus polaroid off") {
                     //show for 27.5/27.5+ bikes
                     show = true;
                   }
                   else if (classes == "275quot 29quot polaroid" || classes == "275quot 29quot polaroid off") {
                     //show for 27.5/29 bikes
                     show = true;
                   }
                   else if(classes == "275quot polaroid" || classes == "275quot polaroid off") {
                     show = true;
                   }
                   else if (classes.indexOf(target_class+"-") >= 0) {
                     show = true;
                   }
                 }
                 if(show) {
                   t.removeClass('off');
                   sorts.push(t);
                 }
                 else {
                   t.addClass('off');
                   sorts.push(t);
                 }
               });
             }
             
             
             
             //sort the list
             sorts.sort(function(a,b){
               // the off class is a flag for whether it's displayed or not
               if(a.hasClass('off')) return 1;
               if(b.hasClass('off')) return -1;

               if(parseInt(a.attr('data-order')) < parseInt(b.attr('data-order'))) {
                   return -1;
               } else {
                   return 1; //they'll never be equal
               }
             });
             
             //fade them back in
             bikefinder.doFadeIn(sorts, function(){
               if(bikefinder.cfg.targets.length == bikefinder.cfg.targets.filter('.off').length) {
                 bikefinder.cfg.noResults.fadeIn(250);
               }
             });           
           }); 
       }); //end click
      }
      
      bikefinder.doFadeOut = function(tgs, cb) {
        if(tgs.length < 1 && isFunction(cb)) { cb(); }
        if(tgs.length) {
          var t = tgs.shift();
          t.fadeOut(25, function(){ bikefinder.doFadeOut(tgs, cb); });
        }
      }

      bikefinder.doFadeIn = function(tgs, cb) {
        if(tgs.length < 1 && isFunction(cb)) { cb(); }
        if(tgs.length) {
          var t = tgs.shift();
          if($(t).hasClass('off')) {
            bikefinder.doFadeIn(tgs, cb);
          }
          else {
            t.fadeIn(200, function(){ bikefinder.doFadeIn(tgs, cb); });
          }
        }
        //ie8ListFix();
      }

      bikefinder.init = function () {
        //only run code on bike page
        if($('.page-bikes').length == 0) return;
        
        //add order to bikes
        var i = 0;
        bikefinder.cfg.targets.each(function(i) {
            $(this).attr('data-order', i+1);
        });
        
        bikefinder.clicks();
      }

      bikefinder.init();
      
      $('.polaroid__color-swatch .swatch').bind('click', function(){
        if($(this).hasClass('js-swatch--selected')) return false;
        var i = $(this).index();
        var img = $(this).parents('.polaroid').find('.list_image_multiple');
        var targ = img.eq(i);
        if(targ.length) {
          img.hide();
          targ.show();
        }
      });
      
      $(".media-panel__image_swatch img").each(function(){
              $('<img/>')[0].src = $(this).attr('href');
              // Alternatively you could use:
              // (new Image()).src = this;
      }); 
      
      $('.media-panel__swatches .swatch').bind('click', function(){
        if($(this).hasClass('js-swatch--selected')) return false;
        var i = $(this).index() + 1;
        var bg = $(".media-panel__image_swatch").attr('data-bg'+i);
        $(".media-panel__image_swatch").css({
          "background-image": "url(" + bg + ")"
        });
        //$(".media-panel__image_swatch").height($(".media-panel__image_swatch").height());
        $(".media-panel__image_swatch img").removeClass('mobileShow');
        $(".media-panel__image_swatch .img"+i).addClass('mobileShow');
        
//        var img = $(this).parents('.polaroid').find('.list_image_multiple');
//        var targ = img.eq(i);
//        if(targ.length) {
//          img.hide();
//          targ.show();
//        }
      });     
      
      //click on a size tab (27.5 or 29)
      $('.geometry_size__toggle').bind('click', function() {
  
        if($(this).hasClass('geometry_size__toggle--active')) {
          //ignore the click, already active
        }
        else {
          var data = $(this).attr('data-toggle');
          var size = $(this).html();
          $('.geometry_size__toggle').removeClass('geometry_size__toggle--active');
          $('.geometry_size__toggle-'+data).addClass('geometry_size__toggle--active');
          $('.geometry_size__toggle').removeClass('js-tab--active');
          $('.geometry_size__toggle-'+data).addClass('js-tab--active');
          $('.geometry_size__record').removeClass('geometry_size--active');
          $('.geometry_size-'+data).addClass('geometry_size--active');
          $('.builder-summary-size').html(size);
        }
        
        
      });
      
      //check URL for the size- ONLOAD
      const urlParams = new URLSearchParams(window.location.search);
      var size = urlParams.get('size');
      id = 0;
      //hardcoded for now, might need to get the values from the toggles
      if(size == '27.5') {
        id = 1;
      }
      if(size == '29') {
        id = 2;
      }
      if(id > 0) {
        $('.geometry_size__toggle').removeClass('geometry_size__toggle--active');
        $('.geometry_size__toggle-'+id).addClass('geometry_size__toggle--active');
        $('.geometry_size__toggle').removeClass('js-tab--active');
        $('.geometry_size__toggle-'+id).addClass('js-tab--active');
        $('.geometry_size__record').removeClass('geometry_size--active');
        $('.geometry_size-'+id).addClass('geometry_size--active');
        $('.builder-summary-size').html(size+'"');
      }
    }
  }
  
  
})(jQuery);;
(function($) {
  Drupal.behaviors.vwaccordion = {
    attach: function(context, settings) {
      $('#frame_page, #faq-list', context).once('tab-accordion', function() {
        var $this = $(this);

        $this.find('.faq-list').on('click', '.faq-item', function() {
          var $faq_item = $(this),
            other_faq_items = $faq_item.siblings('.faq-item'),
            p_opened = new Promise(function(resolve, reject) {
              var faq_toggle = $faq_item.find('.item-toggle');

              if (!faq_toggle.hasClass('opened')) {
                resolve({
                  item: $faq_item,
                  siblings: other_faq_items
                });
              } else {
                reject({
                  item: $faq_item,
                  siblings: other_faq_items
                });
              }
            });

          p_opened
            .then(function(items) {
              items.item.find('.item-toggle').addClass('opened');
              items.item.find('.js-accordion-target').slideToggle();

              return items;
            })
            .catch(function(items) {
              items.item.find('.item-toggle').removeClass('opened');
              items.item.find('.js-accordion-target').slideToggle();

              return items;
            })
            .then(function(items) {
              items.siblings.each(function(index, el) {
                var $el = $(el);

                $el.find('.item-toggle').removeClass('opened');
                $el.find('.js-accordion-target').slideUp();
              });
            });
        });

        // Auto-open when an anchor tag is in the URL, or if one is added by an <a> click
        var locationHash = window.location.hash;
        expandAssociatedAccordion($this, locationHash);
        window.addEventListener('popstate', function() { 
          expandAssociatedAccordion($this, window.location.hash)
        });
      });
    }
  };

  expandAssociatedAccordion = function($accordionElement, locationHash = '') {
    var hashValue = locationHash.substring(1, locationHash.length);
    var tabAnchor = $accordionElement.find('a[name="' + hashValue + '"]');
    if (tabAnchor.length) {
      $(tabAnchor).closest('.faq-item').trigger('click');
    }
  }
})(jQuery);;
(function($) {

  Drupal.behaviors.scbAccordion = {
    attach: function(context) {

      $('.hidden-copy-trigger').unbind('click').bind('click', function() {
        $(this).parent().prev('.hidden-copy-section').slideToggle();
        $(this).parent().fadeOut('slow');
      });
    }
  }

})(jQuery);

(function($) {
  Drupal.behaviors.vwprodexplore = {
    attach: function(context, settings) {
      $('#main .product-explorer', context)
        .once('pex-toggle', function() {
          var $this = $(this),
            wrapper = $this.find('.product-explorer__text-wrapper')

          wrapper
            .on('click', 'a.pex-up', function() {
              var $a_up = $(this),
                parent = $a_up.closest('.product-explorer__item').prev()

              if(parent) {
                parent.trigger('click')
              }

              return false
            })

          wrapper
            .on('click', 'a.pex-down', function() {
              var $a_up = $(this),
                parent = $a_up.closest('.product-explorer__item').next()

              if(parent) {
                parent.trigger('click')
              }

              return false
            })
        })
    }
  }
})(jQuery);

(function($) {
  Drupal.behaviors.productexplorerslickjs = {
    attach: function(context, settings) {
      $('.view-bikes-for-homepage.view-display-id-block_3', context)
        .once('slickjs-product-explorer', function() {
          var $this = $(this),
            slickDiv = $this.find('.view-content')

          slickDiv.slick({
            arrows: false,
            dots: false,
            responsive: [
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true,
                  prevArrow: '<a href="#" title="Previous" class="pex-prev">&lt;</a>',
                  nextArrow: '<a href="#" title="Previous" class="pex-next">&gt;</a>'
                }
              },
              {
                breakpoint: 961,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true,
                  prevArrow: '<a href="#" title="Previous" class="pex-prev">&lt;</a>',
                  nextArrow: '<a href="#" title="Previous" class="pex-next">&gt;</a>'
                }
              },
              {
                breakpoint: 1024,
                settings: "unslick"
              }
            ]
          });
        });
    }
  }
})(jQuery);
;
