

// In ES6, there is a new way to declare objects

class Motorcycle {
    constructor() {
    }
}

let m1 = new Motorcycle();

console.log(`Is m1 a Motorcycle? Ans: ${m1 instanceof Motorcycle}`);

class Motorbike {

    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.headlight = "Off";
    }

    toggle_headlight() {

        switch(this.headlight) {
        case "Off":
            this.headlight = "On";
            break;
        case "On":    
            this.headlight = "Off";
            break;
        default:
            throw new Error("Headlight in invalid state!");  
        }
    }        
}

let m2 = new Motorbike("ducati", "996");
console.log(m2);
m2.toggle_headlight();
console.log(m2);

// javascript objects does not have private members.
m2.headlight = "Weird state";
//m2.toggle_headlight();  <--- this will throw an error.



// This version attempts to provide a bit more privacy to the headlight member by making the
// name less obvious.
// The "headlight" member is now using dynamic properties.
class Motorbike_v2 {

    constructor(make, model) {
        this.make = make;
        this.model = model;
        this._headlight = "Off";
    }

    get headlight() { return this._headlight; }
    set headlight(state) { this._headlight = state; }

    toggle_headlight() {

        switch(this.headlight) {
        case "Off":
            this.headlight = "On";
            break;
        case "On":    
            this.headlight = "Off";
            break;
        default:
            throw new Error("Headlight in invalid state!");  
        }
    }        
}

let m3= new Motorbike_v2("ducati", "996");
console.log(m3);
m3.toggle_headlight();
console.log(m3);

// However the "_headlight" property can still be directly accessed.




// Using weakmap and immediately invoke function expression
// This is one way to make an property completely private.

const Motorbike_v3 = (function() {

    // This is in the function scope.
    const private_properties = new WeakMap();

    class Motorbike {
        constructor(make, model) {
            this.make = make;
            this.model = model;
            private_properties.set(this, {headlight: "Off"}); // function scope variables
        }
        get headlight() { return private_properties.get(this).headlight; }
        set headlight(state) { private_properties.get(this).headlight = state; }

        toggle_headlight() {
            switch(this.headlight) {
            case "Off":
                this.headlight = "On";
                break;
            case "On":    
                this.headlight = "Off";
                break;
            default:
                throw new Error("Headlight in invalid state!");
            }
        }
    }
    return Motorbike;
})();
    
let m4= new Motorbike_v3("ducati", "996");
console.log(m4);
m4.toggle_headlight();
console.log(m4);

console.log(m4.private_properties);
