/**
 * Ever wondered how a function remembers data after it’s done running?
 * That mystery is called a closure.
 * And this code will make it click instantly.
 */


/**
 * We want a counter.
 * The number should remember its value.
 * But we do not want global variables.
 */

// We create a function.
function createCounter() {
  // This variable lives here.
  // It is inside this function.
  let count = 0;

  // We return another function.
  // This function uses count.
  return function () {
    // We change the value.
    count++;

    // We show the value.
    console.log(count);
  };
}

/**
 * The outer function is done.
 * Normally, its variables should disappear.
 * But watch closely.
 */

// We call the outer function once.
const counter = createCounter();

// Now we call the inner function.
counter(); // 1

// We call it again.
counter(); // 2

// Again.
counter(); // 3

/**
 * Wait.
 * The outer function already finished.
 * But count is still alive.
 */

/**
 * The inner function remembers count.
 * This memory is called a closure.
 */
