
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
