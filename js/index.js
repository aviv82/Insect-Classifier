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
    // set if condition for blank user entries
    if (legNumber === "" || legNumber === null || legNumber === undefined) {
      // message user to provide valid input
      message.innerHTML = "Please enter number of legs";
      // record user response to console
      console.log(
        "blank reply for number of legs" + " - Please enter number of legs"
      );
      // break out of while loop
      isLegs = true;
      // set else if condition for 6 legs response
    } else if (
      legNumber === "Six" ||
      legNumber === "six" ||
      legNumber === "6"
    ) {
      // message user that 1st condition for insect is met and introduce 2nd set of questions
      message.innerHTML = "stellar! <br/>how many body joints does it have?";
      // record user response to console
      console.log(legNumber + " - stellar! how many body joints does it have?");
      // break out of while loop
      isLegs = true;
      // change user input button class name for 2nd set of questions
      firstBtn.classList.toggle("second");
      // break out of while loop
      break;
      // set else condition for not 6 legs response
    } else {
      // message user that condition for not insect is met
      message.innerHTML =
        "Your specimen is not an insect. <br/> <br/>it is most likely another type of arthropod.";
      // record user response to console
      console.log(
        legNumber +
          " - Your specimen is not an insect. it is most likely another type of arthropod."
      );
      // break out of while loop
      isLegs = true;
    }
  }
  // end of first question line
  // reassign user input button for 2nd set of questions
  secondBtn = document.querySelector(".second");
  // second question line
  // set function for while loop with an event listener on user button click for 2nd question set
  secondBtn.addEventListener("click", () => {
    // declare and assign variables for user input on arthropod body part number
    let bodyNumber = userInput.value;
    // declare and assign boolean for 2nd while loop
    let isBody = false;
    // while loop will continue as long as no input is provided for insect body part number
    while (!isBody) {
      // set if condition for blank user entries
      if (
        bodyNumber === "" ||
        bodyNumber === null ||
        bodyNumber === undefined
      ) {
        // message user to provide valid input
        message.innerHTML = "Please enter number of body joints";
        // record user response to console
        console.log(
          "blank reply for number of body parts" +
            " - Please enter number of body joints"
        );
        // break out of while loop
        isBody = true;
        // set else if condition for 3 body parts response
      } else if (
        bodyNumber === "Three" ||
        bodyNumber === "three" ||
        bodyNumber === "3"
      ) {
        // message user that 1st condition for insect is met and introduce 3rd set of questions
        message.innerHTML =
          "Amazing! <br/> Your specimen is an insect for sure! Now we can start classifying what type of insect <br/><br/>does your specimen have wings?";
        // record user response to console
        console.log(
          bodyNumber +
            " - Amazing! Your specimen is an insect for sure! Now we can start classifying what type of insect - does your specimen have wings?"
        );
        // break out of while loop
        isBody = true;
        // set else condition for 6 legs response
      } else {
        // message user that condition for not insect is met
        message.innerHTML =
          "Your specimen is not an insect. <br/> <br/>it is most likely another type of arthropod.";
        // record user response to console
        console.log(
          bodyNumber +
            " - Your specimen is not an insect. it is most likely another type of arthropod."
        );
        // break out of while loop
        isBody = true;
      }
    }
  });
});
// end of second question line
// questionnaire panel
