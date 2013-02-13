
var charMather={
	charPerfectMacth : "*",
	charPartialMatch : "-"
};

function CodeBreakerEM() {

	this.check = function(guessCode, code) {
		var perfectMatches = returnMatches(guessCode,code,true);
		var partialMatches = returnMatches(guessCode,code,false);		
		var checkReturn = generateReturn(partialMatches,perfectMatches);
		return checkReturn;
	};


	var generateReturn = function(partialMatches,perfectMatches){
		partialMatches = partialMatches.substring(0, (partialMatches.length - perfectMatches.length));
		return partialMatches + perfectMatches;
	}

	var returnMatches= function(guessCode,code,isPerfectCase){
		var matcherReturn = "";
		for(var index in guessCode) {
			if (isPerfectCase) {
				matcherReturn += perfectMatcher(guessCode,code,index);
			}else{
				matcherReturn += partialMatcher(guessCode,code,index);
			}			
		}
		return matcherReturn;
	};

	var perfectMatcher = function(guessCode,code,index){
		var perfectMatcherReturn = "";
		var isPerfect = (guessCode[index] === code[index]);
		if(isPerfect) {
			perfectMatcherReturn += charMather.charPerfectMacth;
		}
		return perfectMatcherReturn;
	};

	var partialMatcher = function(guessCode,code,index){
		var partialMatcherReturn = "";
		var isPartial = (code.indexOf(guessCode[index]) != -1);
		if(isPartial) {
			partialMatcherReturn += charMather.charPartialMatch;
		}
		return partialMatcherReturn;
	}
}