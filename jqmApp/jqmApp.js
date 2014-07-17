// jshint unused:false, undef:false, quotmark:false
require(["dapp/Application", "dojo/json", "requirejs-text/text!./config.json", "dojo/sniff"],
	function (Application, json, config, has) {
		has.add("requirejs", window.requirejs);
		/* jshint nonew: false */
		var jsonData = config;
		jsonData = jsonData.replace(/\/\*.*?\*\//g, "");
		jsonData = jsonData.replace(/\/\/.*/g, "");
		//new Application(JSON.parse(jsonData));
		var appDeferred = new Application(JSON.parse(jsonData));
		appDeferred.then(function (app) {
			console.log("deferred resolved for new App [" + app.id + "] it should be started and default views shown");
		});
	});
