
// Below is an example of Javascript promises.

function countup(count){

    return new Promise(function(resolve, reject) {

        for(let i=0; i < count+1; i++) {
            
            setTimeout(function() {
                if(i < count){
                    console.log(`count = ${i}`);
                } else {
                    resolve(console.log("Count reached!"));
                }
            }, i * 1000);
            
        }
    });
}


function promise_test1() {

    console.log("Running promise_test1()");
    
    // Promises can be assigned to an variable.
    const p = countup(5);

    // It is possible to split the handlers.
    p.then( function() {
        console.log("Promise done.");
    });

    p.catch( function(err) {
        console.log("Promise entered error: " + err.message);
    });
}

promise_test1();


// This next promise example shows one problem with promises.

// countup_v2() is meant to stop at number 4 but it does not.
// The "count=X" output continues to be printed when the reject() is
// called from within the callback. What happens tho, is that
// "Promise done" is not printed since the promise has settled in
// the failure state.

function countup_v2(count){

    return new Promise(function(resolve, reject) {

        for(let i=0; i < count+1; i++) {
            
            setTimeout(function() {

                if(i === 4) {
                    reject(new Error("Unlucky number 4!"));
                }       
                
                if(i < count){
                    console.log(`count = ${i}`);
                } else {
                    resolve(console.log("Count reached!"));
                }
            }, i * 1000);
        }
    });
}


function promise_test2() {

    console.log("Running promise_test2()");
    
    // Promises can be assigned to an variable.
    const p = countup_v2(8);

    // It is possible to split the handlers.
    p.then( function() {
        console.log("Promise done.");   // this is never reached.
    });

    p.catch( function(err) {
        console.log("Promise entered error: " + err.message);
    });
}

setTimeout(promise_test2, 6*1000);


// Promise progress.
// One problem that promises have is that there is no way to know the progress.
// One way around this is to use Events.

// The example below uses Node's EventEmitter

const EventEmitter = require('events').EventEmitter;
