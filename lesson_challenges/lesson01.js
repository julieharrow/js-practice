// //Challenge 1 - Do you need more coffee?
// var numCups = prompt("How many cups of coffee have you had today?");
// if (numCups < 3) {
//   console.log("Yes, I'll take another cup of coffee!");
// }
// else {
//   console.log("No thanks, I've had " + numCups + "already.");
// }
//
//
// //Challenge 2 - Temperature
// var temperature = 81;
// var precipitation = " not ";
// var indoors = false;
// console.log("The temperature is "+ temperature +" degrees and it is" + precipitation + "raining!")
// if (indoors === true || (temperature > 80 && precipitation === " not ")) {
//   console.log("Time to swim!");
// }
// else {
//   console.log("Not really swimming weather...");
// }


// // Challenge 3 - 99 Bottles
//
// for (var numBottles = 99; numBottles > 0; numBottles --) {
//   if (numBottles === 1) {
//     console.log(numBottles + " bottle of beer on the wall, "+ numBottles +" bottle of beer! Take one down, pass it around, no more bottles of beer on the wall...go buy more beer!");
//   }
//   else {
//     console.log(numBottles + " bottles of beer on the wall, "+ numBottles +" bottles of beer! Take one down, pass it around " + (numBottles-1) + " bottles of beer on the wall...");
//   }
// }


// Challenge 4 - Rock, Paper, Scissors

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var numPlayers = Number(prompt("How many players?"));

for (var i = 1; i <= numPlayers; i++){
  var name = (prompt("Player "+ i +", what is your name?")).capitalizeFirstLetter();
  var options = ["rock","paper","scissors"];
  var numWins = 0;

  while (numWins < 3) {
    var userHand = (prompt("rock, paper, or scissors?")).toLowerCase();
    var computerHand = options[parseInt(Math.random()*10%3)];
    console.log("Computer played:  "  + computerHand);
    console.log(name + ", you played:  "  + userHand);
    if (computerHand === userHand) {
      console.log("TIE!");
    }
    else if (computerHand === "rock" && userHand === "paper") {
      console.log("You win!");
      numWins += 1
    }
    else if (computerHand === "rock" && userHand === "scissors") {
      console.log("You lose");
    }
    else if (computerHand === "paper" && userHand === "rock") {
      console.log("You lose");
    }
    else if (computerHand === "paper" && userHand === "scissors") {
      console.log("You win!");
      numWins += 1
    }
    else if (computerHand === "scissors" && userHand === "paper") {
      console.log("You lose");
    }
    else if (computerHand === "scissors" && userHand === "rock") {
      console.log("You win!");
      numWins += 1
    }
    else {
      console.log("Please make sure you type 'rock', 'paper', or 'scissors' to play.")
    }
  }
  console.log("That is 3 wins " + name + "! Congrats!")
}
