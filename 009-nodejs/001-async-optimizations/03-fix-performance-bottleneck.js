
/**
 * Ever wonder why your Node.js app is fast today,
 * but suddenly feels painfully slow tomorrow?
 *
 * Your server might not be broken.
 * It might be doing too much work at once.
 */

// Let's create a tiny server to see why.

/**
 * First, here's a function that blocks everything.
 * Imagine one customer making every other customer wait.
 */
function badTask() {
    const start = Date.now();
  
    // Keep checking the time until 3 seconds have passed.
    // During this time, Node.js can't handle other tasks on the main thread.
    while (Date.now() - start < 3000) {
      // This loop keeps Node.js busy for three seconds.
    }
  
    console.log("Heavy task finished!");
  }
  
  // Try running this before serving other requests.
  // badTask();
  
  /**
   * Surprise!
   * Even though Node.js supports many requests,
   * one blocking task can freeze the whole event loop.
   */
  
  // Fix one: move slow work out of the main thread.
  // Use worker threads for heavy calculations.
  // Use a background job for tasks that can wait.
  
  /**
   * Problem two: fetching data inside a loop.
   * Imagine asking the database for every user separately.
   */
  
  const users = [1, 2, 3, 4, 5];
  
  async function slowDatabaseExample() {
    for (const user of users) {
      // Each query waits before the next one starts.
      await fakeDatabaseQuery(user);
    }
  }
  
  /**
   * Fix two: fetch multiple records in one query.
   * Or run independent queries together when safe.
   */
  
  async function fastDatabaseExample() {
    // Independent queries can run at the same time.
    await Promise.all(users.map(fakeDatabaseQuery));
  }
  
  async function fakeDatabaseQuery(user) {
    return user;
  }
  
  /**
   * Problem three: loading too much data.
   * Returning ten thousand records wastes time and memory.
   */
  
  // Fix three: paginate results and fetch only needed fields.
  
  /**
   * Problem four: repeating the same expensive work.
   * Why calculate the same answer for every request?
   */
  
  // Fix four: cache results that are safe to reuse.
  
  /**
   * Now here's the real aha moment.
   *
   * Node.js isn't always slow because it lacks power.
   * It gets slow when requests wait on unnecessary work,
   * or one task blocks everyone else.
   *
   * The concept is the event loop.
   * Keep it free, and your app can handle requests smoothly.
   */
  