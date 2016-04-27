var guessNumber = 7;

var stringUserInput = prompt("Guess secret number");
alert("typeof : " + typeof stringUserInput);

var intUserInput = Number(stringUserInput);

if (guessNumber === intUserInput) {
	alert("You're right!")
} else if (guessNumber < intUserInput) {
	alert("Too high!")
} else {
	alert("Too Low")
}