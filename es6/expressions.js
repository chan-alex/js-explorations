
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

// console.log(NaN === NaN);  // false
// console.log(NaN == NaN);   // false


// When comparing integer, it is ok to use equality.
// When comparing fractional, it is better to use relational operator to test if
// a number is "close" enough.
let n1 = 0.1;
n1 += 0.1;
n1 += 0.1;
console.log(n1 === 0.3);  // this actually gives false.
console.log(Math.abs(n1 - 0.3) < Number.EPSILON);  // this gives true



// String concatenation
// The + operator is used for both addtition and string concatenation.
// The moment either of the operand on either side is a string, string concatenation is done.

console.log( 1 + "5" + 8);  // 158
console.log( 1 + 5 + "8");  // this give 68 because this (1 + 5) + "8"


// True and False.
// The following are considered false:
//   undefined
//   null
//   false
//   0
//   NaN
//   '' (empty string)
//
// Everything else is true.


// typeof operator
// returns a string representing the type of its operand.
// Has problems.  does not map exactly to the seven data type of javascript.
// known to cause confusion. E.g.
//  - "typeof null" returns object. null is not object but a primitive.
//  - cannot distinguish between array and nonarray objects.
//  - "typeof []" returns object.



// Destructuring assignment. New in ES6.

// Object destructuring
const obj1 = { "x":1, "y":2, "z":3};

const {x, b, y, z} = obj1;

console.log(b); // prints undefined.
console.log(x);
console.log(y);
console.log(z);

// When destructuring an object, the variable names must match the property name. 

// When doing declaration and assignment, need to put in brackets.
const obj2 = { "x1":1, "y1":2, "z1":3};
let b1, x1, y1, z1;

//{x1, b1, y1, z1} = obj1;  // this will cause error.

({x1, b1, y1, z1} = obj1);


// Array destructuring
let arr1 = [1, 2, 3, 4];

let [a2, b2, c2, d2] = arr1;

console.log(a2); 
console.log(b2);
console.log(c2);
console.log(d2);

// with spread (...) operator

let [a3, b3, ...rest] = arr1;

console.log(a3); 
console.log(b3);
console.log(rest); // prints [3,4]


