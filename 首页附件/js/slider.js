$(function(){
	var len=$("#number li").length;
	var index=0;
	var timer;
	$("#number li").mouseover(function(){
		index=$("#number li").index(this);
		show(index);		
	}).eq(0).trigger("mouseover");
	
	$("#slider").hover(function(){
		clearTimeout(timer);
	},function(){
		timer=setInterval(function(){
			show(index);
			index++;
			if(index==len)
				index=0;
			
		},3000);
	}).trigger("mouseleave");
	
 })
function show(index)
{
	var wid=$("#slider").width();
	$("#show").stop(true,false).animate({left:-wid*index},1000);
	$("#number li").removeClass("on").eq(index).addClass("on");
}