function initNav()
{
	nosir.addEvent("NavWork", "mousedown", onNavWork);
	nosir.addEvent("NavAbout", "mousedown", onNavAbout);
	if(nosir.uo.hash == "about")
	{
		onNavAbout();
	}
	try{nosir.addEvent("NavCommercial", "mousedown", onNavCommercial);}catch(e){}
}
function onNavCommercial()
{
	window.location.href = "http://risonhuang.com/commercial_project.html";
}
function onNavWork()
{
	nosir.css("NavWork","nav-unactive");
	nosir.css("NavAbout","nav-active");
	try
	{
		nosir.dn("About");
		nosir.db("Work");
	}
	catch (e)
	{
		window.location.href = "http://risonhuang.com";
	}
}
function onNavAbout()
{
	nosir.css("NavWork","nav-active");
	nosir.css("NavAbout","nav-unactive");
	try
	{
		nosir.dn("Work");
		nosir.db("About");
	}
	catch (e)
	{
		window.location.href = "http://risonhuang.com/#about";
	}

}
function initSns()
{
	var sns = [["github","https://github.com/nosir"],["twitter","https://twitter.com/rison"],["wordpress","http://risonhuang.wordpress.com/"]];
	var html = "";
	for(var i=0;i<sns.length;i++)
	{
		html += '<a href="'+ sns[i][1] +'" class="a-no-hover" target="_blank"><img id="Sns_'+ i +'" index="'+ i +'" src="images/'+ sns[i][0] +'.gif"></img></a>';
	};
	nosir.inner("Sns",html);
	for(var i=0;i<sns.length;i++)
	{
		var btn = "Sns_" + i;
		nosir.alpha(btn,50);
		nosir.addEvent(btn, "mouseover", onSnsOver);
		nosir.addEvent(btn, "mouseout", onSnsOut);
	};	
}
function onSnsOver()
{
	var index = nosir.getEvent().target.getAttribute("index");
	nosir.fade("Sns_"+index,100,0.3);
}
function onSnsOut()
{
	var index = nosir.getEvent().target.getAttribute("index");
	nosir.fade("Sns_"+index,50,0.3);
}

function initStat()
{
	document.write
	(
		"<scri"+"pt type='text/javascript'>"+
		"var _gaq = _gaq || [];"+
		"_gaq.push(['_setAccount', 'UA-35661737-1']);"+
		"_gaq.push(['_setDomainName', 'risonhuang.com']);"+
		"_gaq.push(['_trackPageview']);"+
		"(function() {"+
		"var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;"+
		"ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';"+
		"var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);"+
		"})();"+
		"</scr"+"ipt>"
	);
}
initNav();
initSns();
initStat();

//nosir.append(nosir.$("Debug"),"_"+7);
