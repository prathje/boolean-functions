var kvTabelleView = Backbone.View.extend({
	el: $('#container-kv'),
	initialize: function(){
		this.render();
		this.model.on("change", this.render);
	},
	render: function(){
		var s = "<table>";
		for(var a = 0; a < this.model.get("columns"); ++a)
		{
			s = "<tr>";
			for(var b = 0; b < this.model.get("rows"); ++b)
			{
				s+= "<th id='" + (a*this.model.get("rows") + b) + "'>" + this.model.get("KVCells")[(a*this.model.get("rows") + b)] + "</th>";
			}
			s += "</tr>";
			this.$el.append(s);
		}
		s = "</table>";
		this.$el.append(s);
	}
});

var WertetabellereiheView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	render: function(){
		var s = "<tr>";
		for(var i = 0; i < this.model.get("numVariables"); ++i){
			s += "<th id='" + i + "'>" + this.model.get("namesVariables")[this.model.get("numVariables")-i] + "</th>"; 
		}
	}
})

var WertetabelleView = Backbone.View.extend({
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
	