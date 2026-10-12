
/**
 * JavaScript has a garbage collector.
 * Rust has something different.
 * And this difference is surprisingly powerful.
 *
 * But first, what happens when memory is no longer needed?
 *
 * In JavaScript, the garbage collector finds unused data
 * and cleans it up automatically.
 *
 * Rust takes another path.
 * Let's see how.
 */

pub fn p02_ownership() {
    // Imagine creating a message in JavaScript.
    // You can assign it to another variable.
    // Both variables can still access the same object.

    // Rust works differently with owned data.
    let message = String::from("Hello, Rust!");

    // This variable owns the message.
    println!("{}", message);

    // But what does ownership actually mean?
    // Ownership means one variable is responsible for its data.
    // It controls who can use that data and when it gets cleaned up.

    let first_owner = String::from("Secret data");

    // Now, let's transfer ownership to another variable.
    let second_owner = first_owner;

    // The new owner can use the data.
    println!("{}", second_owner);

    // But the old owner can no longer use it.
    // Uncomment this line to see Rust stop you.
    // println!("{}", first_owner);

    // Wait, why would Rust restrict us like this?
    // Because it knows exactly who owns the data.
    // And that helps prevent memory mistakes.

    {
        // Let's create some temporary data.
        let temporary = String::from("Temporary data");

        println!("{}", temporary);

        // When this scope ends, its owner disappears.
        // Rust automatically frees the data's memory.
    }

    // No garbage collector needs to search for unused data.
    // No manual memory cleanup is needed.
    // Rust knows when the owner goes out of scope.

    // Here's the surprising part.
    // JavaScript cleans up memory using a garbage collector.
    // Rust uses ownership rules checked by the compiler.

    // One important detail:
    // Ownership prevents many memory bugs,
    // but it does not prevent every possible memory leak.

    // The big aha moment?
    // Rust moves memory cleanup into its ownership system.
    // That feature is called OWNERSHIP.
}
