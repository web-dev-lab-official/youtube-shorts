/**
 * What if TypeScript could change your types for you?
 * No rewriting.
 * No copying.
 * Just smarter types.
 * Stay till the end.
 */

// Here is a very normal user type.
type User = {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
};

/**
 * Here is the real problem.
 * We want to update only ONE field.
 * But TypeScript wants ALL fields.
 * This feels wrong.
 */

// ❌ Error.
// TypeScript demands the full User.
const badUpdateUser = (user: User) => {};
badUpdateUser({ id: 1 });

/**
 * So we try our first trick.
 * Partial.
 */

/**
 * Partial makes every field optional.
 * Update anything Or nothing.
 */

// ✅ No error.
// This feels amazing.
const updateUser = (user: Partial<User>) => {};
updateUser({ name: "Alex" });

/**
 * But here is the trap.
 * EVERYTHING is optional now.
 * Even things that should NEVER be optional.
 */

// ❌ This should be illegal.
// But TypeScript allows it.
updateUser({});

/**
 * Partial removes rules.
 * Sometimes that is dangerous.
 * So we need control.
 */

/**
 * Next tool is Pick.
 * Pick lets us choose fields that Only the ones we want.
 */

// We only want name and email.
type PublicUser = Pick<User, "name" | "email">;

/**
 * Pick is strict.
 * If you pick it You MUST provide it.
 */

// ❌ Error.
// Missing email.
const brokenPublicUser: PublicUser = {
  name: "Alex",
};

// ✅ Works perfectly.
const publicProfile: PublicUser = {
  name: "Alex",
  email: "alex@mail.com",
};

/**
 * Pick is safe But it gets tiring.
 * You must list every field Again and again.
 */

/**
 * Final tool.
 * Omit.
 * Omit removes fields and Everything else stays.
 */

// Remove admin power.
type SafeUser = Omit<User, "isAdmin">;

/**
 * Omit still keeps rules.
 * All remaining fields are required.
 */

// ❌ Error.
// Missing id and email.
const brokenSafeUser: SafeUser = {
  name: "Sam",
};

// ✅ Correct usage.
const safeUser: SafeUser = {
  id: 1,
  name: "Sam",
  email: "sam@mail.com",
};

/**
 * Now the big picture.
 * Partial makes things optional.
 * Pick selects exact fields.
 * Omit removes unwanted fields.
 */

/**
 * Aha moment.
 * These are Utility Types.
 * Partial.
 * Pick.
 * Omit.
 * You will use them every day.
 */
