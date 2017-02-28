



// setTimeout executes something after a certain timeout
// setTimeout(function() { console.log("hello"); }, 1500);   <--- 1.5 secs.

// The code in test1() is supposed to output 5,4,3,2,1 go! but does not.
// Question why?

function test1() {
    console.log("Entering test1()");
    
    var i;  // notice i is declared using a var.
    for (i=5; i>=0; i--) {
        setTimeout(function() {
            console.log(i===0 ? "go!" : i);
        }, (5-i)*1000);
        
        console.log(`i = ${i}`);  // this help to why.
    }
}

test1(); 

// Explaination
// The loop in test1() executes 5 times. 
// Each time it triggers setTimeout().
// The loop will complete before even the 1st setTimeout() starts.
// When setTimeout() starts, it will use value of "i" as that point in time.
// which is -1 as the for loop had completed. This is due to dynamic(?) scoping.


// However before es6, the other way to resolve the above proble was to make use of
// functions to capture the value of the value via function scoping.

function test2() {
    console.log("Entering test2()");
    var i;  // notice i is declared using a var.
    
    function loop_body(i) {
        setTimeout(function() {
            console.log(i===0 ? "go!" : i);
        }, (5-i)*1000);
    }    
    
    for (i=5; i>=0; i--) {
        loop_body(i);    
        console.log(`i = ${i}`);  // this help to why.
    }
}

// run test2() after a bit of timeout.
setTimeout(test2,6000);


// Creating functions just for this purpose is a bit tedious
// esp since usually they are only going to be used once only.
// So IIFEs were the preferred method for this sort of thing.

function test3() {
    console.log("Entering test3()");
    var i;  // notice i is declared using a var.
     
    for (i=5; i>=0; i--) {
        (function(i) {
            setTimeout(function() {
                console.log(i===0 ? "go!" : i);
            }, (5-i)*1000);
        })(i);    
        console.log(`i = ${i}`);  // this help to why.
    }
}

setTimeout(test3,12000);

// With the introduction of ES6,
// The above problem is now solved with "let" and block-level scoping.
// The code below will work correctly. Even tho the for loop will still complete
// 1st before the 1st setTimeout() executes, the i variable this time is bound to
// the value at the time of the firing of setTimeout()

// BUT NOTE: the "let" is declared *inside* the for loop otherwise the same problem
// will happen again. By declaring the "let i" inside the for loop, we are specifying
// that there will be a new indepedent variable i for each step of the loop.

function test4() {
    console.log("Entering test4()");

    // Notice i is declared inside the for loop. Has to here or it won't work.
    for (let i=5; i>=0; i--) {
        setTimeout(function() {
            console.log(i===0 ? "go!" : i);
        }, (5-i)*1000);
        
        console.log(`i = ${i}`);
    }
}

// run test2() after a bit of timeout.
setTimeout(test4,18000);
