var OutputView = Backbone.View.extend({
		initialize: function() {
		
		},
		render: function() {
			this.$el.append("output");
			var valuemodel = new ValueTable({numVariables: 4});
			var valueview = new ValueTableView({model: valuemodel});
			this.$el.append(valueview.render());
		}
});