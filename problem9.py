import math

total = 1000
cFloor = int(round(total/3))
cMax = int(total / 2)

for i in range(cFloor, cMax + 1):
	c = i
	cSq = math.pow(i, 2)
	abComb = total - i
	if abComb % 2 == 0:
		b = abComb / 2
	else:
		b = int(round(abComb / 2 + 1))
	
	testTwo = False
	for j in range(b, i + 1):
		a = total - i - j
		aSq = math.pow(a, 2)
		bSq = math.pow(j, 2)
		if aSq + bSq == cSq:
			testTwo = True
			b = j
			break

	if testTwo == True:
		break

c = total - a - b

answer = a * b * c

print answer