"use strict";

// intro section
// declare and assign constants for start button and questionnaire panel div
const startBtn = document.querySelector(".start");
const panel = document.querySelector(".panel");

// declare and assign variables for user instructions message and user input bar
let message = document.querySelector(".message");
let userInput = document.querySelector(".user__input");

// set function with an eventListener for start button click
startBtn.addEventListener("click", () => {
  // toggle class list to reveal questionnaire panel (see style.css)
  panel.classList.toggle("show");

  // present instructions for user in questionnaire panel paragraph
  message.innerHTML =
    "ok! first of all, let's see if your specimen is even an insect <br/>at all, or another type of arthropod. <br /><br />How many legs does it have?";
  // log start of questionnaire to console and record user instructions
  console.log(
    `reveal questionnaire
      
      "ok! first of all, let's see if your specimen is even an insect at all, or another type of arthropod. 
      
      How many legs does it have?"`
  );
});
// intro section

// questionnaire panel
// declare and assign variables for user reply button
let firstBtn = document.querySelector(".first");
let secondBtn = null;

// first question line
// set function for while loop with an event listener on user button click
firstBtn.addEventListener("click", () => {
  // declare and assign variables for user input on insect leg number
  let legNumber = userInput.value;

  // declare and assign boolean for user input
  let isLegs = false;

  // while loop will continue as long as no input is provided for insect leg number
  while (!isLegs) {
    if (legNumber === "" || legNumber === null || legNumber === undefined) {
      message.innerHTML = "Please enter number of legs";
      isLegs = true;
    } else if (
      legNumber === "Six" ||
      legNumber === "six" ||
      legNumber === "6"
    ) {
      message.innerHTML = "stellar! <br/>how many body joints does it have?";
      isLegs = true;
      firstBtn.classList.toggle("second");
      break;
    } else {
      message.innerHTML =
        "Your specimen is not an insect. <br/> <br/>it is most likely another type of arthropod.";
      isLegs = true;
    }
  }
  secondBtn = document.querySelector(".second");
  // first question line
  // second question line
  secondBtn.addEventListener("click", () => {
    let bodyNumber = userInput.value;
    let isBody = false;
    while (!isBody) {
      if (
        bodyNumber === "" ||
        bodyNumber === null ||
        bodyNumber === undefined
      ) {
        message.innerHTML = "Please enter number of body joints";
        isBody = true;
      } else if (
        bodyNumber === "Three" ||
        bodyNumber === "three" ||
        bodyNumber === "3"
      ) {
        message.innerHTML =
          "Amazing! <br/> Your specimen is an insect for sure! Now we can start classifying what type of insect <br/><br/>does your specimen have wings?";
        isBody = true;
      } else {
        message.innerHTML =
          "Your specimen is not an insect. <br/> <br/>it is most likely another type of arthropod.";
        isBody = true;
      }
    }
  });
});
// second question line
// questionnaire panel
