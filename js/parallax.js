$(function () {
	var top_header = '';

	$(document).ready(function(){
		top_header = $('.parallax-bg');
	});

	$(window).scroll(function () {
		var st = $(window).scrollTop();
		top_header.css({'background-position':"center "+(st*.4)+"px"});
	});
});

$(function () {
	var top_header = '';

	$(document).ready(function(){
		top_header = $('.parallax-item');
	});

	$(window).scroll(function () {
		var st = $(window).scrollTop();
		top_header.css({'margin-top':+(st*1)+"px"});
	});
});
