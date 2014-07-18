define(["dojo/dom"], function(dom){
	return {
		beforeActivate: function(previousView, data){
			console.log("in beforeActivate for ["+this.id+"]")
			dom.byId("detailslabel").innerHTML = (previousView ? previousView.id : "") + (data ? ("-" + data) : "");
		},
		afterActivate: function(previousView, data){
			console.log("in afterActivate for ["+this.id+"]")
		},
		beforeDeactivate: function(previousView, data){
			console.log("in beforeDeactivate for ["+this.id+"]")
		},
		afterDeactivate: function(previousView, data){
			console.log("in afterDeactivate for ["+this.id+"]")
		}
	}
});