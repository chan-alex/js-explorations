
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