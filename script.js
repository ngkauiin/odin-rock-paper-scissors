console.log("hello world")

function getComputerChoice() {
  let randomNumber = Math.random()
  if (randomNumber <= 1/3) {
    return 'rock'
  } else if (randomNumber > 1/3 && randomNumber <= 2/3 ) {
    return 'paper'
  } else {
    return 'scissor'
  }
}

function getHumanChoice() {
  return prompt("Rock, paper or scissors?")
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  let lowerCasedHumanChoice = humanChoice.toLowerCase();
  if (lowerCasedHumanChoice === computerChoice) {
    console.log('Draw');
  } else if (lowerCasedHumanChoice === 'rock') {
    if (computerChoice === 'paper') {
      computerScore++;
      console.log('You lose! Paper beats Rock');
    } else {
      humanScore++;
      console.log('You win! Rock beats Scissor');
    }
  } else if (lowerCasedHumanChoice === 'paper') {
    if (computerChoice === 'scissor') {
      computerScore++;
      console.log('You lose! Scissor beats Paper');
    } else {
      humanScore++;
      console.log('You win! Paper beats Rock');
    }
  } else if (lowerCasedHumanChoice === 'scissor') {
    if (computerChoice === 'rock') {
      computerScore++;
      console.log('You lose! Rock beats Scissor');
    } else {
      humanScore++;
      console.log('You win! Scissor beats Paper');
    }
  }
}

const btns = document.querySelectorAll('button');
btns.forEach((btn)=> {
  btn.addEventListener("click", ()=>{
    playRound(btn.className,getComputerChoice());
  })
})

function playGame() {
  if (humanScore === computerScore) {
    alert(`${humanScore}:${computerScore} - Draw!`);
  } else if (humanScore >= computerScore) {
    alert(`${humanScore}:${computerScore} - You Win!`);
  } else {
    alert(`${humanScore}:${computerScore} - You Lose!`);
  } 
}

// playGame();
