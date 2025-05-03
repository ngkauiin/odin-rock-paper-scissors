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
    printResult('Draw');
  } else if (lowerCasedHumanChoice === 'rock') {
    if (computerChoice === 'paper') {
      computerScore++;
      printResult('You lose! Paper beats Rock');
    } else {
      humanScore++;
      printResult('You win! Rock beats Scissor');
    }
  } else if (lowerCasedHumanChoice === 'paper') {
    if (computerChoice === 'scissor') {
      computerScore++;
      printResult('You lose! Scissor beats Paper');
    } else {
      humanScore++;
      printResult('You win! Paper beats Rock');
    }
  } else if (lowerCasedHumanChoice === 'scissor') {
    if (computerChoice === 'rock') {
      computerScore++;
      printResult('You lose! Rock beats Scissor');
    } else {
      humanScore++;
      printResult('You win! Scissor beats Paper');
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

function printResult(message) {
  const li = document.createElement('li');
  const ul = document.querySelector('ul.result-board');
  li.textContent = message;
  ul.appendChild(li);
};