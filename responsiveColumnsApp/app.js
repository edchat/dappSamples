// jshint unused:false, undef:false, quotmark:false
require(["dapp/Application", "requirejs-text/text!./config.json"],
	function (Application, config) {
		// remove single line comments from the config json
		var jsonData = config;
		jsonData = jsonData.replace(/\/\*.*?\*\//g, "");
		jsonData = jsonData.replace(/\/\/.*/g, "");
		new Application(JSON.parse(jsonData)).then(function (app) {
			console.log("deferred resolved for new App [" + app.id + "] it should be started and default views shown");
			//document.getElementById("outerDiv").style.display = "block";
			// by this point things in the sidePane and ViewStack are already visible, but not the header and footer
			document.getElementById("outerDiv").style.visibility = "visible";
		});
		document.getElementById("outerDiv").style.display = "block"; // if the outerDiv is display none things wont show
	//	document.getElementById("outerDiv").style.visibility = "visible"; // visibility can wait until app is ready
	});
