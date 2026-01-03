/**
 * This TypeScript trick replaces many if-statements.
 * First, I will show the problem.
 * Then, I will show the fix.
 * Same idea.
 * Very different result.
 */

/* =========================
   PART 1: THE PROBLEM
   ========================= */

/**
 * This value is just a string.
 * Strings allow ANY text.
 * Even wrong ones.
 */
const badLight = "gren"; // typo on purpose

/**
 * We want to show a message for each light.
 * So we start writing if-else blocks.
 */
function showMessageBad(light: string) {
  /**
   * We keep checking again and again.
   * This grows fast.
   * And bugs sneak in.
   */

  if (light === "red") {
    console.log("Stop");
  } else if (light === "yellow") {
    console.log("Slow down");
  } else if (light === "green") {
    console.log("Go");
  } else {
    /**
     * This should never happen.
     * But it DOES happen.
     * Because the type is too loose.
     */
    console.log("Unknown light");
  }
}

// Run the bad version.
showMessageBad(badLight);

/**
 * The problem is clear.
 * Too many if-else checks.
 * Typos are allowed.
 * Errors appear at runtime.
 */

/* =========================
   PART 2: THE SOLUTION
   ========================= */

/**
 * Now we fix the root problem.
 * We limit the allowed values.
 * Only these words are allowed.
 */
type Light = "red" | "yellow" | "green";

/**
 * This value is now protected.
 * Typos are not allowed anymore.
 */
const goodLight: Light = "red";

/**
 * Same goal.
 * Much safer code.
 */
function showMessageGood(light: Light) {
  /**
   * At this point,
   * light can be red, yellow, or green.
   * TypeScript is watching.
   */

  if (light === "red") {
    /**
     * Inside here,
     * light is ONLY "red".
     */
    console.log("Stop");
    return;
  }

  if (light === "yellow") {
    /**
     * Now light is ONLY "yellow".
     */
    console.log("Slow down");
    return;
  }

  /**
   * We did not check for green.
   * Why is this safe?
   * Because nothing else is possible.
   */
  console.log("Go");
}

// Run the good version.
showMessageGood(goodLight);

/**
 * The big lesson.
 * One variable.
 * A few allowed values.
 * The type gets smaller step by step.
 *
 * Many allowed values is a union type.
 * Making it smaller is type narrowing.
 *
 */

