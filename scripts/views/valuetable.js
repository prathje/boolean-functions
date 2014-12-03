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
	