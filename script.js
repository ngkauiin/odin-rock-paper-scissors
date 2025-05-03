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

let humanScore = 0;
let computerScore = 0;
printScore();

function playRound(humanChoice, computerChoice) {

  let lowerCasedHumanChoice = humanChoice.toLowerCase();
  if (lowerCasedHumanChoice === computerChoice) {
    printResult('Draw');
  } else if (lowerCasedHumanChoice === 'rock') {
    if (computerChoice === 'paper') {
      computerScore++;
      printResult('You lose! Paper beats Rock');
      checkScore();
    } else {
      humanScore++;
      printResult('You win! Rock beats Scissor');
      checkScore();
    }
  } else if (lowerCasedHumanChoice === 'paper') {
    if (computerChoice === 'scissor') {
      computerScore++;
      printResult('You lose! Scissor beats Paper');
      checkScore();
    } else {
      humanScore++;
      printResult('You win! Paper beats Rock');
      checkScore();
    }
  } else if (lowerCasedHumanChoice === 'scissor') {
    if (computerChoice === 'rock') {
      computerScore++;
      printResult('You lose! Rock beats Scissor');
      checkScore();
    } else {
      humanScore++;
      printResult('You win! Scissor beats Paper');
      checkScore();
    }
  }
  printScore();
}

const btns = document.querySelectorAll('.rps-buttons button');
btns.forEach((btn)=> {
  btn.addEventListener("click", ()=>{
    playRound(btn.className,getComputerChoice());
  })
})

function checkScore() {
  if (humanScore === 5) {
    announceWinner('Human Wins!')
  } else if (computerScore === 5) {
    announceWinner('Computer Wins!');
  }
}

function printScore() {
  const scoreBoardDiv = document.querySelector('.score-board');
  scoreBoardDiv.textContent = `${humanScore} : ${computerScore}`;
}

function announceWinner(msg) {
  const announcement = document.createTextNode(` — ${msg}`);
  const resultBoardTitle = document.querySelector('.result-board-title');
  resultBoardTitle.appendChild(announcement);
  resetBtn.disabled = false;
  btns.forEach((btn) => btn.disabled = true);
}

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
  resetScore();
});

function resetScore() {
  humanScore = 0;
  computerScore = 0;
  printScore();
  removeAnnouncement();

  const ul = document.querySelector('ul.result-board');
  const ulChildrenLength = ul.children.length;
  for (let i = 0; i < ulChildrenLength; i++) {
    ul.removeChild(ul.firstElementChild);
  }
  resetBtn.disabled = true;
  btns.forEach((btn) => btn.disabled = false);
}

function removeAnnouncement() {
  const resultBoardTitle = document.querySelector('.result-board-title');
  resultBoardTitle.textContent = 'Result Board';
}

function printResult(message) {
  const li = document.createElement('li');
  const ul = document.querySelector('ul.result-board');
  li.textContent = message;
  ul.appendChild(li);
  ul.scrollTop = ul.scrollHeight;
};

