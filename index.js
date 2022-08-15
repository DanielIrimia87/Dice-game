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
rollBtn.addEventListener("click", () => {
    const randomeNumber = Math.floor(Math.random() * 6) + 1;

    // Display the dice number 
    if ( player1Turn) {
        messageEl.textContent = "Player 1 Turn"
        player1Dice.textContent = randomeNumber;    
        player1Dice.classList.add("active");  // add classactive
        player2Dice.classList.remove("active"); // remove the active classList 
    } else  { 
        messageEl.textContent = "Player 2 Turn"
        player2Dice.textContent = randomeNumber;
        player2Dice.classList.add("active");  // add classactive
        player1Dice.classList.remove("active"); // remove the active classList
        
    }
    // Switch the turn back to the other player
    player1Turn = !player1Turn;
    
})
/* end click event Roll Dice Button*/
