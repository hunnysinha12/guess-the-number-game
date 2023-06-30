"use strict";

// this is for generating the random number for the game

let random = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// for duplication of code

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// this is for the check button

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // this is for the blank space where we guess the Number.

  if (guess === random) {
    document.querySelector(".number").textContent = random;
  }

  // when no input is there
  if (!guess) {
    displayMessage("❌ No Number is Pressed");
  }
  // when input is matched
  else if (guess === random) {
    displayMessage("This is correct Number!");

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // for the high score
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  }

  // when input is not equal
  else if (guess !== random) {
    if (score > 0) {
      displayMessage(
        guess > random
          ? "☝️ The Number is Higher than Secter Number"
          : "👇 The Number is Lower than Secter Number"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // when you have entered max attempts

      displayMessage("💥 You Loose the game Click Agian!");
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});

// this is for the agian button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  random = Math.trunc(Math.random() * 20 + 1);

  displayMessage("Start gussing...");
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
