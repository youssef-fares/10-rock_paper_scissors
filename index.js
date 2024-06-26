let options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let roundNb = 1;
let start = false;

let win = new Audio("./win.mp3");
let lose = new Audio("./lose.mp3");
let loseFinal = new Audio("./loseFinal.mp3");
// playGame();

const buttons = document.querySelectorAll("button");
const score = document.querySelector(".score");
const round = document.querySelector(".round");
const finalScore = document.querySelector(".final");
const compRock = document.querySelector(".comp-rock");
const compPaper = document.querySelector(".comp-paper");
const compScissors = document.querySelector(".comp-scissors");

compRock.style.display = "none";
compPaper.style.display = "none";
compScissors.style.display = "none";

round.addEventListener("click", startRound);

buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

//**FUNCTIONS**//

function startRound() {
  start = true;
  humanScore = 0;
  computerScore = 0;
  score.textContent = humanScore + " : " + computerScore;
  finalScore.textContent = "";
  round.textContent = "Round " + roundNb;
}

function playRound(event) {
  let computerChoice = options[Math.floor(Math.random() * 3)];
  let humanChoice = event.target.value;

  switch (humanChoice) {
    case "rock":
      switch (computerChoice) {
        case "rock":
          compRock.style.display = "block";
          setTimeout(function () {
            compRock.style.display = "none";
          }, 1500);
          console.log("Draw!");
          break;
        case "paper":
          compPaper.style.display = "block";
          setTimeout(function () {
            compPaper.style.display = "none";
          }, 1500);
          console.log("You lose! " + computerChoice + " beats " + humanChoice);
          lose.play();
          computerScore++;
          break;
        case "scissors":
          compScissors.style.display = "block";
          setTimeout(function () {
            compScissors.style.display = "none";
          }, 1500);
          console.log("You win! " + humanChoice + " beats " + computerChoice);
          win.play();
          humanScore++;
          break;
        default:
          console.log("error");
      }
      break;

    case "paper":
      switch (computerChoice) {
        case "paper":
          compPaper.style.display = "block";
          setTimeout(function () {
            compPaper.style.display = "none";
          }, 1500);
          console.log("Draw!");
          break;
        case "scissors":
          compScissors.style.display = "block";
          setTimeout(function () {
            compScissors.style.display = "none";
          }, 1500);
          console.log("You lose! " + computerChoice + " beats " + humanChoice);
          lose.play();
          computerScore++;
          break;
        case "rock":
          compRock.style.display = "block";
          setTimeout(function () {
            compRock.style.display = "none";
          }, 1500);
          console.log("You win! " + humanChoice + " beats " + computerChoice);
          win.play();
          humanScore++;
          break;
        default:
          console.log("error");
      }
      break;

    case "scissors":
      switch (computerChoice) {
        case "scissors":
          compScissors.style.display = "block";
          setTimeout(function () {
            compScissors.style.display = "none";
          }, 1500);
          console.log("Draw!");
          break;
        case "rock":
          compRock.style.display = "block";
          setTimeout(function () {
            compRock.style.display = "none";
          }, 1500);
          console.log("You lose! " + computerChoice + " beats " + humanChoice);
          lose.play();
          computerScore++;
          break;
        case "paper":
          compPaper.style.display = "block";
          setTimeout(function () {
            compPaper.style.display = "none";
          }, 1500);
          console.log("You win! " + humanChoice + " beats " + computerChoice);
          win.play();
          humanScore++;
          break;
        default:
          console.log("error");
      }
      break;
    default:
      console.log("error");
  }
  roundNb++;
  score.textContent = humanScore + " : " + computerScore;

  if (humanScore === 5) {
    console.log("you win!");
    finalScore.style.color = "green";
    finalScore.textContent = "You win!";
    win.play();
    win.play();
    win.play();
    roundNb = 1;
    round.textContent = "Click here to start again!";
  } else if (computerScore === 5) {
    console.log("You lose!");
    finalScore.style.color = "red";
    finalScore.textContent = "You lose!";
    loseFinal.play();
    roundNb = 1;
    round.textContent = "Click here to start again!";
  } else {
    round.textContent = "Round " + roundNb;
  }
}

//   console.log(playRound);
//   console.log(getHumanChoice());
