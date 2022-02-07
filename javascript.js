// Randomly select between Rock, Paper, and Scissors

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerSelection = (randomNumber === 0) ? "rock" : (randomNumber === 1) ? "paper" : (randomNumber === 2) ? "scissors" : "" ;
    return computerSelection;
}

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
    }

// Prompt user to make a selection for 5 rounds

function game() {
    userWinCount = 0;
    computerWinCount = 0;
    roundsCompleted = 0;
    while (roundsCompleted < 5) {
        let userSelection = prompt("Rock, Paper, or Scissors?", "");
        let computerSelection = computerPlay();
        let roundWinner = compareSelections(userSelection, computerSelection);
        if (roundWinner === 1) {
            alert("You win this round!");
            userWinCount++;
        } else if (roundWinner === 2) {
            alert("The computer wins this round...")
            computerWinCount++;
        } else if (roundWinner === 0) {
            alert("It's a draw.");
            continue;
        } else {
            alert("That's not an option");
            continue;
        }
        roundsCompleted++
    }
    if (userWinCount > computerWinCount) {
        alert("You are the champion!!!")
    } else {
        alert("You lose :'(")
    }
}

