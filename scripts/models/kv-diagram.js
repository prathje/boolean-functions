var Wertetabelle = Backbone.Model.extend({
	defaults: {
		numVariables: 0,
		minTerms: []
	}
});

var kvTabelle = Wertetabelle.extend({
	defaults: {
		rows: 0,
		columns: 0,
		KVCells: []
	}
});

var KMF = Backbone.Model.extend({
	defaults: {
		num_Terms: 0,
		KMFTerms: []
	}
});

var DMF = Backbone.Model.extend({
	defaults: {
		num_Terms: 0,
		DMFTerms: []
	}
});


		