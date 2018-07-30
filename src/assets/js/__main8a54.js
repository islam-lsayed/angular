jQuery(document).ready(function($) {
	"use strict";
	
	/* window */
	var window_width, window_height, scroll_top;
	
	/* admin bar */
	var adminbar = $('#wpadminbar');
	var adminbar_height = 0;
	
	/* header menu */
	var header = $('#cshero-header');
	var header_top = 0;
	
	var trigger_phone = false;

	/* scroll status */
	var scroll_status = '';
	
	/* For Primary menu fixed  */
	if ($('body').hasClass('atop-primary-menu')) {

	} else {
		jQuery('#cshero-header.header-fixed-page').affix({
			offset: { top: 1, }
		});	
	}


	if ($('.atop-primary-menu').length) {
		$('.atop-primary-menu #cshero-header').sticky({
			topSpacing: 0
		});
	}
	//test resize trigger after 3s
	setTimeout(function(){
		$(window).resize();
	}, 3000);
	/**
	 * window load event.
	 * 
	 * Bind an event handler to the "load" JavaScript event.
	 * @author Fox
	 */
	$(window).load(function() {
		/* get admin bar height */
		adminbar_height = adminbar.length > 0 ? adminbar.outerHeight(true) : 0 ;
		
		/** current scroll */
		scroll_top = $(window).scrollTop();

		/** current window width */
		window_width = $(window).width();
		
		/** current window height */
		window_height = $(window).height();
		
		/* get top header menu */
		header_top = adminbar_height;
		
		/* check sticky menu. */
		if(CMSOptions.menu_sticky == '1'){
			cms_stiky_menu(scroll_top);
		}
		if(trigger_phone == false) {
			portfolio_filter_onphone();
		}
		
		/* check mobile menu */
		cms_mobile_menu();
		
		/* check back to top */
		if(CMSOptions.back_to_top == '1'){
			/* add html. */
			$('body').append('<div id="back_to_top" class="back_to_top"><span class="go_up"><i style="" class="fa fa-arrow-up"></i></span></div><!-- #back-to-top -->');
			cms_back_to_top();
		}
		
		/* page loading. */
		cms_page_loading();
		
		/* check video size */
		cms_image_carousel();
		cms_lightbox_popup();


	});

	/**
	 * reload event.
	 * 
	 * Bind an event handler to the "navigate".
	 */
	window.onbeforeunload = function(){ cms_page_loading(1); }
	
	/**
	 * resize event.
	 * 
	 * Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
	 * @author Fox
	 */
	$(window).resize(function(event, ui) {
		/** current window width */
		window_width = $(event.target).width();
		
		/** current window height */
		window_height = $(window).height();
		
		/** current scroll */
		scroll_top = $(window).scrollTop();
		
		/* check mobile menu */
		cms_mobile_menu();
	});
	

	/**
	 * Stiky menu
	 * 
	 * Show or hide sticky menu.
	 * @author Fox
	 * @since 1.0.0
	 */
	function cms_stiky_menu() {

		if (header_top < scroll_top) {
			switch (true) {
				case (window_width >= 992):
					header.addClass('header-fixed');
					$('body').addClass('fixed-margin-top');
					break;
				case (window_width < 992):
					header.addClass('header-fixed');
					$('body').addClass('fixed-margin-top');
					break;
			}
		} else {
			header.removeClass('header-fixed');
			$('body').removeClass('fixed-margin-top');
		}
	}
	function cms_stiky_menu_fixed_page() {
		if (header_top < scroll_top) {
			header.addClass('header-fixed-page-trans');
		} else {
			header.removeClass('header-fixed-page-trans');
		}
	}
	
	/**
	 * Mobile menu
	 * 
	 * Show or hide mobile menu.
	 * @author Fox
	 * @since 1.0.0
	 */
	
	$('body').on('click', '#cshero-menu-mobile', function(){
		var navigation = $(this).parent().find('#cshero-header-navigation');
		if(!navigation.hasClass('collapse')){
			navigation.addClass('collapse');
		} else {
			navigation.removeClass('collapse');
		}
	});
	/* check mobile screen. */
	function cms_mobile_menu() {
		var menu = $('#cshero-header-navigation');
		
		/* active mobile menu. */
		switch (true) {
		case (window_width <= 992 && window_width >= 768):
			menu.removeClass('phones-nav').addClass('tablets-nav');
			/* */
			cms_mobile_menu_group(menu);
			break;
		case (window_width <= 768):
			menu.removeClass('tablets-nav').addClass('phones-nav');
			break;
		default:
			menu.removeClass('mobile-nav tablets-nav');
			menu.find('li').removeClass('mobile-group');
			break;
		}	
	}
	/* group sub menu. */
	function cms_mobile_menu_group(nav) {
		nav.each(function(){
			$(this).find('li').each(function(){
				if($(this).find('ul:first').length > 0){
					$(this).addClass('mobile-group');
				}
			});
		});
	}

	/**
	 * One page
	 * 
	 * @author Fox
	 */
	if(CMSOptions.one_page == true) {
		
		$('body').on('click', '.onepage', function () {
			$('#cshero-menu-mobile').removeClass('close-open');
			$('#cshero-header-navigation').removeClass('open-menu');
			$('.cshero-menu-close').removeClass('open');
		});
		
		var one_page_options = {'filter' : '.onepage'};
		
		if(CMSOptions.one_page_speed != undefined) one_page_options.speed = parseInt(CMSOptions.one_page_speed);
		if(CMSOptions.one_page_easing != undefined) one_page_options.easing =  CMSOptions.one_page_easing;
		
		$('#cshero-header-navigation, .widget_nav_menu').singlePageNav(one_page_options);

	}
	/* End function custom */

});

/* Header sticky indent  */
jQuery(document).on("scroll", function($) {
	"use strict";

	setTimeout(function() {
		if (jQuery('.cshero-main-header').hasClass('affix')) {
			jQuery('.page-title').addClass('affix-indent');
		}  else {
			jQuery('.page-title').removeClass('affix-indent');
		};
	},100);
}); 