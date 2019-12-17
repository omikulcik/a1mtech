!function(e,t){if("function"==typeof define&&define.amd)define("GLightbox",["module"],t);else if("undefined"!=typeof exports)t(module);else{var i={exports:{}};t(i),e.GLightbox=i.exports}}(this,function(e){"use strict";var i=function(){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),s=null!==A||void 0!==document.createTouch||"ontouchstart"in window||"onmsgesturechange"in window||navigator.msMaxTouchPoints,o=document.getElementsByTagName("html")[0],T=document.body,n=function(){var e=void 0,t=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}(),l=function(){var e=void 0,t=document.createElement("fakeelement"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}(),r=Date.now(),O=[],N={},a={selector:"glightbox",skin:"clean",closeButton:!0,startAt:0,autoplayVideos:!0,descPosition:"bottom",width:900,height:506,videosWidth:960,videosHeight:540,beforeSlideChange:null,afterSlideChange:null,beforeSlideLoad:null,afterSlideLoad:null,onOpen:null,onClose:null,loopAtEnd:!1,touchNavigation:!0,keyboardNavigation:!0,closeOnOutsideClick:!0,jwplayer:{api:null,licenseKey:null,params:{width:"100%",aspectratio:"16:9",stretching:"uniform"}},vimeo:{api:"https://player.vimeo.com/api/player.js",params:{api:1,title:0,byline:0,portrait:0}},youtube:{api:"https://www.youtube.com/iframe_api",params:{enablejsapi:1,showinfo:0}},openEffect:"zoomIn",closeEffect:"zoomOut",slideEffect:"slide",moreText:"See more",moreLength:60,slideHtml:"",lightboxHtml:"",cssEfects:{fade:{in:"fadeIn",out:"fadeOut"},zoom:{in:"zoomIn",out:"zoomOut"},slide:{in:"slideInRight",out:"slideOutLeft"},slide_back:{in:"slideInLeft",out:"slideOutRight"}}};a.slideHtml='<div class="gslide">       <div class="gslide-inner-content">          <div class="ginner-container">             <div class="gslide-media">             </div>             <div class="gslide-description">                <h4 class="gslide-title"></h4>                <div class="gslide-desc"></div>             </div>          </div>       </div>     </div>';function q(){var i={},n=!1,e=0,t=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(n=arguments[0],e++);for(var s=function(e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n&&"[object Object]"===Object.prototype.toString.call(e[t])?i[t]=q(!0,i[t],e[t]):i[t]=e[t])};e<t;e++){s(arguments[e])}return i}a.lightboxHtml='<div id="glightbox-body" class="glightbox-container">          <div class="gloader visible"></div>          <div class="goverlay"></div>          <div class="gcontainer">             <div id="glightbox-slider" class="gslider"></div>             <a class="gnext"></a>             <a class="gprev"></a>             <a class="gclose"></a>          </div> </div>';var L={isFunction:function(e){return"function"==typeof e},isString:function(e){return"string"==typeof e},isNode:function(e){return!(!e||!e.nodeType||1!=e.nodeType)},isArray:function(e){return Array.isArray(e)},isArrayLike:function(e){return e&&e.length&&isFinite(e.length)},isObject:function(e){return"object"===(void 0===e?"undefined":t(e))&&null!=e&&!L.isFunction(e)&&!L.isArray(e)},isNil:function(e){return null==e},has:function(e,t){return null!==e&&hasOwnProperty.call(e,t)},size:function(e){if(L.isObject(e)){if(e.keys)return e.keys().length;var t=0;for(var i in e)L.has(e,i)&&t++;return t}return e.length},isNumber:function(e){return!isNaN(parseFloat(e))&&isFinite(e)}};function f(e,t){if((L.isNode(e)||e===window||e===document)&&(e=[e]),L.isArrayLike(e)||L.isObject(e)||(e=[e]),0!=L.size(e))if(L.isArrayLike(e)&&!L.isObject(e))for(var i=e.length,n=0;n<i&&!1!==t.call(e[n],e[n],n,e);n++);else if(L.isObject(e))for(var s in e)if(L.has(e,s)&&!1===t.call(e[s],e[s],s,e))break}function v(e){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,t=e[r]=e[r]||[],s={all:t,evt:null,found:null};return i&&n&&0<L.size(t)&&f(t,function(e,t){if(e.eventName==i&&e.fn.toString()==n.toString())return s.found=!0,s.evt=t,!1}),s}function j(i){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=e.onElement,n=e.withCallback,s=e.avoidDuplicate,o=void 0===s||s,l=e.once,r=void 0!==l&&l,a=e.useCapture,c=void 0!==a&&a,d=arguments[2],u=t||[];function h(e){L.isFunction(n)&&n.call(d,e,this),r&&h.destroy()}return L.isString(u)&&(u=document.querySelectorAll(u)),h.destroy=function(){f(u,function(e){var t=v(e,i,h);t.found&&t.all.splice(t.evt,1),e.removeEventListener&&e.removeEventListener(i,h,c)})},f(u,function(e){var t=v(e,i,h);(e.addEventListener&&o&&!t.found||!o)&&(e.addEventListener(i,h,c),t.all.push({eventName:i,fn:h}))}),h}function I(e,t){B(e,t)||(e.classList?e.classList.add(t):e.className+=" "+t)}function F(t,e){var i=e.split(" ");1<i.length?f(i,function(e){F(t,e)}):t.classList?t.classList.remove(e):t.className=t.className.replace(e,"")}function B(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)}function c(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",i=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if(!t||""===e)return!1;if("none"==e)return L.isFunction(i)&&i(),!1;var n=e.split(" ");f(n,function(e){I(t,"g"+e)}),j(l,{onElement:t,avoidDuplicate:!1,once:!0,withCallback:function(e,t){f(n,function(e){F(t,"g"+e)}),L.isFunction(i)&&i()}})}function P(e){var t=document.createDocumentFragment(),i=document.createElement("div");for(i.innerHTML=e;i.firstChild;)t.appendChild(i.firstChild);return t}function g(e,t){for(;e!==document.body;){if("function"==typeof(e=e.parentElement).matches?e.matches(t):e.msMatchesSelector(t))return e}}function d(e){e.style.display="block"}function u(e){e.style.display="none"}var h=function(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,s=arguments[1],l={href:"",title:"",description:"",descPosition:"bottom",effect:"",node:n};if(L.isObject(n)&&!L.isNode(n))return q(l,n);var e="",r=n.getAttribute("data-glightbox"),t=n.nodeName.toLowerCase();"a"===t&&(e=n.href),"img"===t&&(e=n.src),l.href=e,f(l,function(e,t){L.has(s,t)&&(l[t]=s[t]);var i=n.dataset[t];L.isNil(i)||(l[t]=i)});var i=m(e);if(l=q(l,i),L.isNil(r)){if("a"==t){var o=n.title;L.isNil(o)||""===o||(l.title=o)}if("img"==t){var a=n.alt;L.isNil(a)||""===a||(l.title=a)}var c=n.getAttribute("data-description");L.isNil(c)||""===c||(l.description=c)}else{var d=[];f(l,function(e,t){d.push(";\\s?"+t)}),d=d.join("\\s?:|"),""!==r.trim()&&f(l,function(e,t){var i=r,n=new RegExp("s?"+t+"s?:s?(.*?)("+d+"s?:|$)"),s=i.match(n);if(s&&s.length&&s[1]){var o=s[1].trim().replace(/;\s*$/,"");l[t]=o}})}var u=n.querySelector(".glightbox-desc");u&&(l.description=u.innerHTML),l.sourcetype=l.hasOwnProperty("type")?l.type:l.sourcetype,l.type=l.sourcetype;var h="video"==l.sourcetype?s.videosWidth:s.width,v="video"==l.sourcetype?s.videosHeight:s.height;return l.width=L.has(l,"width")?l.width:h,l.height=L.has(l,"height")?l.height:v,l},p=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,t=this,i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if(B(e,"loaded"))return!1;L.isFunction(this.settings.beforeSlideLoad)&&this.settings.beforeSlideLoad(e,i);var s=i.type,o=i.descPosition,l=e.querySelector(".gslide-media"),r=e.querySelector(".gslide-title"),a=e.querySelector(".gslide-desc"),c=e.querySelector(".gslide-description"),d=n;if(L.isFunction(this.settings.afterSlideLoad)&&(d=function(){L.isFunction(n)&&n(),t.settings.afterSlideLoad(e,i)}),""==i.title&&""==i.description?c&&c.parentNode.removeChild(c):(r&&""!==i.title?r.innerHTML=i.title:r.parentNode.removeChild(r),a&&""!==i.description?A&&0<this.settings.moreLength?(i.smallDescription=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:50,i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=i;if((e=e.trim()).length<=t)return e;var s=e.substr(0,t-1);if(!n)return s;return s+'... <a href="#" class="desc-more">'+i+"</a>"}(i.description,this.settings.moreLength,this.settings.moreText),a.innerHTML=i.smallDescription,function s(e,o){var t=e.querySelector(".desc-more");if(!t)return!1;j("click",{onElement:t,withCallback:function(e,t){e.preventDefault();var i=g(t,".gslide-desc");if(!i)return!1;i.innerHTML=o.description,I(T,"gdesc-open");var n=j("click",{onElement:[T,g(i,".gslide-description")],withCallback:function(e,t){"a"!==e.target.nodeName.toLowerCase()&&(F(T,"gdesc-open"),I(T,"gdesc-closed"),i.innerHTML=o.smallDescription,s(i,o),setTimeout(function(){F(T,"gdesc-closed")},400),n.destroy())}})}})}.apply(this,[a,i])):a.innerHTML=i.description:a.parentNode.removeChild(a),I(l.parentNode,"desc-"+o),I(c,"description-"+o)),I(l,"gslide-"+s),I(e,"loaded"),"video"!==s)if("external"!==s)if("inline"!==s){if("image"===s){var u=new Image;return u.addEventListener("load",function(){L.isFunction(d)&&d()},!1),u.src=i.href,void l.appendChild(u)}L.isFunction(d)&&d()}else(function(e,t,i){var n=e.querySelector(".gslide-media"),s=document.getElementById(t.inlined.replace("#",""));if(s){var o=s.cloneNode(!0);return o.style.height=t.height+"px",o.style.maxWidth=t.width+"px",I(o,"ginlined-content"),n.appendChild(o),void(L.isFunction(i)&&i())}}).apply(this,[e,i,d]);else{var h=M(i.href,i.width,i.height,d);l.appendChild(h)}else(function(e,i,n){var s=this,t=i.source,o="gvideo"+i.index,l=e.querySelector(".gslide-media"),r=i.href,a=location.protocol.replace(":","");"file"==a&&(a="http");if("vimeo"==t){var c=/vimeo.*\/(\d+)/i.exec(r),d=D(this.settings.vimeo.params),u=a+"://player.vimeo.com/video/"+c[1]+"?"+d;H(this.settings.vimeo.api);var h=M(u,i.width,i.height,function(){!function(e,t,i,n){if(e())return t();i||(i=100);var s,o=setInterval(function(){e()&&(clearInterval(o),s&&clearTimeout(s),t())},i);n&&(s=setTimeout(function(){clearInterval(o)},n))}(function(){return"undefined"!=typeof Vimeo},function(){var e=new Vimeo.Player(h);N[o]=e,L.isFunction(n)&&n()})},l);h.id=o,h.className="vimeo-video gvideo",this.settings.autoplayVideos&&!A&&(h.className+=" wait-autoplay")}if("youtube"==t){var v=q(this.settings.youtube.params,{playerapiid:o}),f=D(v),g=function(e){var t="";t=void 0!==(e=e.replace(/(>|<)/gi,"").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2]?(t=e[2].split(/[^0-9a-z_\-]/i))[0]:e;return t}(r),p=a+"://www.youtube.com/embed/"+g+"?"+f;H(this.settings.youtube.api);var y=M(p,i.width,i.height,function(){if(!L.isNil(YT)&&YT.loaded){var e=new YT.Player(y);N[o]=e}else O.push(y);L.isFunction(n)&&n()},l);y.id=o,y.className="youtube-video gvideo",this.settings.autoplayVideos&&!A&&(y.className+=" wait-autoplay")}if("local"==t){var m='<video id="'+o+'" ';m+='style="background:#000; width: '+i.width+"px; height: "+i.height+'px;" ',m+='preload="metadata" ',m+='x-webkit-airplay="allow" ',m+='webkit-playsinline="" ',m+="controls ",m+='class="gvideo">';var b=r.toLowerCase().split(".").pop(),w={mp4:"",ogg:"",webm:""};for(var S in w[b]=r,w)if(w.hasOwnProperty(S)){var x=w[S];i.hasOwnProperty(S)&&(x=i[S]),""!==x&&(m+='<source src="'+x+'" type="video/'+S+'">')}var k=P(m+="</video>");l.appendChild(k);var E=document.getElementById(o);if(null!==this.settings.jwplayer&&null!==this.settings.jwplayer.api){this.settings.jwplayer;var C=this.settings.jwplayer.api;if(!C)return console.warn("Missing jwplayer api file"),L.isFunction(n)&&n(),!1;H(C,function(){var e=q(s.settings.jwplayer.params,{width:i.width+"px",height:i.height+"px",file:r});jwplayer.key=s.settings.jwplayer.licenseKey;var t=jwplayer(o);t.setup(e),(N[o]=t).on("ready",function(){I(E=l.querySelector(".jw-video"),"gvideo"),E.id=o,L.isFunction(n)&&n()})})}else I(E,"html5-video"),N[o]=E,L.isFunction(n)&&n()}}).apply(this,[e,i,d])};function M(e,t,i,n,s){var o=document.createElement("iframe"),l=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;return o.className="vimeo-video gvideo",o.src=e,o.style.height=A&&l<767?"":i+"px",o.style.width=t+"px",o.setAttribute("allowFullScreen",""),o.onload=function(){I(o,"iframe-ready"),L.isFunction(n)&&n()},s&&s.appendChild(o),o}function H(e,t){if(L.isNil(e))console.error("Inject videos api error");else{var i=document.querySelectorAll('script[src="'+e+'"]');if(L.isNil(i)||0==i.length){var n=document.createElement("script");return n.type="text/javascript",n.src=e,n.onload=function(){L.isFunction(t)&&t()},document.body.appendChild(n),!1}L.isFunction(t)&&t()}}function y(){for(var e=0;e<O.length;e++){var t=O[e],i=new YT.Player(t);N[t.id]=i}}function D(e){var i="",n=0;return f(e,function(e,t){0<n&&(i+="&amp;"),i+=t+"="+e,n+=1}),i}void 0!==window.onYouTubeIframeAPIReady?window.onYouTubeIframeAPIReady=function(){window.onYouTubeIframeAPIReady(),y()}:window.onYouTubeIframeAPIReady=y;var m=function(e){var t=e,i={};if(null!==(e=e.toLowerCase()).match(/\.(jpeg|jpg|gif|png|apn|webp|svg)$/))return i.sourcetype="image",i;if(e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/))return i.sourcetype="video",i.source="youtube",i;if(e.match(/vimeo\.com\/([0-9]*)/))return i.sourcetype="video",i.source="vimeo",i;if(null!==e.match(/\.(mp4|ogg|webm)$/))return i.sourcetype="video",i.source="local",i;if(-1<e.indexOf("#")){var n=t.split("#").pop();if(""!==n.trim())return i.sourcetype="inline",i.source=e,i.inlined="#"+n,i}return e.includes("gajax=true")&&(i.sourcetype="ajax",i.source=e),i.sourcetype="external",i.source=e,i};function W(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";if(""==t)return e.style.webkitTransform="",e.style.MozTransform="",e.style.msTransform="",e.style.OTransform="",e.style.transform="",!1;e.style.webkitTransform=t,e.style.MozTransform=t,e.style.msTransform=t,e.style.OTransform=t,e.style.transform=t}function Y(e){var i=e.querySelector(".gslide-media"),t=e.querySelector(".gslide-description");I(i,"greset"),W(i,"translate3d(0, 0, 0)");j(n,{onElement:i,once:!0,withCallback:function(e,t){F(i,"greset")}});i.style.opacity="",t&&(t.style.opacity="")}var b=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.settings=q(a,e||{}),this.effectsClasses=this.getAnimationClasses()}return i(t,[{key:"init",value:function(){var i=this;this.baseEvents=j("click",{onElement:"."+this.settings.selector,withCallback:function(e,t){e.preventDefault(),i.open(t)}})}},{key:"open",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;if(this.elements=this.getElements(e),0==this.elements.length)return!1;this.activeSlide=null,this.prevActiveSlideIndex=null,this.prevActiveSlide=null;var t=this.settings.startAt;e&&(t=this.elements.indexOf(e))<0&&(t=0),this.build(),c(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.in);var i=T.offsetWidth;if(T.style.width=i+"px",I(T,"glightbox-open"),I(o,"glightbox-open"),A&&(I(o,"glightbox-mobile"),this.settings.slideEffect="slide"),this.showSlide(t,!0),1==this.elements.length?(u(this.prevButton),u(this.nextButton)):(d(this.prevButton),d(this.nextButton)),this.lightboxOpen=!0,L.isFunction(this.settings.onOpen)&&this.settings.onOpen(),A&&s&&this.settings.touchNavigation)return function(){var d=this;if(this.events.hasOwnProperty("touchStart"))return!1;var u=void 0,h=void 0,v=void 0,f=!1,g=!1,p=!1,y=!1,m={},b={},w=(this.slidesContainer,null),S=0,x=0,i=null,k=null,E=null,C=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,this.events.doctouchmove=j("touchmove",{onElement:document,withCallback:function(e,t){if(B(T,"gdesc-open"))return e.preventDefault(),!1}}),this.events.touchStart=j("touchstart",{onElement:T,withCallback:function(e,t){B(T,"gdesc-open")||(I(T,"touching"),w=d.getActiveSlide(),i=w.querySelector(".gslide-image"),k=w.querySelector(".gslide-media"),E=w.querySelector(".gslide-description"),d.index,b=e.targetTouches[0],m.pageX=e.targetTouches[0].pageX,m.pageY=e.targetTouches[0].pageY,S=e.targetTouches[0].clientX,x=e.targetTouches[0].clientY)}}),this.events.gestureStart=j("gesturestart",{onElement:T,withCallback:function(e,t){i&&(e.preventDefault(),p=!0)}}),this.events.gestureChange=j("gesturechange",{onElement:T,withCallback:function(e,t){e.preventDefault(),W(i,"scale("+e.scale+")")}}),this.events.gesturEend=j("gestureend",{onElement:T,withCallback:function(e,t){p=!1,e.scale<1?(y=!1,W(i,"scale(1)")):y=!0}}),this.events.touchMove=j("touchmove",{onElement:T,withCallback:function(e,t){if(B(T,"touching")&&!(B(T,"gdesc-open")||p||y)){e.preventDefault(),b=e.targetTouches[0];var i=w.querySelector(".gslide-inner-content").offsetHeight,n=w.querySelector(".gslide-inner-content").offsetWidth,s=e.targetTouches[0].clientX,o=e.targetTouches[0].clientY,l=S-s,r=x-o;if(Math.abs(l)>Math.abs(r)?g=!(f=!1):f=!(g=!1),f){if(h=b.pageY-m.pageY,0<=Math.abs(h)||f){var a=.75-Math.abs(h)/i;k.style.opacity=a,E&&(E.style.opacity=a),W(k,"translate3d(0, "+h+"px, 0)")}}else if(u=b.pageX-m.pageX,v=100*u/C,g){if(d.index+1==d.elements.length&&u<-60)return Y(w),!1;if(d.index-1<0&&60<u)return Y(w),!1;var c=.75-Math.abs(u)/n;k.style.opacity=c,E&&(E.style.opacity=c),W(k,"translate3d("+v+"%, 0, 0)")}}}}),this.events.touchEnd=j("touchend",{onElement:T,withCallback:function(e,t){h=b.pageY-m.pageY,u=b.pageX-m.pageX,v=100*u/C,F(T,"touching");var i=w.querySelector(".gslide-inner-content").offsetHeight,n=w.querySelector(".gslide-inner-content").offsetWidth;if(f){var s=i/2;return f=!1,Math.abs(h)>=s?void d.close():void Y(w)}if(g){var o="prev",l=!(g=!1);if(u<0&&(o="next",u=Math.abs(u)),"prev"==o&&d.index-1<0&&(l=!1),"next"==o&&d.index+1>=d.elements.length&&(l=!1),l&&n/2-90<=u)return void("next"==o?d.nextSlide():d.prevSlide());Y(w)}}})}.apply(this),!1;this.settings.keyboardNavigation&&function(){var n=this;if(this.events.hasOwnProperty("keyboard"))return!1;this.events.keyboard=j("keydown",{onElement:window,withCallback:function(e,t){var i=(e=e||window.event).keyCode;39==i&&n.nextSlide(),37==i&&n.prevSlide(),27==i&&n.close()}})}.apply(this)}},{key:"showSlide",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,i=1<arguments.length&&void 0!==arguments[1]&&arguments[1];d(this.loader),this.index=t;var n=this.slidesContainer.querySelector(".current");n&&F(n,"current"),this.slideAnimateOut();var s=this.slidesContainer.querySelectorAll(".gslide")[t];if(d(this.slidesContainer),B(s,"loaded"))this.slideAnimateIn(s,i),u(this.loader);else{d(this.loader);var o=h(this.elements[t],this.settings);o.index=t,p.apply(this,[s,o,function(){u(e.loader),e.slideAnimateIn(s,i)}])}this.preloadSlide(t+1),this.preloadSlide(t-1),F(this.nextButton,"disabled"),F(this.prevButton,"disabled"),0===t?I(this.prevButton,"disabled"):t===this.elements.length-1&&!0!==this.settings.loopAtEnd&&I(this.nextButton,"disabled"),this.activeSlide=s}},{key:"preloadSlide",value:function(e){var t=this;if(e<0||e>this.elements.length)return!1;if(L.isNil(this.elements[e]))return!1;var i=this.slidesContainer.querySelectorAll(".gslide")[e];if(B(i,"loaded"))return!1;var n=h(this.elements[e],this.settings);n.index=e;var s=n.sourcetype;"video"==s||"external"==s?setTimeout(function(){p.apply(t,[i,n])},200):p.apply(this,[i,n])}},{key:"prevSlide",value:function(){var e=this.index-1;if(e<0)return!1;this.goToSlide(e)}},{key:"nextSlide",value:function(){var e=this.index+1;if(e>this.elements.length)return!1;this.goToSlide(e)}},{key:"goToSlide",value:function(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];-1<e&&(this.prevActiveSlide=this.activeSlide,this.prevActiveSlideIndex=this.index,e<this.elements.length?this.showSlide(e):!0===this.settings.loopAtEnd&&(e=0,this.showSlide(e)))}},{key:"slideAnimateIn",value:function(e,t){var i=this,n=e.querySelector(".gslide-media"),s=e.querySelector(".gslide-description"),o={index:this.prevActiveSlideIndex,slide:this.prevActiveSlide},l={index:this.index,slide:this.activeSlide};if(0<n.offsetWidth&&s&&(u(s),e.querySelector(".ginner-container").style.maxWidth=n.offsetWidth+"px",s.style.display=""),F(e,this.effectsClasses),t)c(e,this.settings.openEffect,function(){!A&&i.settings.autoplayVideos&&i.playSlideVideo(e),L.isFunction(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[o,l])});else{var r=this.settings.slideEffect,a="none"!==r?this.settings.cssEfects[r].in:r;this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(a=this.settings.cssEfects.slide_back.in),c(e,a,function(){!A&&i.settings.autoplayVideos&&i.playSlideVideo(e),L.isFunction(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[o,l])})}I(e,"current")}},{key:"slideAnimateOut",value:function(){if(!this.prevActiveSlide)return!1;var i=this.prevActiveSlide;F(i,this.effectsClasses),I(i,"prev");var e=this.settings.slideEffect,t="none"!==e?this.settings.cssEfects[e].out:e;this.stopSlideVideo(i),L.isFunction(this.settings.beforeSlideChange)&&this.settings.beforeSlideChange.apply(this,[{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide},{index:this.index,slide:this.activeSlide}]),this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(t=this.settings.cssEfects.slide_back.out),c(i,t,function(){var e=i.querySelector(".gslide-media"),t=i.querySelector(".gslide-description");e.style.transform="",F(e,"greset"),e.style.opacity="",t&&(t.style.opacity=""),F(i,"prev")})}},{key:"stopSlideVideo",value:function(e){L.isNumber(e)&&(e=this.slidesContainer.querySelectorAll(".gslide")[e]);var t=e?e.querySelector(".gvideo"):null;if(!t)return!1;var i=t.id;if(N&&N.hasOwnProperty(i)){var n=N[i];B(t,"vimeo-video")&&n.pause(),B(t,"youtube-video")&&n.pauseVideo(),B(t,"jw-video")&&n.pause(!0),B(t,"html5-video")&&n.pause()}}},{key:"playSlideVideo",value:function(e){L.isNumber(e)&&(e=this.slidesContainer.querySelectorAll(".gslide")[e]);var t=e.querySelector(".gvideo");if(!t)return!1;var i=t.id;if(N&&N.hasOwnProperty(i)){var n=N[i];return B(t,"vimeo-video")&&n.play(),B(t,"youtube-video")&&n.playVideo(),B(t,"jw-video")&&n.play(),B(t,"html5-video")&&n.play(),setTimeout(function(){F(t,"wait-autoplay")},300),!1}}},{key:"setElements",value:function(e){this.settings.elements=e}},{key:"getElements",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;if(this.elements=[],!L.isNil(this.settings.elements)&&L.isArray(this.settings.elements))return this.settings.elements;var t=!1;if(null!==e){var i=e.getAttribute("data-gallery");i&&""!==i&&(t=document.querySelectorAll('[data-gallery="'+i+'"]'))}return 0==t&&(t=document.querySelectorAll("."+this.settings.selector)),t=Array.prototype.slice.call(t)}},{key:"getActiveSlide",value:function(){return this.slidesContainer.querySelectorAll(".gslide")[this.index]}},{key:"getActiveSlideIndex",value:function(){return this.index}},{key:"getAnimationClasses",value:function(){var e=[];for(var t in this.settings.cssEfects)if(this.settings.cssEfects.hasOwnProperty(t)){var i=this.settings.cssEfects[t];e.push("g"+i.in),e.push("g"+i.out)}return e.join(" ")}},{key:"build",value:function(){var i=this;if(this.built)return!1;var e=P(this.settings.lightboxHtml);document.body.appendChild(e);var t=document.getElementById("glightbox-body"),n=(this.modal=t).querySelector(".gclose");this.prevButton=t.querySelector(".gprev"),this.nextButton=t.querySelector(".gnext"),this.overlay=t.querySelector(".goverlay"),this.loader=t.querySelector(".gloader"),this.slidesContainer=document.getElementById("glightbox-slider"),this.events={},I(this.modal,"glightbox-"+this.settings.skin),this.settings.closeButton&&n&&(this.events.close=j("click",{onElement:n,withCallback:function(e,t){e.preventDefault(),i.close()}})),n&&!this.settings.closeButton&&n.parentNode.removeChild(n),this.nextButton&&(this.events.next=j("click",{onElement:this.nextButton,withCallback:function(e,t){e.preventDefault(),i.nextSlide()}})),this.prevButton&&(this.events.prev=j("click",{onElement:this.prevButton,withCallback:function(e,t){e.preventDefault(),i.prevSlide()}})),this.settings.closeOnOutsideClick&&(this.events.outClose=j("click",{onElement:t,withCallback:function(e,t){g(e.target,".ginner-container")||B(e.target,"gnext")||B(e.target,"gprev")||i.close()}})),f(this.elements,function(){var e=P(i.settings.slideHtml);i.slidesContainer.appendChild(e)}),s&&I(o,"glightbox-touch"),this.built=!0}},{key:"reload",value:function(){this.init()}},{key:"close",value:function(){var t=this;if(this.closing)return!1;this.closing=!0,this.stopSlideVideo(this.activeSlide),I(this.modal,"glightbox-closing"),c(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.out),c(this.activeSlide,this.settings.closeEffect,function(){if(t.activeSlide=null,t.prevActiveSlideIndex=null,t.prevActiveSlide=null,t.built=!1,t.events)for(var e in t.events)t.events.hasOwnProperty(e)&&t.events[e].destroy();F(T,"glightbox-open"),F(o,"glightbox-open"),F(T,"touching"),F(T,"gdesc-open"),T.style.width="",t.modal.parentNode.removeChild(t.modal),L.isFunction(t.settings.onClose)&&t.settings.onClose(),t.closing=null})}},{key:"destroy",value:function(){this.close(),this.baseEvents.destroy()}}]),t}();e.exports=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=new b(e);return t.init(),t}});var lightboxDescription=GLightbox({selector:"glight"});