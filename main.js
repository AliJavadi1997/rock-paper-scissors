"use strict";

/*
 *
 * makes a random choice form "rock", "paper" and "scissor"
 * @return {string} The random choice
 */
let getComputerChoice = function () {
  const options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * 3)];
};

/**
 *
 * @returns the user choice
 */
let getPlayerChoice = function () {
  const rock = document.querySelector("button.rock");
  const paper = document.querySelector("button.paper");
  const scissor = document.querySelector("button.scissor");
  let userChoice;
  rock.addEventListener("click", function () {
    userChoice = "rock";
  });
  paper.addEventListener("click", function () {
    userChoice = "paper";
  });
  scissor.addEventListener("click", function () {
    userChoice = "scissor";
  });
  return userChoice;
};

/**
 * @param {string} option
 * @return a DOM element that shows computer choice
 *
 */
let showComputerChoice = function (option) {
  const computerChoiceIcon = document.querySelector("div.computer-choice");
  if (option == "rock") {
    const rock = document.createElement("img");
    rock.src = "./images/rock.png";
    rock.style.width = "50px";
    computerChoiceIcon.append(rock);
  } else if (option == "paper") {
    const paper = document.createElement("img");
    paper.src = 'img src="./images/paper.png"';
    paper.style.width = "50px";
    computerChoiceIcon.append(paper);
  } else {
    const scissor = document.createElement("img");
    scissor.src = 'img src="./images/scissor-svgrepo-com.svg"';
    scissor.style.width = "50px";
    computerChoiceIcon.append(scissor);
  }
};

/**
 *
 * @param {string} userChoice
 */
let showPlayerChoice = function (userChoice) {
  const userChoiceIcon = document.querySelector("div.user-choice");
  if (userChoice == "rock") {
    const rock = document.createElement("img");
    rock.innerHTML = 'img src="./images/rock.png"';
    userChoiceIcon.append(rock);
  } else if (userChoice == "paper") {
    const paper = document.createElement("img");
    paper.innerHTML = 'img src="./images/paper.png"';
    userChoiceIcon.append(paper);
  } else {
    const scissor = document.createElement("img");
    scissor.innerHTML = 'img src="./images/scissor-svgrepo-com.svg"';
    userChoiceIcon.append(scissor);
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
      playerScore += 0;
    } else if (computerSelection == "paper") {
      computerScore += 1;
    } else if (computerSelection == "scissor") {
      playerScore += 1;
    }
  } else if (palyerSelection == "paper") {
    if (computerSelection == "paper") {
      playerScore += 0;
    } else if (computerSelection == "rock") {
      playerScore += 1;
    } else if (computerSelection == "scissor") {
      computerScore += 1;
    }
  } else if (palyerSelection == "scissor") {
    if (computerSelection == "scissor") {
      playerScore += 0;
    } else if (computerSelection == "rock") {
      computerScore += 1;
    } else if (computerSelection == "paper") {
      playerScore += 1;
    }
  }
  return playerScore;
};

let game = function () {
  const startGame = document.querySelector("button.start-game");
  startGame.addEventListener("click", function () {
    for (let i = 0; i < 3; i++) {
      let palyerSelection = getPlayerChoice();
      showPlayerChoice(palyerSelection);
      let computerSelection = getComputerChoice();
      showComputerChoice(computerSelection);
      playRound(palyerSelection, computerSelection);
    }
  });

  console.log(`Your score: ${playerScore}\nComputer score: ${computerScore}`);
};

game();
