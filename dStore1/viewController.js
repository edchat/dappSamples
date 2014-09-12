// jshint unused:false, undef:false, quotmark:false
define(["dojo/dom", "delite/register", "dstore/Memory", "dstore/Trackable", "dojo/_base/declare"],
	function (dom, register, MemoryStore, Trackable, declare) {
	return {
		name: "",
		lastSelection: "",
		_beforeActivateCallCount: 0,
		_beforeDeactivateCallCount: 0,
		_afterActivateCallCount: 0,
		_afterDeactivateCallCount: 0,
		init: function () {
			this.name = this.id;
			var list = this.ownerDocument.getElementById("list1");

			// Different options for creating the store, 1. TrackableStore, add data below
			//var TrackableMemoryStore = declare([MemoryStore, Trackable], {});
			//list.store = new TrackableMemoryStore();
			// Different options for creating the store, 2. MemoryStore, add data below
			//list.store = new MemoryStore();
			//for (i = 1; i < 6; i++) {
			//	list.store.add({label: "Selection " + i, id: i});
			//}
			// Different options for creating the store, 3. Use loadedStores from the config loadedStores.list1Store
			list.store = this.loadedStores.list1Store;

			// When the list is clicked, transition to dstore1AppHome2, pass the label of the selected item.
			this.ownerDocument.getElementById("list1").on("click",
				function (/*MouseEvent*/ evt) {
					var label = evt.target.innerText || evt.target.textContent || "";
					var targetView = "dstore1AppHome2";
					var params = {
						viewData:{
							label:label
						}
					};

					dstore1App.showOrHideViews(targetView,params);
				}
			);

		},
		beforeActivate: function (previousView, viewData) {
			console.log("app-view:", "beforeActivate called for [" + this.viewName + "] with previousView.id =[" +
				(previousView ? previousView.id : "") + "] with viewData=", viewData);
			this._beforeActivateCallCount++;
			this.lastSelection = viewData ? viewData.label : "";
		},
		beforeDeactivate: function (nextView, viewData) {
			console.log("app-view:", "beforeDeactivate called for [" + this.viewName + "] with previousView.id =[" +
				(nextView ? nextView.id : "") + "]");
			this._beforeDeactivateCallCount++;
		},
		afterActivate: function (previousView, viewData) {
			console.log("app-view:", "afterActivate called for [" + this.viewName + "] with previousView.id =[" +
				(previousView ? previousView.id : "") + "] with viewData=", viewData);
			this._afterActivateCallCount++;
		},
		afterDeactivate: function (nextView, viewData) {
			console.log("app-view:", "afterDeactivate called for [" + this.viewName + "] with previousView.id =[" +
				(nextView ? nextView.id : "") + "]");
			this._afterDeactivateCallCount++;
		},
		destroy: function () {
			console.log("app-view:", " in [" + this.viewName + "] destroy called for [" + this.id + "]");
		}
	};
});
