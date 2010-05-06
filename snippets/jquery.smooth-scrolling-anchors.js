/* ===============================================================================
	SMOOTHLY SCROLL INTERNAL LINKS ('ANCHORS'): (a href="#idofelement"):

	* Copyright (c) 2009 - 2010 David Hund - http://valuedstandards.com
	* Use it as you like: some link-love would be nice though :-)

==================================================================================
	NOTES:
	- Taken from: http://snipt.net/Jonic/jquery-smooth-scrolling-on-internal-links/
	- Adapted to function as a jQuery Plugin
	- Added 'easing' options

	EASING OPTIONS (jQuery default: 'swing'): 
		To enable easing:
		1) include jQuery Easing Plugin: http://gsgd.co.uk/sandbox/jquery/easing/
		2) set 'easing' option to one of http://www.robertpenner.com/easing/easing_demo.html
		E.g. easing: 'easeInOutBack'
================================================================================*/

if(typeof jQuery != 'undefined') {
	(function($) {
		jQuery.fn.scrollanchors = function(options) {
			var defaults = {
				speed: 900,
				focusClass: false, // Set to classname, e.g. 'focused' and it will be added upon focus
				easing: false
			},
			options = $.extend(defaults, options);

			return this.each(function(){
				// find all anchors in given element(s) with only an #target in the href
				var allAnchors = $(this).find('a[href*=#]');
				// Now hijack clicks on those links and SCROLL SMOOTHLY to their target
				allAnchors.click(function(evnt) {
					evnt.preventDefault();
					if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						var $target = $(this.hash);
						$target = $target.length && $target || $('[id=' + this.hash.slice(1) + ']');
						if ($target.length) {
							var targetOffset = $target.offset().top;
							$('html,body').animate({scrollTop: targetOffset}, options.speed, options.easing);
							if(options.focusClass){
								// set options.focusClass on target
								$target.addClass(options.focusClass);
							}
						}
					}
				});
			});
		};
	})(jQuery);
}
