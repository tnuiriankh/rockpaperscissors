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

let playerSelection = prompt("Pick one" , "Rock, paper, or scissors?");
let result;
//Game is played out

function playRound(playerSelection, getComputerChoice) {

    if (playerSelection == getComputerChoice) {
       result = "It's a tie!";
    } else if (
        (getComputerChoice == "Rock" && playerSelection == "scissors") ||
        (getComputerChoice == "Paper" && playerSelection == "rock") ||
        (getComputerChoice == "Scissors" && playerSelection == "paper") 
        ) {
        result = "You lose";
    } else if (
        (playerSelection == "scissors" && getComputerChoice == "Paper") ||
        (playerSelection == "rock" && getComputerChoice == "Scissors") ||
        (playerSelection == "paper" && getComputerChoice == "rock")
    ) {
        result = "You win!";
    }
        
}