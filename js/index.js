"use strict";

const startBtn = document.querySelector(".start");
const panel = document.querySelector(".panel");
let message = document.querySelector(".message");
let userInput = document.querySelector(".user__input");

startBtn.addEventListener("click", () => {
  panel.classList.toggle("show");
  message.innerHTML =
    " ok! first of all, let's see if your specimen is even an insect <br/>at all, or another type of arthropod. <br /><br />How many legs does it have?";
});

let firstBtn = document.querySelector(".user__btn");

firstBtn.addEventListener("click", () => {
  let legNumber = userInput.value;
  let isLegs = false;
  while (!isLegs) {
    if (legNumber === "" || legNumber === null || legNumber === undefined) {
      message.innerHTML = "Please enter number of legs";
      isLegs = true;
    } else if (
      legNumber === "Six" ||
      legNumber === "six" ||
      legNumber === "6"
    ) {
      message.innerHTML = "stellar! <br/>how many body parts does it have?";
      isLegs = true;
    } else {
      message.innerHTML =
        "Your specimen is not an insect. <br/> <br/>it is most likely another type of arthropod.";
      isLegs = true;
    }
  }
});
