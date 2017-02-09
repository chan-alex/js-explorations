

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



// Multline. There are various syntax for this in JS but does not appear to be well supported.
// The most reliable is string concatenation. Note you can mixe types too.

multiline1 = "line1 \n" +
    "line2 \n" +
    "line3 " + 100 + "\n" +
    `${ 53.2 + 4}\n` +
    "line5";

console.log(multiline1);


// javascript will still do implicit conversion of strings to number in some cases.
// have to watch out may be confusing.

const result1 = 4 * "50";  // The string "50" is converted to an integer.   
console.log(`result1 is ${result1} \n`);


//Booleans are express with true and false
this_is_true = true;
this_is_false = false;


// Symbols are new in ES6. Similar lisp symbols. All symbol are unique.
const symbol1 = Symbol();
const symbol2 = Symbol();
console.log(symbol1 == symbol2);  // this prints false.

const symbol3 = Symbol("This is a symbol");
const symbol4 = Symbol("This is a symbol");
console.log(symbol3 == symbol4);  // this also prints false.



// null and undefined. Both represent something that don't exist.
// the general rule is the null is for the programmer to use.
// undfefined is for the compiler to use.

let unknown;
unknown = null;  // this means not yet known.


// Objects.
// The literal syntax to define an object is a pair of curly braces.

const obj1 = {};

// the contents of an object are called properties.

obj1.name = "obj1";

// You can access properties in these way

console.log(obj1['name']);
console.log(obj1.name);

// Accessing undefined properties give undefined.
console.log(obj1.color);

// Some more examples

const point1 = {
    x: 1,
    y: 2,
};

const point2 = { x: 1, y: 2 };

const rectangle1 = {
    point1: { x: 0,  y: 0},    // an object's properties can also be another object.
    point2: { x: 10, y: 0},
    point3: { x: 0, y: 10},
    point4: { x: 10, y: 10},
};


// Objects can also contains functions.

const dog = {
    bark: function() { return "Woof!";}
}

console.log(dog.bark());

// It is possible to delete a property from an object.
delete dog.bark;


// Numbers, strings and booleans have corresponding object types (Number, String, Boolean).
// These objects serve to store special values (Number.INFINITY) and to provide special
// functions.

let string1 = "This is a test string";
console.log(string1.toUpperCase());

// Underneath, javascript create a temporary String object for the above string1 primitve.
// As soon as the toUpperCase() function is called the temporary String object is discarded.

string1.value1 = 3;             // this is allowed
console.log(string1.value1);    // But this will return undefined.



//Arrays
// javascript arrays are similar to arrays in other lanaguages except:
//  - it is possible to add and remove elements at any time.
//  - elements do not all have to be the same type.


const a1 = [0, 1, 'c', 3.14];
const a2 = [ 0, 1, [0, 1, 2 ,3], 3, 4];

// this is how to find the length of an array
console.log(`The length of a2 is ${a2.length}`);


//arrays are zero indexed. Elements are accessed with the usual array syntax
console.log(`The 2nd element of a1 is: ${a1[1]}`);


// Overwrite an element of an array by assigning
a1[3] = "4th element"



// Dates
// Javascript has a builtin type for dates. This is a port from Java and shares similar
// problems.

// To get the dat and time right now
const now = new Date();
console.log(now);


// To create a specifc date
const xmas = new Date(2017, 11 ,25);  // Note: months are zero based. December = 11.

// To get a specific date and time
const xmas_party = new Date(2017, 11, 24, 18, 45);  //24 Dec 2017 1845hrs


// To get the components of an Date type:
console.log(xmas_party.getFullYear());
console.log(xmas_party.getMonth());
console.log(xmas_party.getDate());
console.log(xmas_party.getDay());   // 0 = Sunday, 1 = Monday ...
console.log(xmas_party.getHours());


//Regexs are represented in javascript like this

const regex1 = /\b1234\b/;  // just an random example 
// extremely simple email recognizer
const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;


//Datatype conversion

const numeric_string1 = "44.56";
const num1 = Number(numeric_string1);
