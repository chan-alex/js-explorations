
// Callbacks - setTimeout()
// Delays execution for some number of milliseconds.

console.log(`Before setTimeout: ${new Date()}`);

function f1() {
    console.log(`In f1(), ${new Date()}`);
}

setTimeout(f1, 200);

console.log(`After setTimeout: ${new Date()}`);


// Callbacks - setInterval() and clearInterval()
// setInterval() executes a callback function every X number of milliseconds.
// setInterval() returns an ID can be used by clearInterval() to stop it.

console.log("Before setInterval()");

// running every 5 seconds.
const interval_id = setInterval( function() {

    console.log("This is the function called by setInterval()");

}, 1000);

// stop the interval after 5 seconds
setTimeout(function() {

    console.log("Cancelling setInterval()");
    clearInterval(interval_id);
}, 5 * 1000);


// Problems with callbacks
// Callbacks hell.
// No gurantees that error callbacks are called only once (if that was intended).
// Erros in callbacks can bring the whole node process down (node process is just an single
// threaded event loop.

// Handling errors in callbacks can be problematic.
// Exceptions thrown in callbacks cannot be caught outside of the callback function.
// try...catch blocks only work within the same function.

const fs = require('fs');

function readSketchyFile() {

    // This try...catch can't catch the error thrown in the callback function.
    try {
        fs.readFile('does_not_exist.txt', function(err, data) {
            if(err) throw err; });
    } catch(err) {
        console.log('warning: minor issue occurred, program continuing');
    }
}

// If the line below is uncommented, the program crashes.
// readSketchyFile();



// Promises
// Promises ensure that callbacks are always handled in a predictable manner.
// Can prevent the problem of callbacks being called more than once.
// When a promised based asynchronous function is called, it returns a Promise
// instance. Only 2 things can happen to it - either it is fufilled (success) or
// it is rejected (failure). You are guaranteed only one of these will happen.
// e.g. it won't be fufilled and then later rejected. And whatever the result,
// it will only happen once. Once a promise is either fulfilled or rejected,
// it is consider to be settled.

// Another advantage is that promise are objects that can be passed around.
// If you something to be started but prefer someone else to do it, just pass
// the promise to them.

console.log("Testing promise_test1");

function promise_test1(seconds) {

    return new Promise( function(resolve, reject) {

        if (seconds > 20) {
            reject(new Error("Secounds incorrect value: " + seconds));
        }
        setTimeout(resolve, (seconds * 1000));

        // the "reject" function is also called if any exceptions occurs.
        // If the below 2 line is uncommented, reject function will be called
        // and print out "Assignment to constant variable."
        //  const x = 1;
        //  x = 10;
    });
}

promise_test1(10).then(
    function() {
        console.log("promise_test1 done.");
    },
    function(err) {
        console.log("promise_test1 got error: " + err.message);
    }
);



// It appears promises also can't catch exceptions thrown from within callbacks. 
// 
//console.log("Testing promise_test2");

function promise_test2() {

    return new Promise(function(resolve, reject) {
        readSketchyFile();
    });
    
}
//
//promise_test2().then(
//    function() {
//        console.log("promise_test2 done.");
//    },
//    function(err) {
//        console.log("promise_test2 got error: " + err.message);
//    }
//);

//const p = promise_test2();
