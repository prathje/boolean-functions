var Router = Backbone.Router.extend({
		routes: {
			"": "welcome",
			"welcome": "welcome",
			"input-function": "inputFunction",
			"input-table": "inputTable",
			"output": "output"
		},
		initialize: function() {
			/*app.welcomeView = new WelcomeView({el: this.el});
			app.inputView = new InputView({el: this.el});
			app.outputView = new OutputView({el: this.el});*/
			Backbone.history.start();
			this.welcome();
		},
		welcome: function() {
			var next =  new WelcomeView();
			app.mainView.goto(next);
		},
		inputFunction: function() {
			var next =  new InputFunctionView();
			app.mainView.goto(next);
		},
		inputTable: function() {
			var next =  new InputTableView();
			app.mainView.goto(next);
		},
		output: function() {
			var next =  new OutputView();
			app.mainView.goto(next);
		},
  });