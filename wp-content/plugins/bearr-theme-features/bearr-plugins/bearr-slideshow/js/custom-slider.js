//Use Strict Mode
(function ($) {
    "use strict";

    //Begin - Window Load
    $(window).load(function () {

    	var mainSlider = $(".main-carousel");

    	mainSlider.on('initialized.owl.carousel', function(e){
        	$('.slide-title').addClass('active');
        	$('.slide-icon').addClass('active');
        	$('.slide-text').addClass('active');
        	$('.featured-slide .primary-btn').addClass('active');
        }); 
    	
        mainSlider.owlCarousel({
            items: 1,
            nav: true,
            loop: false,
            autoplay:true,
            autoplayTimeout:8000,
            navText: ['&#xf053;','&#xf054;']  
        });

        mainSlider.on('changed.owl.carousel', function(e){        	
        	$('.slide-title').removeClass('active');
        	$('.slide-icon').removeClass('active');
        	$('.slide-text').removeClass('active');
        	$('.featured-slide .primary-btn').removeClass('active');	
        	return false;
        });
         

        mainSlider.on('translated.owl.carousel', function(e){
        	$('.slide-title').addClass('active');
        	$('.slide-icon').addClass('active');
        	$('.slide-text').addClass('active');
        	$('.featured-slide .primary-btn').addClass('active');
        	return false;
        });       

    });

    //End - Use Strict mode
})(jQuery);