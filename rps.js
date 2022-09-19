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

console.log(getComputerChoice());
    

//Player chooses to complete inputs

let playerSelection = prompt("Pick one" , "Rock, paper, or scissors");

//Game is played out

function playRound(playerSelection, computerPick) {
    let result;

    if (playerSelection === "rock", computerPick === "Scissors") {
        result = "You win!"
    } else if (playerSelection === "rock", computerPick === "Rock") {
        result = "It's a tie!"
    } else if (playerSelection === "rock", computerPick === "Paper") {
        result = "You lose!"
    }

    if (playerSelection === "paper", computerPick === "Scissors") {
        result = "You lose!"
    } else if (playerSelection === "paper", computerPick === "Rock") {
        result = "You win!"
    } else if (playerSelection === "paper", computerPick === "Paper") {
        result = "It's a tie!"
    }

    if (playerSelection === "scissors", computerPick === "Scissors") {
        result = "It's a tie!"
    } else if (playerSelection === "scissors", computerPick === "Rock") {
        result = "You lose!"
    } else if (playerSelection === "scissors", computerPick === "Paper") {
        result = "You win!"
    }

    return(result);

    }

console.log(playRound());