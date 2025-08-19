// script.js – Answer Key

// ===========================================
// 1. VARIABLES PRACTICE
// ===========================================
// Declare variables for your name and age
let myName = "Your Name";
const myAge = 25;

// Log your variables to the console
console.log("Name:", myName);
console.log("Age:", myAge);

// ===========================================
// 2. SELECT & LOG ALL <h1> ELEMENTS
// ===========================================
let title = document.querySelector("h1");
console.log(title);

// ===========================================
// 3. UPDATE <h1> TEXT & LOG AGAIN
// ===========================================
title.textContent = "New page title";
console.log(title);

// ===========================================
// 4. BASIC DOM MANIPULATION FUNCTIONS
// ===========================================
const demoText = document.getElementById("demo-text");

function changeText() {
  demoText.textContent = "Text has been changed!";
}

function addHighlight() {
  demoText.classList.add("highlight");
}

function removeHighlight() {
  demoText.classList.remove("highlight");
}

// ===========================================
// 5. SIMPLE LIST ADD/REMOVE
// ===========================================
const itemList = document.getElementById("item-list");

function addItem() {
  let li = document.createElement("li");
  li.textContent = "New Item";
  itemList.appendChild(li);
}

function removeItem() {
  itemList.lastElementChild.remove();
}

// ===========================================
// 6. FORM PRACTICE
// ===========================================
const nameInput = document.getElementById("name-input");
const submitBtn = document.getElementById("submit-btn");
const result = document.getElementById("result");

submitBtn.addEventListener("click", () => {
  const text = nameInput.value;
  result.textContent = text;
});

// ===========================================
// 7. EVENT LISTENER ON <h1>
// ===========================================

const Pagetitle = document.querySelector("h1");
title.addEventListener("click", function () {
  title.textContent = "You clicked me!";
});

// ===========================================
// 8. SIMPLE MATH DEMO
// ===========================================
const num1Display    = document.getElementById("num1-display");
const num2Display    = document.getElementById("num2-display");
const sumResult      = document.getElementById("sum-result");

let num1 = 0;
let num2 = 0;

function updateNumbers() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num1Display.textContent = num1;
  num2 = Math.floor(Math.random() * 10) + 1;
  num2Display.textContent = num2;
}
function doMath() {
   sumResult.textContent = num1 + num2;
}

// ===========================================
// EXTENSION CHALLENGES
// ===========================================

// ===========================================
// COUNTER FUNCTIONS
// ===========================================

const counterDisplay = document.getElementById("counter-display");
let counter = 0;

// TODO: Complete this function to increase counter
function increaseCounter() {
  // Add 1 to the counter variable
  counter++;
  // Update the counterDisplay element
  counterDisplay.textContent = counter;
}

// TODO: Complete this function to decrease counter
function decreaseCounter() {
  // Subtract 1 from the counter variable
  // Update the counterDisplay element
  counter--;
  counterDisplay.textContent = counter;
}

// TODO: Complete this function to reset counter
function resetCounter() {
  // Set counter back to 0
  // Update the counterDisplay element
  counter = 0;
  counterDisplay.textContent = counter;
}

// ===========================================
// SCORE TRACKER FUNCTIONS
// ===========================================

// TODO: Declare score variables

const playerScoreEl = document.getElementById("player-score");
const highScoreEl = document.getElementById("high-score");
let currentScore = 0;
let bestScore = 0;

// TODO: Complete this function to add points
function addPoints() {
  // Add 10 to currentScore
  currentScore += 10;
  // Update the playerScore display
  playerScoreEl.textContent = currentScore;
}

// TODO: Complete this function to subtract points
function subtractPoints() {
  // Subtract 5 from currentScore 
  currentScore =  currentScore - 5;
  // Update the playerScore display
  playerScoreEl.textContent = currentScore;
}

// TODO: Complete this function to check high score
function checkHighScore() {
  // If currentScore is higher than bestScore, update bestScore
  if (currentScore > bestScore) {
    bestScore = currentScore;
    // Update the highScore display
    highScoreEl.textContent = bestScore;
  }
}
