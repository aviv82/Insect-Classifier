"use strict";

const startBtn = document.querySelector(".start");
const panel = document.querySelector(".panel");
const userBtn = document.querySelector(".user__btn");
let message = document.querySelector(".message");
let userInput = document.querySelector(".user__input");

startBtn.addEventListener("click", () => {
  panel.classList.toggle("show");
  message.innerHTML =
    " ok! first of all, let's see if your specimen is even an insect <br/>at all, or another type of arthropod. <br /><br />How many legs does it have (please type number)?";
});

let legNumber = userInput.value;
let sixLegs = false;

if (legNumber == "six") {
  sixLegs = true;
}

userBtn.addEventListener("click", () => {
  if (sixLegs) {
    message.innerHTML = "great!";
  } else {
    message.innerHTML = "stellar!";
  }
});
