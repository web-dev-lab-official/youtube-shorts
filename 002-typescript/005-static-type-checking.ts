/** 
 * Wait! Did you know your code can crash before you even run it?
 */

// Let's pretend we want to add two numbers
const a = 10;
// Oops! We accidentally make b a string
const b = "5";

// TypeScript will catch this mistake instantly
// Uncommenting the next line will show a red squiggly in your editor
// const sum = a + b;

// The problem: adding a number and a string can crash your app
// JavaScript might just concatenate them instead of adding

// Here's the correct way
const bCorrect: number = 5;
const sumCorrect = a + bCorrect;

// Now it works perfectly
console.log("Sum is:", sumCorrect); // Sum is: 15

/** 
 * Aha! TypeScript is telling you errors before running code
 * This is called "static type checking"
 */
