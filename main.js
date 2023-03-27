let game = function () {
  /*
   *
   * makes a random choice form "rock", "paper" and "scissor"
   * @return {string} The random choice
   */
  let getComputerChoice = function () {
    let rand = Math.floor(Math.random() * 3);
    if (rand == 0) {
      return "rock";
    } else if (rand == 1) {
      return "paper";
    } else {
      return "scissor";
    }
  };
  let playerScore = 0;
  let computerScore = 0;
  /*
   *
   * @param {string} palyerSelection
   * @param {string} computerSelection
   * @returns if player or computer win a round
   */
  let playRound = function (palyerSelection, computerSelection) {
    if (palyerSelection == "rock") {
      if (computerSelection == "rock") {
        return "It's draw";
      } else if (computerSelection == "paper") {
        computerScore += 1;
        return "You lose! paper wins rock";
      } else if (computerSelection == "scissor") {
        playerScore += 1;
        return "You win! rock wins scissor";
      } else {
        return "Not Defined";
      }
    } else if (palyerSelection == "paper") {
      if (computerSelection == "paper") {
        return "It's draw";
      } else if (computerSelection == "rock") {
        playerScore += 1;
        return "You win! paper wins rock";
      } else if (computerSelection == "scissor") {
        computerScore += 1;
        return "You lose! scissor wins paper";
      } else {
        return "Not Defined";
      }
    } else if (palyerSelection == "scissor") {
      if (computerSelection == "scissor") {
        return "It's draw";
      } else if (computerSelection == "rock") {
        computerScore += 1;
        return "You lose! rock wins scissor";
      } else if (computerSelection == "paper") {
        playerScore += 1;
        return "You win! scissor wins paper";
      } else {
        return "Not Defined";
      }
    }
  };
  for (i = 0; i < 3; i++) {
    let palyerSelection = prompt(
      "Please choose from rock, paper and scissor"
    ).toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playRound(palyerSelection, computerSelection));
  }
  console.log(`Your score: ${playerScore}\nComputer score: ${computerScore}`);
};

console.log(game());
