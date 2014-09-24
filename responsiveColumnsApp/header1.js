// jshint unused:false, undef:false, quotmark:false
define(["dojo/Deferred"], function (Deferred) {
	return {
		MODULE: "left1",
		init: function () {
			// Handle show right and left sidepanes here
			document.getElementById("btnShowRight").onclick = function (evt) { //MouseEvent
				//this.app.showOrHideViews("spright1");
				document.getElementById("spright").show("spright1").then(function () {
					// this would move the content but would need preload support to look good, but without it we
					// dont sync rev and transition settings
					//document.getElementById("sprightdiv").appendChild(document.getElementById("rightdiv"));
				});
			}.bind(this);
			document.getElementById("btnShowLeft").onclick = function (evt) { //MouseEvent
				// this should be changed to use jquery.addClass() instead
				document.getElementById("btnShowLeft").className += ' hideButton'; //note the space
				document.getElementById("spleft").show("spleft1");
			}.bind(this);
		}
	};
});
