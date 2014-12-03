var ValueTableView = Backbone.View.extend({
	initialize: function(){
		this.model.on("change", this.render);
	},
	render: function(){
		this.$el.empty();
		this.$el.append("<table>");
		for(var a = 0; a < Math.pow(2, this.model.get("numVariables")); ++i){
			var s = "<tr>";
			for(var i = 0; i < this.model.get("numVariables"); ++i){
				s += "<th id='" + i + "'>" + this.model.get("namesVariables")[this.model.get("numVariables")-i] + "</th>"; 
			}
			s += "</tr>";
			this.$el.append.(s);
		}
		this.$el.append("<table>");
	}
}

var ValueTableRowView = Backbone.View.extend({
	initiate: function(){
		this.render();
	},
	render: function(){
		this.$el.empty();
		this.$el.append("<tr>");
		var s = "";
		for(var i = 0; i < this.model.get("numVariables"); ++i){
			if(this.model.get("term").search("!" + this.model.get("namesVariables")[this.model.get("numVariables")-i]) == -1){
				s += "<td id='row" + i + "'>" + 1 + "</td>";
			}
			else{
				s += "<td id='row" + i + "'>" + 0 + "</td>";
			}
		}
		s += "<td onclick='change(this)' >" + this.model.get("output") + "</td>";
	}
});

function change(element){
		if(this.model.get("output") == 0){
			this.model.set("output", 1);
		}
		else{
			this.model.set("output", 0);
		}
		element.innerHTML = this.model.get("output");
}