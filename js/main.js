/* =================================
------------------------------------
	Food Blog - Web Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

	/*------------------------
		subscribe hide for now
	--------------------*/
	$('.header-top').hide();
	$('.header-bottom').css('border','1px solid #ff2a6b');


	/*------------------
		subscribe logic
	--------------------*/
	$('#subscribe').on('click', function(e){
		e.preventDefault();
		$.ajax('https://foodiebells-83042.firebaseapp.com/subscribe/',{
			type:'POST',
			data: JSON.stringify({
				"firstName":$('#subscriberName').val(),
				"email":$('#subscriberEmail').val() 
				}),
			success: function(data){
				$('#subscriberName').val("");
				$('#subscriberEmail').val("");
				$('.subscriber-greeting').html(`<p style="color:green">${data}</p>`);
				$('.subscriber-greeting').fadeOut(3000);
			},
			failure: function(errMsg) {
				$('.subscriber-greeting').html(`<p style="color:red">Error + ${errMsg}`);
				$('.subscriber-greeting').fadeOut(3000);
			}
			});
		});



	/*------------------
		Gallery item
	--------------------*/
	$('.gs-item').each(function() {
		var item_w = $(this).width();
		$(this).height(item_w);
	});

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});



	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        mouseDrag: false,
        autoplay: true,
        animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
    	navText: [' ', '<i class="fa fa-angle-right"></i>'],
    });

	
	/*------------------
		Add Carousel
	--------------------*/
    $('.add-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        autoplay: true,
        animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
    });



	/*------------------
		Gallery Carousel
	--------------------*/
    $('.gallery-slider').owlCarousel({
		loop:true,
		autoplay:true,
		nav:false,
		dots: true,
		responsive:{
			0:{
				items:4
			},
			990:{
				items:5
			},
			1200:{
				items:6
			}
		}
	});


	/*------------------
		Review Slider
	--------------------*/
	$('.review-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        autoplay: true,
    });



})(jQuery);

