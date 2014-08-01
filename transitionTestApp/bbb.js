// jshint unused:false, undef:false, quotmark:false
define(["dojo/dom", "dojo/on", "delite/register"], function (dom, on, register) {
	return {
		MODULE: "bbb",
		init: function () {
			console.log(this.MODULE + " init called");
		},
		beforeActivate: function (previousView, viewData) {
			if (this.domNode.ownerDocument.getElementById("footer")) {
				this.domNode.ownerDocument.getElementById("footer").bbbsel = true;
			}
			if (this.domNode.ownerDocument.getElementById("footerShow")) {
				this.domNode.ownerDocument.getElementById("footerShow").bbbsel = true;
			}
			console.log(this.MODULE + " beforeActivate called");
		},
		beforeDeactivate: function (previousView, viewData) {
			if (this.domNode.ownerDocument.getElementById("footer")) {
				this.domNode.ownerDocument.getElementById("footer").bbbsel = false;
			}
			if (this.domNode.ownerDocument.getElementById("footerShow")) {
				this.domNode.ownerDocument.getElementById("footerShow").bbbsel = false;
			}
			console.log(this.MODULE + " beforeDeactivate called previousView=", previousView);
		},
		afterActivate: function (previousView) {
			console.log(this.MODULE + " afterActivate called");
		},
		afterDeactivate: function (previousView) {
			console.log(this.MODULE + " afterDeactivate called previousView=", previousView);
		}
	};
});
