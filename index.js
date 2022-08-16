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

/* show display block   button   */                     
function showDisplayButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}
/* end show display block button */

/* Hook up a click event listener to the Roll Dice Button. */
rollBtn.addEventListener("click", () => {
    const randomeNumber = Math.floor(Math.random() * 6) + 1;

    // Update the scores for each player
    // Display the scores in their scoreboards
    if ( player1Turn) {
        player1Score += randomeNumber;
        player1Scoreboard.textContent = player1Score; //    update the scoreboards
        player1Dice.textContent = randomeNumber;    
        player1Dice.classList.remove("active");  // remove the active classList 
        player2Dice.classList.add("active"); // add classactive
        messageEl.textContent = "Player 2 Turn"
    } else  { 
        player2Score += randomeNumber;
        player2Scoreboard.textContent = player2Score; //    update the scoreboards
        player2Dice.textContent = randomeNumber;
        player2Dice.classList.remove("active"); // remove the active classList
        player1Dice.classList.add("active"); // add classactive 
        messageEl.textContent = "Player 1 Turn"
        
    }

    // Change the message to "Player X has won!"
    // Hide the Roll Dice Button and show the Reset Button.
    if (player1Score >= 20 ) {
        messageEl.textContent = "Player 1 wins! 🥳";
        showDisplayButton();
    } else  if (player2Score >= 20 ) { 
        messageEl.textContent = "Player 2 wins! 🎉";
        showDisplayButton();
    } 
    // Switch the turn back to the other player
    player1Turn = !player1Turn;
    
})
/* end click event Roll Dice Button*/

// Hook a click event listener up with the Reset Button
// Invoke the reset() function when the Reset Button is clicked
resetBtn.addEventListener("click", ()=> { 
    reset();
});

// reset() function that resets the game
function reset() {
    messageEl.textContent = "Player 1 turn"; 
    player1Scoreboard.textContent = 0;
    player1Dice.textContent = "-"
    player2Scoreboard.textContent = 0;
    player2Dice.textContent = "-"
    resetBtn.style.display = "none";
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;
    resetBtn.style.display = "none";
    rollBtn.style.display = "block";
    player2Dice.classList.remove("active"); 
    player1Dice.classList.add("active");  
}