var MainView = Backbone.View.extend({
		initialize: function() {
		},

		goto: function(view) {

			var previous = this.currentPage || null;

			var next = view;

			if (previous) {
				if (previous.$el.hasClass('init')) {
					previous.$el.removeClass('init');
				}
					/*previous.transitionOut(function () {
					previous.remove();
				});*/
				previous.remove();
			}

			next.render();
			if (!this.currentPage) {
				next.$el.addClass('init');
			}
			next.delegateEvents();
			this.$el.append( next.$el );
			this.currentPage = next;

		}
	});