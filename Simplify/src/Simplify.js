var ValorObject = function (anyValor) {
	this.anyValor = anyValor;

	this.toCaps = function() {
		return this.anyValor.toUpperCase();
	};

	this.toLower = function() {
		return this.anyValor.toLowerCase();
	};

};

var VoidObject = function (){
	this.anyValor = '';
	
	this.toCaps = function() {
		return '';
	};

	this.toLower = function() {
		return '';
	};
};




var Factory = function(){};

var mapObject = {};

Factory.makeObject = function(anyValor){

		var isAValidValor = (/^[a-zA-Z]+$/.test(anyValor));

		if (isAValidValor){
			mapObject[anyValor] = new ValorObject(anyValor);
		}else{
			mapObject[anyValor] = new VoidObject();
		}
		return '';
}



function ClassValorObject() {

	this.giveMeAn = function(anyValor) {		
		Factory.makeObject(anyValor);
		return  mapObject[anyValor].anyValor;
	};

	this.length = function() {
		return 24;
	};

	this.getVocals = function() {};
	this.getConsonants = function() {};
};