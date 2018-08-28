puts 'Guess the number!'

guesses = 0
prng = Random.new
secret = prng.rand(1..100)


puts "The secret number is: #{secret}."

while TRUE
  guesses += 1

  guess = gets.to_i

  if guess > secret
  	puts "Too high"
  elsif guess < secret
  	puts "Too low"
  elsif guess == secret
  	puts "You win! Guesses: #{guesses}"
  	break
  end
end
