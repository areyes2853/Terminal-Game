const prompt = require('prompt-sync')();
// const username = prompt('What is your name? ');
// console.log(`Your name is ${username}`);

//testing!!
//testing two times in a row!!
//sudo code!
// console.log(`Welcome ${username} to Rock, Paper, Scissors!`);
console.log('Please enter your move (rock, paper, or scissors)');
console.log('After you make your move, the computer will randomly select a move');
console.log('The winner will be determined based on the following rules:');
console.log('Rock beats Scissors');
console.log('Scissors beats Paper');
console.log('Paper beats Rock');
console.log('Good luck!');
console.log('-----------------------------------');

// Function to generate computer's move
function getComputerMove() {
    // Generate a random number between 0 and 2
    // 0 -> 'rock'
    // 1 -> 'paper'
    // 2 -> 'scissors'
    // Return the corresponding move
    let result;
    const a = Math.floor(Math.random() * 3);

    if (a === 0 ){
      result = 'rock';
    } else if (a === 1) {
      result = 'paper';
    } else {
      result = 'scissors'
    }
    
      return result;
    }

  //getComputerMove()
  console.log(getComputerMove());


  // Function to determine the winner given a player's move and the computer's move
  function determineWinner(playerMove, computerMove) {
    // If the moves are the same, it's a tie
    let winner;
   if(playerMove === computerMove){
    winner = "tie"
   }
   else if(playerMove === "rock"&& computerMove === "scissors"){
    winner = 'player'
   }
   else if(playerMove === "paper" && computerMove ==="rock"){
    winner = 'player'
   }
   else if(playerMove=== "scissors" && computerMove=== "paper"){
    winner = 'player'
   }
   else{
    //winner = `Computer wins ${username}`
    winner ='computer'
   }
   return winner;
    // Else if playerMove is 'rock' and computerMove is 'scissors', player wins
    // Else if playerMove is 'paper' and computerMove is 'rock', player wins
    // Else if playerMove is 'scissors' and computerMove is 'paper', player wins
    // Else, the computer wins
    // Return the result (e.g., 'win', 'lose', 'tie')
  }
  let computerMove = getComputerMove();
  console.log(determineWinner("rock",computerMove))
  
  
  // Main function to play the game
  function playGame() {
    
    // Prompt the user to enter their move (e.g., 'rock', 'paper', or 'scissors')
    const playerMove = prompt('What is your move? ');
    // Validate the input (ensure it's one of the allowed moves)
    // Call getComputerMove() to obtain the computer's move
    // Call determineWinner(playerMove, computerMove) to decide the outcome
    // Display both moves and the result (win/lose/tie)
  }
  
  // Start the game
  // playGame();
  