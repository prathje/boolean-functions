var ValueTableView = Backbone.View.extend({
	render: function(){
		var s = "<tr>";
		for(var i = 0; i < this.model.get("numVariables"); ++i){
			s+="<td>" + this.model.get("namesVariables")[this.model.get("numVariables")-i-1] + "</td>";
		}
		s += "<td>out</td></tr>";
		this.$el.append(s);
		for(var i = 0; i < Math.pow(2, this.model.get("numVariables")); ++i){
			this.model.rows[i].render();
			this.$el.append(this.model.rows[i].$el);
		}
	}
});

var ValueTableRowView = Backbone.View.extend({
	render: function(){
		this.$el.empty();
		this.$el.append("<tr>");
		var s = "";
		for(var i = 0; i < this.model.get("numVariables"); ++i){
			if(this.model.get("term").search("!" + this.model.get("namesVariables")[this.model.get("numVariables")-i-1]) == -1){
				s += "<td id='row" + i + "'>" + 1 + "</td>";
			}
			else{
				s += "<td id='row" + i + "'>" + 0 + "</td>";
			}
		}
		s += "<td class='outputvalue'>" + this.model.get("output") + "</td>";
		this.$el.append(s);
		var self = this.model;
		this.$el.find(".outputvalue").first().on( "click", function(event){
			if(self.get("output") == 0){
				self.set("output", 1);
			}
			else{
				self.set("output", 0);
			}
			$(event.target).html(self.get("output"));
		});
	}
});