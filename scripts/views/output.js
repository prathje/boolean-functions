var OutputView = Backbone.View.extend({
		initialize: function() {
		
		},
		render: function() {
			this.$el.append("output");
			var valuemodel = new ValueTable({numVariables: 2, minTerms: ["!b&!a, !b&a, b&!a, b&a"]});
			var valueview = new ValueTableView({model: valuemodel});
			this.$el.append(valueview.render());
		}
});