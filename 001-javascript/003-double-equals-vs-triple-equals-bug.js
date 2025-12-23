/**
 * STOP.
 * This bug looks tiny.
 * It almost killed production.
 */

const incomingUserId = "0";

/**
 * A user just logged in.
 * The ID came from an API.
 * It is a STRING.
 * Nobody noticed.
 */

if (incomingUserId == 0) {
  /**
   * This condition PASSES.
   * The app thinks this is user zero.
   * Access is granted.
   */
  console.log("Access granted");
}

/**
 * WAIT.
 * How did a string become a number?
 * Magic?
 * No.
 * JavaScript did it for you.
 */

/**
 * Double equals.
 * == tries to be helpful.
 * It converts types.
 * It guesses.
 * It lies.
 */

if (incomingUserId === 0) {
  /**
   * This never runs.
   * String is not number.
   * No guessing.
   * No conversion.
   */
  console.log("Access granted");
} else {
  /**
   * This saves your app.
   * This saves your users.
   * This saves your job.
   */
  console.log("Access denied");
}

/**
 * Here is the truth.
 * == compares after converting.
 * === compares without mercy.
 *
 * Same value?
 * Same type?
 * Or NO.
 */

/**
 * One extra equals.
 * One production outage avoided.
 */
