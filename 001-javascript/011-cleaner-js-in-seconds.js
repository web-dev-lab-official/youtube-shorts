/**
 * What if I told you You can make your JavaScript cleaner In seconds.
 * No new libraries, No magic, Just smarter syntax.
 */
// Imagine this simple user object.
const user = {
    name: "Shayon",
    age: 21,
    country: "Bangladesh"
  };
  
  // Now let us create a sentence about this user.
  // Here is the messy way.
  const sentenceOld =
    "My name is " +
    user.name +
    ". I am " +
    user.age +
    " years old. I live in " +
    user.country +
    ".";
  console.log(sentenceOld);
  /**
   * It works, But look at it. So many plus signs, Hard to read, Easy to break.
   */


  
  // Now imagine the object changes.
  // And you rename a property by mistake.
  const brokenUser = {
    name: "Shayon",
    age: 21,
    country: "Bangladesh"
  };
  // Oops.
  // You typed "nation" instead of "country".
  
  const brokenSentence =
    "My name is " +
    brokenUser.name +
    ". I am " +
    brokenUser.age +
    " years old. I live in " +
    brokenUser.nation +
    ".";
  
  console.log(brokenSentence);
  
  // Did you notice?
  // It prints "undefined".
  // And you might not see it quickly.
  
  // Now let us clean this up.

  // Step one.
  // Use destructuring.
  const { name, age, country } = user;
  // Now we have clean variables.
  // No repeated object name.
  
  // Step two.
  // Use template literals.
  const sentenceNew = `My name is ${name}. I am ${age} years old. I live in ${country}.`;
  console.log(sentenceNew);
  // Look at this, No plus signs, No repeated "user.".
  // Much easier to read, Much harder to mess up.
  
  // And here is the aha moment.
  // Cleaner code is not about writing more.
  // It is about removing noise.
  
  // This secret is called.
  // Destructuring and Template Literals.
  // Modern ES6+ features.
  // Cleaner JavaScript in seconds.