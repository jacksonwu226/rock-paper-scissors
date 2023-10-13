function getRandomInt(min,max){
  return Math.floor(Math.random()*(max-min))+min
}

function getComputerChoice(){
  switch(getRandomInt(0,3)){
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection){
  let playerSel = playerSelection.toLowerCase()
  let computerSel = computerSelection.toLowerCase()
  if(playerSel == computerSel){
    return `You both chose ${computerSelection}! It is a draw!`
  }
  else if(playerSel == "rock" && computerSel == "scissors"){
    return `You win! ${playerSel} beats ${computerSel}`
  }
  else if(playerSel == "paper" && computerSel == "rock"){
    return `You win! ${playerSel} beats ${computerSel}`
  }  
  else if(playerSel == "scissors" && computerSel == "paper"){
    return `You win! ${playerSel} beats ${computerSel}`
  }
  else{
    return `You lose! ${computerSel} beats ${playerSel}`
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice()

console.log(playRound(playerSelection, computerSelection))