

// The Error Object
// Used to communicate error

const err1 = new Error("An error has occurred!!!!");

// console.log(err1); just printing will throw an error.

// By itself can be used in functions to return errors.

function f1() {

    return new Error("From f1(): an error has occurred!");
    
}

let return_value;

return_value = f1();

if(return_value instanceof Error){
    console.log(return_value.message);
}


// Throwing and catching error.

function f2() {
    throw new Error("From f2(): throwing an Error");
}

try {
    f2();

    console.log("This is never printed");
    
} catch(err) {
    console.log("An exception was caught.");
    console.error(` ---> ${err.message}`);
}


// Call stack

function a() {
    console.log("Entering a()");
    b();
}

function b() {
    console.log("Entering b()");
    c();
}

function c() {
    console.log("Entering c()");
    d();
}

function d() {
    console.log("Entering d()");
    f2();
}


try {
    a();
}catch(err) {
    console.log("Exception caught. Printing out the stack");
    console.log(err.stack);
}


// try...catch..funally

try {
    f2(); 
    
} catch(err) {
    console.log("An exception was caught.");
} finally {
    console.log("This is the \"finally\" block");
    console.log("Everything in the block is executed whether or not");
    console.log("an exception was thrown or not.");
}




