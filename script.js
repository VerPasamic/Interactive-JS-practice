// JavaScript Practice - Starter Code
// Fill in the missing code where you see comments!

// ===========================================
// VARIABLES PRACTICE
// ===========================================
// 1. TODO: Declare variables for your name and age 
// let myName = 
// const myAge = 

// 2. TODO: Log your variables to the console
// console.log();

// 3. TODO: Declare variables for math practice
// let num1 = 
// let num2 = 

// 4. TODO: Declare a counter variable
// let counter = 

// ===========================================
// DOM ELEMENT SELECTION
// ===========================================
// Example selectors (completed)
const pageTitle = document.getElementById('page-title');
const demoText = document.getElementById('demo-text');
const title = document.querySelector('h1');
title.textContent = "New page title"; 
console.log(title.textContent);

// TODO: Select these elements by their IDs
// const secondText = 
// const num1 = document.getElementById('  '); 
// const num2 = document.getElementById('  ');
// const sumResult = document.getElementById('  ');


// TODO: Form practice elements, insert name of matching ID
// const nameInput = document.getElementById('  ');
// const submitBtn = document.getElementById('  ');
// const result = document.getElementById('  ');

// TODO: Select list and counter elements
const itemList = document.getElementById('item-list');
// const itemCount = 
// const counterDisplay = 

// TODO: Select color box and score elements
// const colorBox = 
// const playerScore = 
// const highScore = 

// ===========================================
// BASIC DOM MANIPULATION FUNCTIONS
// ===========================================

// TODO: Complete this function to change demo text
function changeText() {
    // Change demoText to say "Text has been changed!"
    demoText.textContent = "Text has been changed!"; 
}

// TODO: Complete this function to add highlight class
function addHighlight() {
    // Add the 'highlight' class to demoText
    demoText.classList.add("highlight");
    
}

// TODO: Complete this function to remove highlight class
function removeHighlight() {
    // Remove the 'highlight' class from demoText
    demoText.classList.remove("highlight"); 
}

// ===========================================
// LIST MANAGEMENT FUNCTIONS
// ===========================================

// TODO: Complete this function to add a new list item
function addItem() {
    // Create a new list item element
    // Set its text content to "New Item"
    // Add it to the itemList
    // Update the item count
  const listItem = document.createElement('li');
  listItem.textContent = "Learn JavaScript";
  itemList.appendChild(listItem);
    
}

// TODO: Complete this function to remove the last list item
function removeLastItem() {
    // Get all list items
    // Remove the last one if it exists
    // Update the item count
    
}

// TODO: Complete this function to count items
function countItems() {
    // Count how many list items exist
    // Update the itemCount element
    
}

// ===========================================
// VARIABLES AND MATH FUNCTIONS
// ===========================================

// TODO: Complete this function to update number variables
function updateNumbers() {
    // Set num1 to a random number (use Math.random() * 10)
    // Set num2 to a different random number
    // Update the display elements to show the new numbers
    
}

// TODO: Complete this function to do math calculations
function doMath() {
    // Calculate sum, difference, and product of num1 and num2
    // Display results in the appropriate elements
    
}


// ===========================================
// COUNTER FUNCTIONS
// ===========================================

// TODO: Complete this function to increase counter
function increaseCounter() {
    // Add 1 to the counter variable
    // Update the counterDisplay element
    
}

// TODO: Complete this function to decrease counter
function decreaseCounter() {
    // Subtract 1 from the counter variable
    // Update the counterDisplay element
    
}

// TODO: Complete this function to reset counter
function resetCounter() {
    // Set counter back to 0
    // Update the counterDisplay element
    
}

// ===========================================
// COLOR CHANGER FUNCTIONS
// ===========================================

// TODO: Complete this function to change to red
function changeToRed() {
    // Add the 'red-bg' class to colorBox
    
}

// TODO: Complete this function to change to blue
function changeToBlue() {
    // Remove any color classes and add 'blue-bg' class
    
}

// TODO: Complete this function to change to green
function changeToGreen() {
    // Remove any color classes and add 'green-bg' class
    
}

// TODO: Complete this function for random color
function randomColor() {
    // Use Math.random() to pick a random color class
    // Remove old classes and add the random one
    
}

// ===========================================
// SCORE TRACKER FUNCTIONS
// ===========================================

// TODO: Declare score variables
// let currentScore = 
// let bestScore = 

// TODO: Complete this function to add points
function addPoints() {
    // Add 10 to currentScore
    // Update the playerScore display
    
}

// TODO: Complete this function to subtract points
function subtractPoints() {
    // Subtract 5 from currentScore (don't go below 0)
    // Update the playerScore display
    
}

// TODO: Complete this function to check high score
function checkHighScore() {
    // If currentScore is higher than bestScore, update bestScore
    // Update the highScore display
    
}

// ===========================================
// EXTENSION CHALLENGES
// ===========================================

// DOM Practice Extensions:
// 1. Add functions to change font size of text elements
// 2. Create a function that changes multiple elements at once
// 3. Add a function that cycles through different text messages

// Variable and Math Extensions:
// 1. Add division to the math calculations
// 2. Create a function that calculates area of a rectangle
// 3. Add variables to track how many times buttons are clicked

// List Extensions:
// 1. Add a function to clear all list items
// 2. Create numbered list items (Item 1, Item 2, etc.)
// 3. Add a function to change the text of existing items

// Counter Extensions:
// 1. Add buttons to increase/decrease by 5 or 10
// 2. Add a maximum and minimum limit to the counter
// 3. Change the color of the counter based on its value

// Score Tracker Extensions:
// 1. Add different point values for different actions
// 2. Create a "lives" system that decreases
// 3. Add a function to save/load high scores

