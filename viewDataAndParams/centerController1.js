// jshint unused:false, undef:false, quotmark:false
define(["dojo/dom", "dojo/on", "delite/register"], function (dom, on, register) {
	return {
		name: "",
		myViewData: "",
		myParamsP: "",
		myParamsVp: "",
		_beforeActivateCallCount: 0,
		_beforeDeactivateCallCount: 0,
		_afterActivateCallCount: 0,
		_afterDeactivateCallCount: 0,
		constructor: function (viewParams) { // jshint unused:false
			//TODO: why is this not being hit?
			this.app.log("app-view:", " in [" + this.viewName + "] constructor called for [" + this.id + "]");
			var tempName = "";
			//if (this.id === "nested1App1Home2") {
			//	setTimeout(function () {
			//		for (var i = 0; i < 500; i++) {
			//			tempName = this.id + i;
			//		}
			//	}, 500);
			//}
		},
		init: function () {
			this.name = this.id;
			// attempt to slow down the creation of this widget to see if Home3 would be placed before it
			if (this.id === "nested1App1Home2") {
				//setTimeout(function () {
				//	for (var i = 0; i < 500; i++) {
				//		tempName = this.id + i;
				//	}
				//}, 500);
			}
		},
		beforeActivate: function (previousView, viewData) {
			this.app.log("app-view:", "beforeActivate called for [" + this.viewName + "] with previousView.id =[" +
				(previousView ? previousView.id : "") + "] with viewData=", viewData);
			this.myViewData = viewData ? viewData.vd1 : "";
			this.myParamsP = this.viewParams ? this.viewParams.p : "";
			this.myParamsVp = this.viewParams ? this.viewParams.vp : "";
			this._beforeActivateCallCount++;
			if (this.id === "center1") {
				this.style.backgroundColor = "cyan";
			} else {
				this.style.backgroundColor = "green";
			}
		},
		beforeDeactivate: function (nextView, viewData) {
			this.app.log("app-view:", "beforeDeactivate called for [" + this.viewName + "] with previousView.id =[" +
				(nextView ? nextView.id : "") + "]");
			this._beforeDeactivateCallCount++;
		},
		afterActivate: function (previousView, viewData) {
			this.app.log("app-view:", "afterActivate called for [" + this.viewName + "] with previousView.id =[" +
				(previousView ? previousView.id : "") + "] with viewData=", viewData);
			this._afterActivateCallCount++;
			this.app.emit("afterActivateCalled", {
				view: this
			});
		},
		afterDeactivate: function (nextView, viewData) {
			this.app.log("app-view:", "afterDeactivate called for [" + this.viewName + "] with previousView.id =[" +
				(nextView ? nextView.id : "") + "]");
			this._afterDeactivateCallCount++;
		},
		destroy: function () {
			this.app.log("app-view:", " in [" + this.viewName + "] destroy called for [" + this.id + "]");
		}
	};
});
