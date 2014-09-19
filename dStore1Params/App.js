// jshint unused:false, undef:false, quotmark:false
require(["dojo/_base/window", "dapp/Application", "requirejs-text/text!./app.json"],
	function (win, Application, config) {
		window.dstore1ParamsApp = {};
		window.dstore1ParamsApp.list1Data = {
			identifier: "id",
			'items':[]
		};
		for (i = 1; i < 6; i++) {
			window.dstore1ParamsApp.list1Data.items.push({label: "Selection" + i, id: i});
		}


		window.dstore1ParamsApp.list2Data = {
			identifier: "id",
			'items':[]
		};
		for (i = 6; i < 11; i++) {
			window.dstore1ParamsApp.list2Data.items.push({label: "Selection" + i, id: i});
		}
		var jsonData = config;
		jsonData = jsonData.replace(/\/\*.*?\*\//g, "");
		jsonData = jsonData.replace(/\/\/.*/g, "");
		//new Application(JSON.parse(jsonData));
		var appDeferred = new Application(JSON.parse(jsonData));
		appDeferred.then(function (app) {
			console.log("deferred resolved for new App [" + app.id + "] it should be started and default views shown");
		});
	});
