//Make All BOOK page loads default to an "EN state" ('.eng-btn' pressed)

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
	//Toggle visibility for verses by Id
	function toggleDiv(divId) {
		$("#"+divId).toggle(1000);
	};
	//Fade out all English verses then fadeIn Greek verses (by class).
	//$('.gr-btn').click(function(){
		//$('.eng-v').fadeOut(500, function(){
			//$('.gr-v').fadeIn(1000, function (){
				//$('.eng-v').bind('click', function(e){ //Disables .eng-v's toggle links
			    //e.preventDefault();
			  //});
			//});
		//});
	//});

	//Fade out all Greek verses then fadeIn English verses (by class).
	//$('.eng-btn').click(function(){
		//$('.gr-v').fadeOut(500, function(){
			//$('.eng-v').fadeIn(1000, function(){
			//	$('.eng-v').unbind('click');
			//});
		//});
	//});

	//function DisableLinks(className) {
  //   $('a.'+ className).click(function () {
    //      return false;
     //}); }
//function EnableLinks(className){
  //   $('a.'+ className).click(function () {
    //      return true;
     //});
//Give a parallax effect on the .hero, but the stacking order or the border size needs work to hide the edges.
//$(window).scroll(function(){
	//var wScroll = $(this).scrollTop();


	//$('.hero').css({
		//'transform' : 'translate(0px, '+ wScroll /3 +'%)'
	//});
//});
//$(document).ready(function() {

//  $('#yourdiv').click(function() {
//   $(this).css('background-color', 'blue');
//});

//$(document).click(function(e) {
//   if(!$(e.target).is('#yourdiv'))
//      $('#yourdiv').css('background-color', 'red');
//});

//});
