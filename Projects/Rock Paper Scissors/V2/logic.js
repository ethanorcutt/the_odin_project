let playerScore = 0;
let computerScore = 0;
let continuePlay = 1;

const newGameBtn = document.querySelector('div#game-options button#new-game');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function computerPlay() {
    const weapons = ["rock", "paper", "scissors"];
    return weapons[getRandomInt(3)];
}

function playRound(playerSelection, computerSelection) {
    let result = 0;

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        result = 0;
    }
    else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')) {
        result = 1;
    }
    else if (playerSelection == computerSelection) {
        result = 2;
    }
    else {
        result = -1;
    }

    switch (result) {
        case 0:
            playerScore++;
            updateTextDisplays('roundOutcomeDisplay',`Player wins - ${playerSelection} beats ${computerSelection}`);
            break;
        case 1:
            computerScore++;
            updateTextDisplays('roundOutcomeDisplay',`Computer wins - ${computerSelection} beats ${playerSelection}`);
            break;
        case 2:
            updateTextDisplays('roundOutcomeDisplay','Draw! Try again.');
            break;
        default:
            updateTextDisplays('roundOutcomeDisplay','Error. Try again.');
    }
}

function updateTextDisplays(target, string) {
    const playerScoreDisplay = document.querySelector('#player-score');
    const computerScoreDisplay = document.querySelector('#computer-score');
    const winnerDisplay = document.querySelector('#winner-display');
    const roundOutcomeDisplay = document.querySelector('#round-outcome');
    
    if(target === 'roundOutcomeDisplay') roundOutcomeDisplay.textContent = string;
    if(target === 'playerScoreDisplay') playerScoreDisplay.textContent = string;
    if(target === 'computerScoreDisplay') computerScoreDisplay.textContent = string;
    if(target === 'winnerDisplay') winnerDisplay.textContent = string;
}

// Function that adds the eventlisteners to all (Rock, Paper, Scissors) choice buttons.
function addListenersToButtons() {
    const buttons = Array.from(document.querySelectorAll('div#buttons button'));
    
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if(continuePlay) {
                playRound(button.id.toString(), computerPlay());
                checkAndUpdateScores();
            }
        });
    });

    newGameBtn.addEventListener('click', (e) => {
        startNewGame();
    });
}

function checkAndUpdateScores() {
    updateTextDisplays('playerScoreDisplay', `${playerScore}`);
    updateTextDisplays('computerScoreDisplay', `${computerScore}`);

    if(playerScore == 5 || computerScore == 5) {
        continuePlay = 0;

        if (playerScore > computerScore) {
            updateTextDisplays('winnerDisplay', 'Player Wins!');
        }
        else if (playerScore < computerScore) {
            updateTextDisplays('winnerDisplay', 'Computer Wins!');
        }
        else {
            updateTextDisplays('winnerDisplay', 'Tie Game!');
        }
    }
}

function startNewGame() {
    playerScore = 0;
    computerScore = 0;
    continuePlay = 1;
    checkAndUpdateScores(); // Sets the values for the player scores and checks for when the game is over.
    updateTextDisplays('roundOutcomeDisplay', '');
}

addListenersToButtons(); // Function that adds the eventlisteners to all (Rock, Paper, Scissors) choice buttons.
startNewGame();