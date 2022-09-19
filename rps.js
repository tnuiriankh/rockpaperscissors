//Computer chooses between rock, paper, scissors
function getComputerChoice() {
    var computerChoices = [
        "Rock",
        "Paper",
        "Scissors",
    ]
    
    var computerPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    return computerPick;
    }

    

//Player chooses to complete inputs

const playerSelection = prompt("Pick one" , "Rock, paper, or scissors");

//Game is played out

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock", computerSelection === "Scissors") {
        result = "You win!"
    } else if (playerSelection === "rock", computerSelection === "Rock") {
        result = "It's a tie!"
    } else if (playerSelection === "rock", computerSelection === "Paper") {
        result = "You lose!"
    }

    if (playerSelection === "paper", computerSelection === "Scissors") {
        result = "You lose!"
    } else if (playerSelection === "paper", computerSelection === "Rock") {
        result = "You win!"
    } else if (playerSelection === "paper", computerSelection === "Paper") {
        result = "It's a tie!"
    }

    if (playerSelection === "scissors", computerSelection === "Scissors") {
        result = "It's a tie!"
    } else if (playerSelection === "scissors", computerSelection === "Rock") {
        result = "You lose!"
    } else if (playerSelection === "scissors", computerSelection === "Paper") {
        result = "You win!"
    }

    return(result);

    }

console.log(playRound);