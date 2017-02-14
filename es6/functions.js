

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

let a = 5;
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



// Unlike other language, javascript does not enforce function signatures.
// It is possible to call a one argument function with 10 arguments.
// Either call the same function gets called.

function func1(a) {
    console.log("From func1 with 1 argument");
    console.log(a);
}

// Note: despite the same function being defined twice, node does not complain.
// only eslint catches the highly likely dubious code.
function func1(a,b) {
    console.log("From func1 with 2 argument");    
    console.log(a);
    console.log(b);
}


func1(1);       // this actually calls the 2 argumentfunction.   
func1(1,2);      
func1(1,2,3,4); // the 2 argument function gets called too.


// Another thing to notes is that it is possible to call a function without providing
// input for the argument. This leads them to have a value of undefined.

func1();  // somehow this is allowed...


// Function arguments can be destructured.

function saysomething1({word1, word2, word3}) {

    console.log(`${word1} ${word2} ${word3}.`);

}

const words = {
    word1: "Javascript",
    word2: "is",
    word3: "buggy"
}

saysomething1(words);

// it is possible to do destructure array

function saysomething2([word1, word2, word3]) {

    console.log(`${word1} ${word2} ${word3}.`);

}

const words_arr = ["Javascript", "is", "buggy"];

saysomething2(words_arr);
