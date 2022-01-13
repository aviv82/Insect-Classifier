"use strict";

/* ok ok so i made a webpage for classifying insects and incidentally it is full of Bugs... 
this is a perfect opportunity to practice debugging, linting etc. 
so i am going to leave two copies of the original code below, one with comments, one without
and try to rewrite the whole thing - error free and with better cleaner syntax! let's go. */

// ok lets start from scratch give myself a simple task. make a button change tags without causing errors...

// intro section
// this is the page load up; contains a short description for user and a start button to begin questionnaire

const startBtn = document.querySelector(".start"); // declare first button. so far so good
const panel = document.querySelector(".panel"); // declare questionnaire panel
let message = document.querySelector(".message"); // declare message paragraph for user instructions

// the event listener below will reveal the questionnaire to the user
startBtn.addEventListener("click", () => {
  // create and call function on first button click
  panel.classList.replace("hide", "show"); // replace panel tag to reveal questionnaire
  message.innerHTML =
    "ok! first of all, let's see if your specimen is even an insect <br/>at all, or another type of arthropod. <br /><br />How many legs does it have?";
  // change message to reveal first question set to user
  console.log(
    "first button pressed;\n",
    "reveal questionnaire;\n",
    "reveal first question;"
  ); // log events to console
});

// end of intro section

// start of questionnaire section

// good. that was the easy part. user can now see the first question and input an answer using the input box and first user button
// this reminds me. we should declare the user button to a variable...

// in previous attempts i tried to assign one global user button to 'first'
// that did not work and caused errors

// after some experimentation i now believe is should change the class of the input box ie. userInput not the buttons

// i will have a global (userBtn) button and change the class of the input box (userInput) for the different question lines
// these will be assigned to 'fist', 'second' etc.

let userBtn = document.querySelector(".user__btn"); // declare 'global' user button
let userInput1 = document.querySelector(".first"); // declare user input

// first question

// right. lets create the event listener for the first user input
userBtn.addEventListener("click", () => {
  let legNumber = userInput1.value; // declare variable for leg number
  // previously i used a while loop here to determine leg number.
  // i dont think it is necessary anymore. i am going to try and just use an if conditional instead
  if (legNumber === null || legNumber === "" || legNumber === undefined) {
    // set condition for user void input
    message.innerHTML = "please enter number of legs"; // message user to enter valid input
    console.log(
      "first question input:\n",
      "user input void;\n",
      "prompt user to enter valid input"
    ); // log to console
    return;
  } else if (legNumber === "6" || legNumber === "six" || legNumber === "Six") {
    // set condition for insect user input
    message.innerHTML = "stellar! <br/>how many body joints does it have?";
    // message second question to user
    console.log(
      "first question input:\n",
      "user input is insect;\n",
      "message user and reveal 2nd question"
    ); // log to console
    userInput1.classList.replace("first", "second"); // change class for input box
    userInput1 = ""; // reassign userInput1 to empty string
    return;
  } else {
    // set condition for not insect user input
    console.log(
      "first question input:\n",
      "user input is not insect;\n",
      "message user and reset"
    ); // log to console
    message.innerHTML =
      "Your specimen is not an insect. <br/> <br/>it is most likely another type of arthropod. <br/> <br/> try again?";
    // message user
    return;
  }
});
// great. so that worked out much better than the first attempt. no bugs so far ;)
// now to create the second question with the reassigned user button class

// second question

// start by declaring the 2nd user button to the modified 'second' class

let userInput2 = document.querySelector(".second"); // declare second question user input

// end of second question

// end of questionnaire section

// first copy of original; no comments for easy run comparison:

/*
// intro section
const startBtn = document.querySelector(".start");
const panel = document.querySelector(".panel");
let message = document.querySelector(".message");
let userInput = document.querySelector(".user__input");

startBtn.addEventListener("click", () => {
  panel.classList.toggle("show");
  message.innerHTML =
    "ok! first of all, let's see if your specimen is even an insect <br/>at all, or another type of arthropod. <br /><br />How many legs does it have?";
  console.log(
    `reveal questionnaire
      
      "ok! first of all, let's see if your specimen is even an insect at all, or another type of arthropod. 
      
      How many legs does it have?"`
  );
});
// intro section

// questionnaire panel
let firstBtn = document.querySelector(".first");
let secondBtn = null;

// first question line
firstBtn.addEventListener("click", () => {
  let legNumber = userInput.value;
  let isLegs = false;

  while (!isLegs) {
    if (legNumber === "" || legNumber === null || legNumber === undefined) {
      message.innerHTML = "Please enter number of legs";
      console.log(
        "blank reply for number of legs" + " - Please enter number of legs"
      );
      isLegs = true;
    } else if (
      legNumber === "Six" ||
      legNumber === "six" ||
      legNumber === "6"
    ) {
      message.innerHTML = "stellar! <br/>how many body joints does it have?";
      console.log(legNumber + " - stellar! how many body joints does it have?");
      isLegs = true;
      firstBtn.classList.toggle("second");
      break;
    } else {
      message.innerHTML =
        "Your specimen is not an insect. <br/> <br/>it is most likely another type of arthropod.";
      console.log(
        legNumber +
          " - Your specimen is not an insect. it is most likely another type of arthropod."
      );
      isLegs = true;
    }
  }
  // end of first question line
  secondBtn = document.querySelector(".second");
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
        console.log(
          "blank reply for number of body parts" +
            " - Please enter number of body joints"
        );
        isBody = true;
      } else if (
        bodyNumber === "Three" ||
        bodyNumber === "three" ||
        bodyNumber === "3"
      ) {
        message.innerHTML =
          "Amazing! <br/> Your specimen is an insect for sure! Now we can start classifying what type of insect <br/><br/>does your specimen have wings?";
        console.log(
          bodyNumber +
            " - Amazing! Your specimen is an insect for sure! Now we can start classifying what type of insect - does your specimen have wings?"
        );
        isBody = true;
      } else {
        message.innerHTML =
          "Your specimen is not an insect. <br/> <br/>it is most likely another type of arthropod.";
        console.log(
          bodyNumber +
            " - Your specimen is not an insect. it is most likely another type of arthropod."
        );
        isBody = true;
      }
    }
  });
});
// end of second question line
// questionnaire panel
*/

// second copy of original; with comments, for posterity!:

/* 
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
// questionnaire panel */
