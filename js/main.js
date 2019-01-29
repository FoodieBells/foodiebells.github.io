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


	/*----------------
		loading posts
	-------------------*/

$.ajax('https://foodiebells-83042.firebaseapp.com/recipes/', {
		type: 'GET',  // http method,
    	success: function (data, status, xhr) {
			var recipes = "";
			var i;
			for (i in data){
				recipes += '<div class="col-lg-4 col-md-6">'
					+'<div class="recipe">'
						+'<img src="img/recipes/11.jpg" alt="">'
						+'<div class="recipe-info-warp">'
						+'<div class="recipe-info">'
						+'<h3>' + data[i].data.name + '</h3>'
								+'<div class="rating">'
								+'<i class="fa fa-star"></i>'
								+'<i class="fa fa-star"></i>'
								+'<i class="fa fa-star"></i>'
								+'<i class="fa fa-star"></i>'
								+'<i class="fa fa-star is-fade"></i>'
								+'</div>'
								+'</div>'
								+'</div>'
								+'</div>'
								+'</div>';
			}
        	$('.myrecipes').append(recipes);
    	},
    	error: function (jqXhr, textStatus, errorMessage) {
            $('.myrecipes').append('Error' + errorMessage);
    	}
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

