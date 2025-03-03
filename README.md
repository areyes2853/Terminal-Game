# Terminal-Game

A Rock, Paper, Scissors game that runs in the terminal, created as our first JavaScript project.

## How to Play

1. Clone the repository
  
2. Run `npm install` to install dependencies
  
3. Start the game with `node app.js`
  
4. Enter your name when prompted
  
5. For each round, type "rock", "paper", or "scissors"
  
6. Play 3 rounds and see who wins!
  

## Game Rules

- Rock beats Scissors
  
- Scissors beats Paper
  
- Paper beats Rock
  
- If both players choose the same move, it's a tie
  

## Our Development Process

### Starting Point

We began with just this basic code provided in the lab setup:

```javascript
const prompt = require('prompt-sync')();

const username = prompt('What is your name? ');

console.log(`Your name is ${username}`);
```

From there, we created a plan using pseudocode to outline the main functions we would need to build our game. We implemented each function one by one, testing as we went.

### Creating the Computer's Move Function

First, we built the function to generate the computer's move:

```javascript
function getComputerMove() {

  let result;

  const computerChoice = Math.floor(Math.random() * 3);



  if (computerChoice === 0) {

    result = "rock";

  } else if (computerChoice === 1) {

    result = "paper";

  } else {

    result = "scissors";

  }



  return result;

}
```

We used `Math.random()` to generate a random number between 0 and 2, then assigned rock, paper, or scissors based on that number.

### Determining the Winner

Next, we created a function to compare the player's move with the computer's move and determine the winner:

```javascript
function determineWinner(playerMove, computerMove) {

  if (playerMove === computerMove) {

    return "tie";

  }

  else if (playerMove === "rock" && computerMove === "scissors") {

    return "player";

  }

  else if (playerMove === "paper" && computerMove === "rock") {

    return "player";

  }

  else if (playerMove === "scissors" && computerMove === "paper") {

    return "player";

  }

  else {

    return "computer";

  }

}
```

We used if/else statements to check each possible combination and return either "player", "computer", or "tie".

### Building the Main Game Loop

After the core functions were working, we created the main game loop:

```javascript
function playGame() {

  let rounds = 3;

  let playerWins = 0;

  let computerWins = 0;

  let successfullRounds = 0;

  while (successfullRounds < rounds) {

    const playerMove = prompt(

      'Choose a move: "Rock", "Paper", "Scissors" : '

    ).toLocaleLowerCase();

    const isPlayerMoveValid =

      playerMove == "rock" || playerMove == "paper" || playerMove == "scissors";



    if (isPlayerMoveValid) {

      // Game logic here

    } else {

      console.log(`Invalid Input ${playerMove} :(`);

    }

  };

}
```

We decided to use a while loop that would continue until 3 successful rounds were played. We added validation to check if the player's input was valid.

### Adding Personality with Sarcastic Comments

Once the basic game was working, we wanted to make it more fun by adding sarcastic comments. We created separate arrays for win, lose, and tie messages:

```javascript
const smartAsssremarsk = ["Woah, you're not doing so well. Don't buy a lottery ticket today.",

"Looks like you got crushed—maybe it was doomed from the start, just like your winning streak.",

"You were clearly in a dark place tonight—guess even the abyss had better odds.",

"Computer wins again; sometimes fate wraps your hopes in a blanket of inevitable defeat"]
```

We then updated the game loop to randomly select and display these messages based on the outcome of each round.

### Final Touches

Finally, we added the welcome message, game instructions, and a final winner announcement:

```javascript
console.log(`Welcome, ${username}! \n`);

console.log("Please enter your move (rock, paper, or scissors)");

console.log("After you make your move, the computer will randomly select a move. \n");

console.log("The winner will be determined based on the following RULES:");

console.log("1. Rock beats Scissors.");

console.log("2. Scissors beats Paper.");

console.log("3. Paper beats Rock. \n");
```

And at the end of the game:

```javascript
const finalWinner = ((playerWins > computerWins) && username) || "computer";

console.log(`\nFinal winner is: ${finalWinner}!!!!!`)

console.log("Thank you for playing sarcastic rocks, paper, siccors!");
```

## Challenges We Faced

- Coming up with a game idea that was fun but still manageable within our time limit.
  
- Understanding how to properly structure a JavaScript program
  
- Managing the game rounds and player input validation
  
- Figuring out how to export and import variables between files
  
- Using Git for collaboration on the same codebase
  

## What We Learned

- How to create interactive programs using the terminal
  
- Basic JavaScript functions, objects, arrays, loops, and conditionals
  
- How to generate random choices in a program
  
- Working with user input and validation
  
- Requiring/Exporting code across multiple files
  
- Collaborating using Github
  

## References

- [Mozilla Developer Network (MDN): Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) - Used to implement the random computer move selection

## Team Members

- [Angel L Reyes](https://github.com/areyes2853)
  
- [Sylvia Remington](https://github.com/SylviaRemington)
  
- [Christian Vieux](https://github.com/christianvieux)