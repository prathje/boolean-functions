var ValueTable = Backbone.Model.extend({
	defaults: {
		numVariables: 0,
		namesVariables: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
		minTerms: []
	},
	rows: [],
	initialize: function(){
		for(var i = 0; i < Math.pow(2, this.get("numVariables")); ++i){
			var rowmodel = new ValueTableRow({numVariables: this.get("numVariables"), term: this.get("minTerms")[i]});
			var rowview = new ValueTableRowView({model: rowmodel});
			this.rows.push(rowview);
		}
	}
});

var ValueTableRow = Backbone.Model.extend({
	defaults: {
		numVariables: 0,
		namesVariables: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
		term: "",
		output: 0
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