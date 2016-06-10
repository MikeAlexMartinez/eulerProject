input = raw_input("Please enter a number: ")
test = float(input)

def primeFactors(number):
	
	factors = []
	divisor = 2
	
	while number > 1:
		while number % divisor == 0:
			factors.append(divisor)
			number = number / divisor
		
		divisor = divisor + 1
	
	return factors

pFArray = primeFactors(test)
answer = max(pFArray)
print answer
