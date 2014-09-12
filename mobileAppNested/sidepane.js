// jshint unused:false, undef:false, quotmark:false
define(["dojo/dom", "dojo/on", "delite/register"], function (dom, on, register) {
	return {
		testStringReplace: "xAZZZZed",
		"beforeActivateStatus": "none",
		"beforeDeactivateStatus": "none",
		"afterActivateStatus": "none",
		"afterDeactivateStatus": "none",
		currentStatus: "testxxx",
		_beforeActivateCallCount: 0,
		_beforeDeactivateCallCount: 0,
		_afterActivateCallCount: 0,
		_afterDeactivateCallCount: 0,

		init: function () {
			console.log("in home.js init called");
			this.attributes.testStringReplace = "yyyyed";
			this.currentStatus = this.currentStatus + "-init called";
			// I put the on click back in the home.html
			on(this.ownerDocument.getElementById("spbbb"), "click",
				function () {
					mobileAppNested.showOrHideViews("vs,bbb");
				}
			);
			on(this.ownerDocument.getElementById("spddd"), "click",
				function () {
					mobileAppNested.showOrHideViews("vs,ddd");
				}
			);
		},

		beforeActivate: function (previousView, viewData) {
			console.log("in home.js beforeActivate called");
			this._beforeActivateCallCount++;
			this.beforeActivateStatus = "called " + this._beforeActivateCallCount + " times";
		},
		beforeDeactivate: function (previousView, viewData) {
			console.log("in home.js beforeDeactivate called previousView=", previousView);
			this._beforeDeactivateCallCount++;
			this.beforeDeactivateStatus = "called " + this._beforeDeactivateCallCount + " times";
		},
		afterActivate: function (previousView) {
			console.log("in home.js afterActivate called");
			this._afterActivateCallCount++;
			this.afterActivateStatus = "called " + this._afterActivateCallCount + " times";
		},
		afterDeactivate: function (previousView) {
			console.log("in home.js afterDeactivate called previousView=", previousView);
			this._afterDeactivateCallCount++;
			this.afterDeactivateStatus = "called " + this._afterDeactivateCallCount + " times";
		}
	};
});
