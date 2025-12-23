/**
 * STOP.
 * This bug looks tiny.
 * It almost killed production.
 */

const incomingUserId = "0";

/**
 * A user just logged in.
 * The user ID came from an API.
 * It is a STRING, Nobody noticed.
 */

if (incomingUserId == 0) {
  /**
   * What do you think will happen in this condition?
   * This condition PASSES.
   * The app thinks this is user zero.
   */
  console.log("Access granted");
}

/**
 * WAIT.
 * How did a string become a number?
 * Magic? No.
 * JavaScript did it for you.
 */

/**
 * Double equals == tries to be helpful.
 * It converts types. It guesses. It lies.
 */

if (incomingUserId === 0) {
  /**
   * Let have a look in triple equals condition senario.
   * This never runs.
   * String is not a number.
   * No guessing and No conversion here.
   */
  console.log("Access granted");
} else {
  /**
   * This saves your app, users, and job.
   */
  console.log("Access denied");
}

/**
 * Here is the truth.
 * == compares after converting.
 * === compares without mercy.
 *
 */

/**
 * One extra equals.
 * One production outage avoided.
 */