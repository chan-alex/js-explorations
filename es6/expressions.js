
// equality

// Strict equality operators are === and !==
// Abstrict equality operators are == amd !=

// The general rules is to always use strict equality.
// If two operands are of the same type and have the same value, then
// === will produce true and !== produces false.

// The problem with abstrict equality is that while they work correctly
// if both operands are of the same type, they will attempt to do type
// conversions if they are not. The rules by which they do this is hard to remember.

// Some examples
console.log(0 == "");    // true
console.log( "" == "0");  // but the other way give false


console.log(false  == "false");  // false
console.log(false  == "0");      // true


// with === the above all give false.


// On Comparing numbers
// Note that NaN is not equal to anything.
// They are not even equal to each other.

console.log(NaN === NaN);  // false
console.log(NaN == NaN);   // false


// When comparing integer, it is ok to use equality.
// When comparing fractional, it is better to use relational operator to test if
// a number is "close" enough.
let n1 = 0.1;
n1 += 0.1
n1 += 0.1;
console.log(n1 === 0.3);  // this actually gives false.
console.log(Math.abs(n1 - 0.3) < Number.EPSILON);  // this gives true



// String concatenation
// The + operator is used for both addtition and string concatenation.
// The moment either of the operand on either side is a string, string concatenation is done.

console.log( 1 + "5" + 8);  // 158
console.log( 1 + 5 + "8");  // this give 68 because this (1 + 5) + "8"
