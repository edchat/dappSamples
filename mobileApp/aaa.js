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
			this.app.log(this.MODULE, this.viewName + " init called");
		},
		beforeActivate: function (previousView, viewData) {
			console.log(this.viewName + " beforeActivate called previousView.id =[" + (previousView ?
				previousView.id : "") + "]");
		},
		beforeDeactivate: function (nextView, viewData) {
			console.log(this.viewName + " beforeDeactivate called nextView.id= [" + (nextView ?
				nextView.id : "") + "]");
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
