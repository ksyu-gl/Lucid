// тень шапки
$(window).scroll(function() {
  $('header').toggleClass('scroll', $(this).scrollTop() > 100);
});

// меню-бургер
$('.menu__icon').on('click', function(){
	$('.list').toggleClass(' active');
});

// паралакс
$(window).scroll(function() {
  parallax();
});

function parallax() {
  var scrolled = $(window).scrollTop();
  $('.bg').css('top', - (scrolled*0.1) + 'px');
  $('.banner__content').css('top', 50 + (scrolled*0.1) + '%');
	if ($(window).width() < 768) {
		$('.banner__content').css('opacity', 1);
	} else {
		$('.banner__content').css('opacity', 1 - (scrolled*0.01)/5);
	}
}