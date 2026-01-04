/**
 * Want to see a trick that replaces messy loops with ONE line?
 * It will make your code cleaner and easier to read!
 */

// Here is a list of numbers
const numbers = [1, 2, 3, 4, 5];

// Our goal: double each number
// This means we want a new list: [2, 4, 6, 8, 10]

// First, let's try the regular loop approach
let doubled = [];

// We go through each number one by one
for (let i = 0; i < numbers.length; i++) {
    // Multiply the number by 2
    doubled.push(numbers[i] * 2); // Add it to the new list
}

// Print the result
console.log(doubled); // [2, 4, 6, 8, 10]

// Looks fine, right?
// But see how many lines we wrote!
// Loops can be long and easy to mess up
// Like forgetting to push, or wrong index

// Another common mistake
doubled = [];
for (let i = 0; i < numbers.length; i++) {
    doubled[i] = numbers[i] * 2; // Works, but still more code
}
console.log(doubled); // [2, 4, 6, 8, 10]

// Now, let's see the magic one-liner
// Array.map goes through each item for us automatically
const doubledMagic = numbers.map(n => n * 2);

// What happens here?
// 1. numbers.map(...) takes each number in the array
// 2. n => n * 2 multiplies it by 2
// 3. map returns a brand new array with the results
console.log(doubledMagic); // [2, 4, 6, 8, 10]

// One line, zero mistakes, much cleaner!

/**
 * Lesson: Array.map can replace loops with one simple line.
 * It's shorter, safer, and easier to understand for beginners.
 */
