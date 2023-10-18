let playerPoints = 0
let computerPoints = 0

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
  else if(playerSel == "rock" && computerSel == "scissors" ||
          playerSel == "paper" && computerSel == "rock" ||
          playerSel == "scissors" && computerSel == "paper"){
          ++playerPoints
          if(playerPoints >=5)
            return 'You won!'
          return `You win! ${playerSel} beats ${computerSel}`
    }
  else{
    ++computerPoints
    if(computerPoints >= 5)
      return 'You lost!'
    return `You lose! ${computerSel} beats ${playerSel}`
  }
}

function displayScore(){
  score_board.textContent = `Player Score: ${playerPoints}\t\tAI Score: ${computerPoints}`
}
function displayRound(results){
  round_result.textContent = results
}
const buttons = document.querySelectorAll('button')
const score_board = document.querySelector(".score")
const round_result = document.querySelector('.round-result')

buttons.forEach(button=>{
  button.addEventListener('click', () =>{
    if(button.className === 'rock-btn'){
      playerSelection = 'rock'
    }
    else if(button.className === 'scissors-btn')
    {
      playerSelection = 'scissors'
    }
    else if(button.className === 'paper-btn')
    {
      playerSelection = 'paper'
    }
    
    displayRound(playRound(playerSelection, getComputerChoice()))
    if(playerPoints < 5 && computerPoints < 5)
    {
      displayScore()
    }
    else{
      playerPoints = 0
      computerPoints = 0
      score_board.textContent = ''
    }
    //alert(playerSelection)
  })
})

game()
