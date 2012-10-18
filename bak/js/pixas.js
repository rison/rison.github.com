var html = "";

for(var i = 0;i<content.length;i++)
{
	if(now_place == content[i].id)
	{

		html += '<li><span class="block" >'+content[i].txt+'</span></li>';
	}
	else
	{
		if(content[i].type == "txt")
		{
			html += '<li class="txt"><a class="blockA" href="'+content[i].href+'" target="'+content[i].target+'">'+content[i].txt+'</a></li>';
		}
		else
		{
			html += '<li><a href="'+content[i].href+'" target="'+content[i].target+'"><img src="'+content[i].src+'"></img></a></li>';
		}
	}	
}
inner($("DivContent"),html);

function buildMenu()
{
	var html = "";

	for(var i = 0;i<pixas.length;i++)
	{
		if(menu.now == pixas[i].id)
		{
			html += '<li><span class="block blockMenu" >'+pixas[i].txt+'</span></li>';
		}
		else
		{
			html += '<li class="txt"><a class="blockA blockMenu" href="#'+pixas[i].id+'" onclick=h2j_changeSubject("'+ pixas[i].id +'");>'+pixas[i].txt+'</a></li>';
		}	
	}

	inner($("DivMenu"),html);
}

function checkHash()
{
	for(var i=0;i<pixas.length;i++)
	{
		if(self.location.hash == "#"+pixas[i].id)
		{
			menu.now = pixas[i].id;
		}
	}
}

function buildSubject()
{
	for(var i = 0;i<pixas.length;i++)
	{
		dn($("DivSubject_"+pixas[i].id));
	}
	db($("DivSubject_"+menu.now));
}

function h2j_changeSubject(_id)
{
	menu.now = _id;
	buildMenu();
	buildSubject();
}

var menu = {now:"about"};
checkHash();
buildMenu();
buildSubject();