function getComputerChoice(){
    let words = ["Rock", "Paper", "Scissors"];
    let word = words[Math.floor(Math.random() * words.length)];
    return word;
}

function playRound(playerSelection, computerSelection){
    if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")) {
        return `You win! ${playerSelection} beats ${computerSelection}!`
    } else if ((computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Scissors" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Rock")){
        return `You lose! ${computerSelection} beats ${playerSelection}!`
    } else if (computerSelection = playerSelection){
        return `There was a bug.`
    }
}

let playerSelection = prompt("Enter a word: ");
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection,computerSelection));