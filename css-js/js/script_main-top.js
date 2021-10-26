$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});



$(document).ready(function(){

	$('.label').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});



});

$(document).ready(function(){

	$('.ftr-ico').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});



});

$(document).ready(function(){

	$('.search-top').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});



});

$(document).ready(function() {
	var altura = $('header').offset().top;
	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 50) {
			$('header').addClass('header2');
		} else {
			$('header').removeClass('header2');
			$('header').addClass('header');
		}
	})
});