// jshint quotmark:false
define([ "dojo/dom", "dojo/on", "delite/register", "dcl/dcl", "dapp/View" ],
	function ( dom, on, register, dcl, View ) {
		return dcl([View], {
//	define([ /*"dojo/dom", "dojo/on", "delite/register", "dcl/dcl", "dapp/View"*/ ],
	//	function ( /*dom, on, register, dcl, View*/ ) {
		//return {
			name: "",
			_beforeActivateCallCount: 0,
			_beforeDeactivateCallCount: 0,
			_afterActivateCallCount: 0,
			_afterDeactivateCallCount: 0,
			init: function () {
				this.name = this.id;
			},
			//beforeActivate: function ( /*previousView, viewData*/ ) {
			//	//console.log("app-view:", "beforeActivate called for [" + this.viewName +
			//	//"] with previousView.id =[" + (previousView ? previousView.id : "") + "] with viewData=", viewData);
			//	this._beforeActivateCallCount++;
			//},
				beforeActivate: dcl.superCall(function (sup) {
					return function () {
						this._beforeActivateCallCount++;
						return sup.call(this);
					};
				}),

			beforeDeactivate: function ( /*nextView, viewData*/ ) {
				//console.log("app-view:", "beforeDeactivate called for [" + this.viewName +
				//	"] with previousView.id =[" + (nextView ? nextView.id : "") + "]");
				this._beforeDeactivateCallCount++;
			},
			afterActivate: function ( /*previousView, viewData*/ ) {
				//console.log("app-view:", "afterActivate called for [" + this.viewName + "] with previousView.id =[" +
				//	(previousView ? previousView.id : "") + "] with viewData=", viewData);
				this._afterActivateCallCount++;
			},
			afterDeactivate: function ( /*nextView, viewData*/ ) {
				//console.log("app-view:", "afterDeactivate called for [" + this.viewName +
				//	"] with previousView.id =[" + (nextView ? nextView.id : "") + "]");
				this._afterDeactivateCallCount++;
			},
			destroy: function () {
				//console.log("app-view:", " in [" + this.viewName + "] destroy called for [" + this.id + "]");
			}
		} //;
		); // for dcl view attempt...
	});
