/* calculate sum of all numbers less than 1000 that are divisible by 5 or 3 */

var total = 0 ;

for( i = 1 ; i < 1000 ; i++ ) {
	if ( i % 5 === 0 || i % 3 === 0) {
		total += i
	} 
}

console.log(total);