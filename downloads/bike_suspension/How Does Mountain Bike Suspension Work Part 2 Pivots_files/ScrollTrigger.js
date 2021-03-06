/*!
 * ScrollTrigger 3.4.1
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function H(e){return e}function I(){return"undefined"!=typeof window}function J(){return _e||I()&&(_e=window.gsap)&&_e.registerPlugin&&_e}function K(e){return!!~i.indexOf(e)}function L(e,t){return~He.indexOf(e)&&He[He.indexOf(e)+1][t]}function M(t,e){var r=e.s,n=e.sc,o=h.indexOf(t),i=~o?h[o+1]:L(t,r)||(K(t)?n:function(e){return arguments.length?t[r]=e:t[r]});return~o||h.push(t,i),i}function N(e){return L(e,"getBoundingClientRect")||(K(e)?function(){return ut.width=Pe.innerWidth,ut.height=Pe.innerHeight,ut}:function(){return ot(e)})}function Q(e,t){var r=t.s,n=t.d2,o=t.d,i=t.a;return(r="scroll"+n)&&(i=L(e,r))?i()-N(e)()[o]:K(e)?Math.max(Me[r],Ee[r])-(Pe["inner"+n]||Me["client"+n]||Ee["client"+n]):e[r]-e["offset"+n]}function R(e,t){for(var r=0;r<d.length;r+=3)t&&!~t.indexOf(d[r+1])||e(d[r],d[r+1],d[r+2])}function S(e){return"string"==typeof e}function T(e){return"function"==typeof e}function U(e){return"number"==typeof e}function V(e){return"object"==typeof e}function W(e){return T(e)&&e()}function X(r,n){return function(){var e=W(r),t=W(n);return function(){W(e),W(t)}}}function qa(e){return Pe.getComputedStyle(e)}function sa(e,t){for(var r in t)r in e||(e[r]=t[r]);return e}function ua(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0}function wa(t,r,e,n){return e.split(",").forEach(function(e){return t(r,e,n)})}function xa(e,t,r){return e.addEventListener(t,r,{passive:!0})}function ya(e,t,r){return e.removeEventListener(t,r)}function Ca(e,t){if(S(e)){var r=e.indexOf("="),n=~r?(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;n&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in x?x[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e}function Da(e,t,r,n,o,i,a){var s=o.startColor,l=o.endColor,c=o.fontSize,f=o.indent,u=o.fontWeight,p=Oe.createElement("div"),d=K(r)||"fixed"===L(r,"pinType"),g=-1!==e.indexOf("scroller"),h=d?Ee:r,v=-1!==e.indexOf("start"),m=v?s:l,x="border-color:"+m+";font-size:"+c+";color:"+m+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+(g&&d?"fixed;":"absolute;"),!g&&d||(x+=(n===nt?b:y)+":"+(i+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+e),p.style.cssText=x,p.innerText=t||0===t?e+"-"+t:e,h.insertBefore(p,h.children[0]),p._offset=p["offset"+n.op.d2],w(p,0,n,v),p}function Ha(){return l=l||s(B)}function Ia(){l||(l=s(B),Je||P("scrollStart"),Je=De())}function Ja(){return!Ae&&a.restart(!0)}function Pa(e){var t=_e.ticker.frame,r=[],n=0;if(g!==t||We){for(A();n<_.length;n+=3)Pe.matchMedia(_[n]).matches?r.push(n):A(1,_[n])||T(_[n+2])&&_[n+2]();for(E(),n=0;n<r.length;n++)Fe=_[r[n]],_[r[n]+2]=_[r[n]+1](e);z(Fe=0,1),g=t}}function Qa(){return ya(Y,"scrollEnd",Qa)||z(!0)}function ab(e,t,r){if(e.parentNode!==t){for(var n,o=F.length,i=t.style,a=e.style;o--;)i[n=F[o]]=r[n];i.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(i.display="inline-block"),a[y]=a[b]="auto",i.overflow="visible",i.boxSizing="border-box",i[je]=ua(e,rt)+tt,i[Xe]=ua(e,nt)+tt,i[$e]=a[Ge]=a.top=a[m]="0",a[je]=r[je],a[Xe]=r[Xe],a[$e]=r[$e],e.parentNode.insertBefore(t,e),t.appendChild(e)}}function db(e){for(var t=D.length,r=e.style,n=[],o=0;o<t;o++)n.push(D[o],r[D[o]]);return n.t=e,n}function gb(e,t,r,n,o,i,a,s,l,c,f,u){if(T(e)&&(e=e(s)),S(e)&&"max"===e.substr(0,3)&&(e=u+("="===e.charAt(4)?Ca("0"+e.substr(3),r):0)),U(e))a&&w(a,r,n,!0);else{T(t)&&(t=t(s));var p,d,g,h=Le(t)[0]||Ee,v=ot(h)||{},m=e.split(" ");v&&(v.left||v.top)||"none"!==qa(h).display||(g=h.style.display,h.style.display="block",v=ot(h),g?h.style.display=g:h.style.removeProperty("display")),p=Ca(m[0],v[n.d]),d=Ca(m[1]||"0",r),e=v[n.p]-l[n.p]-c+p+o-d,a&&w(a,d,n,r-d<20||a._isStart&&20<d),r-=r-d}if(i){var x=e+r,b=i._isStart;u="scroll"+n.d2,w(i,x,n,b&&20<x||!b&&(f?Math.max(Ee[u],Me[u]):i.parentNode[u])<=x+1),f&&(l=ot(a),f&&(i.style[n.op.p]=l[n.op.p]-n.op.m-i._offset+tt))}return Math.round(e)}function jb(l,e){var c,f=M(l,e),u="_scroll"+e.p2;return l[u]=f,function getTween(e,t,r,n,o){var i=getTween.tween,a=t.onComplete,s={};return i&&i.kill(),c=f(),t[u]=e,(t.modifiers=s)[u]=function(e){return 7<Math.abs(f()-c)?(i.kill(),getTween.tween=0,e=f()):n&&(e=r+n*i.ratio+o*i.ratio*i.ratio),c=Math.round(e)},t.onComplete=function(){getTween.tween=0,a&&a.call(i)},i=getTween.tween=_e.to(l,t)}}var _e,o,Pe,Oe,Me,Ee,i,a,s,l,Le,Ie,Re,c,Ae,ze,f,Ne,u,p,d,qe,Be,Fe,g,We=1,He=[],h=[],De=Date.now,v=De(),Je=0,Qe=1,Ke=Math.abs,t="scrollLeft",r="scrollTop",m="left",b="right",y="bottom",je="width",Xe="height",Ue="Right",Ve="Left",Ye="Top",Ze="Bottom",$e="padding",Ge="margin",et="Width",n="Height",tt="px",rt={s:t,p:m,p2:Ve,os:b,os2:Ue,d:je,d2:et,a:"x",sc:function sc(e){return arguments.length?Pe.scrollTo(e,nt.sc()):Pe.pageXOffset||Oe[t]||Me[t]||Ee[t]||0}},nt={s:r,p:"top",p2:Ye,os:y,os2:Ze,d:Xe,d2:n,a:"y",op:rt,sc:function sc(e){return arguments.length?Pe.scrollTo(rt.sc(),e):Pe.pageYOffset||Oe[r]||Me[r]||Ee[r]||0}},ot=function _getBounds(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==qa(e)[f]&&_e.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return r&&r.progress(0).kill(),n},it={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},at={toggleActions:"play",anticipatePin:0},x={top:0,left:0,center:.5,bottom:1,right:1},w=function _positionMarker(e,t,r,n){var o={display:"block"},i=r[n?"os2":"p2"],a=r[n?"p2":"os2"];e._isFlipped=n,o[r.a+"Percent"]=n?-100:0,o[r.a]=n?1:0,o["border"+i+et]=1,o["border"+a+et]=0,o[r.p]=t,_e.set(e,o)},st=[],lt={},k={},C=[],_=[],P=function _dispatch(e){return k[e]&&k[e].map(function(e){return e()})||C},O=[],E=function _revertRecorded(e){for(var t=0;t<O.length;t+=4)e&&O[t+3]!==e||(O[t].style.cssText=O[t+1],O[t+2].uncache=1)},A=function _revertAll(e,t){var r;for(Ne=0;Ne<st.length;Ne++)r=st[Ne],t&&r.media!==t||(e?r.kill(1):(r.scroll.rec||(r.scroll.rec=r.scroll()),r.revert()));E(t),t||P("revert")},z=function _refreshAll(e,t){if(!Je||e){var r=P("refreshInit");for(qe&&Y.sort(),t||A(),Ne=0;Ne<st.length;Ne++)st[Ne].refresh();for(r.forEach(function(e){return e&&e.render&&e.render(-1)}),Ne=st.length;Ne--;)st[Ne].scroll.rec=0;P("refresh")}else xa(Y,"scrollEnd",Qa)},q=0,ct=1,B=function _updateAll(){var e=st.length,t=De(),r=50<=t-v,n=e&&st[0].scroll();if(ct=n<q?-1:1,q=n,r&&(Je&&!ze&&200<t-Je&&(Je=0,P("scrollEnd")),Re=v,v=t),ct<0){for(Ne=e;Ne--;)st[Ne].update(0,r);ct=1}else for(Ne=0;Ne<e;Ne++)st[Ne]&&st[Ne].update(0,r);l=0},F=[m,"top",y,b,Ge+Ze,Ge+Ue,Ge+Ye,Ge+Ve,"display","flexShrink","float"],D=F.concat([je,Xe,"boxSizing","max"+et,"max"+n,"position",Ge,$e,$e+Ye,$e+Ue,$e+Ze,$e+Ve]),j=/([A-Z])/g,ft=function _setState(e){if(e)for(var t,r,n=e.t.style,o=e.length,i=0;i<o;i+=2)r=e[i+1],t=e[i],r?n[t]=r:n[t]&&n.removeProperty(t.replace(j,"-$1").toLowerCase())},ut={left:0,top:0},pt=/(?:webkit|moz|length)/i;rt.op=nt;var Y=(ScrollTrigger.prototype.init=function init(x,b){if(this.progress=0,this.vars&&this.kill(1),Qe){var d,n,c,y,w,k,C,_,P,O,E,I,e,R,A,z,q,B,t,F,g,W,D,h,J,v,m,r,j,X,Y,Z,o,f,$,G,ee,te,re=(x=sa(S(x)||U(x)||x.nodeType?{trigger:x}:x,at)).horizontal?rt:nt,ne=x.onUpdate,oe=x.toggleClass,i=x.id,ie=x.onToggle,ae=x.onRefresh,a=x.scrub,se=x.trigger,le=x.pin,ce=x.pinSpacing,fe=x.invalidateOnRefresh,ue=x.anticipatePin,s=x.onScrubComplete,u=x.onSnapComplete,pe=x.once,de=x.snap,ge=x.pinReparent,he=!a&&0!==a,ve=Le(x.scroller||Pe)[0],l=_e.core.getCache(ve),p=K(ve),me=p||"fixed"===L(ve,"pinType"),xe=[x.onEnter,x.onLeave,x.onEnterBack,x.onLeaveBack],be=he&&(pe?"play":x.toggleActions).split(" "),ye="markers"in x?x.markers:at.markers,Te=p?0:parseFloat(qa(ve)["border"+re.p2+et])||0,we=this,Se=x.onRefreshInit&&function(){return x.onRefreshInit(we)},ke=function _getSizeFunc(e,t,r){var n=r.d,o=r.d2,i=r.a;return(i=L(e,"getBoundingClientRect"))?function(){return i()[n]}:function(){return(t?Pe["inner"+o]:e["client"+o])||0}}(ve,p,re),Ce=function _getOffsetsFunc(e,t){return!t||~He.indexOf(e)?N(e):function(){return ut}}(ve,p);we.media=Fe,ue*=45,st.push(we),we.scroller=ve,we.scroll=M(ve,re),w=we.scroll(),we.vars=x,b=b||x.animation,"refreshPriority"in x&&(qe=1),l.tweenScroll=l.tweenScroll||{top:jb(ve,nt),left:jb(ve,rt)},we.tweenTo=d=l.tweenScroll[re.p],b&&(b.vars.lazy=!1,b._initted||!1!==b.vars.immediateRender&&!1!==x.immediateRender&&b.render(0,!0,!0),we.animation=b.pause(),b.scrollTrigger=we,(o=U(a)&&a)&&(Z=_e.to(b,{ease:"power3",duration:o,onComplete:function onComplete(){return s&&s(we)}})),j=0,i=i||b.vars.id),de&&(V(de)||(de={snapTo:de}),_e.set(p?[Ee,Me]:ve,{scrollBehavior:"auto"}),c=T(de.snapTo)?de.snapTo:"labels"===de.snapTo?function _getLabels(i){return function(e){var t,r=[],n=i.labels,o=i.duration();for(t in n)r.push(n[t]/o);return _e.utils.snap(r,e)}}(b):_e.utils.snap(de.snapTo),f=de.duration||{min:.1,max:2},f=V(f)?Ie(f.min,f.max):Ie(f,f),$=_e.delayedCall(de.delay||o/2||.1,function(){if(!Je||Je===Y&&!ze){var e=b&&!he?b.totalProgress():we.progress,t=(e-X)/(De()-Re)*1e3||0,r=Ke(t/2)*t/.185,n=e+r,o=Ie(0,1,c(n,we)),i=o-e-r,a=we.scroll(),s=Math.round(C+o*R),l=d.tween;if(a<=_&&C<=a){if(l&&!l._initted){if(l.data<=Math.abs(s-a))return;l.kill()}d(s,{duration:f(Ke(.185*Math.max(Ke(n-e),Ke(o-e))/t/.05||0)),ease:de.ease||"power3",data:Math.abs(s-a),onComplete:function onComplete(){j=X=b&&!he?b.totalProgress():we.progress,u&&u(we)}},C+e*R,r*R,i*R)}}else $.restart(!0)}).pause()),i&&(lt[i]=we),se=we.trigger=Le(se||le)[0],le=!0===le?se:Le(le)[0],S(oe)&&(oe={targets:se,className:oe}),le&&(!1===ce||ce===Ge||(ce="flex"!==qa(le.parentNode).display&&$e),we.pin=le,!1!==x.force3D&&_e.set(le,{force3D:!0}),(n=_e.core.getCache(le)).spacer?A=n.pinState:(n.spacer=B=Oe.createElement("div"),B.setAttribute("class","pin-spacer"+(i?" pin-spacer-"+i:"")),n.pinState=A=db(le)),we.spacer=B=n.spacer,r=qa(le),h=r[ce+re.os2],F=_e.getProperty(le),g=_e.quickSetter(le,re.a,tt),ab(le,B,r),q=db(le)),ye&&(e=V(ye)?sa(ye,it):it,E=Da("scroller-start",i,ve,re,e,0),I=Da("scroller-end",i,ve,re,e,0,E),t=E["offset"+re.op.d2],P=Da("start",i,ve,re,e,t),O=Da("end",i,ve,re,e,t),me||(function _makePositionable(e){e.style.position="absolute"===qa(e).position?"absolute":"relative"}(ve),_e.set([E,I],{force3D:!0}),v=_e.quickSetter(E,re.a,tt),m=_e.quickSetter(I,re.a,tt))),we.revert=function(e){var t=!1!==e||!we.enabled,r=Ae;t!==y&&(t&&(ee=Math.max(we.scroll(),we.scroll.rec||0),G=we.progress,te=b&&b.progress()),P&&[P,O,E,I].forEach(function(e){return e.style.display=t?"none":"block"}),Ae=1,we.update(t),Ae=r,le&&t&&function _swapPinOut(e,t,r){if(ft(r),e.parentNode===t){var n=t.parentNode;n&&(n.insertBefore(e,t),n.removeChild(t))}}(le,B,A),y=t)},we.refresh=function(e){if(!Ae&&we.enabled)if(le&&e&&Je)xa(ScrollTrigger,"scrollEnd",Qa);else{Ae=1,Z&&Z.kill(),fe&&b&&b.progress(0).invalidate(),y||we.revert();for(var t,r,n,o,i,a,s,l=ke(),c=Ce(),f=Q(ve,re),u=0,p=0,d=x.end,g=x.endTrigger||se,h=x.start||(le||!se?"0 0":"0 100%"),v=se&&Math.max(0,st.indexOf(we))||0,m=v;m--;)!(s=st[m].pin)||s!==se&&s!==le||st[m].revert();for(C=gb(h,se,l,re,we.scroll(),P,E,we,c,Te,me,f)||(le?-.001:0),T(d)&&(d=d(we)),S(d)&&!d.indexOf("+=")&&(~d.indexOf(" ")?d=(S(h)?h.split(" ")[0]:"")+d:(u=Ca(d.substr(2),l),d=S(h)?h:C+u,g=se)),_=Math.max(C,gb(d||(g?"100% 0":f),g,l,re,we.scroll()+u,O,I,we,c,Te,me,f))||-.001,R=_-C||(C-=.01)&&.001,u=0,m=v;m--;)(s=(a=st[m]).pin)&&a.start-a._pinPush<C&&(t=a.end-a.start,s===se&&(u+=t),s===le&&(p+=t));if(C+=u,_+=u,we._pinPush=p,P&&u&&((t={})[re.a]="+="+u,_e.set([P,O],t)),le)t=qa(le),o=re===nt,n=we.scroll(),W=parseFloat(F(re.a))+p,ab(le,B,t),q=db(le),r=ot(le,!0),ce&&(B.style[ce+re.os2]=R+p+tt,(J=ce===$e?ua(le,re)+R+p:0)&&(B.style[re.d]=J+tt),me&&we.scroll(ee)),me&&((i={top:r.top+(o?n-C:0)+tt,left:r.left+(o?0:n-C)+tt,boxSizing:"border-box",position:"fixed"})[je]=i.maxWidth=Math.ceil(r.width)+tt,i[Xe]=i.maxHeight=Math.ceil(r.height)+tt,i[Ge]=i[Ge+Ye]=i[Ge+Ue]=i[Ge+Ze]=i[Ge+Ve]="0",i[$e]=t[$e],i[$e+Ye]=t[$e+Ye],i[$e+Ue]=t[$e+Ue],i[$e+Ze]=t[$e+Ze],i[$e+Ve]=t[$e+Ve],z=function _copyState(e,t,r){for(var n,o=[],i=e.length,a=r?8:0;a<i;a+=2)n=e[a],o.push(n,n in t?t[n]:e[a+1]);return o.t=e.t,o}(A,i,ge)),b?(b.progress(1,!0),D=F(re.a)-W+R+p,R!==D&&z.splice(z.length-2,2),b.progress(0,!0)):D=R;else if(se&&we.scroll())for(r=se.parentNode;r&&r!==Ee;)r._pinOffset&&(C-=r._pinOffset,_-=r._pinOffset),r=r.parentNode;for(m=0;m<v;m++)!(a=st[m].pin)||a!==se&&a!==le||st[m].revert(!1);we.start=C,we.end=_,(w=k=we.scroll())<ee&&we.scroll(ee),we.revert(!1),Ae=0,te&&he&&b.progress(te,!0),G!==we.progress&&(Z&&b.totalProgress(G,!0),we.progress=G,we.update()),le&&ce&&(B._pinOffset=Math.round(we.progress*D)),ae&&ae(we)}},we.getVelocity=function(){return(we.scroll()-k)/(De()-Re)*1e3||0},we.update=function(e,t){var r,n,o,i,a,s=we.scroll(),l=e?0:(s-C)/R,c=l<0?0:1<l?1:l||0,f=we.progress;if(t&&(k=w,w=s,de&&(X=j,j=b&&!he?b.totalProgress():c)),ue&&!c&&le&&!Ae&&!We&&Je&&C<s+(s-k)/(De()-Re)*ue&&(c=1e-4),c!==f&&we.enabled){if(i=(a=(r=we.isActive=!!c&&c<1)!=(!!f&&f<1))||!!c!=!!f,we.direction=f<c?1:-1,we.progress=c,he||(!Z||Ae||We?b&&b.totalProgress(c,!!Ae):(Z.vars.totalProgress=c,Z.invalidate().restart())),le)if(e&&ce&&(B.style[ce+re.os2]=h),me){if(i){if(o=!e&&f<c&&s<_+1&&s+1>=Q(ve,re),ge){if(!Ae&&(r||o)){var u=ot(le,!0),p=s-C;le.style.top=u.top+(re===nt?p:0)+tt,le.style.left=u.left+(re===nt?0:p)+tt}!function _reparent(e,t){if(e.parentNode!==t){var r,n,o=e.style;if(t===Ee)for(r in e._stOrig=o.cssText,n=qa(e))+r||pt.test(r)||!n[r]||"string"!=typeof o[r]||"0"===r||(o[r]=n[r]);else o.cssText=e._stOrig;t.appendChild(e)}}(le,Ae||!r&&!o?B:Ee)}ft(r||o?z:q),D!==R&&c<1&&r||g(W+(1!==c||o?0:D))}}else g(W+D*c);!de||d.tween||Ae||We||(Y=Je,$.restart(!0)),oe&&a&&(!pe||r)&&Le(oe.targets).forEach(function(e){return e.classList[r?"add":"remove"](oe.className)}),!ne||he||e||ne(we),i&&!Ae?(n=c&&!f?0:1===c?1:1===f?2:3,he&&(o=!a&&"none"!==be[n+1]&&be[n+1]||be[n],b&&("complete"===o||"reset"===o||o in b)&&("complete"===o?b.pause().totalProgress(1):"reset"===o?b.restart(!0).pause():b[o]()),ne&&ne(we)),!a&&Be||(ie&&a&&ie(we),xe[n]&&xe[n](we),pe&&(1===c?we.kill(!1,1):xe[n]=0),a||xe[n=1===c?1:3]&&xe[n](we))):he&&ne&&!Ae&&ne(we)}m&&(v(s+(E._isFlipped?1:0)),m(s))},we.enable=function(){we.enabled||(we.enabled=!0,xa(ve,"resize",Ja),xa(ve,"scroll",Ia),Se&&xa(ScrollTrigger,"refreshInit",Se),b&&b.add?_e.delayedCall(.01,we.refresh)&&(R=.01)&&(C=_=0):we.refresh())},we.disable=function(e,t){if(we.enabled&&(!1!==e&&we.revert(),we.enabled=we.isActive=!1,t||Z&&Z.pause(),ee=0,n&&(n.uncache=1),Se&&ya(ScrollTrigger,"refreshInit",Se),$&&($.pause(),d.tween&&d.tween.kill()),!p)){for(var r=st.length;r--;)if(st[r].scroller===ve&&st[r]!==we)return;ya(ve,"resize",Ja),ya(ve,"scroll",Ia)}},we.kill=function(e,t){we.disable(e,t),i&&delete lt[i];var r=st.indexOf(we);st.splice(r,1),r===Ne&&0<ct&&Ne--,b&&(b.scrollTrigger=null,e&&b.render(-1),t&&Z||b.kill()),P&&[P,O,E,I].forEach(function(e){return e.parentNode.removeChild(e)}),n&&(n.uncache=1)},we.enable()}else this.update=this.refresh=this.kill=H},ScrollTrigger.register=function register(e){if(!o&&(_e=e||J(),I()&&window.document&&(Pe=window,Oe=document,Me=Oe.documentElement,Ee=Oe.body),_e&&(Le=_e.utils.toArray,Ie=_e.utils.clamp,_e.core.globals("ScrollTrigger",ScrollTrigger),Ee))){s=Pe.requestAnimationFrame||function(e){return setTimeout(e,16)},xa(Pe,"mousewheel",Ia),i=[Pe,Oe,Me,Ee],xa(Oe,"scroll",Ia);var t,r=Ee.style,n=r.borderTop;r.borderTop="1px solid #000",t=ot(Ee),nt.m=Math.round(t.top+nt.sc())||0,rt.m=Math.round(t.left+rt.sc())||0,n?r.borderTop=n:r.removeProperty("border-top"),c=setInterval(Ha,200),_e.delayedCall(.5,function(){return We=0}),xa(Oe,"touchcancel",H),xa(Ee,"touchstart",H),wa(xa,Oe,"pointerdown,touchstart,mousedown",function(){return ze=1}),wa(xa,Oe,"pointerup,touchend,mouseup",function(){return ze=0}),f=_e.utils.checkPrefix("transform"),D.push(f),o=De(),a=_e.delayedCall(.2,z).pause(),d=[Oe,"visibilitychange",function(){var e=Pe.innerWidth,t=Pe.innerHeight;Oe.hidden?(u=e,p=t):u===e&&p===t||Ja()},Oe,"DOMContentLoaded",z,Pe,"load",function(){return Je||z()},Pe,"resize",Ja],R(xa)}return o},ScrollTrigger.defaults=function defaults(e){for(var t in e)at[t]=e[t]},ScrollTrigger.kill=function kill(){Qe=0,st.slice(0).forEach(function(e){return e.kill(1)})},ScrollTrigger.config=function config(e){"limitCallbacks"in e&&(Be=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(c)||(c=t)&&setInterval(Ha,t),"autoRefreshEvents"in e&&(R(ya)||R(xa,e.autoRefreshEvents||"none"))},ScrollTrigger.scrollerProxy=function scrollerProxy(e,t){var r=Le(e)[0];K(r)?He.unshift(Pe,t,Ee,t,Me,t):He.unshift(r,t)},ScrollTrigger.matchMedia=function matchMedia(e){var t,r,n,o,i;for(r in e)n=_.indexOf(r),o=e[r],"all"===(Fe=r)?o():(t=Pe.matchMedia(r))&&(t.matches&&(i=o()),~n?(_[n+1]=X(_[n+1],o),_[n+2]=X(_[n+2],i)):(n=_.length,_.push(r,o,i),t.addListener?t.addListener(Pa):t.addEventListener("change",Pa))),Fe=0;return _},ScrollTrigger);function ScrollTrigger(e,t){o||ScrollTrigger.register(_e)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(e,t)}Y.version="3.4.1",Y.saveStyles=function(e){return e?Le(e).forEach(function(e){var t=O.indexOf(e);0<=t&&O.splice(t,4),O.push(e,e.style.cssText,_e.core.getCache(e),Fe)}):O},Y.revert=function(e,t){return A(!e,t)},Y.create=function(e,t){return new Y(e,t)},Y.refresh=function(e){return e?Ja():z(!0)},Y.update=B,Y.maxScroll=function(e,t){return Q(e,t?rt:nt)},Y.getScrollFunc=function(e,t){return M(Le(e)[0],t?rt:nt)},Y.getById=function(e){return lt[e]},Y.getAll=function(){return st.slice(0)},Y.isScrolling=function(){return!!Je},Y.addEventListener=function(e,t){var r=k[e]||(k[e]=[]);~r.indexOf(t)||r.push(t)},Y.removeEventListener=function(e,t){var r=k[e],n=r&&r.indexOf(t);0<=n&&r.splice(n,1)},Y.batch=function(e,t){function Yh(e,t){var r=[],n=[],o=_e.delayedCall(i,function(){t(r,n),r=[],n=[]}).pause();return function(e){r.length||o.restart(!0),r.push(e.trigger),n.push(e),a<=r.length&&o.progress(1)}}var r,n=[],o={},i=t.interval||.016,a=t.batchMax||1e9;for(r in t)o[r]="on"===r.substr(0,2)&&T(t[r])&&"onRefreshInit"!==r?Yh(0,t[r]):t[r];return T(a)&&(a=a(),xa(Y,"refresh",function(){return a=t.batchMax()})),Le(e).forEach(function(e){var t={};for(r in o)t[r]=o[r];t.trigger=e,n.push(Y.create(t))}),n},Y.sort=function(e){return st.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},J()&&_e.registerPlugin(Y),e.ScrollTrigger=Y,e.default=Y;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});
