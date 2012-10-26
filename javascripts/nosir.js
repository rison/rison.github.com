/**
* @author max
* @see risonhuang.com
*/
var nosir = {version:"2.1",debug:false};

/**
* browser user agent
*/
nosir.ua = (function()
{
	var ua = navigator.userAgent.toLowerCase();
	if(ua.indexOf("msie")>0)
	{
		return "ie";
	}
	else if(ua.indexOf("firefox")>0)
	{
		return "firefox";
	}
	else if(ua.indexOf("chrome")>0)
	{
		return "chrome";
	}
	else if(ua.indexOf("safari")>0)
	{
		return "safari";
	}
	else if(ua.indexOf("opera")>0)
	{
		return "opera";
	}
	else
	{
		return "other";
	}
})();

/**
* if IE core browser like IE, MyIE, Maxthon
*/
nosir.ie = nosir.ua == "ie";

/**
* page url param object after ?
*/
nosir.uo = (function() 
{
    var href = self.location.href.split("#")[0];
    var all = href.substring(href.indexOf("?") + 1);
    var a = all.split("&");
    var o = {};
    for (var i = 0; i < a.length; i++) 
	{
        var b = a[i].split("=");
        o[b[0]] = b[1];
    }
    o.hash = self.location.hash.split("#").join("");
    return o;
})();

/**
* defer after load over
* 
* @param   a - array for all functions to be defer loaded
* @example	defer([func1,func2]);
* 
*/
nosir.__addLoadEvent = function(func) 
{
    var __oldonload = window.onload;
    if (typeof window.onload != 'function') 
	{
        window.onload = func;
    } 
	else 
	{
        window.onload = function() 
		{
            if (__oldonload) 
			{
                __oldonload();
            }
            func();
        }
    }
};
nosir.defer = function(a) 
{
    if ((typeof a).toLowerCase() != "function") 
	{
        var l = a.length;
        for (var i = 0; i < l; i++) 
		{
            nosir.__addLoadEvent(a[i]);
        }
    }
	else
	{
        nosir.__addLoadEvent(a);
    }
};

/**
* get element by id
*
* @param	id - id string
* @return	div ref
*/
nosir.$ = function(id)
{
    if (id == "body")
	{
        return document.body;
    }
	else 
	{
		if(nosir.debug && !document.getElementById(id))
		{
			alert("Error : nosir.$ can't select \"" + id + "\"");
		}
        return document.getElementById(id);
    }
};

nosir.__trimDiv = function (div)
{
	if ((typeof div).toLowerCase() == "string")
	{
        div = nosir.$(div);
    }
	return div;
};

/**
* define multiple css properties once
*
* @param	div - div ref
* @param   c - className/css property
* 
* @example 
* css("divID","myClass");
* css(div,"myClass");
* css(div,{display:"block",margin:"5px"});
* 
*/
nosir.css = function(div, c) 
{
	div = nosir.__trimDiv(div);
    if ((typeof c).toLowerCase() == "string")
	{
        div.className = c;
    } 
	else
	{
        var d = div;
        for (var i in c)
		{
            d.style[i] = c[i];
        }
    }
};

/**
* init hack and defer
*/
nosir.__init = (function()
{
    nosir.css(nosir.$("body"), {margin: 0,padding: 0});
    //setTimeOut:hack ie scroll bar position restore bug
    //scrollTo(0,1):hack ff scroll twice bug
    window.setTimeout(function()
	{
        //window.scrollTo(0, 1);
		//window.scrollTo(0, 0);
    }, 100);
})();

/**
* private event register with add & remove event listener
*
* @param	div - div ref
* @param	type - event type string
* @param	handler - handle function ref
* 
* @example
* var evt = nosir.getEvent();
* nosir.addEvent($("Div"), "mousedown", listener) ;
* nosir.removeEvent($("Div"), "mousedown", listener) ;
*/
nosir.__evt = {};
nosir.__evt.__addEventHandler = function(target, type, handler)
{
    try
	{
        if (target.addEventListener)
		{
            target.addEventListener(type, handler, false);
        } 
		else
		{
			if (target.attachEvent)
			{
				target.attachEvent("on" + type, handler);
			}
			else
			{
				target["on" + type] = handler;
			}
		}
    } catch(e){};
};
nosir.__evt.__removeEventHandler = function(target, type, handler)
{
    if (target.removeEventListener)
	{
        target.removeEventListener(type, handler, false);
    }
	else
	{
		if (target.detachEvent)
		{
			target.detachEvent("on" + type, handler);
		}
		else
		{
			target["on" + type] = null;
		}
	}
};
nosir.__evt.__formatEvent = function(oEvent)
{
    if (nosir.ie)
	{
        oEvent.charCode = (oEvent.type == "keypress" || oEvent.type == "keydown") ? oEvent.keyCode: 0;
        oEvent.eventPhase = 2;
        oEvent.isChar = (oEvent.charCode > 0);
        oEvent.pageX = oEvent.clientX + document.documentElement.scrollLeft;
        oEvent.pageY = oEvent.clientY + document.documentElement.scrollTop;
        oEvent.preventDefault = function()
		{
            this.returnValue = false;
        };
        if (oEvent.type == "mouseout")
		{
            oEvent.relatedTarget = oEvent.toElement;
        }
		else
		{
			if (oEvent.type == "mouseover")
			{
				oEvent.relatedTarget = oEvent.fromElement;
			}
		}
        oEvent.stopPropagation = function()
		{
            this.cancelBubble = true;
        };
        oEvent.target = oEvent.srcElement;
        oEvent.time = (new Date).getTime();
    }
    return oEvent;
};
nosir.getEvent= function()
{
    if (window.event)
	{
        return nosir.__evt.__formatEvent(window.event);
    } 
	else
	{
        return nosir.getEvent.caller.arguments[0];
    }
};
nosir.addEvent = function(div, type, handler)
{
	div = nosir.__trimDiv(div);
    nosir.__evt.__addEventHandler(div, type, handler);
};
nosir.removeEvent = function removeEvt(div, type, handler)
{
	div = nosir.__trimDiv(div);
    nosir.__evt.__removeEventHandler(div, type, handler);
};

/**
* display none element
*
* @param	div - div ref
*/
nosir.dn = function(div)
{
    nosir.css(div, {display: "none"});
};

/**
* display block element
*
* @param	div - div ref
*/
nosir.db = function(div)
{
    nosir.css(div, {display: "block"});
};

/**
* visibility visible element
*
* @param	div - div ref
*/
nosir.vv = function(div) 
{
    nosir.css(div, {visibility: "visible"});
};

/**
* visibility hidden element
*
* @param	div - div ref
*/
nosir.vh = function(div)
{
    nosir.css(div, {visibility: "hidden"});
};

/**
* replace inner HTML
* 
* @param   div - container ref or container's ID
* @param   c - content
*/
nosir.inner = function(div, c)
{
	div = nosir.__trimDiv(div);
    div.innerHTML = c;
};

/**
* replace outer HTML
* 
* @param   div - container ref or container's ID
* @param   c - content
*/
nosir.outer = function(div, c)
{
	div = nosir.__trimDiv(div);
    div.outerHTML = c;
};

/**
* append HTML
* 
* @param   div - container ref or container's ID
* @param   c - content
*/
nosir.append = function(div, c)
{
	div = nosir.__trimDiv(div);
    div.innerHTML += c;
};

/**
* add swf
* 
* @param div - container or container's ID
* @param id - swf id
* @param src - swf address
* @param width - width+"px" or pec %
* @param height - height +"px" or pec %
* @param wmode - mode
* @param flashvars - init vars
*/
nosir.swf = function(div, id, src, width, height, wmode, flashvars)
{
	div = nosir.__trimDiv(div);
    var html = '<object id="' + id + '_msie" name="' + id + '" width="' + width + '" height="' + height + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"><param name="movie" value="' + src + '"><param name="bgcolor" value="#FFFFFF"><param name="allowFullScreen" value="true"><param name="allowScriptAccess" value="always" /><param name="wmode" value="' + wmode + '" /><param name="FlashVars" value="&' + flashvars + '&"><embed bgcolor="#FFFFFF" id="' + id + '_other" name="' + id + '" width="' + width + '" height="' + height + '" src="' + src + '" FlashVars="&' + flashvars + '&" allowFullScreen="true" allowScriptAccess="always" wmode="' + wmode + '" type="application/x-shockwave-flash"></embed></object>';
	nosir.inner(div, html);
    return html;
};

/**
* get swf ref for communication between js and as
* 
* @param   id - swf id
* @return   swf ref - must be added before by nosir.swf();
*/
nosir.$swf = function(id) 
{
	if (nosir.ie)
	{
		return nosir.$(id + "_msie");
	}
	else
	{
		return nosir.$(id + "_other");
	}
};

/**
* set div alpha
* 
* @param	div - container or contain's ID
* @param	alpha - target alhpa
*/
nosir.alpha = function(div,alpha)
{
	div = nosir.__trimDiv(div);
	if(nosir.ie)
	{
		nosir.css(div,{zoom:1,filter:"alpha(opacity="+alpha+")"});
	}
	else
	{
		nosir.css(div,{opacity:alpha/100});
	}
	div.setAttribute("alpha",alpha);
};

/**
* alpha fade
* 
* @param  div - container or container's ID
* @param  alpha - fade to alpha value
* @param  speed - fade speed(must<1)
*/
nosir.__alphaIntervalStack = [];
nosir.fade = function(div,alpha,speed)
{
	div = nosir.__trimDiv(div);

	if(speed > 1)
	{
		alert("speed must <= 1");
		return;
	}

	for (i=0;i<nosir.__alphaIntervalStack.length;i++)
	{
		if(nosir.__alphaIntervalStack[i][0]==div)
		{
			window.clearInterval(nosir.__alphaIntervalStack[i][1]);
			nosir.__alphaIntervalStack.splice(i,1);
			break;
		};
	}

	try
	{
		var now_alpha = (parseInt(div.getAttribute("alpha"))>=0?parseInt(div.getAttribute("alpha")):100);
	}
	catch (e)
	{
		now_alpha = 100;
	}

	var timer = window.setInterval(function()
	{
		if(Math.abs(now_alpha - alpha)<=1)
		{
			window.clearInterval(timer);
			//fix 0 totally hidden
			if(alpha == 0)
			{
				nosir.alpha(div,0);
			}
		}
		else
		{
			now_alpha += Math.floor((alpha - now_alpha) * speed);
			nosir.alpha(div,now_alpha);
		}	
	}, 30);
	nosir.__alphaIntervalStack.push([div,timer]);
};