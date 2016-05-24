/* find the largest palindrome made from 2 3 digit numbers. */

/* step 1: largest 6 digit palindrome is 999999. */
/* step 2: working through each palindrome, every iteration is 1100 less than the last, except every
			10th iteration is 110 less and every 100th iteration is 11 less.
			Once palindrome is less than 100000, stop */
/* step 3: Can the palindrome be divisible by two whole factors? start from 999 decrement, once 
			the second factors length is bigger than 3 digits move on*/

			
var start = 999999;
var palindromeFloor = 100000;
var answer = 0;
var factors = [];
var answerFound = false;
var iteration = 1;

while( start > palindromeFloor && !answerFound ) {
    
    var divisor = 999;
    var factorLength = 3;

    do {
        var factor2 = (start / divisor);    
        var factorTwo = factor2.toFixed(0);
        factorLength = factorTwo.length;
        
		if(start % divisor === 0){
            if ( factorLength === 3 ) {
                answer = start;
                factors.push(divisor);
                factors.push(factor2);
                answerFound = true;
                break;
            }
        } 
        
        divisor--;
	    
    } while (factorLength < 4);
		
	if(iteration % 100 === 0){
        start -= 11;
    } else if (iteration % 10 === 0){
	    start -= 110;
    } else {
	    start -= 1100;
    }

    iteration++;
}

if (answerFound){
	console.log("Factors are: " + factors);
	console.log("Answer is: " + answer);
} else {
	console.log("Answer not found");
}
