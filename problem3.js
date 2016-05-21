var test = 900000000001 ;

var primeFactors = function(number) {
    factors = [];
	divisor = 2;
	while ( number > 1 ) {
		while ( number % divisor === 0 ){
			factors.push(divisor);
			number = number / divisor ;
		}

		divisor++ ;
	}

	return factors;
};

pFArray = primeFactors(test);
var answer = Math.max.apply(Math, pFArray);
console.log(answer);