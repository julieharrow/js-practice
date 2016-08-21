// Exercise 1 - Function Basics

function gratuity(bill,gratPercent){
  return bill*gratPercent/100;
}

function totalWithGrat(bill){
  gratPercent = prompt("What percent gratuity does your server deserve?");
  return bill+gratuity(bill,gratPercent)
}

bill = parseInt(prompt("How much is your bill?"))
console.log("Your total including gratuity is $" + totalWithGrat(bill).toFixed(2));



// Challenge 2 - Rock, Paper, Scissors

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function getHand(){
  var hands = ["rock","paper","scissors"];
  return hands[parseInt(Math.random()*10%3)];
}

var numPlayers = Number(prompt("How many players?"));
var players = [];

for (var i = 1; i <= numPlayers; i++){
  var player = {
    name: (prompt("Player "+ i +", what is your name?")).capitalizeFirstLetter(),
    numWins:0,
    hand:getHand()
  }
  players.push(player);
}

players.forEach function(){
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
  console.log("That is 3 wins " + player.name + "! Congrats!")
}
