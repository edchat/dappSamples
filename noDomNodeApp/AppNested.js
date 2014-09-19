// jshint unused:false, undef:false, quotmark:false
require(["dapp/Application", "requirejs-text/text!./appNested.json"],
	function (Application, config) {
		//	register.parse(document.getElementById("divToParse"));
		var jsonData = config;
		jsonData = jsonData.replace(/\/\*.*?\*\//g, "");
		jsonData = jsonData.replace(/\/\/.*/g, "");
		//new Application(JSON.parse(jsonData));
		var appDeferred = new Application(JSON.parse(jsonData));
		appDeferred.then(function (app) {
			console.log("deferred resolved for new App [" + app.id + "] it should be started and default views shown");
		});
	});
