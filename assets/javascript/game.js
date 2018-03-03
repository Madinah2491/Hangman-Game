var computerChoices = ["b", "c", "e", "f", "g", "j", "k", "l", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "m", "a", "d", "i", "n", "h"];

//Create variables to represent score//
var wins = 0;
var losses = 0;
var guesses = 10;

document.onkeyup = function(event) {

  //determines the ke that is pressed//
  var userGuess = event.key;

  //randomly chooses letter//
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // This logic determines the outcome of the game (win/loss), and increments the appropriate number 

  if (userGuess === computerGuess ) {
    wins++;
  } else if (userGuess !== computerGuess) {
    guesses--;
  } 

    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
  var html =
    "<p>You chose: " + userGuess + "</p>" +
    "<p>The computer chose: " + computerGuess + "</p>" +
    "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>"

    document.querySelector("#game").innerHTML = html;
  };