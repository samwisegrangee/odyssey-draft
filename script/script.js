$(document).ready(function(){

  //Smooth scrolling between ""#anchor" links.
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

});
//Toggle visibility for Greek verses by Id
function toggleDiv(divId) {
	$("#"+divId).toggle(1000);
};
//Fade out all English verses then fadeIn Greek verses (by class).
$('.gr-btn').click(function(){
	$('.eng-v').fadeOut(500, function(){
		$('.gr-v').fadeIn(1000);
	});
});
//Fade out all English verses then fadeIn Greek verses (by class).
$('.eng-btn').click(function(){
	$('.gr-v').fadeOut(500, function(){
		$('.eng-v').fadeIn(1000);
	});
});






	//Give a parallax effect on the .hero, but the stacking order needs work to hide the edges.
	//$(window).scroll(function(){
		//var wScroll = $(this).scrollTop();

		//$('.hero').css({
			//'transform' : 'translate(0px, '+ wScroll /3 +'%)'
		//});
	//});
