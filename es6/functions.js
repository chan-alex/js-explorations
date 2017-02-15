

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


// New in ES6 are default arguments.

function default1 (x,y="default_value",z) {

    console.log("Inside default1: ");
    console.log(`   x = ${x}`);
    console.log(`   y = ${y}`);
    console.log(`   z = ${z}`);
}


default1(1, 2, 3);
default1(5);

// When functions are properties of an object, there are called method.

const dog1 = {
    bark: function() { console.log("Woof!");}
}

let d = dog1;
d.bark();

// ES6 has a new shortcut for the above.

const dog2 = {
    bark() { console.log("Woof!");}
}

d = dog2;
d.bark();


// "this" keyword is related object-orient programming. Can be used in different ways.

const person1 = {
    name: "Jim",
    say_name: function() { return `My name is ${this.name}.`;},
}

let p = person1;
console.log(p.say_name());

// The "this" thing is dependent on how the function is called. Not where it is declared.

const p1 = person1.say_name;
console.log(p1())   // here the name is "undefined";


// One common problem with "this" is when attempting to use inside nest functions.

const person2 = {
    name: "Jack",
    say_name: function() { return `My name is ${this.name}.`;},
    say_name_quoted: function() {

        function add_quotes() {
            return `"${this.name}"`;  // this is undefined.
        }
        
        return add_quotes();
    }   
}


const p2 = person2;
console.log(p2.say_name_quoted());  // prints "undefined"


// The solution is to bound "this" to another variable and referencing this variable
// from inside the nested function.

const person3 = {
    name: "John",
    say_name: function() { return `My name is ${this.name}.`;},
    say_name_quoted: function() {

        const self = this;
        
        function add_quotes() {
            return `"${self.name}"`;
        }
        
        return add_quotes();
    }   
}


const p3 = person3;
console.log(p3.say_name_quoted());  


// Arrow notation. New in ES6;
// Synatx sugar (with one important difference). Simplifies function declaration.

// The function keyword can be omitted.
const fn1 = function() { console.log("This is fn1"); }
fn1();
// same as:
const fn2 = () => { console.log("This is fn2"); }
fn2();


// If function takes a single argument, the braces be removed.
const fn3 = function(something) { console.log(something);}
fn3("I am hungry");
                                 
