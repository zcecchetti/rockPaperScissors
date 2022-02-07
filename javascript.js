// Randomly select between Rock, Paper, and Scissors

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerSelection = (randomNumber === 0) ? "rock" : (randomNumber === 1) ? "paper" : (randomNumber === 2) ? "scissors" : "" ;
    return computerSelection;
}

// Compare userSelection to computerSelection

function compareSelections (userSelection, computerSelection) {
    let outcome;
    if (userSelection.toLowerCase() > computerSelection) {
        alert("You win this round!");
        outcome = 1;
    } else if (userSelection.toLowerCase() < computerSelection) {
        alert("The computer wins this round...");
        outcome = 2;
    } else {
        alert("Its a draw.")
        outcome = 0;
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
            userWinCount++;
        } else if (roundWinner === 2) {
            computerWinCount++;
        } else {
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

