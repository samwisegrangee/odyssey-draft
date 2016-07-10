
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

  //Toggle visibility for Greek verses
  //http://jsfiddle.net/krY56/1/ toggle display:none

  //$(document).ready(function(){

//$("gr-v").hide();

  //$("gr-en").click(function(){

    //$("gr-v").toggle();

  //});

//});

  function toggleDiv(divId) {
    $("#"+divId).toggle(1000);
  }
