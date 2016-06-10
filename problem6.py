'''
1. limit to natural numbers
2. sum numbers - square number
3. square - sum
4. deduct 3. from 2.
'''
import math

def sumOfSquares(naturalLimit):

	total = 0
	for i in range(1, naturalLimit + 1):
		addition = math.pow(i, 2)
		total = total + addition

	return total

def squareOfSum(naturalLimit):

	total = 0
	for i in range(1, naturalLimit + 1):
		total = total + i

	total = math.pow(total, 2)

	return total

naturalLimit = int(raw_input("choose an integer: "))
print "Limit of natural numbers is %d" % naturalLimit
totalSumOfSquares = sumOfSquares(naturalLimit)
print "Sum of Squares is: %d" % totalSumOfSquares
totalSquareOfSum = squareOfSum(naturalLimit)
print "Square of sum is: %d" % totalSquareOfSum
answer = totalSquareOfSum - totalSumOfSquares
print "Difference is: %d" % answer