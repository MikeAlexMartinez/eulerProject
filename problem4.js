/* find the largest palindrome made from 2 3 digit numbers. */

/* step 1: largest 6 digit palindrome is 999999. */
/* step 2: working through each palindrome, every iteration is 1100 less than the last, except every
			10th iteration is 110 and every 100th iteration is 11 less.
			Once palindorme is less than 10000, stop */
/* step 3: Can the palindrome be divisble by two whole factors? start from 999 decrement, until 
			the second factor must be bigger than 999 in order to be correct */

			
var start = 999999;
var iterationDeduction1 = 1100;
var iterationDeduction10 = 110;
var iterationDeduction100 = 11;
var divisor = 999;
var palindromeFloor = 100000;
var answer = 0;
var factors = [];
var answerFound = false;
var iteration = 1;


while( start > palindromeFloor ) {
	
	console.log("start: " + start);
	
	
	var factorCheck = true;
	while( factorCheck && divisor > 100 ){
		
		var divisorLength =  toString(Math.round(start / divisor)).length;
		console.log("divisor: " + divisor) ;
		console.log("div length: " + divisorLength) ;
		
		if(divisorLength > 3) {
			factorCheck = false;
		} else {
			if (start % divisor === 0) {
				factors.push(divisor);
				factors.push(start / divisor);
				answer = start;
				answerFound = true;
				factorCheck = false;
			}
		}
		
		divisor--;
	}	
		
	/* this works fine */	
	if(iteration % 100 === 0){
        start -= iterationDeduction100;
    } else if (iteration % 10 === 0){
	    start -= iterationDeduction10;
    } else {
	    start -= iterationDeduction1;
    }

    iteration++;
}

if (answerFound){
	console.log("factors are: " + factors);
	console.log("answer is: " + answer);
} else {
	console.log("Answer not found");
}
/* function no longer needed, changed algorithm only uses palindromes */
/* var palindromeTest = function (number) {
    
	var test = false ;

	var testString = number.toString();
	var string1 = testString.substring(0,3);
	var string2 = testString.charAt(5) + testString.charAt(4) + testString.charAt(3);

	if (string1 === string2) {
		test = true;
	}

	return test;
}; */ 