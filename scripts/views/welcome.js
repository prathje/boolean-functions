var WelcomeView = Backbone.View.extend({
		className  : 'welcome',
		events: {
			'click #input-link': 'input',
			'click #output-link': 'output',
		},
		input: function(e) {
			e.preventDefault();
			app.router.navigate('input', {trigger: true});
			//app.router.input();
		},
		output: function(e) {
			e.preventDefault();
			app.router.navigate('output', {trigger: true});
		},
		initialize: function() {
		},
		render: function() {
			this.$el.append("welcome");
			this.$el.append("<a id='input-link' href='http://www.tagesschau.de/'>in</a> <a id='output-link' href='http://www.tagesschau.de/'>out</a> ");
		}
});