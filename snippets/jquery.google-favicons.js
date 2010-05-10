/*
 * jQuery Google Favicons: retreives favicons for resources (links) from Google
 *
 * http://valuedstandards.com/
 *
 * Copyright (c) 2009 - 2010 David Hund
 * Use it as you like: some link-love would be nice though :-)
 *
 */

if(typeof jQuery != 'undefined') {
	(function($) {
		jQuery.fn.googlefavicons = function(options) {
			var GOOGLE_API_URL = "http://www.google.com/s2/favicons?domain=";
			var defaults = {
				defaultIcon: "http://icons16x16.com/folders/Documents/rn_122107_121824.gif", // Default icon, used in e.g. internal links...
				position: 'left', // ['left' | 'right'] Position of icon to link
				inBackground: true // Default: create <img>. True: set as CSS background
			},
			options = $.extend(defaults, options);

			return this.each(function(){
				var $link = $(this),
					hostname = this.hostname,
					isExternal = !this.href.match(/^mailto\:/) && (hostname != location.hostname),
					iconURL = isExternal ? GOOGLE_API_URL+hostname : options.defaultIcon;

				if (options.inBackground){
					// Set icon as CSS background
					if(options.position == 'left'){
						$link.css({'padding-left':'20px', 'background':'url('+iconURL+') no-repeat 0 50%'});
					}else{
						$link.css({'padding-right':'20px', 'background':'url('+iconURL+') no-repeat 100% 50%'});
					}
				}else{
					// Add icon as <img>
					var $icon = $('<img src="'+iconURL+'" />');
					options.position == 'left' ? $icon.prependTo($link) : $icon.appendTo($link);
				}
			});
		};
	})(jQuery);
}
