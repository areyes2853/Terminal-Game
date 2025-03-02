
const prompt = require("prompt-sync")();
const username = prompt('What is your name? ');
const smartAsssremarsk = require('./array.js');
const smartAsssremarskWinner = require('./array.js');
const smartAsssremarskTie = require('./array.js');

console.log(`Welcome, ${username}! \n`);
console.log("Please enter your move (rock, paper, or scissors)");
console.log(
  "After you make your move, the computer will randomly select a move. \n"
);
console.log("The winner will be determined based on the following RULES:");
console.log("1. Rock beats Scissors.");
console.log("2. Scissors beats Paper.");
console.log("3. Paper beats Rock. \n");

console.log("Good luck!");
console.log("-----------------------------------");

// Function to generate computer's move
function getComputerMove() {
  // Generate a random number between 0 and 2
  // 0 -> 'rock'
  // 1 -> 'paper'
  // 2 -> 'scissors'
  // Return the corresponding move
  let result;
  const computerChoice = Math.floor(Math.random() * 3);//this line generates a random number between 0 and 2

  if (computerChoice === 0) {
    result = "rock";
  } else if (computerChoice === 1) {
    result = "paper";
  } else {
    result = "scissors";
  }

  return result;
}

// Function to determine the winner given a player's move and the computer's move
function determineWinner(playerMove, computerMove) { //comparison bwtn both parameters
  // If the moves are the same, it's a tie
  let winner;
  if (playerMove === computerMove) {
    winner = "tie";
  }
  // Else if playerMove is 'rock' and computerMove is 'scissors', player wins 
  else if (playerMove === "rock" && computerMove === "scissors") {
    winner = "player";
  } 
  // Else if playerMove is 'paper' and computerMove is 'rock', player wins
  else if (playerMove === "paper" && computerMove === "rock") {
    winner = "player";
  }
  // Else if playerMove is 'scissors' and computerMove is 'paper', player wins
  else if (playerMove === "scissors" && computerMove === "paper") {
    winner = "player";
  } 
  // Else, the computer wins
  else {
    //winner = `Computer wins ${username}`
    winner = "computer";
  }
  // Return the result (e.g., 'win', 'lose', 'tie')
  return winner;
    
} // sylvia notes for understanding for this assignment but not for future dev
// so now, we wrote 2 functions so that we know who the winner is, but haven't called it yet. 


// Main function to play the game
function playGame() {
  // Prompt the user to enter their move (e.g., 'rock', 'paper', or 'scissors')
  // Validate the input (ensure it's one of the allowed moves)
  // Call getComputerMove() to obtain the computer's move
  // Call determineWinner(playerMove, computerMove) to decide the outcome
  // Display both moves and the result (win/lose/tie)


  const playerMove = prompt('Choose a move: "Rock", "Paper", "Scissors" : ').toLocaleLowerCase();
  const isPlayerMoveValid = (playerMove == "rock" || playerMove == "paper" || playerMove == "scissors");

  if (isPlayerMoveValid) {
    //if player types in correct word, then go to next step
    
    const computerMove = getComputerMove();//generate computer move
    const winner = determineWinner(playerMove, computerMove); // output: tie, player, computer
    // If tie, then log "You guys are tied!"
    
    console.log(`\n${username}: ${playerMove} \n`);
    console.log(`Computer: ${computerMove} \n`);
    if (winner === "tie") {
        // If tie, log a random smartass remark!
        const randomIndexThree = Math.floor(Math.random() * smartAsssremarskTie.length);
      console.log(`${smartAsssremarskTie[randomIndexThree]}`);

    } else if (winner === "player") {
        // If player wins, log a random smartass remark!
        const randomIndexTwo = Math.floor(Math.random() * smartAsssremarskWinner.length);
      console.log(`${username} wins! ${smartAsssremarskWinner[randomIndexTwo]}`);
    } else {
        // If computer wins, log a random smartass remark!
        const randomIndex = Math.floor(Math.random() * smartAsssremarsk.length);
      console.log(`Computer wins! ${smartAsssremarsk[randomIndex]}`);
    };
  } else {
    
    console.log(`Invalid Input ${playerMove} :(`);
  };
}

// Start the game
playGame();
