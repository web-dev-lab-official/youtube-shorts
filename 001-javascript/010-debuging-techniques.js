/**
 * I fixed a scary JavaScript bug.
 * And the fix was just one line.
 * Let me show you.
 * This will surprise you.
 */

// Here is the problem.
// I have a list of prices.
const prices = [100, 200, 300];

// I want to add tax to each price.
// Tax is 10 percent.
const tax = 0.1;

// I expect new prices with tax added.
// So 100 becomes 110.
// 200 becomes 220.
// 300 becomes 330.

// Let us write the code.
const finalPrices = prices.map(price => {
  // I return price plus tax.
  return price + tax;
});

// Now let us log the result.
console.log("Wrong result:", finalPrices);

// Wait.
// This looks strange.
// 100 became 100.1
// That is not 110.
// Something is wrong.

/**
 * Now the real debugging starts.
 * Instead of guessing.
 * I will inspect everything clearly.
 */

// I will group my logs.
console.group("Debugging Prices");

// I want to see price, tax, and result side by side.
const debugTable = prices.map(price => {
  return {
    originalPrice: price,
    taxValue: tax,
    computed: price + tax
  };
});

// Now I print them as a table.
console.table(debugTable);

console.groupEnd();

// Look closely.
// Tax is 0.1
// I added 0.1
// Not 10 percent.
// That is the bug.

/**
 * But I want to pause the program.
 * I want to see values live.
 * This is where debugger helps.
 */

prices.map(price => {
  const computed = price + tax;

  // Execution will pause here.
  debugger;

  return computed;
});

// So what is the fix?
// Only one line.

// Instead of adding tax directly.
const fixedPrices = prices.map(price => {
  return price + price * tax;
});

// Now check again.
console.log("Fixed result:", fixedPrices);

/**
 * And now it works.
 * 100 becomes 110.
 * 200 becomes 220.
 * 300 becomes 330.
 *
 * The bug was simple.
 * I misunderstood percentage math.
 *
 * console.table showed the truth.
 * console.group organized the chaos.
 * debugger paused reality.
 *
 * The concept is simple.
 * Percentage is multiplication.
 *
 * And that one line changed everything.
 *
 * That is the aha moment.
 */