var ValueTable = Backbone.Model.extend({
	defaults: {
		numVariables: 0,
		namesVariables: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
		givenTerms: [],
		changeable: true
	},
	rows: [],
	minTerms: [],
	output: [],
	positiveTerms: new Map(),
	initialize: function(){
		this.generateMinTerms();
		for(var i = 0; i < Math.pow(2, this.get("numVariables")); ++i){
			var rowmodel = new ValueTableRow({numVariables: this.get("numVariables"), term: this.minTerms[i], parent: this, rownumber: i, changeable: this.get("changeable")});
			var rowview = new ValueTableRowView({model: rowmodel});
			this.rows.push(rowview);
		}
	},
	generateMinTerms: function(){
		for(var b = 0; b < Math.pow(2, this.get("numVariables")); b++){
			this.minTerms.push("");
		}
		for(var a = 0; a < this.get("numVariables"); a++){
			var s = "!" + this.get("namesVariables")[a];
			for(var b = 0; b < Math.pow(2, this.get("numVariables")); b++){
				if((b%Math.pow(2, a)) == 0 && b != 0){
					if( s == this.get("namesVariables")[a]){
						s = "!" + this.get("namesVariables")[a];
					}
					else{
						s = this.get("namesVariables")[a];
					}
				}
				if(a != this.get("numVariables") -1){
					this.minTerms[b] = "&" + s + this.minTerms[b];
				}
				else{
					this.minTerms[b] = s + this.minTerms[b];
				}
			}
		}
	}
});

var ValueTableRow = Backbone.Model.extend({
	defaults: {
		numVariables: 0,
		namesVariables: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
		term: "",
		output: 0,
		rownumber: 0
	},
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

var kvMap = Backbone.Model.extend({
	defaults: {
		num_Terms: 0,
		row: 0,
		columns: 0,
		terms: [],
		output: [],
		sliders: []
	}
});
	
var kvSlider = Backbone.Model.extend({
		defaults: {
			position_x: 0,
			position_y: 0,
			height: 0,
			length: 0,
			top: undefined,
			positions: [],
			term: "",
			termelem: "",
			connectedbox: false
		}
});