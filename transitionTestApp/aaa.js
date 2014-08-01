// jshint unused:false, undef:false, quotmark:false
define(["dojo/dom", "dojo/on", "delite/register"], function (dom, on, register) {
	return {
		MODULE: "aaa",
		init: function () {
			this.app.log(this.MODULE, this.viewName + " init called");
		},
		beforeActivate: function (previousView, viewData) {
			if (this.domNode.ownerDocument.getElementById("footer")) {
				this.domNode.ownerDocument.getElementById("footer").aaasel = true;
			}
			if (this.domNode.ownerDocument.getElementById("footerShow")) {
				this.domNode.ownerDocument.getElementById("footerShow").aaasel = true;
			}
		},
		beforeDeactivate: function (nextView, viewData) {
			if (this.domNode.ownerDocument.getElementById("footer")) {
				this.domNode.ownerDocument.getElementById("footer").aaasel = false;
			}
			if (this.domNode.ownerDocument.getElementById("footerShow")) {
				this.domNode.ownerDocument.getElementById("footerShow").aaasel = false;
			}
		},
		afterActivate: function (previousView) {
			console.log(this.viewName + " afterActivate called previousView.id =[" + (previousView ?
				previousView.id : "") + "]");
		},
		afterDeactivate: function (nextView) {
			console.log(this.viewName + " afterDeactivate called nextView.id= [" + (nextView ?
				nextView.id : "") + "]");
		}
	};
});
