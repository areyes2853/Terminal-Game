
const prompt = require("prompt-sync")();
const username = prompt('What is your name? ');

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
  const a = Math.floor(Math.random() * 3);

  if (a === 0) {
    result = "rock";
  } else if (a === 1) {
    result = "paper";
  } else {
    result = "scissors";
  }

  return result;
}

// Function to determine the winner given a player's move and the computer's move
function determineWinner(playerMove, computerMove) {
  // If the moves are the same, it's a tie
  let winner;
  if (playerMove === computerMove) {
    winner = "tie";
  } else if (playerMove === "rock" && computerMove === "scissors") {
    winner = "player";
  } else if (playerMove === "paper" && computerMove === "rock") {
    winner = "player";
  } else if (playerMove === "scissors" && computerMove === "paper") {
    winner = "player";
  } else {
    //winner = `Computer wins ${username}`
    winner = "computer";
  }
  return winner;
  // Else if playerMove is 'rock' and computerMove is 'scissors', player wins
  // Else if playerMove is 'paper' and computerMove is 'rock', player wins
  // Else if playerMove is 'scissors' and computerMove is 'paper', player wins
  // Else, the computer wins
  // Return the result (e.g., 'win', 'lose', 'tie')
}

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
    const computerMove = getComputerMove();
    const winner = determineWinner(playerMove, computerMove); // output: tie, player, computer
    // If tie, then log "You guys are tied!"
    
    console.log(`\nPlayer: ${playerMove} \n`);
    console.log(`Computer: ${computerMove} \n`);
    if (winner == "tie") {
      console.log("You guys are tied!");
    } else if (winner == "player") {
      console.log(`${username} wins! High five!`);
    } else {
      console.log("You lose!");
    };
  } else {
    console.log(`Invalid Input ${playerMove} :(`);
  };
}

// Start the game
playGame();
