/**
 * Imagine you are building a small shop app.
 * You want to calculate the total price of items.
 * Sounds easy, right?
 * But many beginners make one tiny mistake.
 * They hardcode values directly in the code.
 * Let me show you what that means.
 */

// Price of a product
const productPrice = 10;

// Quantity purchased
const quantity = 3;

// Hardcoded tax rate
const total = productPrice * quantity
    + (productPrice * quantity * 0.05);

console.log("Total with tax:", total)

/**
 * Everything works fine.
 * The code looks simple.
 * But there is a hidden problem.
 * The tax value is hardcoded.
 * It lives inside the formula.
 * Now imagine the tax changes.
 */

// New tax rate
const newTaxRate = 0.08

/**
 * You might think updating the variable will fix things.
 * But it will not.
 * Because the code still uses 0.05.
 * The value is trapped inside the formula.
 */

const brokenTotal = productPrice * quantity 
+ (productPrice * quantity * 0.05)

console.log("Total after tax change:", brokenTotal);

/**
 * See the problem?
 * The tax rate changed.
 * But the calculation did not.
 * This is the danger of hardcoding values.
 * Now let us fix it properly.
 */

// Store constants in one place
const CONFIG = {
    TAX_RATE: 0.08
}

// Use the value from the object
const fixedTotal =
    productPrice * quantity +
    (productPrice * quantity * CONFIG.TAX_RATE)

console.log("Correct total:", fixedTotal)

/**
 * Now the tax lives in one place.
 * Change it once.
 * Everything updates automatically.
 * This makes code flexible.
 * This makes code safer.
 * And this simple idea has a name.
 * It is called avoiding hardcoded values.
 */