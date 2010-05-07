/*
 * jQuery Input Empty on Focus plugin 1.0
 *
 * http://valuedstandards.com/jquery-plugins/jquery-input-empty-on-focus/
 *
 * Copyright (c) 2009 - 2010 David Hund
 * Use it as you like: some link-love would be nice though :-)
 *
 */

if(typeof jQuery != 'undefined') {
	(function($) {
		jQuery.fn.emptyonfocus = function(options) {
			var defaults = {
				validInputsSelector: ":visible:enabled:text, :visible:enabled:password, textarea:visible:enabled", // A jquery selector targeting only valid inputs
				// If the given el's do not contain valid inputs, catch ALL in the document...
				getAllInputsIfEmpty: true, 
				focusClassName: "focused"
			},
			options = $.extend(defaults, options);

			return this.each(function(){
				var $inputEls = $(this);
				// Check if given elements are text[type="input"] or textarea
				if($inputEls.is(options.validInputsSelector)){
					var vf = $(elements);
				// OR if the elements are forms that _contain_ those elements!
				}else if($inputEls.is('form')){
					var vf = $inputEls.find(options.validInputsSelector);
				}else{
				// OR use ALL valid inputs in the whole document!
					if(options.getAllInputsIfEmpty){
						var vf = $(options.validInputsSelector);
					}
				}

				if(vf){
					// TODO: If HTML5 'placeholder' is added but not supported, add support: use placeholder :-)
					// ..
					// TODO: Only proceed if HTML5 'placeholder' is not found or empty!
					// ..
					// if( !('placeholder' in vf) || vf.attr('placeholder') == ""){
						vf.focus(function(){
							if($(this).val() === this.defaultValue){$(this).val("")};
							$(this).addClass(options.focusClassName);
						})
						.blur(function(){
							if(!$(this).val()){$(this).val(this.defaultValue)};
							$(this).removeClass(options.focusClassName);
						});
					// }
				}
			});
		};
	})(jQuery);
}
