// jshint unused:false, undef:false, quotmark:false
define(["dojo/dom", "dojo/on"], function (dom, on) {
	return {
		"viewIdPlusLi": this.id + "test",
		MODULE: "detail",
		init: function () {
			console.log("in detail.js init called");
			//	on(this.ownerDocument.getElementById("detaillabel2"), "click",
			on(this.querySelectorAll(".detaillabel2")[0], "click",
				//	on(document.getElementById(this.viewIdPlusLi), "click",
				function () {
				//var vdata = {"subData" : "subData1"}
					console.log("in on click");
					deliteApp.showOrHideViews("content,home", {
						reverse: true,
						viewData: {subData: "subData1"}
					});
				}
			);
		},
		beforeActivate: function (previousView, viewData) {
			console.log("beforeActivate called for [" + this.viewName + "] with previousView.id =[" + (previousView ?
				previousView.id : "") + "] with viewData=", viewData);
			if (previousView && previousView.id) {
				dom.byId("label").innerHTML = " - from view - " + previousView.id + (viewData ? ("- viewData - " +
					viewData) : "");
			}
		},
		beforeDeactivate: function (nextView, viewData) {
			console.log("beforeDeactivate called for [" + this.viewName + "] with previousView.id =[" + (nextView ?
				nextView.id : "") + "]");
		},
		afterActivate: function (previousView, viewData) {
			console.log("afterActivate called for [" + this.viewName + "] with previousView.id =[" + (previousView ?
				previousView.id : "") + "] with viewData=", viewData);
		},
		afterDeactivate: function (nextView, viewData) {
			console.log("afterDeactivate called for [" + this.viewName + "] with previousView.id =[" + (nextView ?
				nextView.id : "") + "]");
		}
	};
});
