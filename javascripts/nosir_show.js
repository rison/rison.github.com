nosir.addEvent("BtnRunFadeOut", "click", onFadeOut);
nosir.addEvent("BtnResetFadeOut", "click", onReset);
function onFadeOut()
{
	nosir.fade( nosir.$("Logo") , 0 , 0.3 );
}
function onReset()
{
	nosir.fade( nosir.$("Logo") , 100 , 0.3 );
}