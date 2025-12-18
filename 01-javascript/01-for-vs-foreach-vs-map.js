/**
 * 🚀 JS Loop Performance — Let's Play a Game!
 * 
 * Hey devs! Ever wondered which loop is fastest in JavaScript? 
 * Today, we have 1 million numbers… yes, ONE MILLION! 😱
 */

const numbers = Array.from({ length: 1_000_000 }, (_, i) => i);
// Look at this beast! [0, 1, 2, ..., 999999]
// Array.from is like magic for creating huge arrays in a blink! ✨

// --------------------
// 1️⃣ FOR LOOP
// --------------------
console.time("for");
let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
  sum1 += numbers[i]; // Easy peasy! Direct access = speed
}
console.timeEnd("for");
/*
Boom! That was fast, right? 💨
- Why? The for loop just jumps straight to each number.
- No extra function calls, no fancy stuff — pure speed!
*/

// --------------------
// 2️⃣ FOREACH LOOP
// --------------------
console.time("forEach");
let sum2 = 0;
numbers.forEach(n => {
  sum2 += n; // Oh hey, a tiny function is called each time 👋
});
console.timeEnd("forEach");
/*
Hmm… a bit slower 😅
- Why? Every number triggers a callback function.
- Tiny overhead adds up when you have a MILLION numbers!
- Still neat for clean code, but not fastest.
*/

// --------------------
// 3️⃣ MAP LOOP (WRONG USE)
// --------------------
console.time("map");
let sum3 = 0;
numbers.map(n => {
  sum3 += n; // Wait… map isn’t for this! ❌
});
console.timeEnd("map");
/*
Oh no! Map is the slowpoke here 🐢
- Map is meant to **transform arrays** — like doubling numbers or changing names.
- Using map for summing? It secretly creates a new array behind the scenes.
- More memory, more work, slower results. Lesson learned! 🙈

Result Example:
for: 3.5ms ⚡
forEach: 15.9ms 😎
map: 17.5ms 🐌
*/

// ✅ Takeaway: 
// Want speed? Use FOR!  
// Want clean iteration? Use forEach!  
// Only use MAP when making a **new array**!
