''' 
find smallest number which is evenly divisible by all numbers from 1 to 20

Create initial array from 2 to 20.

find prime numbers between 2 and 20. Add to primeFactorArray, remove form initial array

find prime factors of remaining numbers.

if prime factors already within array, ignore, if not add to primeFactorArray

multiply primeFactorArray numbers together to find answer.
'''

def primeNumber():
	
	for testNum in testArray:
		
		if testNum == 2:
			
			primeFactorArray.append(testNum)
		
		else:
			
			test = True
			j = 2
			while j < testNum:
				if testNum % j == 0:
					test = False
					j = testNum
				j = j + 1
				
			if test == True:
				primeFactorArray.append(testNum)
	
	for number in primeFactorArray:
		testArray.remove(number)
		
def findPrimeFactors(number):
		
	primeFactorsTemp = []
	divisor = 2
		
	while number > 1:
		while number % divisor == 0:
			primeFactorsTemp.append(divisor)
			number = number / divisor
	
		divisor = divisor + 1
	
	return primeFactorsTemp

# program starts here
primeFactorArray = []
testArray = []
prompt = int(raw_input("Choose a number: "))

for i in range(2, prompt + 1):
	testArray.append(i)

primeNumber()

for number in testArray:
	primeFactorsTemp = findPrimeFactors(number)

	primeFactorBuffer = []
	for number in primeFactorsTemp:
	
		if number in primeFactorArray:
			primeFactorBuffer.append(number)
			primeFactorArray.remove(number)
		else:
			primeFactorArray.append(number)
	
	for number in primeFactorBuffer:
		primeFactorArray.append(number)

answer = 1
for number in primeFactorArray:
	answer = answer * number

print "answer is: %d" % answer