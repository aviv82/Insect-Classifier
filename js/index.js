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

userBtn.addEventListener("click", () => {
  let legNumber = userInput.value;

  if (legNumber === "" || legNumber == null) {
    message.innerHTML = "Please enter number of legs";
  } else if (legNumber === "six" || legNumber == 6) {
    message.innerHTML = "stellar! how many body parts does it have?";
  } else {
    message.innerHTML =
      "Your specimen is not an insect. <br/> <br/>it is most likely another type of arthropod.";
  }
});
