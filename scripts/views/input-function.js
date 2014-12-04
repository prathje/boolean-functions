var InputFunctionView = Backbone.View.extend({
		initialize: function() {
		},
		events: {
			'click #output': 'output'
		},
		output: function(e) {
			e.preventDefault();
			app.router.navigate('output', {trigger: true});
		},
		render: function() {
		this.$el.append("input-function");
		this.$el.append("<a id='output' href='http://www.tagesschau.de/'>Output</a>");
		}
});