
// Javscript scoping is lexical.
// This means the scope can be determined just be reading the source code.
// Might not be obvious but it can be done.

const x1 = 5
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
