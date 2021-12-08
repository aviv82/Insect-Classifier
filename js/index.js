"use strict";

const startBtn = document.querySelector(".start");
const firstQuestion = document.querySelector(".first");

startBtn.addEventListener("click", () => {
  if (firstQuestion.style.display === "none") {
    firstQuestion.style.display = "block";
  } else {
    firstQuestion.style.display = "none";
  }
});
