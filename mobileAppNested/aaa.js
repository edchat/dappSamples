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
		MODULE: "aaa",
		init: function () {
			console.log(this.MODULE + " init called");
		},
		beforeActivate: function (previousView, viewData) {
			console.log(this.MODULE + " beforeActivate called");
		},
		beforeDeactivate: function (previousView, viewData) {
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
