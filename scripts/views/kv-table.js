var KVTableView = Backbone.View.extend({
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