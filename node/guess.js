/*jshint esversion: 6 */
const prompt = require('prompt');
prompt.start();

console.log('Guess the number!');

const secret = Math.floor(Math.random() * (100 - 1) + 1);
let guesses = 0;

console.log('The secret is ' + secret);

const checkGuess = function (err, result) {
	guesses++;
	const guess = result.guess;
	if (secret == guess) {
		console.log("You win! Guesses: " + guesses);
	}
	else if (secret > guess) {
		console.log('Too low');
		inputGuess();
	}
	else if (secret < guess) {
		console.log('Too high');
		inputGuess();
	}
};

const inputGuess = function () {
	console.log('Please input your guess:');
	prompt.get(['guess'], checkGuess);
};

inputGuess();
