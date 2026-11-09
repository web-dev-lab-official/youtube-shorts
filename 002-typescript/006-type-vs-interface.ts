/**
 * Wait... interface and type look almost identical.
 * So why does TypeScript have both?
 * Let's solve a real problem and find out.
 */

// Imagine we are building a user system.

// First, let's use type to describe a user.
type User = {
  name: string;
  email: string;
};

// Now imagine we need to add an ID.
type UserWithId = User & {
  id: number;
};

// Nice!
const user: UserWithId = {
  id: 1,
  name: "Shayon",
  email: "shayon@example.com",
};

// But what if we want to add more fields later?

// With type, we cannot simply declare User again.
// TypeScript will throw an error if we try to redefine it.

// And that's where interface shines!

/**
 * Let's create the same user using interface.
 */
interface Customer {
  name: string;
  email: string;
}

// Now watch this!
/**
 * We can declare the same interface again.
 * TypeScript automatically combines both declarations.
 */
interface Customer {
  id: number;
}

// Look!
const customer: Customer = {
  id: 1,
  name: "Shayon",
  email: "shayon@example.com",
};

// No errors!
console.log(customer);

/**
 * So here's the first big difference.
 * Interface can be reopened and extended through declaration merging.
 * Type aliases cannot do this.
 */

// But wait!
/**
 * What if we want a value that is either a string or a number?
 * This is where type really shines.
 */
type ID = string | number;

const userId: ID = "user-101";
const productId: ID = 101;

// Interface cannot directly represent this kind of union.

/**
 * And what about combining existing types?
 * Both can extend existing object shapes.
 */

// Interface uses extends.
interface Admin extends Customer {
  role: string;
}

// Type uses intersection.
type Moderator = Customer & {
  role: string;
};

const admin: Admin = {
  id: 2,
  name: "Alex",
  email: "alex@example.com",
  role: "admin",
};

/**
 * Here's the surprising part.
 * You don't need to choose only one.
 * They work perfectly together.
 */

type AdminID = string | number;

interface TeamMember {
  id: AdminID;
  name: string;
}

// So remember this simple rule.
console.log("Interfaces for object shapes.");
console.log("Types for unions and flexible combinations.");

/**
 * The real aha moment?
 * Interface and type are not enemies.
 * They solve overlapping problems in different ways.
 * Use interface when you want extendable object contracts.
 * Use type when you need more flexible type definitions.
 * And don't overthink it!
 */

// Run with:
// npx tsx index.ts
