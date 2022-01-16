"use strict";

//TAKE THREE

/* ah well, so i tried to debug this page over the past few weeks but couldn't succeed.
i think now that i got myself to bogged down in the idea of using the event listener and listening to clicks.
i thought before i give this project a rest i will try one more time.
this time around i will try a different approach. the intro section works well with the event listener 
but for the actual body of the thing, the questionnaire i will try a different approach. */

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

/* ok so how to do this now? 
in previous attempts i kept getting errors because my functions kept getting 'tangled' in each other.
this time i want to separate them somehow, create a kind of function 'switch board'.
i think this could be done either by using while loops, or by creating a function 'directory', 
a master function to determine which function to call.
*/

// i start by declaring some global variables

let userBtn = document.querySelector(".user__btn"); // declare global variable for user button
let userInput = document.querySelector(".user__input"); // declare global variable for user input
let input = ""; // declare global variable for input

// the global variables below are my 'switches' boolean check point for the different questions in the questionnaire.
// as the user goes through the questionnaire the switches will 'flick' on and off,
// letting the master function know which question function to call next

let isLeg = false; // declare global variable for first question - how many legs the arthropod has?
let isBody = false; // declare global variable for second question - how many body parts arthropod has?

// there will be more switches as the page develops but for now
// between the two above questions we can determine if the arthropod is an insect or something else.

// alright, its time to write a function for registering user clicks.
// previously i used event listeners for this, but now i want to try using onclick

userBtn.onclick = function () {
  // declare user button 'click' event
  input = userInput.value; // reassign input to the user input bar
  console.log(input); // log input to console
  return directory(); // call directory master function (see below)
};

// time to write the 'master' function, named 'directory'
// basically a switch board function to determine which question function to call

function directory() {
  // declare directory function
  if (isLeg === false) {
    // set condition for first question using global boolean variable
    first(); // call first question function if first condition is met
  } else if (isBody === false) {
    // set condition for second question using global boolean variable
    second(); // call second question function if second condition is met
  }
}

// not sure if this is an optimal way to work, but i like the 'switch board'
// it is clean and clear to understand, and can easily be expanded/modified

// with the directory function the hard part is done.
// now all thats left is to write the question functions.
// i think i am going to write them the same way i did so far
// they work well. the only problem is when they get tangled together.

function first() {
  // declare first question function
  let legNumber = input; // declare 'proxy' variable for input to leg number
  // i dont know if the above step is necessary but in my mind it makes sense.
  // i think its worthwhile to have an extra variable for the sake of better readability and clarity
  if (legNumber === null || legNumber === "" || legNumber === undefined) {
    // set condition for void input
    message.innerHTML = "please enter number of legs"; // message user to enter valid input
    console.log(
      "first question input:\n",
      "user input void;\n",
      "prompt user to enter valid input"
    ); // log to console
  } else if (legNumber === "6" || legNumber === "six" || legNumber === "Six") {
    // set condition for insect user input
    message.innerHTML = "stellar! <br/>how many body joints does it have?";
    // message insect and second question to user
    console.log(
      "first question input:\n",
      "user input is insect;\n",
      "message user and reveal 2nd question"
    ); // log to console
    isLeg = true; // reassign 'switch' boolean 'off' for first question
    // this is the crucial step. if the user gives correct insect input they are ready to move on to the second question
    // by reassigning the 'switch' boolean from false to true
    // the condition for the first question will no longer be met in the function directory
    // and it will call the second question function instead
  } else {
    // set condition for not insect user input
    console.log(
      "first question input:\n",
      "user input is not insect;\n",
      "message user and reset"
    ); // log to console
    message.innerHTML =
      "Your specimen is not an insect. <br/> <br/>it is most likely another type of arthropod. <br/> <br/> try again?";
    // message not insect to user
  }
  return isLeg; // return 'switch' boolean value
}

// good. now to write the second question function.
// it would be almost identical to the first question function only with different variable names and values

function second() {
  // declare second question function
  let bodyNumber = input; // declare 'proxy' variable for input to body part number
  if (bodyNumber === null || bodyNumber === "" || bodyNumber === undefined) {
    // set condition for void input
    message.innerHTML = "Please enter number of body joints"; // message user to enter valid input
    console.log(
      "second question input:\n",
      "user input void;\n",
      "prompt user to enter valid input"
    ); // log to console
  } else if (
    bodyNumber === "3" ||
    bodyNumber === "three" ||
    bodyNumber === "Three"
  ) {
    // set condition for insect user input
    message.innerHTML =
      "Amazing! <br/> Your specimen is an insect for sure! Now we can start classifying what type of insect <br/><br/>does your specimen have wings?";
    // message insect and third question to user
    console.log(
      "second question input:\n",
      "user input is insect;\n",
      "message user is insect"
    ); // log to console
    isBody = true; // reassign 'switch' boolean 'off' for second question
  } else {
    // set condition for not insect user input
    message.innerHTML =
      "Your specimen is not an insect. <br/> <br/>it is most likely another type of arthropod.";
    // message not insect to user
    console.log(
      "second question input:\n",
      "user input is not insect;\n",
      "message user is not insect"
    ); // log to console
  }
  return isBody; // return 'switch' boolean value
}

// end of questionnaire section (for now)

//end of TAKE THREE

// (failed) TAKE TWO:

/* ok ok so i made a webpage for classifying insects and incidentally it is full of Bugs... 
this is a perfect opportunity to practice debugging, linting etc. 
so i am going to leave two copies of the original code below, one with comments, one without
and try to rewrite the whole thing - error free and with better cleaner syntax! let's go. */

// ok lets start from scratch give myself a simple task. make a button change tags without causing errors...

// intro section
// this is the page load up; contains a short description for user and a start button to begin questionnaire
/*
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
let legNumber = "";
let isLegs = false;
let userInput2 = document.querySelector(".second"); // declare second question user input

// first question
// right. lets create the event listener for the first user input

userBtn.addEventListener("click", () => {
  legNumber = userInput1.value; // declare variable for leg number
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
    isLegs = true;
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
  }
  return isLegs;
});
// great. so that worked out much better than the first attempt. no bugs so far ;)
// now to create the second question with the reassigned user button class

// second question
// start by declaring the 2nd user button to the modified 'second' class
if (isLegs === true) {
  userBtn.addEventListener("click", () => {
    let bodyPart = userInput2;
    if (bodyPart === null || bodyPart === "" || bodyPart === undefined) {
      message.innerHTML = "Please enter number of body joints";
      console.log(
        "second question input:\n",
        "user input void;\n",
        "prompt user to enter valid input"
      );
    } else if (bodyPart === 3 || bodyPart === "three" || bodyPart === "Three") {
      message.innerHTML =
        "Amazing! <br/> Your specimen is an insect for sure! Now we can start classifying what type of insect <br/><br/>does your specimen have wings?";
      console.log(
        "second question input:\n",
        "user input is insect;\n",
        "message user is insect"
      );
    }
  });
} */

// end of second question

// end of questionnaire section

// end of (failed) TAKE TWO

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
