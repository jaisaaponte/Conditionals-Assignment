var userChoice = prompt("Do you choose heads or tails?");

var randomNumber = Math.floor(Math.random() * 2); // Generates either 0 or 1
var computerChoice = (randomNumber === 0) ? "heads" : "tails"; // Assigns "heads" if randomNumber is 0, "tails" if it's 1

if(userChoice === computerChoice) {
	alert("You guessed right! The coin flip landed on " + userChoice);
} else {
	alert("Sorry, the coin flip landed on " + computerChoice);
}
var birthYear = parseInt(prompt("What year were you born?"));

var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;

if(age > 21) {
	alert("You are old enough to drink in the US");
} else if(age === 21) {
	alert("You are old enough to drink in the US...barely");
} else {
	alert("Sorry, you are not old enough to drink in the US");
}