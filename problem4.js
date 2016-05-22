/* find the largest palindrome made from 2 3 digit numbers. */

/* steps 1: largest number from 2 3 digit numbers is 999*999 ergo, palindrome must be smaller. */
/* step 2: loop through numbers from number above downwards evaluating if number is palindrome */
/* step 3: if palindrome, can the number be divisble by two whole factors? start from 999 decrement to 100 */
/* Note: 	smallest divisor must be at least as big at the sqrt of the palindrome, else the answer may be 
			bigger than a three digit number */
var testNumber = 999;
var firstTestNumber = 999^2;
var divisor = 999;
var lowerLimit = 100;
var palindromeFloor = 10000;
var answer = 0;
var factors = [];

var palindromeTest = function (number) {
	
	var test = false ;

	var testString = number.toString();
	var string1 = testString.substring(0,3);
	var string2 = testString.charAt(5) + testString.charAt(4) + testString.charAt(3);

	if (string1 === string2) {
		test = true;
	}

	return test;
};


for ( i = firstTestNumber ; i > 10000 ; i-- ) {
	
	var palCheck = palindromeTest(i);

	if(palCheck) {

		for ( j = divisor ; j > lowerLimit ; j-- ) {
			

			if ( i % j === 0 ) {
				
				var

				if (i / j) {
				answer = i ;
				factors.push(j);
				factors.push(i / j);

				j = lowerLimit;
				i = 10000;
				}
			}
		}
	}
}

console.log(factors);
console.log(answer);

