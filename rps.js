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

const playerSelection = prompt("Pick one" , "Rock, paper, scissors");
const computerSelection = getComputerChoice();


console.log(playerSelection, computerSelection)
