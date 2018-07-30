jQuery(document).ready(function($) {
	"use strict";
	
	/* window */
	var window_width, window_height, scroll_top,asd,one_page,menu_sticky;
	
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

	$('.cms-blog-item').fitVids();


		
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
	

	/* Amilia function custom in here */

	

	
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