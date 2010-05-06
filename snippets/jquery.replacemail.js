/*
 * jQuery Replace Mail link plugin 1.0
 *
 * http://valuedstandards.com/jquery-plugins/jquery-replace-mail/
 *
 * Copyright (c) 2009 - 2010 David Hund
 * Use it as you like: some link-love would be nice though :-)
 *
 * - Looks for elements with a classname and an alternative @-symbol
 * - .. then replaces those with a valid mail link
 */

if(typeof jQuery != 'undefined') {
	(function($) {
		jQuery.fn.replacemail = function(options) {
			// Default: <span class="email">info [AT] this domain</span>
			var defaults = {
				atSymbol: " [AT] ", // Used to hide an email address in plain text
				domain: window.location.domain, // the default second part of email address: the domain.com
				domainString: "this domain", // A JS-off replacement text
				className: "email" // Extra classname added to created email links
			},
			options = $.extend(defaults, options);

			return this.each(function(){
				var textmail = $(this);
				var text1 = textmail.text().toLowerCase();
				var at = options.atSymbol.toLowerCase();
				if(text1.indexOf(at) > 0){
					var pre = text1.substring(0, text1.indexOf(at)).replace(/^\s+|\s+$/g,""); // Remove whitespace
					var post = text1.substring(text1.length, (text1.indexOf(at)+at.length)).replace(/^\s+|\s+$/g,"");
					var chosen_domain = options.domain;
					if(post !== window.location.domain && post !== options.domainString){chosen_domain = post};
					var address = pre+"&#64;"+chosen_domain;
					var link = "<a href='mailto:"+address+"' class='"+options.className+"'>"+address+"</a>";
					textmail.replaceWith(link);
				}
			});
		};
	})(jQuery);
}

