// Randomly select between Rock, Paper, and Scissors

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerSelection = (randomNumber === 0) ? "rock" : (randomNumber === 1) ? "paper" : (randomNumber === 2) ? "scissors" : "" ;
    return computerSelection;
};

// Compare userSelection to computerSelection

function compareSelections (userSelection, computerSelection) {
    let outcome;
    if (userSelection.toLowerCase() === 'rock') {
        outcome = (computerSelection === "rock") ? 0 : (computerSelection === "scissors") ? 1 : (computerSelection === "paper") ? 2 : "";
    } else if (userSelection.toLowerCase() === "paper") {
        outcome = (computerSelection === "paper") ? 0 : (computerSelection === "rock") ? 1 : (computerSelection === "scissors") ? 2 : "";
    } else if (userSelection.toLowerCase() === "scissors") {
        outcome = (computerSelection === "scissors") ? 0 : (computerSelection === "paper") ? 1 : (computerSelection === "rock") ? 2 : "";
    } else {
        outcome = null;
    }
    return outcome;
};

// create a few variables needed for future iteration

let userSelection = "";
let userWinCount = 0;
let computerWinCount = 0;
let roundsCompleted = 0;

// allow user to select an input with buttons and call function to play 5 rounds

const userClick = document.querySelectorAll('button');
userClick.forEach((button) => {
    button.addEventListener("click", () => {
        userSelection = button.id;
        playRound(userSelection);
        addGameInfo(roundOutcome);
    });
});

// function to play each round

function playRound(userSelection) {
    let computerSelection = computerPlay();
    let roundWinner = compareSelections(userSelection, computerSelection);
    
    if (roundsCompleted > 5) {
        roundOutcome = "stop choosing, the game is over!"
        roundsCompleted++;
        return roundOutcome;
    }
    if (roundsCompleted < 5) {
        if (roundWinner === 1) {
            roundOutcome = "You win this round";
            userWinCount++;
            roundsCompleted++;
        } else if (roundWinner === 2) {
            roundOutcome = "The computer wins this round";
            computerWinCount++;
            roundsCompleted++;
        } else {
            roundOutcome = "It's a draw.";
        };
    }
    if (roundsCompleted === 5) {
        if (computerWinCount > userWinCount) {
            roundOutcome = roundOutcome + " and the computer is the champion... better luck next time!";
            roundsCompleted ++;
        } else {
            roundOutcome = roundOutcome + " and you are the CHAMPION!!";
            roundsCompleted++;
        }
    };
    return roundOutcome;
};

// write results of each round to DOM

function addGameInfo(roundOutcome) {
    const results = document.querySelector('#results');
    const gameResults = document.createElement('div');
    gameResults.classList.add('gameResults');
    gameResults.textContent = roundOutcome;

    if (roundsCompleted < 8) {
        const eliminatePast = document.querySelectorAll(".gameResults");
        eliminatePast.forEach(gameResults => {
            gameResults.remove();
        });
        results.appendChild(gameResults);
    } else {
        return;
    };
};
    
