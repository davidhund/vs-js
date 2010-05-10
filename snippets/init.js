///////////////////////////////////////////////////////////////
// UTILITY function for this example page
///////////////////////////////////////////////////////////////
vsHud.init();
// vsHud.log(null,'A default message');
// vsHud.log('A default message');
// vsHud.log('success','This is a test success message');
// vsHud.log('warning','This is a test warning message');
// vsHud.log('error','This is a test error message');
// vsHud.clear(); // Clears all messages

if(typeof jQuery != 'undefined') {

	$(document).ready(function(){
		///////////////////////////////////////////////////////////////
		// Initialise the above scripts on document ready...
		///////////////////////////////////////////////////////////////

		// Irrelevant: Add some 'back-to-top' links. Logging etc. 
		$('<p class="↑"><a href="#top">Go back up ↑</a></p>').insertBefore($('h2[id]'));
		$('#console-test').click(function(){vsHud.log('success', 'console logged');});



		///////////////////////////////////////////////////////////////
		// Convert email addresses
		///////////////////////////////////////////////////////////////
		$('.email').replacemail(); // Standard
	 	// Again: With extra options
		var email_options = {
			atSymbol: " *AT* ", // Symbol used to hide an email address in plain text
			altDomain: "gmail.com", // An alternative domain, used instead of the current site
			className: "extra-email-class" // Extra classname added to created email links
		};
		$('.email2').replacemail(email_options);


		///////////////////////////////////////////////////////////////
		// Have some anchors scroll smoothly...
		///////////////////////////////////////////////////////////////
		$('body').scrollanchors();
		// Again: with extra options
		var scroll_options = {
			speed: 1500,
			focusClass: "focused", // Set to classname, e.g. 'focused' and it will be added upon focus
			focusTime: 2000, // Time in ms after which the class should be removed again
			easing: false // Needs jQuery Easing Plugin: http://gsgd.co.uk/sandbox/jquery/easing/
		};
		$('.special-smooth').scrollanchors(scroll_options);


		///////////////////////////////////////////////////////////////
		// Simulate 'placeholder' functionality on inputs
		///////////////////////////////////////////////////////////////
		$('body').emptyonfocus(); // All found *valid* inputs in body are targeted


		///////////////////////////////////////////////////////////////
		// Favicons, courtesy of Google
		///////////////////////////////////////////////////////////////
		$('#icon-links a').googlefavicons(); // Automagically add <img> icons...
		$('#icon-links2 a').googlefavicons({'inBackground': false}); // Option: true = uses CSS background images

		vsHud.log('success', 'All jQuery scripts loaded...');

		// Tmp check...
		if (!('placeholder' in $('#placeholder-test'))) vsHud.log('warning','HTML5 placeholder attribute not supported');
	});

} else {
	///////////////////////////////////////////////////////////////
	// jQuery not properly loaded
	///////////////////////////////////////////////////////////////
	var error = "jQuery is not properly loaded!";
	console.log(error);
	vsHud.log('error',error);
}