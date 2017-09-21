from random import randint

print 'Guess the number!'

secret = randint(1, 100)
guesses = 0

print 'The secret number is: ' + str(secret)

while True:
	guesses += 1

	try:
		guess = int(raw_input('Please input your guess: '))
	except ValueError:
		continue

	if guess > secret:
		print 'Too high'
	elif guess < secret:
		print 'Too low'
	elif guess == secret:
		print 'You win! Guesses: ' + str(guesses)
		break
