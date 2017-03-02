
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


//Promises


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
);;



const fs = require('fs');

function readSketchyFile() {
    try {
        fs.readFile('does_not_exist.txt', function(err, data) {
            if(err) throw err; });
    } catch(err) {
        console.log('warning: minor issue occurred, program continuing');
    }
}

readSketchyFile();
