( function($) {
	
	"use strict";
	   /*---- Wow Initializing ----*/
    /*new WOW().init();*/
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    new WOW().init();
	
	/* ==============================================
		Owl Carousel 1
	=============================================== */		 
	$("#owl1").owlCarousel({
		items : 3,
		lazyLoad : true,
		navigation : false,
		pagination : true
	}); 
	
	/* ==============================================
		Owl Carousel 2
	=============================================== */		 
	$("#owl2").owlCarousel({
		autoplay:true,
		loop:true,
		items :2,
		itemsCustom : false,
		itemsDesktop : [1199,2],
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
		lazyLoad : true,
		navigation : false,
		pagination : true
	}); 	
	
	/* ==============================================
		Owl Carousel 3
	=============================================== */		 
	$("#owl3").owlCarousel({
		items : 6,
		lazyLoad : true,
		navigation : false,
		pagination : false
	});
	
	
	
	/* ==============================================
		Pie Charts
	=============================================== */		
	
	jQuery('#pie-charts').waypoint(function(direction) {			
		jQuery('.chart').easyPieChart({
			barColor: "#4bcdf8",
			onStep: function(from, to, percent) {
				jQuery(this.el).find('.percent').text(Math.round(percent));
			}
		});
		}, {
		offset: function() {
			return jQuery.waypoints('viewportHeight') - jQuery(this).height() + 200;
		}
	});
	
	
	
	/* ==============================================
		TO TOP
	=============================================== */
	jQuery().UItoTop({ easingType: 'easeOutQuart' });
	
	
	//hiding horizontal bar
	javascript:void(document.body.style.setProperty('overflow-x','hidden',''));	
	
	
	
})(jQuery);

