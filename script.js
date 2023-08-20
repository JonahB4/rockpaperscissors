const btns = document.querySelectorAll('.btn');
const scoreBox = document.getElementById('score-box');
let playerScore = 0;
let computerScore = 0;


btns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    console.log(playerSelection, computerSelection);
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
  });
});

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    updateScoreDisplay();
    return 'You win!';
  } else {
    computerScore++;
    updateScoreDisplay();
    return 'You lose!';
  }
}

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function updateScoreDisplay() {
  scoreBox.innerHTML = `<p>Player: ${playerScore}</p><p>Computer: ${computerScore}</p>`;
  if (playerScore === 5) {
    scoreBox.innerHTML += '<p>You win!</p>';
    playerScore = 0;
    computerScore = 0;
  }
  else if (computerScore === 5) {
    scoreBox.innerHTML += '<p>You lose!</p>';
    playerScore = 0;
    computerScore = 0;
  }
}