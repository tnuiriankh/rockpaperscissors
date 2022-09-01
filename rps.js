//Player inputs rock, paper, or scissors
const playerChoice = prompt("Pick one" , "Rock, paper, or scissors?");


//Computer chooses between rock, paper, scissors

var computerChoices = [
    "Rock",
    "Paper",
    "Scissors",
]

var getComputerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

