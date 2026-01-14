/**
 * Your JavaScript objects are lying to you.
 * They look safe.
 * But they can secretly change each other.
 * Let me show you how.
 */

/**
 * Step one.
 * Create a simple object.
 * This is normal app data.
 */
const user = {
  name: "Alex",
  settings: {
    theme: "dark",
  },
};

/**
 * Step two.
 * We copy the object.
 * This looks correct.
 * But it hides a trap.
 */
const copy = { ...user };

/**
 * Step three.
 * We change the copy.
 * Only the copy should change.
 */
copy.name = "Sam";

/**
 * Now the dangerous part.
 * We change something inside.
 */
copy.settings.theme = "light";

/**
 * We print both objects.
 * Watch the output closely.
 */
console.log(user);
// { name: 'Alex', settings: { theme: 'light' } }

console.log(copy);
// { name: 'Sam', settings: { theme: 'light' } }

/**
 * Did you see that.
 * The original changed too.
 * That should feel scary.
 */

/**
 * Here is why this happened.
 * Only the outer object was copied.
 * The inner object stayed shared.
 */

/**
 * This has a name.
 * It is called a shallow copy.
 * Shallow means surface only.
 */

/**
 * Now let us fix it properly.
 * We want a full copy.
 * Nothing should be connected.
 */

/**
 * We turn the object into text.
 * Then turn it back into an object.
 * This breaks all links.
 */
const safeCopy = JSON.parse(JSON.stringify(user));

/**
 * We change the inner value again.
 * This time only the copy should change.
 */
safeCopy.settings.theme = "blue";

/**
 * Print both objects again.
 * This is the big aha moment.
 */
console.log(user);
// { name: 'Alex', settings: { theme: 'light' } }

console.log(safeCopy);
// { name: 'Alex', settings: { theme: 'blue' } }

/**
 * The original stays safe.
 * The copy is truly independent.
 * This is called a deep copy.
 * And now you know the fix.
 */
