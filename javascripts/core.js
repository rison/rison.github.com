function initNav()
{
	nosir.addEvent("NavWork", "mousedown", onNavWork);
	nosir.addEvent("NavAbout", "mousedown", onNavAbout);
	if(nosir.uo.hash == "about")
	{
		onNavAbout();
	}
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
		window.location.href = "index.html";
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
		window.location.href = "index.html#about";
	}

}
function initSns()
{
	var sns = [["github","https://github.com/rison"],["twitter","https://twitter.com/rison"],["wordpress","http://risonhuang.wordpress.com/"]];
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
initNav();
initSns();


//nosir.append(nosir.$("Debug"),"_"+7);
//add fanfou