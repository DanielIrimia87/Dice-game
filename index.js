const log = arg => console.log(arg); // 
/* log(arg) shorter syntax of  console.log */

/* game state: */
    let player1Score = 0;
    let player2Score = 0;
    let player1Turn = true;
/* end game state */

/* store references to DOM nodes */
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const messageEl = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
/* end store references */

/* Hook up a click event listener to the Roll Dice Button. */
rollBtn.addEventListener("click", function() {
    const randomeNumber = Math.floor(Math.random() * 6) + 1;
    log(randomeNumber);

    // 1. Find out which players turn it is
    if ( player1Turn) {
           
    }
     // 2. log out the value e.g. "Player 1 rolled 5"
     // 3. Switch the turn back to the other player
})
