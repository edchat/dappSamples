// jshint unused:false, undef:false, quotmark:false
define(["dojo/dom", "dojo/on", "delite/register", "dstore/Memory", "dstore/Trackable", "dojo/_base/declare"],
	function (dom, on, register, MemoryStore, Trackable, declare) {
	return {
		name: "",
		lastSelection: "",
		_beforeActivateCallCount: 0,
		_beforeDeactivateCallCount: 0,
		_afterActivateCallCount: 0,
		_afterDeactivateCallCount: 0,
		constructor: function (viewParams) { // jshint unused:false
			//TODO: why is this not being hit?
			this.app.log("app-view:", " in [" + this.viewName + "] constructor called for [" + this.id + "]");
			var tempName = "";
		},
		init: function () {
			this.name = this.id;
			var list = this.ownerDocument.getElementById("list2");

			// Different options for creating the store, 1. TrackableStore, add data below
			//var TrackableMemoryStore = declare([MemoryStore, Trackable], {});
			//list.store = new TrackableMemoryStore();
			// Different options for creating the store, 2. MemoryStore, add data below
			//list.store = new MemoryStore();
			//for (i = 1; i < 6; i++) {
			//	list.store.add({label: "Selection " + i, id: i});
			//}
			// Different options for creating the store, 3. Use loadedStores from the config loadedStores.list2Store
			list.store = this.loadedStores.list2Store;

			// When the list is clicked, transition to dstore1AppHome2, pass the label of the selected item.
			on(this.ownerDocument.getElementById("list2"), "click",
				function (/*MouseEvent*/ evt) {
					var label = evt.target.innerText || "";
				//	var viewParams = {
				//		viewData:label
				//	};
					var targetView = "dstore1AppHome1";
					var hash = "YYY";
				//	dstore1App.showOrHideViews(targetView,{viewData:label)
				//	dstore1App.showOrHideViews(targetView, viewParams);
					var viewParams = {"viewParams":{'lastSel':label}};
					dstore1ParamsApp.showOrHideViews(targetView,viewParams,hash);

				}
			);

		},
		beforeActivate: function (previousView, viewData) {
			console.log("app-view:", "beforeActivate called for [" + this.viewName + "] with previousView.id =[" +
				(previousView ? previousView.id : "") + "] with viewData=", viewData);
			console.log("app-view:", "beforeActivate called with this.viewParams.lastSel = [" +
				(this.viewParams ? this.viewParams.lastSel : "") + "]");
			this._beforeActivateCallCount++;
			this.lastSelection = this.viewParams.lastSel ? this.viewParams.lastSel : "";
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
		//	this.app.emit("afterActivateCalled", {
		//		view: this
		//	});
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
