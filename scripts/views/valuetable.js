var ValueTableView = Backbone.View.extend({
tagName: "table",
className: "kv-table",
	render: function(){
	this.$el.empty();
		var s = "<thead> <tr>";
		for(var i = 0; i < this.model.get("numVariables"); ++i){
			s+="<th>" + this.model.get("namesVariables")[this.model.get("numVariables")-i-1] + "</th>";
		}
		s += "<th>out</th></tr> </thead> <tbody>";
		this.$el.append(s);
		for(var i = 0; i < Math.pow(2, this.model.get("numVariables")); ++i){
			// this.model.rows[i].render();
			this.$el.append(this.model.rows[i].render());
		}
		this.$el.append("</tbody>");
		return this.$el;
	}
});

var ValueTableRowView = Backbone.View.extend({
	tagName: "tr",
	className: "kv-table-row",
	render: function(){
	this.$el.empty();
		var s = "";
		for(var i = 0; i < this.model.get("numVariables"); ++i){
			if(this.model.get("term").search("!" + this.model.get("namesVariables")[this.model.get("numVariables")-i-1]) == -1){
				s += "<td class='kv-table-field' id='row"+ i + "'>" + 1 + "</td>";
			}
			else{
				s += "<td class='kv-table-field' id='row" + i + "'>" + 0 + "</td>";
			}
		}
		s += "<td class='outputvalue kv-table-field'>" + this.model.get("output") + "</td>";
		this.$el.append(s);
		var self = this.model;
		if(this.model.get("changeable")){
			this.$el.find(".outputvalue").first().on( "click", function(event){
				if(self.get("output") == 0){
					self.set("output", 1);
					self.parent.
				}
				else{
					self.set("output", 0);
				}
				$(event.target).html(self.get("output"));
			});
		}
		return this.$el;
	}
});

var MinTerm = Backbone.View.extend({
	tagName: "p",
	className: "minterm",
	defaults:{
		term: ""
	},
	
	render: function()
	{
		this.$el.append(this.get("term"));
		return this.$el;
	}
	


});

var kvSliderView = Backbone.View.extend({

});
	
var kvSliderTermView = Backbone.View.extend({
});	