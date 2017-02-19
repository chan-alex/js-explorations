
// Javscript scoping is lexical.
// This means the scope can be determined just be reading the source code.
// Might not be obvious but it can be done.

const x1 = 5;
const y1 = 8;

function f1() {

    console.log(x1);
    console.log(y1);

}

{   // New scope.
    const x1 = 1;    // notice in this new scope, it is possible to redeclare variables.
    //const y1 = 2;
    f1();   // prints values of x1 and y2 outside of this scope.
}


// THere are 3 type of scopes in javascript: global scope, block scope, function scope.


// Global scope
// x1 and y1 are variable declared in global scope.



// Block scope

let x2 = 10;
console.log(`Outside of  block, x2 = ${x2}`);
{
    // x2 in this block is independent of x2 outside of it.
    let x2 = 12;
    console.log(`In block, x2 = ${x2}`);
    x2 = x2 + 20;
    console.log(`In block, after addition, x2 = ${x2}`);    
    
}
console.log(`Outside of  block, x2 = ${x2}`);



// variable masking (or shadowing)
// occurs when scopes are nested.

// Below, x3 are in scope in both blocks but the inner block has no way to access
// the outer x3. In the inner block, the x3 variable has been masked.

{ // outer block
    
    let x3 = 15;

    { // Inner block
        let x3 = 20;
        console.log(`Inner block, x3 = ${x3}`);
    }
    
}



// Function scope and closures

let print_str;

{
    let m1 = "Hello from another scope";

    print_str = function () {
        console.log(m1);
    };
}

// print_str is out of the scope where m1 is defined but still has access to it.
print_str();



// Immediately Invoked Functions Expressions (IIFE)
// It looks like this

(function() {
    console.log("Here there!");
})();

// Another example
let f2 = (function() {
    private_msg = "This is a private message";
    return private_msg;
})();

// The private_msg resides inside the IIFE. No other way to access it.
console.log(f2);

// Other example.
// IIFE can return anything. This one returns a function
let f3 = (function() {
    let count = 0;
    return function() {
        count += 1;
        console.log(`-- This function has ben called ${count} times.`);
    }
})();

f3();
f3();
f3();


// var and hoisting

// variables declared are hoisted. They can be used even before they are declared.
console.log(var1);  // this does not trigger any errors.
var var1 = "This is var1";
console.log(var1);

//Variable declared by var can also be re-defined.
var var1 = "This is var1 again";
console.log(var1);

// In general, "let" is better than "var"


// functions are hoisted too...

f4();
function f4() {
    console.log("Hi, this is f4()");
}

// But functions assigned to variable aren't hoisted tho. They are subject to the
// scoping rules of the variable.

// f4();  <--- this could cause any error.
// let f4 = function  {
//    console.log("Hi, this is f4()");
// }




// Implicit  globals
// In ES5, if you forgot to declare a variable with var and then reference it,
// Javascript would assume that you were referring to a global variable.
// If it didn't exist, Javascript would create one.
// To use this, "use strict" was introduced. If used in global scope, this would 
// be applied to the whole script. If used in a function, it applies to the function.

// Many websites use a number of scripts. Using "use strict" in the global scope could 
// caused some of them to not work.

// If don't want to enable strict mode in very function, one way is to wrap your code 
// in a IIFE

(function() {
    use strict;

    // Place your code here.
})();
