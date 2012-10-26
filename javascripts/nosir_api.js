nosir.addEvent("BtnTop", "click", onBtnTop);
nosir.addEvent("BtnRun_ua", "click", onBtnRun_ua);
nosir.addEvent("BtnRun_ie", "click", onBtnRun_ie);
nosir.addEvent("BtnRun_dn", "click", onBtnRun_dn);
nosir.addEvent("BtnRun_db", "click", onBtnRun_db);
nosir.addEvent("BtnRun_vv", "click", onBtnRun_vv);
nosir.addEvent("BtnRun_vh", "click", onBtnRun_vh);
nosir.addEvent("BtnRun_css", "click", onBtnRun_css);
nosir.addEvent("BtnRun_swf", "click", onBtnRun_swf);
nosir.addEvent("BtnRun_alpha", "click", onBtnRun_alpha);
nosir.addEvent("BtnRun_fade", "click", onBtnRun_fade);

nosir.addEvent("BtnReset_css", "click", onBtnReset_css);
nosir.addEvent("BtnReset_swf", "click", onBtnReset_swf);
nosir.addEvent("BtnReset_alpha", "click", onBtnReset_alpha);
nosir.addEvent("BtnReset_fade", "click", onBtnReset_fade);

nosir.addEvent("Testing_addEvent", "mouseover", onTestingAEMouseOver);
nosir.addEvent("Testing_addEvent", "mouseout", onTestingAEMouseOut);

function onTestingAEMouseOver(){nosir.css("Testing_addEvent",{cursor:"default"}); nosir.fade("Testing_addEvent", 0, 0.2); }
function onTestingAEMouseOut(){ nosir.fade("Testing_addEvent", 100, 0.2); }

nosir.addEvent("Testing_getEvent", "click", onTestingGEMouseOver);
function onTestingGEMouseOver() 
{
	var evt = nosir.getEvent();
	alert("container id : " + evt.target.id);
}


function onBtnTop()
{
	window.scroll(0);
}
function onBtnRun_ua()
{
	alert(nosir.ua);
}
function onBtnRun_ie()
{
	alert(nosir.ie);
}
function onBtnRun_vv()
{
	nosir.vv("Testing_vh_vv");
}
function onBtnRun_vh()
{
	nosir.vh("Testing_vh_vv");
}
function onBtnRun_dn()
{
	nosir.dn("Testing_dn_db");
}
function onBtnRun_db()
{
	nosir.db("Testing_dn_db");
}
function onBtnRun_css()
{
	nosir.css(nosir.$("Testing_css"), {fontSize:"12px", backgroundColor:"#FFF"});
}
function onBtnRun_swf()
{
	nosir.css("Testing_swf",{padding:0,height:"360px"});
	nosir.swf("Testing_swf", "Testing_swf", "http://www.youtube.com/v/7oBQnIumBRY", "100%", "100%", "opaque", "version=3&from=risonhuang.com");
}
function onBtnRun_alpha()
{	
	nosir.alpha("Testing_alpha", 20);
}
function onBtnRun_fade()
{	
	nosir.fade("Testing_fade", 0, 0.2);
}

function onBtnReset_css()
{	
	nosir.css("Testing_css", {fontSize:"14px", backgroundColor:"#e5e5e5"});
}
function onBtnReset_swf()
{	
	nosir.css("Testing_swf",{paddingTop:"3px", paddingRight: "10px", paddingBottom:"1px", paddingLeft:"10px",height:"25px"});
	nosir.inner("Testing_swf", "This is the container for testing swf");
}
function onBtnReset_alpha()
{	
	nosir.alpha("Testing_alpha", 100);
}
function onBtnReset_fade()
{	
	nosir.fade("Testing_fade", 100, 0.2);
}


