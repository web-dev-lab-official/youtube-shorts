/**
 * 😳 Wait… what if I told you
 * you might be using interfaces WRONG this whole time?
 * Let me show you with ONE tiny example.
 */

// 👇 Two shapes that look almost the same

interface UserWithInterface {
  name: string;
}

interface UserWithInterface {
  age: number;
}

// 🤔 No error… TypeScript just accepted this.
// Why? Because interfaces can MERGE automatically.

/**
 * Now look at the result.
 * This interface secretly became:
 * { name: string; age: number }
 */

const interfaceUser: UserWithInterface = {
  name: "Alex",
  age: 20,
};

// 😬 That was sneaky… but now watch this.

/*
type UserWithType = {
  name: string
}

type UserWithType = {
  age: number
}
*/

// ❌ Boom! TypeScript throws an error here.
// Types do NOT merge.
// They protect you from accidental changes.

/**
 *
 * - Besically, interface is open, extendable, can merge
 * - type is closed, strict, no merging
 *
 * That’s the real difference.
 * Now you know when to use each one.
 */
