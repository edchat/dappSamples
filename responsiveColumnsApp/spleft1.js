// jshint unused:false, undef:false, quotmark:false
define([], function () {
	return {
		MODULE: "spleft1",
		init: function () {
			document.getElementById("spleftlist1").onclick = function (evt) { //MouseEvent
				this.app.showOrHideViews(evt.target.getAttribute("showid"),
					{transition:document.getElementById("sptransSelect1").value,
						reverse:document.getElementById("sprev").checked
					})
				//Another option is to use .show instead of app.showOrHideViews like this
				//document.getElementById("vs").show(evt.target.getAttribute("showid"),
				//	{transition: document.getElementById("transSelect1").value,
				//		reverse: document.getElementById("rev").checked
				//	});
			}.bind(this);
			document.getElementById("btnHideLeft").onclick = function (evt) { //MouseEvent
				// need to hide spleft and show the btnShowLeft
				document.getElementById("spleft").hide().then(function () {
					// this should be changed to use jquery.addClass() instead
					var classname = "hideButton";
					var btnShowLeft = document.getElementById("btnShowLeft")
					var cn = btnShowLeft.className;
					var rxp = new RegExp( "\\s?\\b"+classname+"\\b", "g" );
					cn = cn.replace( rxp, '' );
					btnShowLeft.className = cn;
				});
			}.bind(this);
		}
	};
});
