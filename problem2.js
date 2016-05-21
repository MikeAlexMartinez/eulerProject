/* calculate sum of all even fibonnaci numbers less than 4,000,000 */

var nextFibNo = 1;
var prevFibNo = 0;
var currentFibNo = 0;
var total = 0;

do {
    prevFibNo = nextFibNo;
    
    nextFibNo += currentFibNo;  
    
    currentFibNo = prevFibNo;
      
	if ( currentFibNo % 2 === 0 ){
		total += currentFibNo;
	}
    console.log("total: " + total);
} while ( currentFibNo <= 4000000) ;

console.log(total);