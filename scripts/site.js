$(document).ready(function(){
	$('.parralax').css('top', ( ($('.parralax').scrollTop() + $('header').height()) - ($(document).scrollTop()) ));
	$('.content').css('top', $('.parralax').height() + $('header').height());

	$(".scroll-down").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".content").offset().top
	    }, 1500);
	});

	$('#hamburger').click(function(){
		var navID = '.primary-nav';				
		$(navID).toggleClass('primary-nav-open');
		$(this).toggleClass('hamburger-open');
		
	});

	$(document).scroll(function(){
		parralexIt();
	});

	$(window).resize(function(){
		$('.parralax').css('top', ( ($('.parralax').scrollTop() + $('header').height()) - ($(document).scrollTop()) ));
		$('.content').css('top', $('.parralax').height() + $('header').height());
	});
	function parralexIt() {
		$('.parralax').css('top', ( ($('.parralax').scrollTop() + $('header').height()) - ($(document).scrollTop()/1.7) ));
	}
});