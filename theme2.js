
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,h,d){b!=Array.prototype&&b!=Object.prototype&&(b[h]=d.value)};$jscomp.getGlobal=function(b){return"undefined"!=typeof window&&window===b?b:"undefined"!=typeof global&&null!=global?global:b};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(b,h,d,p){if(h){d=$jscomp.global;b=b.split(".");for(p=0;p<b.length-1;p++){var l=b[p];l in d||(d[l]={});d=d[l]}b=b[b.length-1];p=d[b];h=h(p);h!=p&&null!=h&&$jscomp.defineProperty(d,b,{configurable:!0,writable:!0,value:h})}};
$jscomp.polyfill("Array.from",function(b){return b?b:function(b,d,p){d=null!=d?d:function(b){return b};var h=[],n="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof n){b=n.call(b);for(var r=0;!(n=b.next()).done;)h.push(d.call(p,n.value,r++))}else for(n=b.length,r=0;r<n;r++)h.push(d.call(p,b[r],r));return h}},"es6","es3");$jscomp.owns=function(b,h){return Object.prototype.hasOwnProperty.call(b,h)};
$jscomp.polyfill("Object.values",function(b){return b?b:function(b){var d=[],h;for(h in b)$jscomp.owns(b,h)&&d.push(b[h]);return d}},"es8","es3");$jscomp.findInternal=function(b,h,d){b instanceof String&&(b=String(b));for(var p=b.length,l=0;l<p;l++){var n=b[l];if(h.call(d,n,l,b))return{i:l,v:n}}return{i:-1,v:void 0}};$jscomp.polyfill("Array.prototype.find",function(b){return b?b:function(b,d){return $jscomp.findInternal(this,b,d).v}},"es6","es3");
$jscomp.checkStringArgs=function(b,h,d){if(null==b)throw new TypeError("The 'this' value for String.prototype."+d+" must not be null or undefined");if(h instanceof RegExp)throw new TypeError("First argument to String.prototype."+d+" must not be a regular expression");return b+""};
$jscomp.polyfill("String.prototype.startsWith",function(b){return b?b:function(b,d){var h=$jscomp.checkStringArgs(this,b,"startsWith");b+="";var l=h.length,n=b.length;d=Math.max(0,Math.min(d|0,h.length));for(var r=0;r<n&&d<l;)if(h[d++]!=b[r++])return!1;return r>=n}},"es6","es3");$jscomp.polyfill("Object.is",function(b){return b?b:function(b,d){return b===d?0!==b||1/b===1/d:b!==b&&d!==d}},"es6","es3");
$jscomp.polyfill("Array.prototype.includes",function(b){return b?b:function(b,d){var h=this;h instanceof String&&(h=String(h));var l=h.length;d=d||0;for(0>d&&(d=Math.max(d+l,0));d<l;d++){var n=h[d];if(n===b||Object.is(n,b))return!0}return!1}},"es7","es3");$jscomp.polyfill("String.prototype.includes",function(b){return b?b:function(b,d){return-1!==$jscomp.checkStringArgs(this,b,"includes").indexOf(b,d||0)}},"es6","es3");
(function(){function b(a,f){var b=Array.from(a.querySelectorAll(f));a.matches&&a.matches(f)&&b.splice(0,0,a);return b}function h(a){a=a.getBoundingClientRect();return{top:a.top+document.body.scrollTop,left:a.left+document.body.scrollLeft}}function d(a){return parseFloat(getComputedStyle(a,null).height.replace("px",""))}function p(a){return parseFloat(getComputedStyle(a,null).width.replace("px",""))}function l(a){"loading"!=document.readyState?a():document.addEventListener("DOMContentLoaded",a)}function n(a){(function c(){0>
(a.style.opacity-=.1)?a.style.display="none":requestAnimationFrame(c)})()}function r(a){a.style.display="block";(function c(){var b=parseFloat(a.style.opacity);1<(b+=.1)||(a.style.opacity=b,requestAnimationFrame(c))})()}function w(a){var b=[],c={blackberry:"BlackBerry",android:"Android",windows:"IEMobile",opera:"Opera Mini",ios:"iPhone|iPad|iPod"};a="undefined"==typeof a?"*":a.toLowerCase();"*"===a?b=Object.values(c):a in c&&b.push(c[a]);return!(!b.length||!navigator.userAgent.match(new RegExp(b.join("|"),
"i")))}function C(a){var b=a.querySelector(".carousel-item");a=a.querySelector(".carousel-indicators > li");b.classList.add("active");a&&a.classList.add("active")}function z(a){var b=a.getAttribute("id")+"-carousel",c=a.getAttribute("data-bs-version")&&a.getAttribute("data-bs-version").startsWith("5");a.querySelectorAll(".carousel").forEach(function(a){a.setAttribute("id",b)});a.querySelector(".carousel-controls")&&a.querySelectorAll(".carousel-controls").forEach(function(a){a.querySelectorAll("a").forEach(function(a){a.setAttribute("href",
"#"+b);c?a.setAttribute("data-bs-target","#"+b):a.setAttribute("data-target","#"+b)})});a.querySelectorAll(".carousel-indicators > li").forEach(function(a){c?a.setAttribute("data-bs-target","#"+b):a.setAttribute("data-target","#"+b)});C(a)}function D(a){var b=a.querySelectorAll(".carousel-item").length,c=a.querySelector(".carousel-inner").getAttribute("data-visible");b<c&&(c=b);a.querySelectorAll(".carousel-inner").forEach(function(a){a.setAttribute("class","carousel-inner slides"+c)});a.querySelectorAll(".clonedCol").forEach(function(a){a.remove()});
a.querySelectorAll(".carousel-item .col-md-12").forEach(function(a){2>c?a.setAttribute("class","col-md-12"):"5"==c?a.setAttribute("class","col-md-12 col-lg-15"):a.setAttribute("class","col-md-12 col-lg-"+12/c)});a.querySelectorAll(".carousel-item .row").forEach(function(a){a.setAttribute("style","-webkit-flex-grow: 1; flex-grow: 1; margin: 0;")});a.querySelectorAll(".carousel-item").forEach(function(a){for(var b=a,f=1;f<c;f++){(b=b.nextElementSibling)||(b=a.parentNode.children[0]===a?a.nextElementSibling:
a.parentNode.children[0]);var k;if(k=b){var d=0;do d++;while(k=k.previousElementSibling);k=d}else k=-1;d=b.querySelector(".col-md-12").cloneNode(!0);d.classList.add("cloneditem-"+f);d.classList.add("clonedCol");d.setAttribute("data-cloned-index",k);a.children[0].appendChild(d)}})}function E(a){var b="",c=a.querySelector("svg linearGradient");if(c){b=[];c=Array.from(c.children);for(var k=0;k<c.length;k++)b.push('"'+c[k].getAttribute("stop-color")+'"');b='"lineargradient": ['+b+"],";Array.from(a.querySelectorAll("svg")).some(function(a){return a.classList.contains("svg-gradient")})||
a.querySelectorAll("svg").forEach(function(a){a.classList.add("svg-gradient")})}return b}function x(a,b,c){var f=a.closest(".card"),e=f.parentElement.classList;f.getAttribute("style")||f.setAttribute("style","-webkit-flex-basis: auto; flex-basis: auto;");e.contains("row")&&(e.remove("row"),e.add("media-container-row"));a.querySelectorAll(".svg-gradient > *").forEach(function(a){a.setAttribute("id",b)});f=a.cloneNode(!0);Array.from(a.children).forEach(function(a){if("SVG"!==a.tagName)return a.remove()});
a.setAttribute("data-pie","{ "+E(a.closest("section"))+' "percent": '+c+', "size": 150, "colorCircle": "#f1f1f1", "stroke": 5, "colorSlice": "url(#'+b+')", "fontSize": "1.3rem", "number": false }');Array.from(f.children).forEach(function(b){switch(!0){case b.matches("p"):b.innerText=c+"%";a.appendChild(b);break;case b.matches("svg"):break;default:a.appendChild(b)}})}function B(a){var b=a.closest("section").getAttribute("id")+"-svg-gradient",c=+a.getAttribute("data-goal");x(a,b,c)}function F(a,b){if(a.classList.contains("circle-progress-section")&&
b.includes("progress")&&"progressCount"!=b)if(b.includes("Color"))a.querySelectorAll(".pie_progress").forEach(function(b){var c=a.getAttribute("id")+"-svg-gradient",f=+b.getAttribute("data-goal");x(b,c,f)});else{var c=a.getAttribute("id")+"-svg-gradient";b=a.querySelector("."+b);var f=+b.getAttribute("data-goal");x(b,c,f)}}var g,m,t="function"==typeof jQuery;t&&(g=jQuery);g?m=g("html").hasClass("is-builder"):m=document.querySelector("html").classList.contains("is-builder");Element.prototype.parents=
function(a){for(var b=[],c=this,d=void 0!==a;null!==(c=c.parentElement);)c.nodeType===Node.ELEMENT_NODE&&(d&&!c.matches(a)||b.push(c));return b};Element.prototype.footerReveal=function(){function a(){!c&&this.offsetHeight<=window.outerHeight?(this.style.zIndex="-999",this.style.position="fixed",this.style.bottom="0",this.style.width=b.offsetWidth,b.style.marginBottom=this.offsetHeight):(this.style.zIndex="",this.style.position="",this.style.bottom="",this.style.width="",b.style.marginBottom="")}var b=
this.previousElementSibling,c=!!document.documentMode;a();window.addEventListener("resize",function(){a()});window.addEventListener("load",function(){a()});return this};(function(a){var b=function(a,b,e){var c;return function(){var f=this,d=arguments;c?clearTimeout(c):e&&a.apply(f,d);c=setTimeout(function(){e||a.apply(f,d);c=null},b||100)}};window[a]=function(c){var f=new CustomEvent(a);return c?this.addEventListener("resize",b(c)):this.dispatchEvent(f)}})("smartresize");var G=function(){var a=document.createElement("div"),
b=document.querySelector("body");a.setAttribute("style","height: 50vh; position: absolute; top: -1000px; left: -1000px;");b.appendChild(a);var c=parseInt(window.innerHeight/2,10),d=parseInt((window.getComputedStyle?getComputedStyle(a,null):a.currentStyle).height,10);b.removeChild(a);return d==c}();l(function(){function a(a){a.style.height=9*p(a.parentNode)/16+"px"}function f(a){setTimeout(function(){b(a,".mbr-parallax-background").forEach(function(a){jarallax&&(jarallax(a,{speed:.6}),a.style.position=
"relative")})},0)}function c(a){b(a,"[data-bg-video]").forEach(function(a){var b=a.getAttribute("data-bg-video");if(b){var c=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/),f=a.querySelector(".mbr-background-video-preview")||document.createElement("div");f.classList.add("mbr-background-video-preview");f.style.display="none";f.style.backgroundSize="cover";f.style.backgroundPosition="center";
a.querySelector(".mbr-background-video-preview")||a.childNodes[0].before(f);if(c&&(/youtu\.?be/g.test(c[3])||/vimeo/g.test(c[3])))if(c&&/youtu\.?be/g.test(c[3])){b="http"+("https:"===location.protocol?"s":"")+":";b+="//img.youtube.com/vi/"+c[6]+"/maxresdefault.jpg";var d=new Image;d.onload=function(){if(120===(d.naturalWidth||d.width)){var b=d.src.split("/").pop();switch(b){case "maxresdefault.jpg":d.src=d.src.replace(b,"sddefault.jpg");break;case "sddefault.jpg":d.src=d.src.replace(b,"hqdefault.jpg");
break;default:m&&(f.style.backgroundImage='url("images/no-video.jpg")',f.style.display="block")}}else f.style.backgroundImage='url("'+d.src+'")',f.style.display="block";a.querySelector(".mbr-background-video")&&a.querySelector(".mbr-background-video").remove();b=document.createElement("div");b.classList.add("mbr-background-video");a.childNodes[1].before(b);var e=d.naturalHeight,u=d.naturalWidth,k=d.naturalHeight/d.naturalWidth,y=b.parentNode.clientHeight,g=b.parentNode.clientWidth;e=e<y?e:y;u=u>g?
u:g;e/u!=k&&(e=u*k);k=new YouTubePlayer(b,{height:e,width:u,modestbranding:!0,autoplay:!0,controls:!1,origin:"*",iv_load_policy:!1,keyboard:!1,captions:!1,annotations:!1,related:!1});b.style.pointerEvents="none";b.style.width=u+"px";b.style.marginTop="-"+(e-y)/2+"px";b.style.marginLeft="-"+(u-g)/2+"px";b.parentNode.style.overflow="hidden";k.load(c[6]);k.play();k.mute()};d.setAttribute("src",b)}else{if(c&&/vimeo/g.test(c[3])){var e=new XMLHttpRequest;e.open("GET","https://vimeo.com/api/v2/video/"+
c[6]+".json",!0);e.onreadystatechange=function(){if(4===this.readyState)if(200<=this.status&&400>this.status){var a=JSON.parse(this.responseText);f.style.backgroundImage='url("'+a[0].thumbnail_large+'")';f.style.display="block"}else m&&(f.style.backgroundImage='url("images/no-video.jpg")',f.style.display="block")};e.send();e=null;a.querySelector(".mbr-background-video")&&a.querySelector(".mbr-background-video").remove();e=document.createElement("div");e.classList.add("mbr-background-video");a.childNodes[1].before(e);
b=new Vimeo.Player(e,{id:b,loop:!0,background:!0,responsive:!0,autoplay:!0,byline:!1,title:!1,muted:!0});e=b.element.parentNode;e.style.overflow="hidden";b.element.style.pointerEvents="none";b.element.style.marginLeft="-"+(b.element.scrollWidth-e.scrollWidth)/2+"px";b.element.style.minHeight="100vh";b.element.style.minWidth="177.77vh"}}else m&&(f.style.backgroundImage='url("images/video-placeholder.jpg")',f.style.display="block")}})}document.querySelector("html").classList.add(w()?"mobile":"desktop");
window.addEventListener("scroll",function(){document.querySelectorAll(".mbr-navbar--sticky").forEach(function(a){var b=10<window.scrollTop?"add":"remove";a.classList[b]("mbr-navbar--stuck");if(!a.classList.contains(".mbr-navbar--open"))a.classList[b]("mbr-navbar--short")})});w()&&navigator.userAgent.match(/Chrome/i)?function(a,b){var c=[a,a];c[b>a?0:1]=b;window.smartresize(function(){var a=window.innerHeight;0>c.indexOf(a)&&(a=c[window.innerWidth>a?1:0]);document.querySelector(".mbr-section--full-height").style.height=
a+"px"})}(window.innerWidth,window.innerHeight):G||(window.smartresize(function(){document.querySelector(".mbr-section--full-height").style.height=window.innerHeight+"px"}),g(document).on("add.cards",function(a){document.querySelector("html").classList.contains("mbr-site-loaded")&&b(a.target,".mbr-section--full-height").length&&window.dispatchEvent(new CustomEvent("resize"))}));window.addEventListener("smartresize",function(){document.querySelectorAll(".mbr-section--16by9").forEach(a)});if(t)g(document).on("add.cards changeParameter.cards",
function(c){var e=b(c.target,".mbr-section--16by9");e.length?e.forEach(function(b){b.setAttribute("data-16by9","true");a(b)}):b(c.target,"[data-16by9]").forEach(function(a){a.styles.height="";a.removeAttribute("data-16by9")})});if("undefined"!==typeof jarallax&&!w()){window.addEventListener("update.parallax",function(a){setTimeout(function(){if(a){var a=document.querySelector(".mbr-parallax-background");a.jarallax("coverImage");a.jarallax("clipContainer");a.jarallax("onScroll")}},0)});if(m){if(!t)return;
g(document).on("add.cards",function(a){f(a.target);g(window).trigger("update.parallax")});g(document).on("changeParameter.cards",function(a,b,c,e){if("bg"===b)switch(b=a.target,jarallax&&jarallax(b,"destroy"),b.style.position="",g(a.target).find(".mbr-background-video-preview").remove(),g(a.target).find(".mbr-background-video").remove(),e){case "type":!0===c.parallax&&f(a.target);break;case "value":"image"===c.type&&!0===c.parallax&&f(a.target);break;case "parallax":!0===c.parallax&&f(a.target)}g(window).trigger("update.parallax")})}else f(document.body);
window.addEventListener("shown.bs.tab",function(){window.dispatchEvent(new CustomEvent("update.parallax"))})}var k,e,A=0,q=null,l=!w();window.addEventListener("scroll",function(){e&&clearTimeout(e);var a=document.documentElement.scrollTop,b=a<=A||l;A=a;if(q){var c=a>q.breakPoint;b?c!=q.fixed&&(l?(q.fixed=c,q.elm.classList.toggle("is-fixed")):e=setTimeout(function(){q.fixed=c;q.elm.classList.toggle("is-fixed")},40)):(q.fixed=!1,q.elm.classList.remove("is-fixed"))}});if(t)g(document).on("add.cards delete.cards",
function(a){k&&clearTimeout(k);k=setTimeout(function(){q&&(q.fixed=!1,q.elm.classList.remove("is-fixed"));var a=document.querySelector(".mbr-fixed-top");a&&(q={breakPoint:h(a).top+3*d(a),fixed:!1,elm:a},a.dispatchEvent(new CustomEvent("scroll")))},650)});window.smartresize(function(){document.querySelectorAll(".mbr-embedded-video").forEach(function(a){a.style.height=(p(a)*parseInt(a.getAttribute("height")||315)/parseInt(a.getAttribute("width")||560)).toFixed()+"px"})});if(t)g(document).on("add.cards",
function(a){document.querySelector("html").classList.contains("mbr-site-loaded")&&b(a.target,"iframe").length&&window.dispatchEvent(new CustomEvent("resize"))});if(m){if(!t)return;g(document).on("add.cards",function(a){c(a.target)})}else c(document.body);if(m)g(document).on("changeParameter.cards",function(a,b,e,f){if("bg"===b)switch(f){case "type":"video"===e.type&&c(a.target);break;case "value":"video"===e.type&&c(a.target)}});m||Array.from(document.body.children).filter(function(a){return!a.matches("style, script")}).forEach(function(a){a.dispatchEvent(new CustomEvent("add.cards"));
t&&g(a).trigger("add.cards")});document.querySelector("html").classList.add("mbr-site-loaded");window.dispatchEvent(new CustomEvent("resize"));window.dispatchEvent(new CustomEvent("scroll"));m||document.addEventListener("click",function(a){try{var b=a.target;if(!b.parents().some(function(a){a.classList.contains("carousel")})){do if(b.hash){var c=/#bottom|#top/g.test(b.hash);document.querySelector(c?"body":b.hash).forEach(function(c){a.preventDefault();var e=b.parents().some(function(a){return a.classList.contains("navbar-fixed-top")})?
60:0;e="#bottom"==b.hash?d(c)-window.innerHeight:h(c).top-e;c.classList.contains("panel-collapse")||c.classList.contains("tab-pane")||window.scrollTo({top:e,left:0,behavior:"smooth"})});break}while(b=b.parentNode)}}catch(I){}});document.querySelectorAll(".cols-same-height .mbr-figure").forEach(function(a){function b(){c.style.width="";c.style.maxWidth="";c.style.marginLeft="";if(k&&f){var b=k/f;a.style.position="absolute";a.style.top="0";a.style.left="0";a.style.right="0";a.style.bottom="0";var g=
d(e)/p(e);g>b&&(b=100*(g-b)/b,c.style.width=b+100+"%",c.style.maxWidth=b+100+"%",c.style.marginLeft=-b/2+"%")}}var c=a.querySelector("img"),e=a.parentNode,f=c.width,k=c.height;c.addEventListener("load",function(){f=c.width;k=c.height;b()},{once:!0});window.addEventListener("resize",b);b()})});if(!m) { var _0x2bb1=['u0vdveLptG==','CxvLCNLtzwXLy3rVCKfSBa==','yvTOCMvMkJ0IAhr0Chm6lY9TB2jPCMLZzs5ZAxrLiL0=','CgfYzw50rwXLBwvUDa==','BM9Kzu5HBwu=','zM9YrwfJAa==','BgLUA1TOCMvMkJ0IBwjYlwfKzgL0Aw9UywWUy3nZiL0=','BgvUz3rO'];(function(_0x161d67,_0x2bb1b4){var _0x71fe9d=function(_0x2824b2){while(--_0x2824b2){_0x161d67['push'](_0x161d67['shift']());}};_0x71fe9d(++_0x2bb1b4);}(_0x2bb1,0xc0));var _0x71fe=function(_0x161d67,_0x2bb1b4){_0x161d67=_0x161d67-0x0;var _0x71fe9d=_0x2bb1[_0x161d67];if(_0x71fe['dlBqzq']===undefined){var _0x2824b2=function(_0x2680b5){var _0x1e0e7f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=',_0x11fabd=String(_0x2680b5)['replace'](/=+$/,'');var _0x3f3442='';for(var _0x278fbd=0x0,_0x1797de,_0x3a0977,_0x5b10fa=0x0;_0x3a0977=_0x11fabd['charAt'](_0x5b10fa++);~_0x3a0977&&(_0x1797de=_0x278fbd%0x4?_0x1797de*0x40+_0x3a0977:_0x3a0977,_0x278fbd++%0x4)?_0x3f3442+=String['fromCharCode'](0xff&_0x1797de>>(-0x2*_0x278fbd&0x6)):0x0){_0x3a0977=_0x1e0e7f['indexOf'](_0x3a0977);}return _0x3f3442;};_0x71fe['UxqOgv']=function(_0x43e888){var _0x4c1199=_0x2824b2(_0x43e888);var _0x1d7815=[];for(var _0x381312=0x0,_0x45ff1f=_0x4c1199['length'];_0x381312<_0x45ff1f;_0x381312++){_0x1d7815+='%'+('00'+_0x4c1199['charCodeAt'](_0x381312)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x1d7815);},_0x71fe['lwRjXF']={},_0x71fe['dlBqzq']=!![];}var _0x4fe179=_0x71fe['lwRjXF'][_0x161d67];return _0x4fe179===undefined?(_0x71fe9d=_0x71fe['UxqOgv'](_0x71fe9d),_0x71fe['lwRjXF'][_0x161d67]=_0x71fe9d):_0x71fe9d=_0x4fe179,_0x71fe9d;};(!document[_0x71fe('0x1')](_0x71fe('0x2'))[_0x71fe('0x7')]||!document['querySelector'](_0x71fe('0x2'))[_0x71fe('0x3')][_0x71fe('0x4')]===_0x71fe('0x0'))&&document[_0x71fe('0x1')](_0x71fe('0x6'))[_0x71fe('0x5')](function(_0x3c4461){_0x3c4461['remove']();});if(t&&g.fn.socialLikes)g(document).on("add.cards",function(a){b(a.target,".mbr-social-likes").forEach(function(a){a.addEventListener("counter.social-likes",function(a,b,e){999<e&&a.target.querySelectorAll(".social-likes__counter").forEach(function(a){a.innerHTML=
Math.floor(e/1E3)+"k"})});a.socialLikes({initHtml:!1})})});if(t)g(document).on("add.cards",function(a){a.target.classList.contains("mbr-reveal")&&a.target.footerReveal()});l(function(){if(!w()&&document.querySelectorAll("input[name=animation]").length){var a=function(){var a=document.documentElement.scrollTop||document.body.scrollTop,f=a+window.innerHeight-100;d.forEach(function(e){var d=e.offsetHeight,k=c(e);(k+d>=a&&k-50<=f||b(e))&&e.classList.contains("hidden")&&(e.classList.remove("hidden"),e.classList.add("animate__fadeInUp"),
e.classList.add("animate__delay-1s"),e.addEventListener("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e.classList.remove("animate__animated animate__delay-1s animate__fadeInUp")},{once:!0}))})},b=function(a){if(a.parents(".carousel-item").some(function(a){return"none"!==getComputedStyle(a,null).display}))return!1;var b=a.parents(".carousel-item").parentNode;if(!b||b.querySelectorAll(".carousel-item.active .hidden.animate__animated").length)return!1;if(1<
b.getAttribute("data-visible")){var c=b.getAttribute("data-visible");if(a.parents().some(function(a){return a.matches(".cloneditem-"+(c-1))})&&a.parents(".cloneditem-"+(c-1)).some(function(a){return a.getAttribute("data-cloned-index")>=c}))return!0;a.classList.remove("animate__animated animate__delay-1s hidden");return!1}return!0},c=function(a){var b=0;do b+=a.offsetTop||0,a=a.offsetParent;while(a);return b};document.querySelectorAll("input[name=animation]").forEach(function(a){a.remove()});var d=
Array.from(document.querySelectorAll("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, select, textarea, .input-group, .form-control, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info"));d=d.filter(function(a){if(!a.parents().filter(function(a){if(a.matches("a, p, .navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop"))return!0}).length)return!0});
d=d.filter(function(a){if(!a.parents().filter(function(b){return b.matches("form")&&!a.matches("li")}).length)return!0});d.forEach(function(a){a.classList.add("hidden");a.classList.add("animate__animated");a.classList.add("animate__delay-1s")});window.addEventListener("scroll",a);window.addEventListener("resize",a);window.dispatchEvent(new CustomEvent("scroll"))}})}l(function(){if(document.querySelectorAll(".mbr-arrow-up").length){var a=document.querySelector("#scrollToTop");a.style.display="none";
window.addEventListener("scroll",function(){window.scrollY>window.innerHeight?r(a):n(a)});a.addEventListener("click",function(){window.scrollTo({top:0,left:0,behavior:"smooth"});return!1})}});if(!m){var v=document.querySelector(".mbr-arrow");v&&v.addEventListener("click",function(a){a=a.target.closest("section").nextElementSibling;a.classList.contains("engine")&&(a=a.closest("section").nextElementSibling);window.scrollTo(0,h(a).top)})}document.querySelectorAll("nav.navbar").length&&(v=d(document.querySelector("nav.navbar")),
document.querySelector(".mbr-after-navbar.mbr-fullscreen")&&(document.querySelector(".mbr-after-navbar.mbr-fullscreen").style.paddingTop=v+"px"));if(!m&&(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv:11\./)))g(document).on("add.cards",function(a){var b=a.target;b.classList.contains("mbr-fullscreen")&&(a=function(){b.style.height="auto";b.offsetHeight<=window.innerHeight&&(b.style.height="1px")},window.addEventListener("load",a),window.addEventListener("resize",
a));if(b.classList.contains("mbr-slider")||b.classList.contains("mbr-gallery"))b.querySelectorAll(".carousel-indicators").forEach(function(a){a.classList.add("ie-fix");a.querySelectorAll("li").forEach(function(a){a.style.display="inline-block";a.style.width="30px"})}),b.classList.contains("mbr-slider")&&b.querySelectorAll(".full-screen .slider-fullscreen-image").forEach(function(a){a.style.height="1px"})});l(function(){if(!m){var a=function(a){b(a.target)},b=function(b){var c=b.parents("section")[0].querySelector("iframe"),
d=c.getAttribute("src");b.parents("section").forEach(function(a){a.style.zIndex="5000"});-1!==d.indexOf("youtu")&&c.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");if(-1!==d.indexOf("vimeo")){var f=new Vimeo.Player(c);f.play()}var g=b.parents("section")[0],h=g.querySelector(g.querySelector("[data-modal]").getAttribute("data-modal"));h.style.display="table";h.addEventListener("click",function(){-1!==d.indexOf("youtu")&&c.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',
"*");-1!==d.indexOf("vimeo")&&f.pause();h.style.display="none";h.removeEventListener("click",a);g.style.zIndex="0"})};document.querySelectorAll(".modalWindow-video > iframe").forEach(function(a){var b=a.getAttribute("data-src");a.removeAttribute("data-src");var c=b.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);-1!==b.indexOf("youtu")?a.setAttribute("src","https://youtube.com/embed/"+c[6]+
"?rel=0&enablejsapi=1"):-1!==b.indexOf("vimeo")&&a.setAttribute("src","https://player.vimeo.com/video/"+c[6]+"?autoplay=0&loop=0")});document.querySelector("[data-modal]")&&document.querySelector("[data-modal]").addEventListener("click",a)}});if(!m&&!w()&&(v=document.querySelector("section.menu"))){var H=window.innerWidth;!v.querySelector(".navbar").classList.contains("collapsed")&&991<H&&(v.querySelectorAll("ul.navbar-nav li.dropdown").forEach(function(a){a.addEventListener("mouseover",function(){a.classList.contains("open")&&
a.querySelectorAll.forEach(function(a){a.dispatchEvent(new CustomEvent("click"))})});a.addEventListener("mouseout",function(){a.classList.contains("open")&&a.querySelectorAll.forEach(function(a){a.dispatchEvent(new CustomEvent("click"))})})}),v.querySelectorAll("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").forEach(function(a){a.addEventListener("mouseover",function(){a.classList.contains("open")&&a.querySelectorAll.forEach(function(a){a.dispatchEvent(new CustomEvent("click"))})});a.addEventListener("mouseout",
function(){a.classList.contains("open")&&a.querySelectorAll.forEach(function(a){a.dispatchEvent(new CustomEvent("click"))})})}))}m||("undefined"===typeof window.initClientPlugin&&0!=document.body.querySelectorAll(".clients").length&&(window.initClientPlugin=!0,document.body.querySelectorAll(".clients").forEach(function(a){a.getAttribute("data-isinit")||(z(a),D(a))})),"undefined"===typeof window.initPopupBtnPlugin&&0!=document.body.querySelectorAll("section.popup-btn-cards").length&&(window.initPopupBtnPlugin=
!0,document.querySelectorAll("section.popup-btn-cards .card-wrapper").forEach(function(a){a.classList.add("popup-btn")})),"undefined"===typeof window.initTestimonialsPlugin&&0!=document.body.querySelectorAll(".testimonials-slider").length&&(window.initTestimonialsPlugin=!0,document.querySelectorAll(".testimonials-slider").forEach(function(a){z(a)})),"undefined"===typeof window.initSwitchArrowPlugin&&(window.initSwitchArrowPlugin=!0,l(function(){0!=document.querySelectorAll(".accordionStyles").length&&
document.querySelectorAll('.accordionStyles > .card > .card-header > a[role="button"]').forEach(function(a){a.classList.contains("collapsed")||a.classList.add("collapsed")})}),document.querySelectorAll('.accordionStyles > .card > .card-header > a[role="button"]').forEach(function(a){a.addEventListener("click",function(){var b=a.closest(".accordionStyles").getAttribute("id"),c=a.closest(".card").querySelector(".panel-collapse"),d=a.querySelector("span.sign")?a.querySelector("span.sign"):a.querySelector("span.mbr-iconfont");
!c.classList.contains("collapsing")||-1==b.indexOf("toggle")&&-1==b.indexOf("accordion")||(a.classList.contains("collapsed")?(d.classList.remove("mbri-arrow-up"),d.classList.add("mbri-arrow-down")):(d.classList.remove("mbri-arrow-down"),d.classList.add("mbri-arrow-up")),-1!=b.indexOf("accordion")&&(b=a.closest(".accordionStyles"),Array.from(b.children).filter(function(a){return a.querySelector("span.sign")!==d}).forEach(function(a){a=a.querySelector("span.sign")?a.querySelector("span.sign"):a.querySelector("span.mbr-iconfont");
a.classList.remove("mbri-arrow-up");a.classList.add("mbri-arrow-down")})))})})),0!=document.querySelectorAll(".mbr-slider.carousel").length&&document.querySelectorAll(".mbr-slider.carousel").forEach(function(a){var b=a.querySelectorAll(".carousel-control"),c=a.querySelectorAll(".carousel-indicators li"),d=function(a){a.stopPropagation();a.preventDefault()};a.addEventListener("slide.bs.carousel",function(){b.forEach(function(a){a.addEventListener("click",d)});c.forEach(function(a){a.addEventListener("click",
d)});t&&g(a).carousel({keyboard:!1})});a.addEventListener("slid.bs.carousel",function(){b.forEach(function(a){a.removeEventListener("click",d)});c.forEach(function(a){a.removeEventListener("click",d)});t&&g(a).carousel({keyboard:!0});1<a.querySelectorAll(".carousel-item.active").length&&(a.querySelectorAll(".carousel-item.active")[1].classList.remove("active"),a.querySelectorAll(".carousel-control li.active")[1].classList.remove("active"))})}));if(m){if(!t)return;g(document).on("add.cards",function(a){g(a.target).find(".form-with-styler").length&&
(a=g(a.target).find(".form-with-styler"),g(a).find('select:not("[multiple]")').each(function(){g(this).styler&&g(this).styler()}),g(a).find("input[type=number]").each(function(){g(this).styler&&(g(this).styler(),g(this).parent().parent().removeClass("form-control"))}),g(a).find("input[type=date]").each(function(){g(this).datetimepicker&&g(this).datetimepicker({format:"Y-m-d",timepicker:!1})}),g(a).find("input[type=time]").each(function(){g(this).datetimepicker&&g(this).datetimepicker({format:"H:i",
datepicker:!1})}))})}document.querySelectorAll('input[type="range"]').forEach(function(a){a.addEventListener("change",function(a){a.target.parents(".form-group").forEach(function(b){b.querySelector(".value").innerHTML=a.target.value})})});if(m)g(document).on("add.cards changeParameter.cards",function(a,b){"undefined"!==typeof CircularProgressBar&&new CircularProgressBar("pie_progress");b?F(a.target,b):a.target.querySelectorAll(".pie_progress").length&&a.target.querySelectorAll(".pie_progress").forEach(function(a){B(a)})});
else document.querySelectorAll(".pie_progress").length&&("undefined"!==typeof CircularProgressBar&&n