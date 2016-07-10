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

$('.lang-btn').click(function(){
	$('.gr-v').toggle(1000);
	$('.eng-v').toggle(1000);
});



  //Toggle visibility for Greek verses by Class
  //http://jsfiddle.net/krY56/1/ toggle display:none

  //$(document).ready(function(){

//$("gr-v").hide();

  //$("gr-en").click(function(){

    //$("gr-v").toggle();

  //});

//});

	//Give a parallax effect on the .hero, but the stacking order needs work to hide the edges.
	//$(window).scroll(function(){
		//var wScroll = $(this).scrollTop();

		//$('.hero').css({
			//'transform' : 'translate(0px, '+ wScroll /3 +'%)'
		//});
	//});
