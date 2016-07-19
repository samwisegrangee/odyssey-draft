$(document).ready(function(){
	// Sticky nav bar
	var hn = $(".home-nav");

	$(window).scroll(function(){
		if( $(this).scrollTop() > 780 ) {
			hn.addClass("home-nav-scrolled");
		}
		else {
			hn.removeClass("home-nav-scrolled")
		}
	});

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
	//Toggle visibility for verses by Id
	function toggleDiv(divId) {
		$("#"+divId).toggle(1000);
	};
