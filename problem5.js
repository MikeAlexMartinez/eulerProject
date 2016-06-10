/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? */

/* must be multiple of 380 */

/* Find the smallest set of primes, such that all numbers 1-20 can be constructed. This set will 
be the prime factorisation of the smallest number to which 1-20 are all evenly divisible. */

var primeArray = [2,3,5,7,11,13,17,19];
var primeObject = {
    2: [],
    3: [],
    5: [],
    7: [],
    11: [],
    13: [],
    17: [],
    19: []
};
var start = 11;
var end = 20;
var answer = 1;

/* find prime factors */
var primeFactors = function(number) {
    factors = [];
	divisor = 2;
	var container = new Object(); 
	
	while ( number > 1 ) {
		while ( number % divisor === 0 ){
			factors.push(divisor);
			number = number / divisor ;
		}

		divisor++ ;
	}
    
    container.number = factors;
    
	return container;
};

for (i=start ; i <= end ; i++ ) {
	
	var container = primeFactors(i);
	
	/* compare container to existing object, add missing factors */
	for (var key in container){
	    pOLength = primeObject.key.length;
	    cLength = container.key.length;
	}
	
	
	for ( j = 0; j < pFArray.length ; j++  ) {
		primeArray.push(pFArray[j]);
	}
	
}

for ( i=0 ; i < primeArray.length ; i++ ){
	answer = answer * primeArray[i];
}
console.log(primeFactors);
console.log(answer);

