


const arr1 = [
    "1. Lorem ipsum dolor sit amet, diam egestas amet pulvinar ",
    "2. sociis dictumst urna. Id suspendisse mollis, rutrum sit",
    "3. commodo nulla sodales etiam, placerat euismod. Posuere",
    "4. mattis convallis augue in faucibus non, corrupti euismod",
    "5. nulla, sit est, montes sed, tortor feugiat pede lobortis",
    "6. roin venenatis vestibulum."];


//const iter = arr1.values();// For some reason, arr1 does not have .value()
const iter1 = arr1[Symbol.iterator](); // Using [] notation to access object property.

console.log(iter1.next());
console.log(iter1.next());

// Looping from here, just continues advancing the iterator.
console.log(">>>> Entering loop...");
let current = iter1.next();
while( !current.done ) {
    console.log(current);
    current = iter1.next();
}

console.log(">>>> Entering loop (variant)...");
const iter2 = arr1[Symbol.iterator](); // Using [] notation to access object property.

for( let current=iter2.next(); !current.done; current=iter2.next()) {
    console.log(current.value);
}

// The for...of loop is a simpler way of doing the equivalent of the above.
console.log(">>>> Using for...of loop");
for( let l of arr1) {
    console.log(l);
}


// Iterator protocol.
// Any object that supports the iterator protocol can be iterated.

class Messages {

    constructor() {
        this.messages = [];
    }

    add_message(msg) {
        this.messages.push( {msg,timestamp: Date.now()} );
    }

//  The easy way: return Array's iterator
//    [Symbol.iterator]() {
//        return this.messages[Symbol.iterator]();
//    }

    // How to do it yourself.
    [Symbol.iterator]() {  // function scope. closure.
        let index = 0;
        const messages = this.messages;

        return { 
            next() {
                if (index >= messages.length)
                    return { value: undefined, done: true };
                return {value: messages[index++], done: false};
            }
        };
    }
}


let m1 = new Messages();

m1.add_message("Message 1");
m1.add_message("Message 2");
m1.add_message("Message 3");
m1.add_message("Message 4");
m1.add_message("Message 5");
m1.add_message("Message 6");
m1.add_message("Message 7");


console.log("m1 = ");
console.log(m1);
console.log("Iterating over m1: ");

for(let m of m1) {
    console.log(m);
}

// Iterator are also suitable for representing infinite sequences or streams.

class FibonacciSeq {
    
    [Symbol.iterator]() {
        let x = 0, y = 1;   // 1st two numbers.

        return {
            next() {
                let rval = { value: y, done: false }; // done is always false here.
                y = x + y;
                x = rval.value;
                return rval;
            }
        };
    }
}

const fs1 = new FibonacciSeq();

let i=0;
for(let n of fs1) {
    console.log(n);
    if(++i > 5) break;
}


// Generators
// Similar to iterators.
// Generators are like functions except:
//  1. Can yield control to the caller at any point
//  2. When executed, does not run but returns an iterator.

// Signifed with an * after the function keyword.


function* abc() {

    yield "a";
    yield "b";
    yield "c";    
    yield "d";
    yield "e";
    yield "f";    
    yield "g";
    yield "h";
    yield "i";

}

// a lot like iterators.
const iter3 = abc();
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());
console.log(iter3.next());

// A generator also be called in a for..of loop.
for (let x of abc()) {
    console.log(x);
}

// Generators allow 2 way conversations
function* conversation() {
    const name = yield "Hi, what is your name?";
    const job = yield "What do you do?";

    return `${name} works as a ${job}`;
}

const iter4 = conversation();
console.log(iter4.next());
console.log(iter4.next("jim"));
console.log(iter4.next("doctor"));


// A return in a generator results in done set to true.

function* abc1() {

    yield "a";
    yield "b";
    yield "c";    
    return "d";  // iteration ends here.
    yield "e";
    yield "f";    
    yield "g";
    yield "h";
    yield "i";

}

for (let x of abc1()) {
    console.log(x);
}
