var Wertetabelle = Backbone.Model.extend({
	defaults: {
		numVariables: 0,
		namesVariables: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
		minTerms: []
	}
});

var Wertetabellereihe = Backbone.Model.extend({
	defaults: {
		numVariables: 0,
		minTerm: ""
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


		