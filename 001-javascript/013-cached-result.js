/**
 * Your JavaScript feels slow...
 * But the problem is hiding in plain sight.
 * 
 * And most beginners do this every day.
 */

const users = [
  { name: "Alex", score: 10 },
  { name: "Sam", score: 20 },
  { name: "John", score: 30 },
  { name: "Emma", score: 40 }
];
const ONE_MILLION = 1_000_000;

/**
 * Imagine this list has...
 * 1 million users.
 * 
 * Now watch carefully.
 */

function getTotalScoreBad() {
  let total = 0;

  // We loop through everything.
  for (let i = 0; i < users.length; i++) {
    total += users[i].score;
  }

  return total;
}

/**
 * Looks normal, right?
 * 
 * But here comes the hidden problem.
 */

console.time("Slow");



for (let i = 0; i < ONE_MILLION; i++) {
  getTotalScoreBad();
}

console.timeEnd("Slow");

/**
 * We just repeated the SAME work...
 * 1 million times.
 * 
 * JavaScript obeyed every command.
 * Even unnecessary ones.
 */

/**
 * So how do we fix it?
 * 
 * Simple.
 * Save the result once.
 */

const cachedTotal = getTotalScoreBad();

console.time("Fast");

for (let i = 0; i < ONE_MILLION; i++) {
  // No looping anymore.
  // Just reuse the saved value.
  const total = cachedTotal;
}

console.timeEnd("Fast");

/**
 * Same result.
 * Much faster.
 * 
 * This is why some apps feel instant...
 * And others feel painfully slow.
 * 
 * The secret is not always "better hardware".
 * 
 * Sometimes...
 * It is avoiding repeated work.
 * 
 * And that concept is called:
 * CACHING.
 */
