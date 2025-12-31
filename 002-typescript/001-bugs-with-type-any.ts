/**
 * What if one tiny word could break your whole app.
 * This looks safe at first glance.
 * Stay with me.
 */

// We start with a simple value.
let userInput = "hello";

// Everything works so far.
console.log(userInput.toUpperCase());

/**
 * Now comes the dangerous part.
 * This comment hides a big problem.
 * We tell TypeScript to stop caring.
 */

/** @type {any} */
let data: any = "world";

// The code still looks fine.
console.log(data.toUpperCase());

// Suspense moment.
// We change the value silently.
data = 42;

/**
 * No warning.
 * No error yet.
 * Everything still compiles.
 */

// This line will crash at runtime.
console.log(data.toUpperCase());

/**
 * Boom.
 * The app breaks while running.
 * This is the surprise.
 */

/**
 * The name of the problem is clear.
 * The word is any.
 * Any removes safety completely.
 */
