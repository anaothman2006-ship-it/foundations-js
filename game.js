/*
function kt9arn wtakhd input
*/
let options = ["rock", "paper", "scissor"];

function getComputerChoice() {
const choice = options[(Math.floor(Math.random() * options.length))]
return choice;
}


 let humanScore = 0;
 let computerScore = 0;

function checkWinner() {
       let computerChoice = getComputerChoice()
       let playerSelection = prompt("choice rock,  paper, scissor: ")
    if (playerSelection == computerChoice ) {
        console.log(`computre choice ${computerChoice}`)
        console.log("tie")
    }
    else if (
        (playerSelection == "rock" && computerChoice == "scissor") ||
        (playerSelection == "scissor" && computerChoice == "paper") ||
        (playerSelection == "paper" && computerChoice == "rock")
    ) {
        console.log(`computre choice ${computerChoice}`)
        console.log("YOU win!")
        humanScore++;
    }
    else {
        console.log(`computre choice ${computerChoice}`)
        console.log("YOU lose!")
        computerScore++;
    }
}
function playRound() {
    for (let i = 0; i < 5; i++) {
        checkWinner()
    }

     console.log( `your score is ${humanScore} and computer score is ${computerScore}!`)
    
    if (humanScore > computerScore) {
        console.log("Congratulations  you win!!!")
    }
    else if (humanScore < computerScore) {
         console.log("Sorry you lose! next time")
    } 
    else {
        console.log("Tie!")
    }
    
}
playRound()