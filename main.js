/* make computer pick rock, paper, or scissors randomly */
let computerScore = 0;
let playerScore = 0;
let currentRound = 1;
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
    currentRound += 1;

    if (playerChoice === computerChoice) {
        message.textContent = "You tied last round.";
    }
    else if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            roundWin();
        }
        else {
            roundLoss();
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            roundWin();
        }
        else {
            roundLoss();
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            roundWin();
        }
        else {
            roundLoss();
        }
        
    }
    else {
        return "Invalid choice. Please choose rock, paper, or scissors";
    }
    updateRound();
}

function updateScore() {
    score.textContent = `Current Score: Player: ${playerScore} Computer: ${computerScore}`;
}

function updateRound() {
    round.textContent = `Round ${currentRound}`;
}

function updateWinMessage() {
    message.textContent = "You won last round.";
}

function updateLossMessage() {
    message.textContent = "You lost last round.";
}

function roundWin() {
    playerScore += 1;
    updateScore();
    updateWinMessage();
    checkGameEnd();
}

function roundLoss() {
    computerScore += 1;
    updateScore();
    updateLossMessage();
    checkGameEnd();  
}

function checkGameEnd() {
    if (playerScore === 5) {
        alert(`You won on round ${currentRound-1}. The final score was ${playerScore} to ${computerScore}. Click OK to start a new game.`);
        playerScore = 0;
        computerScore = 0;
        currentRound = 1;
        updateScore();
        updateRound();
        message.textContent = '';
    } else if (computerScore === 5) {
        alert(`You lost on round ${currentRound-1}. The final score was ${playerScore} to ${computerScore}. Click OK to start a new game.`);
        playerScore = 0;
        computerScore = 0;
        currentRound = 1;
        updateScore();
        updateRound();
        message.textContent = '';
    }
}
/* play games of rock, paper, scissors against the computer until 
either 5 total games have been played or one player has 3 wins. */

function game() {
    let playerChoice;
    let result;

    while (computerScore < 5 && playerScore < 5) {
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

const header = document.createElement('div');
header.classList.add('header');

const title = document.createElement('div');
title.classList.add('title');
title.textContent = "Rock, Paper, Scissors";
title.style.cssText = 'align-items: center; justify-content: center;'

const main = document.createElement('div');
main.classList.add('main');
main.style.cssText = 'align-items: center; justify-content: center;'


const round = document.createElement('div')
round.classList.add('round');
round.textContent = `Round ${currentRound}`;
round.style.cssText = 'text-align: center;';
main.appendChild(round);

const text = document.createElement('div');
text.classList.add('text');
text.style.cssText = 'text-align: center;';
main.appendChild(text);


const btnframe = document.createElement('div');
btnframe.classList.add('btnframe');
btnframe.style.cssText = 'display: flex; justify-content: center; align-items: center; flex-direction: column;'

const btnstext = document.createElement('div');
btnstext.classList.add('btnstext');
btnstext.textContent = "Choose an option:";
btnstext.style.cssText = 'font-size: 24px; background-color: red;'
btnframe.appendChild(btnstext);

const buttons = document.createElement('div');
buttons.classList.add('buttons');
const btnrock = document.createElement('button');
const btnpaper = document.createElement('button');
const btnscis = document.createElement('button');
buttons.style.cssText = 'display: flex;'
btnrock.textContent = "Rock";
btnpaper.textContent = "Paper";
btnscis.textContent = "Scissors";
btnrock.classList.add('buttons');
btnpaper.classList.add('buttons');
btnscis.classList.add('buttons');
buttons.appendChild(btnrock);
buttons.appendChild(btnpaper);
buttons.appendChild(btnscis);
btnframe.appendChild(buttons);



const message = document.createElement('div');
message.classList.add('message');
message.style.cssText = 'min-height: 20px;'
message.textContent = ""

const score = document.createElement('div');
score.classList.add('score');
score.textContent = `Current Score: Player: ${playerScore} Computer: ${computerScore}`;


btnrock.addEventListener('click', function() {
    playRound('rock', computerPlay());
});
btnpaper.addEventListener('click', function() {
    playRound('paper', computerPlay());
});
btnscis.addEventListener('click', function() {
    playRound('scissors', computerPlay());
});




const style = document.createElement('style');
style.innerHTML = `
        button {
            color:red;
            background-color: black;
            font-size: 40px;
            padding: 0 8px;
            margin: 12px;
            box-shadow: 3px 2px gray;
            border: 2px solid red;
        }
        body {
            height: 100vh;
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            margin: 0;
            padding: 0;
        }
        .buttons {
            width: 600px;
        }
        `;

const body = document.querySelector('body');


document.head.appendChild(style);

body.appendChild(header);
body.appendChild(title);
body.appendChild(main);
body.appendChild(btnframe);
body.appendChild(message);
body.appendChild(score);




