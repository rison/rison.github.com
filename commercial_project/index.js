var works = 
[
	["cp_thumb_player.jpg","Flash Video Player","2005 - 2012","cp_player.html"],
	["cp_thumb_p2v.png","Photo To Video Platform","2006 - 2012","cp_p2v.html"],
	["cp_thumb_live.jpg","Online Record & Broadcast","2005 - 2012","cp_live.html"],
	["cp_thumb_magazine.gif","Online Magazine","2006 - 2007","cp_magazine.html"],
	["cp_thumb_nosir.gif","Nosir JavaScript Library","2009 - 2012","cp_nosir.html"],
	["cp_thumb_widget.jpg","Photo Display Widget","2008 - 2011","cp_widget.html"],
	["cp_thumb_campaign.jpg","Campaign Minisites","2007 - 2011","cp_campaign.html"]	
];


function initWorkList()
{
	var html = "";
	for(var i=0;i<works.length;i++)
	{
		html += '<li class="l-inline l-relative img-checker work-single-size '+ (i%2 == 1?'work-nth-2n':'work-nth-1n') +'"><img class="work-single-size" src="commercial_project/images/'+ works[i][0] +'"></img></div><div id="Fade_'+ i +'" class="work-l-black work-single-size"></div><ul id="WorkMsg_'+i+'" class="work-msg-ul"><p class="work-msg-1p">'+works[i][1]+'</p><p class="work-msg-2p">'+works[i][2]+'</p></ul><img index="'+ i +'" id="Btn_'+ i +'" class="work-border" src="images/work_frame.gif"></img></li>';
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