// jshint unused:false, undef:false, quotmark:false
require(["dapp/Application", "requirejs-text/text!./config.json"],
	function (Application, /*json,*/ config, has) {
		// remove single line comments from the config json
		var jsonData = config;
		jsonData = jsonData.replace(/\/\*.*?\*\//g, "");
		jsonData = jsonData.replace(/\/\/.*/g, "");
		var appDeferred = new Application(JSON.parse(jsonData));
		appDeferred.then(function (app) {
			console.log("deferred resolved for new App [" + app.id + "] it should be started and default views shown");
		});
	});
