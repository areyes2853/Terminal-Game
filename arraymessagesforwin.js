const arrayMessageForWins = ["You win! Victory dance! Do it. Now.", 
    "You won. Do a high kick. You deserve it.",
    "You win! Sing your favorite kareoke song and then play again!",
    "You won! The world loves you. You got game, and you deserve to play another round", 
    "Wow. Look at you go!!! You're a supahstaaaaaar!!!!",
    "YOU WON!!!! CONFETTI! BALLOONS! CUE PARTY SOUNDS! I AM YELLING I'M SO HAPPY FOR YOU!!!!",
    "Round of applause. You won. Take a bow.",
    "Go get some chips, dip and guacamole to celebrate. You won.",
]
module.exports = arrayMessageForWins; 


const smartAsssRemarksAddtl = ["You lost! Cue the sad music!", 
    "Doh! Hand to face plant!",
    "Bum bum bum... sad tuba sounds, you lost.",
    "You lost. Better luck next time.",
    "You lost. You need to step up your Rock, Paper, Scissors game so that you don't make puppies and babies sad.",

]

//module.exports = smartAsssRemarksAddtl; 


const tie = ["Oh it's a tie, eh???! Maybe if you arm wrestle, you can break the tie."]
module.exports = tie; 

/* Additional Ideas: 

When a player beats the computer, you may check the player's score against the current high score of that game,
 and see if a new record has been achieved. This would resolve in one of two ways - either the player has scored
higher than the previous high score, or they didn’t. Boolean.

let currentHighScore = true;
How do you make code to check previous high score and compare to current high score? Do you use a JS Function?

function checkHighScore(userScore, highScore) {
if (userScore > highScore) {
return true; //new high score achieved
} else {
return false; //no new high score
}
}

or use something that starts with 
playerScore <= 10, play again. Once they get to 10, game over.

=============================================

For funny comments use template literals with backtick ` so can add user's name
let funnyWinnerComment1 = `asdflkjsdfkjsdkfj, ${player}!`;
let funnyWinnerComment2 = `blah blah blah`; 


additional comments so can save and push
adding a little bit more to practice push
*/