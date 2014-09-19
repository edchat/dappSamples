// jshint unused:false, undef:false, quotmark:false
define([], function () {
	return {
		MODULE: "left1",
		init: function () {
			document.getElementById("leftlist1").onclick = function (evt) { //MouseEvent
				this.app.showOrHideViews(evt.target.getAttribute("showid"),
					{transition:document.getElementById("transSelect1").value,
						reverse:document.getElementById("rev").checked
					})
				//Another option is to use .show instead of app.showOrHideViews like this
				//document.getElementById("vs").show(evt.target.getAttribute("showid"),
				//	{transition: document.getElementById("transSelect1").value,
				//		reverse: document.getElementById("rev").checked
				//	});
			}.bind(this);
		}
	};
});
