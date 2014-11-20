// jshint unused:false, undef:false, quotmark:false
define([], function () {
	return {
		MODULE: "aaa",
		init: function () {
			document.getElementById("makeDesktopBut").onclick = function (evt) { //MouseEvent
				var rc = this.ownerDocument.getElementById("rc");
				rc.breakpoints = "{'phone': '200px', 'tablet': '200px', 'desktop': '99999px'}";
				rc.notifyCurrentValue("breakpoints");
			}.bind(this);
			document.getElementById("makeOriginalBut").onclick = function (evt) { //MouseEvent
				var rc = this.ownerDocument.getElementById("rc");
				rc.breakpoints = "{'phone': '500px', 'tablet': '900px', 'desktop': '99999px'}";
				rc.notifyCurrentValue("breakpoints");
			}.bind(this);
		},
		beforeActivate: function (previousView, viewData) {
		//	var rc = this.ownerDocument.getElementById("rc");
		//	rc.breakpoints = "{'phone': '200px', 'tablet': '1301px', 'desktop': '99999px'}";
		//	rc.notifyCurrentValue("breakpoints");
		//	console.log("aaa activated set tablet to 1301px");
		//	this.app.emit("vs-selection-changed","aaa");
		}
	};
});
