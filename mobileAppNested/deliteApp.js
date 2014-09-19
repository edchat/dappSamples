// jshint unused:false, undef:false, quotmark:false
require(["dapp/Application","requirejs-text/text!./config.json"],
	function (Application, config) {
		var jsonData = config;
		jsonData = jsonData.replace(/\/\*.*?\*\//g, "");
		jsonData = jsonData.replace(/\/\/.*/g, "");
		//jsonData = JSON.minify(jsonData);
		new Application(JSON.parse(jsonData));
	});
