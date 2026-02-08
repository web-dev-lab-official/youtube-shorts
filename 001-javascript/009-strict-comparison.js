/**
 * You are using JavaScript wrong.
 * Yes, most beginners do this.
 * And it works until it suddenly does not.
 * Watch closely.
 */

// Let me show a small problem.
let score = "5";

// This looks normal.
if (score == 5) {
  console.log("Matched with ==");
}

// This is the surprise.
if (score === 5) {
  console.log("Matched with ===");
}

// Did you notice something weird.
// One worked.
// One failed.
// But the value looks the same.

// == changes the value silently.
// === does not change anything.
// This causes hidden bugs.

// Now another common mistake.
function addPoints() {
  points = 10;
}

// This function looks harmless.
addPoints();

// But this should scare you.
console.log(points);

// The variable escaped the function.
// You did not ask for that.
// JavaScript allowed it anyway.

// This breaks apps silently.
// Bugs become hard to find.

// Now the fix.
function safeAddPoints() {
  let points = 10;
  return points;
}

// This is controlled.
console.log(safeAddPoints());

// No leaks.
// No surprises.
// No hidden bugs.

// Remember this clearly.
// Always use ===.
// Never create accidental globals.
// This is called strict comparison.
// This is called variable scope.
