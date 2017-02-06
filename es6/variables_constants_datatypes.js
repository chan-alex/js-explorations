

// The let keyword is new in ES6. It creates variables.
// Before es6, the keyword to use was var.
let x;
let today_date = "3 Feb 2017";

// In node, redeclaring  a variable will trigger errors.

// const are declared with the const keyword. this is also specific to es6.
const PI = 3.14;


// In javascript, values are either primitives or objects.
// These are the primitive types:
// Numbers, String, Boolean, Null, Undefined, Symbol

// Objects can be user defined or built-ins. These are the builtin objects:
// Array, Date,  RegExp, Map (and WeakMap), Set (and WeakSet)



// Numbers
// JS only has one number type. Recognizes 4 binary types.

let a = 10;
let hexidemcial_b = 0x000ff;
let octal_c = 0o123;
let deciaml_d = 11.15;
let expononical_e = 3.1e5;
let infinity = Infinity;
let negative_infinity = -Infinity;
let non_a_number = NaN;


// Useful Number properties.

console.log("Smallest that can be add to 1 to get a disticnt number: " + Number.EPSILON);
console.log("Largest representable integer: " + Number.MAX_SAFE_INTEGER);
console.log("Largest representable number: " + Number.MAX_VALUE);
console.log("Smallest representable integer: " + Number.MIN_SAFE_INTEGER);
console.log("Smallest representable number: " + Number.MIN_VALUE);

console.log("Postive infinity: " + Number.POSITIVE_INFINITY);
console.log("NaN : " + Number.NaN);
console.log("Negative infinity: " + Number.NEGATIVE_INFINITY);



// Template strings.
// Before ES6, the only way to express values in string was to use string concatenation.
// See the above console.log code.
// In EX6, template strings is available.

let pi = 3.14;
const message = `The value of PI is ${pi}`;  // Note: Using backticks, not string quotes.
console.log(message);
