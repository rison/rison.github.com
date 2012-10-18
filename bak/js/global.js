function __getUrlObj(){var href = self.location.href.split("#")[0];var all = href.substring(href.indexOf("?")+1);var a = all.split("&");	var o = {};for(var i=0;i<a.length;i++ ){	var b = a[i].split("=");o[b[0]] = b[1];}return o;}
function __addLoadEvent(func) {var oldonload = window.onload;if (typeof window.onload != 'function'){window.onload = func;}	else{window.onload = function(){if (oldonload){oldonload();}func();}}}
var Event = {};
Event.__addEventHandler = function(target,type,handler){try{if(target.addEventListener){target.addEventListener(type,handler,false);}else if(target.attachEvent){target.attachEvent("on"+type,handler);}else{target["on"+type]=handler;}}catch(e){};};
Event.__removeEventHandler = function(target, type, handler){if (target.removeEventListener) {target.removeEventListener(type, handler, false);} else if (target.detachEvent) {target.detachEvent("on" + type, handler);} else {target["on" + type] = null;}};
Event.__formatEvent = function (oEvent) {if (IE) {oEvent.charCode = (oEvent.type == "keypress" || oEvent.type == "keydown") ? oEvent.keyCode : 0;oEvent.eventPhase = 2;oEvent.isChar = (oEvent.charCode > 0);oEvent.pageX = oEvent.clientX + document.documentElement.scrollLeft;oEvent.pageY = oEvent.clientY + document.documentElement.scrollTop;oEvent.preventDefault = function () {this.returnValue = false;};if (oEvent.type == "mouseout") {oEvent.relatedTarget = oEvent.toElement;} else if (oEvent.type == "mouseover") {oEvent.relatedTarget = oEvent.fromElement;}oEvent.stopPropagation = function () {this.cancelBubble = true;};oEvent.target = oEvent.srcElement;oEvent.time = (new Date).getTime();}return oEvent;};
Event.getEvent = function() {if (window.event) {return this.__formatEvent(window.event);} else {return Event.getEvent.caller.arguments[0];}};

Array.prototype.del=function(n){return this.slice(0,n).concat(this.slice(n+1,this.length));};
Array.prototype.merge = function(){var aTemp = [];for(var i=0;i<this.length;i++){aTemp = aTemp.concat(this[i]);}return aTemp;}
Array.prototype.shuffle = function(){for(var i = 0;i < this.length;i++){var rnd = Math.floor(Math.random()*(i+1));var o = this[rnd];this[rnd] = this[i];this[i] = o;}return this;} 
Array.prototype.getRandom = function(){return this[Math.floor(Math.random()*this.length)];}
Array.prototype.move = function(from,to){var m=this.splice(from,1);var l=this.slice(0,to);var r=this.slice(to);var over = l.concat(m).concat(r);return over;}
String.prototype.replace = function (from,to){return this.split(from).join(to);}

function $(str){if(str == "body"){if(IE){return document.body;}else{return document.documentElement;}}else{	return document.getElementById(str);}}
function css(div,c){if((typeof c).toLowerCase() == "string"){div.className = c;}else{var d = div;for(var i in c){d.style[i] = c[i];}}}
function dn(div){css(div,{display:"none"})}
function db(div){css(div,{display:"block"})}
function vv(div){css(div,{visibility:"visible"})}
function vh(div){css(div,{visibility:"hidden"})}
function inner(div,c){div.innerHTML = c;}
function outer(div,c){div.outerHTML = c;}
function innerPlus(div,c){div.innerHTML += c;}
function getSwfRef(id){try{if(IE){return $(id+"_ie");}	else{return $(id+"_other");}}catch (e){alert("选择的swf容器不存在哦");}}
function swfHTML(id,src,width,height,wmode,flashvars){var html = '<object id="'+id+'_ie" name="'+id+'" width="'+width+'" height="'+height+'" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"><param name="movie" value="'+src+'"><param name="bgcolor" value="#FFFFFF"><param name="AllowFullScreen" value="true"><param name="allowScriptAccess" value="always" /><param name="wmode" value="'+wmode+'" /><param name="FlashVars" value="&'+flashvars+'&"><embed bgcolor="#FFFFFF" id="'+id+'_other" name="'+id+'" width="'+width+'" height="'+height+'" src="'+src+'" FlashVars="&'+flashvars+'&" AllowFullScreen="true" allowScriptAccess="always" wmode="'+wmode+'" type="application/x-shockwave-flash"></embed></object>';return html;}
function defer(a){if((typeof a).toLowerCase() != "function"){var l = a.length;for(var i=0;i<l;i++){__addLoadEvent(a[i]);}}else{__addLoadEvent(a);}}
function center(div){var topDoc = window.self.document;css(div,{display:"block"});var top = (topDoc.documentElement.scrollTop+(topDoc.documentElement.clientHeight-div.offsetHeight)/2)+"px";var left = (topDoc.documentElement.clientWidth-div.offsetWidth)/2+"px";	css(div,{position:"absolute",zIndex:101,top:top,left:left});}
function setMask(alpha){if(!alpha&&alpha!==0){alpha=75}if($("ModalMaskLayer")){}else{var color = "#000";var topDoc = window.self.document;var o = topDoc.createElement("div");var b = topDoc.createElement("div");o.id = "ModalMaskLayer";var height = topDoc.documentElement.scrollHeight+"px";	if(IE){	if(topDoc.documentElement.scrollHeight<topDoc.documentElement.clientHeight){	height = topDoc.documentElement.clientHeight + "px";	}topDoc.body.appendChild(o);}else{topDoc.documentElement.appendChild(o);	}css(b,{position:"absolute",backgroundColor:color,width:"100%",height:height});setAlpha(b,alpha);css(o,{zIndex:100,position:"absolute",top:0,left:0,width:"100%",height:"100%",textAlign:"left"});o.appendChild(b);}}
function removeMask(){try{if($("ModalMaskLayer"))	{var parent=$("body");parent.removeChild($("ModalMaskLayer"));}}catch(ex){}}
function setAlpha(div,alpha){if(IE){css(div,{position:"absolute",filter:"alpha(opacity="+alpha+")"});}else{css(div,{position:"absolute",opacity:alpha/100});}}
function addEvt(div,type,handler){Event.__addEventHandler(div,type,handler);}
function removeEvt(div,type,handler){Event.__removeEventHandler(div,type,handler);}
function place(div,x,y,pos){if(pos){css(div,{position:pos})};var topDoc = window.self.document;if((y+div.offsetHeight + 5) > (topDoc.documentElement.scrollTop +topDoc.documentElement.clientHeight)){y = topDoc.documentElement.scrollTop +topDoc.documentElement.clientHeight - 5 - div.offsetHeight;}if((x+div.offsetWidth + 5) > (topDoc.documentElement.scrollLeft +topDoc.documentElement.clientWidth)){x = topDoc.documentElement.scrollLeft +topDoc.documentElement.clientWidth - 5 - div.offsetWidth;}css(div,{left:x+"px",top:y+"px"});}
function getPos(elementId) {var el = document.getElementById(elementId);if(el.parentNode === null || el.style.display == 'none') {return false;}var parent = null;var pos = [];var box;if(el.getBoundingClientRect){box = el.getBoundingClientRect();var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);var scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);return {x:box.left + scrollLeft, y:box.top + scrollTop};}else{pos = [el.offsetLeft, el.offsetTop];parent = el.offsetParent;if (parent != el) {while (parent) {pos[0] += parent.offsetLeft;pos[1] += parent.offsetTop;parent = parent.offsetParent;}}}if (el.parentNode) {parent = el.parentNode;} else {parent = null;}while (parent && parent.tagName != 'body' && parent.tagName != 'html') {pos[0] -= parent.scrollLeft;pos[1] -= parent.scrollTop;if (parent.parentNode) {parent = parent.parentNode;} else {parent = null;}}return {x:pos[0], y:pos[1]};}
function async(source,back,autoRemove,id,charset){id = id||"";autoRemove = autoRemove||false;var b=document.getElementsByTagName("head")[0];var c=document.createElement("script");c.type="text/javascript";c.charset = charset || "utf-8";if(id){c.id = id;}var q = (source.indexOf("?")>=0)?"&":"?";c.src=source+q+"backFunc="+back;var remove=function(){c.onload=null;var h=c.parentNode;h.removeChild(c);delete c;};var e=function(h){var j=(h?h:window.event).target?(h?h:window.event).target:(h?h:window.event).srcElement;if(j.readyState=="loaded"||j.readyState=="complete"){j.onreadystatechange=null;	if(autoRemove){remove();}}};if(navigator.product=="Gecko"&&autoRemove){c.onload=remove;}else{c.onreadystatechange=e;}b.appendChild(c);}
function getCookie(name){var cookieValue = "";var search = name + "=";if(document.cookie.length > 0){	offset = document.cookie.indexOf(search);	if(offset != -1){offset += search.length;	end = document.cookie.indexOf(";", offset);if (end == -1) end = document.cookie.length;cookieValue = unescape(document.cookie.substring(offset, end));}}return cookieValue;}
function setCookie(name, value, hours){var expire = "";var domain = "; domain=56.com; path=/";if(hours != "") {expire = new Date((new Date()).getTime() + hours * 60 * 60 * 1000);expire = "; expires=" + expire.toGMTString();}document.cookie = name + "=" + escape(value) + expire + domain;};
function numberToHtml(_number){var _number_16 = _number.toString(16);if(_number_16.length % 3 == 1){	return "#00"+_number_16;}if(_number_16.length % 3 == 2){return "#0"+_number_16;}return "#"+ _number_16;}

var IE = navigator.userAgent.indexOf("compatible") > -1 && navigator.userAgent.indexOf("MSIE") > -1;
var O_URL = __getUrlObj();