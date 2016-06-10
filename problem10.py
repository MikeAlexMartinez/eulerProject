''' The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million. '''

def createArray(start, End):
	for i in range(start, End + 1):
		numArray = []
		numArray.append(i)

		return numArray

Target = 100
primes = []
initialArray = createArray(1,Target)
testingArray = createArray(1,Target/2)
print "Initial Array Created"
print "testing Array Created"

loop = 1
while len(testingArray) > 0:
	divisor = testingArray[0]
	

