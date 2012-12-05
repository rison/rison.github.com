var works = 
[
	["work_thumb_470_6.gif","Camera Face Foam","Aug 2010","face_foam.html"],
	["work_thumb_470_3.gif","Pixas Editor","Sep 2012 - Current","pixas_editor.html"],
	["work_thumb_470_1.gif","ActionScript Engine : Pixas","Dec 2010 - Current","pixas.html"],
	["work_thumb_470_4.gif","Pixel Text Generator","Feb 2011","pixel_text.html"],
	["work_thumb_470_2.gif","Uncle Big's Adventure","Aug 2012","uncle.html"]
];
function initWorkList()
{
	var html = "";
	for(var i=0;i<works.length;i++)
	{
		html += '<li class="l-inline l-relative img-checker work-single-size '+ (i%2 == 1?'work-nth-2n':'work-nth-1n') +'"><img class="work-single-size" src="images/'+ works[i][0] +'"></img></div><div id="Fade_'+ i +'" class="work-l-black work-single-size"></div><ul id="WorkMsg_'+i+'" class="work-msg-ul"><p class="work-msg-1p">'+works[i][1]+'</p><p class="work-msg-2p">'+works[i][2]+'</p></ul><img index="'+ i +'" id="Btn_'+ i +'" class="work-border" src="images/work_frame.gif"></img></li>';
	}
	nosir.inner("WorkList",html);
	for(var i=0;i<works.length;i++)
	{
		var btn = nosir.$("Btn_"+i);
		nosir.alpha("Fade_"+i,0);
		nosir.addEvent(btn, "mouseover", onThumbOver);
		nosir.addEvent(btn, "mouseout", onThumbOut);
		nosir.addEvent(btn, "mousedown", onThumbDown);
	}
}
function onThumbDown()
{
	var index = nosir.getEvent().target.getAttribute("index");
	window.location.href = works[index][3];
}
function onThumbOver()
{
	var index = nosir.getEvent().target.getAttribute("index");
	nosir.db("WorkMsg_"+ index);
	nosir.fade("Fade_"+index,95,0.4);
}
function onThumbOut()
{
	var index = nosir.getEvent().target.getAttribute("index");
	nosir.dn("WorkMsg_"+ index);
	nosir.fade("Fade_"+index,0,0.4);
}
initWorkList();