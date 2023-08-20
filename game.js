

function playRound(playerSelection, computerSelection) {

    if (playerSelection == ComputerSelection)
        
        return "It's a tie!";
    else if (playerSelection == "rock" && computerSelection == "scissors")
        return "You win! Rock beats scissors!";
    else if (playerSelection == "rock" && computerSelection == "paper")
        return "You lose! Paper beats rock!";
    else if (playerSelection == "paper" && computerSelection == "rock")
        return "You win! Paper beats rock!";
    else if (playerSelection == "paper" && computerSelection == "scissors")
        return "You lose! Scissors beats paper!";
    else if (playerSelection == "scissors" && computerSelection == "paper")
        return "You win! Scissors beats paper!";
    else if (playerSelection == "scissors" && computerSelection == "rock")
        return "You lose! Rock beats scissors!";
    else
        return "Invalid input!";
  }

  function game(){
    playerWin = 0;
    for (let i = 0; i < 5; i++){
        let q = playRound(playerSelection, computerSelection);
        console.log(q);
        if (q.includes("win")){
            playerWin++;
        }
    }
    if (playerWin > 2){
        console.log("You won the game by winning " + playerWin + " rounds!, while the computer won " + (5 - playerWin) + " rounds!");
    }
    else
        console.log("You lost the game, and won only " + playerWin + " rounds!, while the computer won " + (5 - playerWin) + " rounds!");
    
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection))
  
