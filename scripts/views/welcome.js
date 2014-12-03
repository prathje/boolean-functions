var WelcomeView = Backbone.View.extend({
		className  : 'welcome',
		events: {
			'click #input-function': 'inputFunction',
			'click #input-table': 'inputTable',
		},
		inputFunction: function(e) {
			e.preventDefault();
			app.router.navigate('input-function', {trigger: true});
			//app.router.input();
		},
		inputTable: function(e) {
			e.preventDefault();
			app.router.navigate('input-table', {trigger: true});
		},
		initialize: function() {
		},
		render: function() {
			this.$el.append("choose:");
			this.$el.append("<a id='input-function' href='http://www.tagesschau.de/'>Function</a> <a id='input-table' href='http://www.tagesschau.de/'>Table</a> ");
		}
});