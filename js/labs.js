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

