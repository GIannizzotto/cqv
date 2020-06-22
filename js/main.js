$(document).ready(function(){

$(window).scroll(function(){
	var scrolling = $(this).scrollTop();
	if(scrolling>950){
		$('.principal-nav nav').addClass('navbar-fixed-top');
	} else {
		$('.principal-nav nav').removeClass('navbar-fixed-top');
	}
});

$('.servicio-1').click(function(){
	$('.menu-1').slideDown();
	$('.menu-2, .menu-3, .menu-4, .menu-5, .menu-6').slideUp();
});

$('.menu-1').click(function(){
	$('.menu-1').slideUp();
});

$('.servicio-2').click(function(){
	$('.menu-2').slideDown();
	$('.menu-1, .menu-3, .menu-4, .menu-5, .menu-6').slideUp();
});

$('.menu-2').click(function(){
	$('.menu-2').slideUp();
});

$('.servicio-3').click(function(){
	$('.menu-3').slideDown();
	$('.menu-1, .menu-2, .menu-4, .menu-5, .menu-6').slideUp();
});

$('.menu-3').click(function(){
	$('.menu-3').slideUp();
});

$('.servicio-4').click(function(){
	$('.menu-4').slideDown();
	$('.menu-1, .menu-2, .menu-3, .menu-5, .menu-6').slideUp();
});

$('.menu-4').click(function(){
	$('.menu-4').slideUp();
});

$('.servicio-5').click(function(){
	$('.menu-5').slideDown();
	$('.menu-1, .menu-2, .menu-3, .menu-4, .menu-6').slideUp();
});

$('.menu-5').click(function(){
	$('.menu-5').slideUp();
});

$('.servicio-6').click(function(){
	$('.menu-6').slideDown();
	$('.menu-1, .menu-2, .menu-3, .menu-4, .menu-5').slideUp();
});

$('.menu-6').click(function(){
	$('.menu-6').slideUp();
});

$('a[href^="#home"],a[href^="#section-2"],a[href^="#section-3"],a[href^="#section-4"],a[href^="#section-5"],a[href^="#caso-1"],a[href^="#caso-2"],a[href^="#caso-3"],a[href^="#caso-4"],a[href^="#caso-5"],a[href^="#caso-6"],a[href^="#caso-7"],a[href^="#caso-8"],a[href^="#caso-9"],a[href^="#caso-10"],a[href^="#caso-11"],a[href^="#caso-12"],a[href^="#caso-13"],a[href^="#caso-14"],a[href^="#caso-15"],a[href^="#caso-16"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });

  $('html, body').stop().animate({
     'scrollTop': $target.offset().top
  }, 900, 'swing');

$('.carousel-section-1').carousel({

});

});
