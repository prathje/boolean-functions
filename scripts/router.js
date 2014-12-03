var Router = Backbone.Router.extend({
		routes: {
			"": "welcome",
			"welcome": "welcome",
			"input": "input",
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
		//app.mainView.goto(app.welcomeView);
			var next =  new WelcomeView();
			app.mainView.goto(next);
		},
		input: function() {
			//app.mainView.goto(app.inputView);
			var next =  new InputView();
			app.mainView.goto(next);
		},
		output: function() {
			//app.mainView.goto(app.outputView);
			var next =  new OutputView();
			app.mainView.goto(next);
		},
  });