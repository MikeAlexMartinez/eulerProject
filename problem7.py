
limit = 10001
primeCounter = 1
test = 3
while primeCounter < limit:
	
	prime = True
	rounded = round(test / 2 + 0.5)
	testLimit = int(rounded)
	for i in range( 2 , testLimit ):
		if test % i == 0:
			prime = False

	if prime:
		primeCounter = primeCounter + 1
		if primeCounter == limit:
			answer = test

	test = test + 2

print "The 10001st prime is %d" % answer