// jshint unused:false, undef:false, quotmark:false
define(["dojo/dom", "dojo/on", "delite/register", "dstore/Memory", "dstore/Observable", "dojo/_base/declare"],
	function (dom, on, register, MemoryStore, Observable, declare) {
	return {
		name: "",
		lastSelection: "",
		_beforeActivateCallCount: 0,
		_beforeDeactivateCallCount: 0,
		_afterActivateCallCount: 0,
		_afterDeactivateCallCount: 0,
		init: function () {
			this.domNode.name = this.id;
			var list = this.domNode.ownerDocument.getElementById("list1");

			// Different options for creating the store, 1. ObservableStore, add data below
			//var ObservableMemoryStore = declare([MemoryStore, Observable], {});
			//list.store = new ObservableMemoryStore();
			// Different options for creating the store, 2. MemoryStore, add data below
			//list.store = new MemoryStore();
			//for (i = 1; i < 6; i++) {
			//	list.store.add({label: "Selection " + i, id: i});
			//}
			// Different options for creating the store, 3. Use loadedStores from the config loadedStores.list1Store
			list.store = this.loadedStores.list1Store;

			// When the list is clicked, transition to dstore1AppHome2, pass the label of the selected item.
			on(this.domNode.ownerDocument.getElementById("list1"), "click",
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
			this.app.log("app-view:", "beforeActivate called for [" + this.viewName + "] with previousView.id =[" +
				(previousView ? previousView.id : "") + "] with viewData=", viewData);
			this._beforeActivateCallCount++;
			this.domNode.lastSelection = viewData ? viewData.label : "";
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
