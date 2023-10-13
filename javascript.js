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
    ++playerPoints
    return `You win! ${playerSel} beats ${computerSel}`
  }
  else if(playerSel == "paper" && computerSel == "rock"){
    ++playerPoints
    return `You win! ${playerSel} beats ${computerSel}`
  }  
  else if(playerSel == "scissors" && computerSel == "paper"){
    ++playerPoints
    return `You win! ${playerSel} beats ${computerSel}`
  }
  else{
    ++computerPoints
    return `You lose! ${computerSel} beats ${playerSel}`
  }
}

let playerPoints
let computerPoints

function game(){
  let playerSelection
  let computerSelection
  playerPoints = 0
  computerPoints = 0
  for(let i = 0; i < 5; ++i){
    playerSelection = prompt("Enter your choice: ")
    computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
  }
  console.log(`Player score: ${playerPoints} \t Computer score: ${computerPoints}`)
}

game()
