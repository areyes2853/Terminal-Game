const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);

//testing!!
//testing two times in a row!!
//sudo code!

// Function to generate computer's move
function getComputerMove() {
    // Generate a random number between 0 and 2
    // 0 -> 'rock'
    // 1 -> 'paper'
    // 2 -> 'scissors'
    // Return the corresponding move
  }
  
  // Function to determine the winner given a player's move and the computer's move
  function determineWinner(playerMove, computerMove) {
    // If the moves are the same, it's a tie
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
  }
  
  // Start the game
  playGame();
  