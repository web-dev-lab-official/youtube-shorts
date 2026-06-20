// p01_no_null.rs

/**
 * What if I told you...
 * one tiny value has crashed millions of programs?
 *
 * That value is called null.
 *
 * But Rust looked at null...
 * and simply said...
 * "No thanks."
 */

pub fn p01_no_null() {
    // Imagine we are looking for a user's name.
    // In many languages, this could secretly become null.
    // Then one innocent line of code... could suddenly crash everything. Rust refuses to play that game.
    // Instead of null, Rust wraps the value inside Option<T>.
    // It is either: Some(value) or  None

    // None and null both mean 'no value', but Rust's None lives inside Option<T>, forcing you to handle the missing case and preventing an entire class of null-pointer bugs
    let username: Option<&str> = Some("Shayon");

    // Because Rust knows there are only two possibilities,
    // it forces us to handle both.

    match username {
        // The value exists.
        Some(name) => {
            println!("Hello, {}!", name);
        }

        // No value exists.
        // No crash.
        // No surprise.
        None => {
            println!("No user found.");
        }
    }

    // Let's try another example.
    let favorite_language: Option<&str> = None;
    match favorite_language {
        Some(language) => {
            println!("Favorite language: {}", language);
        }
        None => {
            println!("No favorite language yet.");
        }
    }

    // /**
    //  * And that's the genius.
    //  *
    //  * Instead of hoping a value exists,
    //  * Rust makes you prove it.
    //  *
    //  * No hidden null.
    //  * Fewer unexpected crashes.
    //  */
}

