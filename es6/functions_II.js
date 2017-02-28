

// setTimeout executes something after a certain timeout
// setTimeout(function() { console.log("hello"); }, 1500);   <--- 1.5 secs.



// The code below is supposed to output 5,4,3,2,1 go! but does not.
// Question why?
//var i;
for (let i=5; i>=0; i--) {
    setTimeout(function() {
        console.log(i===0 ? "go!" : i);
    }, (5-i)*1000);

    console.log(`i = ${i}`);
}




function loopbody() {
    setTimeout(function() {
        console.log(i===0 ? "go!" : i);
    }, (5-i)*1000);    
}






