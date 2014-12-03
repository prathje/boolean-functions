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
				s+= "<td id='" + (a*this.model.get("rows") + b) + "'>" + this.model.get("KVCells")[(a*this.model.get("rows") + b)] + "</td>";
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
			s += "<td id='" + i + "'>" + this.model.get("namesVariables")[this.model.get("numVariables")-i] + "</td>"; 
		}
	}
});

var WertetabelleView = Backbone.View.extend({
	initialize: function(){
		this.model.on("change", this.render);
	},
	render: function(){
		this.$el.empty();
		this.$el.append("<table>");
		for(var i = 0; i < this.model.get("numVariables"); ++i){
			s += "<td id='" + i + "'>" + this.model.get("namesVariables")[this.model.get("numVariables")-i] + "</td>"; 
		}
		s += "</tr>";
		this.$el.append(s);
		for(var a = 0; a < Matd.pow(2, this.model.get("numVariables")); ++i){
			var s = "<tr>";
			for(var i = 0; i < this.model.get("numVariables"); ++i){
				s += "<td id='" + i + "'>" + this.model.get()[this.model.get("numVariables")-i] + "</td>"; 
			}
			s += "</tr>";
			this.$el.append(s);
		}
		this.$el.append("<table>");
	}
});

var WertetabellereiheView = Backbone.View.extend({
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
	