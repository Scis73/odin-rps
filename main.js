/* make computer pick rock, paper, or scissors randomly */
let choice;

function computerPlay() {
   choice = Math.floor(Math.random() * 3);
   switch (choice) {
       case 0:
           return "rock";
           break;
        case 1:
            return "paper";
            break;
        case 2:
           return "scissors";
           break;

   }
}

/* ask player for choice of rock, paper, or scissors
compare players choice to computer's choice */
function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === computerChoice) {
        return "Tie.";
    }
    else if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
        return "Player wins.";
        }
        else {
            return "Computer wins.";
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
        return "Player wins.";
        }
        else {
            return "Computer wins.";
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
        return "Player wins.";
        }
        else {
            return "Computer wins.";
        }
        
    }
    else {
        return "Invalid choice. Please choose rock, paper, or scissors";
    }
}
/* play games of rock, paper, scissors against the computer until 
either 5 total games have been played or one player has 3 wins. */

function game() {
    let computerScore = 0;
    let playerScore = 0;
    let totalRounds = 0;
    let playerChoice;
    let result;

    while (totalRounds < 5 && computerScore < 3 && playerScore < 3) {
        playerChoice = prompt("Choose rock, paper, or scissors: ")
        result = playRound(playerChoice, computerPlay());

        
        totalRounds += 1;
        if (result === "Player wins.") {
            playerScore += 1;
        }
        else if (result === "Computer wins.") {
            computerScore += 1;
        }
        console.log(result + " Current score: Player: " + playerScore + ", Computer: " + computerScore + ".");
    }
    /* give player a message about the result of the game */

    if (computerScore === playerScore) {
        return "It's a tie. Both player won " + playerScore + " rounds.";
    }
    else if (computerScore > playerScore) {
        return "You lost. The final score was " + computerScore + " to " + playerScore + "." 
    }
    else {
        return "You won. The final score was " + playerScore + " to " + computerScore + "."
    }   
}



