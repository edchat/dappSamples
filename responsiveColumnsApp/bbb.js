// jshint unused:false, undef:false, quotmark:false
define([], function () {
	return {
		MODULE: "bbb",
		init: function () {
			document.getElementById("bbblist").onclick = function (evt) { //MouseEvent
				//document.getElementById("vs").show(evt.target.getAttribute("showid"),
				//	{transition: document.getElementById("transSelect1").value,
				//		reverse: document.getElementById("rev").checked
				//	});
				this.app.showOrHideViews(evt.target.getAttribute("showid"),
					{transition:document.getElementById("transSelect1").value,
						reverse:document.getElementById("rev").checked
					})
			}.bind(this);
		},
		beforeActivate: function (previousView, viewData) {
		//	this.app.emit("vs-selection-changed","bbb");
		}
	};
});
