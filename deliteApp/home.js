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
		f: "app-view:",
		init: function () {
			this.app.log(this.f, " in [" + this.viewName + "] init called for [" + this.id + "]");
			console.log("in home.js init called");
			this.attributes.testStringReplace = "yyyyed";
			this.currentStatus = this.currentStatus + "-init called";
			// I put the on click back in the home.html
			this.setuponclick = false;

			on(this.ownerDocument.getElementById("label1"), "click",
				//on(document.getElementById("label1"), "click",
				function () {
					console.log("in on click");
					//	deliteApp.showOrHideViews('detail2');
					var params = {
						viewData: "foo"
					};
					deliteApp.showOrHideViews('header+content,detail', params);
				}
			);

		},
		beforeActivate: function (previousView, viewData) {
			console.log("beforeActivate called for [" + this.viewName + "] with previousView.id =[" + (previousView ?
				previousView.id : "") + "] with viewData=", viewData);
			this._beforeActivateCallCount++;
			this.beforeActivateStatus = "called " + this._beforeActivateCallCount + " times";
			if (!this.setuponclick) {
				this.setuponclick = true;
				/*
				on(this.ownerDocument.getElementById("label1"), "click",
					//on(document.getElementById("label1"), "click",
					function () {
						//	deliteApp.showOrHideViews('detail2');
						var params = {
							viewData: "foo"
						};
						deliteApp.showOrHideViews('header+content,detail', params);
					}
				);
				*/
				self = this;
				on(this.ownerDocument.getElementById("label2"), "click",
					function () {
						self.ownerDocument.getElementById("content-view-stack").show('detail', {
							transition: "slide"
						});
					}
				);
			}
		},
		beforeDeactivate: function (nextView, viewData) {
			console.log("beforeDeactivate called for [" + this.viewName + "] with previousView.id =[" + (nextView ?
				nextView.id : "") + "]");
			this._beforeDeactivateCallCount++;
			this.beforeDeactivateStatus = "called " + this._beforeDeactivateCallCount + " times";
		},
		afterActivate: function (previousView, viewData) {
			console.log("afterActivate called for [" + this.viewName + "] with previousView.id =[" + (previousView ?
				previousView.id : "") + "] with viewData=", viewData);
			this._afterActivateCallCount++;
			this.afterActivateStatus = "called " + this._afterActivateCallCount + " times";
		},
		afterDeactivate: function (nextView, viewData) {
			console.log("afterDeactivate called for [" + this.viewName + "] with previousView.id =[" + (nextView ?
				nextView.id : "") + "]");
			this._afterDeactivateCallCount++;
			this.afterDeactivateStatus = "called " + this._afterDeactivateCallCount + " times";
		}
	};
});
