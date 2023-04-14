<<<<<<< HEAD
"use strict";

const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissor";
}

function win(userChoice, computerChoice) {
  userScore += 1;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "computer".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats
  ${convertToWord(computerChoice)}${smallCompWord} you win! 🔥`;
}

function lose(userChoice, computerChoice) {
  computerScore += 1;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats 
  ${convertToWord(computerChoice)}${smallCompWord} you lost! ❌`;
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals
  ${convertToWord(computerChoice)}${smallCompWord} It's a draw! 🏳️`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "pr":
    case "sp":
    case "rs":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissor_div.addEventListener("click", function () {
    game("s");
  });
}

main();
=======
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
>>>>>>> 5f820dd59dc06c8319085677a8fdc9854bc794e7
