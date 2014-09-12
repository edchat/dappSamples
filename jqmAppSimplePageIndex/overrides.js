// Moved this code into jqmAppSimple to make it easier
require(["jquery"],
	function ($) {
		// this must be setup after jquery is loaded, but before jquery.mobile is loaded
		$(document).bind("mobileinit", function(){
			// if this is set false the app must call $.mobile.initializePage();
			$.mobile.autoInitializePage = false;

			// Prevents all anchor click handling
			$.mobile.linkBindingEnabled = false;

			// Disabling this will prevent jQuery Mobile from handling hash changes
			$.mobile.hashListeningEnabled = false;

			// keep all previously-visited pages in the DOM
			$.mobile.page.prototype.options.domCache = true;

			// the hash in the location bar should not be updated by JQM
			$.mobile.changePage.defaults.changeHash = false;
		});
});