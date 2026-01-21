/**
 * This tiny JS trick can save your app.
 * Watch closely.
 * This error crashes beginners every day.
 */

const user = {
    profile: {
      name: "Alex"
    }
  };
  
  // We expect an address.
  // But it does not exist.
  // This is very common.
  
  try {
    // This line looks safe.
    // But it will explode.
    console.log(user.profile.address.city);
  } catch (error) {
    // Boom.
    // The app crashes here.
    console.log("App crashed because of null.");
  }
  
  /**
   * So what went wrong?
   * JavaScript tried to read something that is missing.
   * And it panicked.
   */
  
  // Now watch this.
  console.log("Now the magic part 👇");
  
  // We add only two characters.
  // Question mark and dot.
  const city = user.profile?.address?.city;
  
  // No crash.
  // No error.
  // Just undefined.
  console.log(city);
  
  /**
   * This feels illegal.
   * But it works.
   * JavaScript checks safely.
   * If something is missing, it stops.
   * And your app survives.
   */
  

  console.log("This is called Optional Chaining.");
  