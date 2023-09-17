
/**
 * It takes an argument, and logs it to the console
 * @param args - The arguments passed to the function.
 */ 
/* /* const log(arg) shorter syntax of  console.log */
const log = args => console.log(args);

/* Defining the game state. */
/* Game state */
    
    /* Stored  background State of the container */
        const backgroundState = {
            initialState: "linear-gradient(180deg, var(--color-5) 10%, var(--color-3) 50%, var(--color-1) 90%)",  
            winnerState: "/images/winner-dice.gif" 
        };
    /* Destructuring the backgroundState object. */
        const {initialState, winnerState} = backgroundState;
    /* End Stored background State of the container */

    let player1Score = 0;
    let player2Score = 0;
    let player1Turn = true;
    let prevDiceRoll = 0;
/* end game state*/

/* Store references to the DOM notes */

    const containerEL = document.querySelector('.container');
    const messageEl = document.getElementById('message');
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const player1Scoreboard = document.getElementById("player1Scoreboard");
    const player2Scoreboard = document.getElementById("player2Scoreboard");
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');
    const rollDice = document.getElementById('rollBtn');
    const resetBtn = document.getElementById('resetBtn');

/* End references to the DOM notes */

/* show display block button   */                     
    function showDisplayButton() {
        rollBtn.style.display = "none"
        resetBtn.style.display = "block"
    }
/* end show display block button */

/** Defining the game logic. */
/* Game logic */
    rollDice.addEventListener('click', () => {

        /* Generating 2 random number between 1 and 6 for the dice */
        const dice1Roll = Math.floor(Math.random() * 6) + 1;
        const dice2Roll = Math.floor(Math.random() * 6) + 1;
        /* End generating a random number between 1 and 6. */

        /* Displaying the dice rolls. */
        /* Changing the image of the dice to the number that was rolled. */
        dice1.style.display = 'block';
        dice2.style.display = 'block';
        dice1.src = `images/dice${dice1Roll}.png`;
        dice2.src = `images/dice${dice2Roll}.png`;
        /* End displaying the dice rolls. */
        
        /* The above code is checking to see if the player rolled a 1 or a 6. If they rolled a 1, they
        lose their turn. If they rolled a 6, they double their score. */
        if (dice1Roll === 1 && dice2Roll === 1) { 
            messageEl.textContent = "You rolled 1! You lose your turn!";
            switchTurn();
        } else if (dice1Roll === 6 && dice2Roll === 6) {
            messageEl.textContent = `You rolled a ${dice1Roll} and a ${dice2Roll}. You double up your score!`;
            updateScore(dice1Roll,dice2Roll);
            updateScore(dice1Roll,dice2Roll);
        } else {
            messageEl.textContent = "You rolled " + (dice1Roll + dice2Roll) + "!";
            updateScore(dice1Roll,dice2Roll);
        }
        switchTurn();
    });

    /**
     * If it's player 1's turn, add the dice rolls to player 1's score and update the scoreboard. If
     * it's player 2's turn, add the dice rolls to player 2's score and update the scoreboard
     * @param dice1Roll - The value of the first dice roll.
     * @param dice2Roll - The value of the second dice roll.
     */
    const updateScore = (dice1Roll,dice2Roll) => { 

        if (player1Turn) {
            player1Score += dice1Roll + dice2Roll;
            player1Scoreboard.textContent = player1Score;
            messageEl
            player1.classList.remove('active');
            player2.classList.add('active');
        } else {
            player2Score += dice1Roll + dice2Roll;
            player2Scoreboard.textContent = player2Score;
            player2.classList.remove('active');
            player1.classList.add('active');
        }
        checkWinner();
    };

    /**
     * If it's player 1's turn, remove the active class from player 1 and add it to player 2. If it's
     * player 2's turn, remove the active class from player 2 and add it to player 1
     */
    const switchTurn = () => {

        /* Switching the turn back to the other player. */
        player1Turn = !player1Turn;
    };

    /**
     * If player 1's score is greater than or equal to 100, display a message saying that player 1 wins
     * and show the display button. If player 2's score is greater than or equal to 100, display a
     * message saying that player 2 wins and show the display button
     */
    const checkWinner = () => { 

        if (player1Score >= 100) {
            messageEl.textContent = "Player 1 wins! 🥳";
            containerEL.style.backgroundImage = `url('${winnerState}')`;
            showDisplayButton();
        } else if (player2Score >= 100) {
            messageEl.textContent = "Player 2 wins! 🎉";
            containerEL.style.backgroundImage = `url('${winnerState}')`;
            showDisplayButton();
        }
    };

    /* Listening for a click event on the reset button, and when it is clicked, it calls the resetGame
    function. */
    resetBtn.addEventListener('click', () => { 
        resetGame();
    });


    /**
     * The resetGame function resets the game by setting the player scores to 0, updating the
     * scoreboards, hiding the dice, and displaying the roll button and hiding the reset button
     */
    const resetGame = () => { 
        player1Score = 0;
        player2Score = 0;
        player1Scoreboard.textContent = player1Score;
        player2Scoreboard.textContent = player2Score;
        dice1.style.display = 'none';
        dice2.style.display = 'none';
        messageEl.textContent = "";
        rollBtn.style.display = "block"
        resetBtn.style.display = "none"
        containerEL.style.backgroundImage = `${initialState}`;
    };

/* end game logic */


