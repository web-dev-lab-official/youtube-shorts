/**
 * WAIT.
 * This code looks correct.
 * But one line will betray you.
 */

const user = {
    name: "Shayon",
  
    /**
     * FIRST function.
     * Nothing special.
     *
     * This is a NORMAL function.
     *
     * Normal functions get their OWN `this`.
     *
     * When this function runs,
     * `this` points to `user`.
     *
     * So this.name is easy.
     * It prints the name.
     */
    normal: function () {
      console.log(this.name);
    },
  
    /**
     * SECOND function.
     * Looks innocent.
     *
     * But this is an ARROW function.
     *
     * Arrow functions NEVER get their own `this`.
     *
     * They don't ask,
     * "Who called me?"
     *
     * They ask,
     * "Where was I written?"
     *
     * Outside this object,
     * there is NO name.
     *
     * So this.name…
     * disappears.
     */
    arrow: () => {
      console.log(this.name);
    },
  };
  
  /**
   * SAME object.
   * SAME data.
   *
   * Watch carefully.
   */
  
  user.normal(); // Shayon
  user.arrow();  // undefined
  