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
    return 'scissors'
  }
}

console.log(getComputerChoice())