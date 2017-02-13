
// javascript function look like this:

function sayhello() {

    console.log("Hello!");

}

sayhello();



// Calling a function is an expression and expression return values.
// A return line terminates the function and returns the specific value

function test1() {

    console.log("Start");

    return 0;

    // console.log("This will not be printed");
}


let x = test1();
console.log(`The value of x is ${x}`);


// If a function does not explictly return anything, the function will return
// undefined

x = sayhello();
console.log(`The value of x is ${x}`);



// javascript functions are objects too and so can be assigned and referenced.

const f = sayhello;
f();


// Can also be assigned to an object property

const o = {};
o.func = sayhello;
o.func();


// functions can take arguments too.

function add(x,y) {
    
    return x + y;
    
}

// function arguments are local to that function.
// making changes to them within the function does not affect any variable outside of it.

function f1(a) {
    console.log(`At start of function, a = ${a}`);
    a = 10;
    console.log(`At end of function, a = ${a}`);
}

let a = 5
console.log(`Before calling function, a = ${a}`);
f1(a);
console.log(`After calling function, a = ${a}`); // a stays at the original value.


// It is possible for function to change value of the argument if the argument is
// an object.

function f2(o) {
    console.log(`At start of function, o.a = ${o.a}`);
    o.a = 10;
    console.log(`At end of function, o.a = ${o.a}`);
}


let obj1 = { a: 5 };
console.log(`Before calling function, obj1.a = ${obj1.a}`);
f2(obj1);
console.log(`After calling function, obj1.a = ${obj1.a}`); // obj1 is modified.
