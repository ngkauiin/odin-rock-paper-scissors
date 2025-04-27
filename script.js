console.log("hello world")

function getComputerChoice() {
  // Use Math.random() to generate random number from 0-1
  // Check if the generated number is <= 1/3, then it is 'rock'
  // Else if the number is > 1/3 AND <= 2/3, then it is 'paper'
  // Else if the number is >2/3 AND <= 1, then it is scissors
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
  // Use prompt to get human input (assume always valid)
  // return and console.log the result
  return prompt("Rock, paper or scissors?")
}

let humanScore = 0;
let computerScore = 0;

// Get human choice and computer choice
// Create a function to use human choice and computer choice as parameters
// Make human choice lowercase
// Check if human choices is the same as computer choice then draw
// Else if human choice is 'rock' && computer choice is 'paper' then computer wins
// Else human wins
// Print/console.log the results
// Increment the score for winner

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

// Create a function that run playRound(..) 5 rounds
// Use FOR loop to run playRound() 5 times
// Get human and computer choices
// After FOR loop ends, check if human score === computer score then alert draw
// Else if human score is >= computer score then alert human wins
// Else alert computer wins

function playGame() {
  for (i=0;i<5;i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
  }
  if (humanScore === computerScore) {
    alert(`${humanScore}:${computerScore} - Draw!`);
  } else if (humanScore >= computerScore) {
    alert(`${humanScore}:${computerScore} - You Win!`);
  } else {
    alert(`${humanScore}:${computerScore} - You Lose!`);
  } 
}

playGame();
