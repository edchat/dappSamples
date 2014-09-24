// jshint unused:false, undef:false, quotmark:false
define([], function () {
	return {
		MODULE: "spright1",
		init: function () {
			document.getElementById("btnHideRight").onclick = function (evt) { //MouseEvent
				// hide spright
				document.getElementById("spright").hide().then(function () {
					// this would move the content but would need preload support to look good
					//document.getElementById("right").appendChild(document.getElementById("rightdiv"));
				});
			}.bind(this);
		}
	};
});
