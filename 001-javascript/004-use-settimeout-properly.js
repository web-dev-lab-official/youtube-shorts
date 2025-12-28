/**
 * Stop using setTimeout like this ❌
 * It feels simple... but it causes hidden problems
 */

/**
 * Imagine a user typing in a search box
 * Each keystroke calls a function
 * setTimeout might seem like a solution
 */

function searchQuery(query) {
  console.log("Searching for:", query);
}

/**
 * Here's a simulated fast typing
 */
const userInput = ["a", "ab", "abc", "abcd"];

/**
 * If you use setTimeout like this:
 */
userInput.forEach((q, i) => {
  setTimeout(() => {
    searchQuery(q);
  }, 300);
});

/**
 * Problem:
 * You expect only the last input to trigger search
 * But setTimeout fires for all previous inputs too
 * So the server or function gets spammed
 * Waste of resources
 * User sees outdated searches
 */

/**
 * What we want:
 * Only the final input triggers the search
 * Ignore all intermediate typing
 * This is where debounce saves us 🪄
 */

/**
 * Debounce: wait until typing stops
 */
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // cancel previous call
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const debouncedSearch = debounce(searchQuery, 300);

/**
 * Now, simulate fast typing again
 * Only the last input triggers search ✅
 */
userInput.forEach((q, i) => {
  debouncedSearch(q);
});

/**
 * Aha moment:
 * Debounce prevents spamming
 * Saves resources
 * Shows correct results
 * Always use it for frequent events like typing, resizing, scrolling
 */
