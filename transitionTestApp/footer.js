// jshint unused:false, undef:false, quotmark:false
define(["dojo/dom", "dojo/on", "delite/register"], function (dom, on, register) {
	return {
		aaasel:false,
		bbbsel:false,
		cccsel:false,
		dddsel:false,

		init: function () {
			console.log("in footer.js init called");
		},
		beforeActivate: function (previousView, viewData) {
			console.log("in home.js beforeActivate called");
		},
		beforeDeactivate: function (previousView, viewData) {
			console.log("in home.js beforeDeactivate called previousView=", previousView);
		},
		afterActivate: function (previousView) {
			console.log("in home.js afterActivate called");
		},
		afterDeactivate: function (previousView) {
			console.log("in home.js afterDeactivate called previousView=", previousView);
			if (this.domNode.ownerDocument.getElementById("footerShow")) {
				this.domNode.ownerDocument.getElementById("footerShow").aaasel = this.domNode.aaasel;
				this.domNode.ownerDocument.getElementById("footerShow").bbbsel = this.domNode.bbbsel;
				this.domNode.ownerDocument.getElementById("footerShow").cccsel = this.domNode.cccsel;
				this.domNode.ownerDocument.getElementById("footerShow").dddsel = this.domNode.dddsel;
			}
		}
	};
});
