

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
// The idea is to use an IIFE to create a closure for the WeakMap which is used
// to hold the private properties.
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



// What's underneath the ES6 style objects.

// Classes are functions

// The motorbike class could have been declared this way.
function Motorbike_es5(make, model) {
    this.make = make;
    this.model = model;
    this.headlight = "Off";
}

let m1_es5 = Motorbike_es5("Honda", "CBR");



// The prototype
// Object methods are "prototype" methods. e.g. MotorBike.toggle_headlight()

// Every function has a special property called "prototype". Normally not used.
// But important for functions used as constructors.
// The prototype property is important when the "new" keyword is sued.
// The newly created object has access to its constructor's prototype property
// stored at __proto__ property.

// Dyanaic dispatch - when you attempt to access an property or method on an object
// Javascript checks the object's prototype to see if it exists there.

const mb1 = new Motorbike();
const mb2 = new Motorbike();

console.log(mb1.toggle_headlight === Motorbike.prototype.toggle_headlight); // true
console.log(mb1.toggle_headlight === mb2.toggle_headlight);  // true

mb1.toggle_headlight = function() { console.log("a new toggle_headlight()"); };
mb1.toggle_headlight();
console.log(mb1.toggle_headlight === Motorbike.prototype.toggle_headlight); // false
console.log(mb1.toggle_headlight === mb2.toggle_headlight);  // false



//IIFE
const Motorbike_v4 = (function() {

    let VID = 0;

    class Motorbike {

        static getNextVID() {
            return VID++;
        }

        static areSimilar(m1, m2) {
            return (m1.make === m2.make) && (m1.model === m2.model);
        }

        static areSame(m1, m2) {
            return m1.vid === m2.vid;
        }
        
        constructor(make, model) {
            this.make = make;
            this.model = model;
            this.headlight = "Off";
            this.vid = Motorbike.getNextVID();
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
    return Motorbike;
})();

m3 = new Motorbike_v4("Ducati", "996");
m4 = new Motorbike_v4("Ducati", "996");
console.log(m3);
console.log(m4);
console.log(`Are m3 and m4 similar? Ans: ${Motorbike_v4.areSimilar(m3,m4)}`);
console.log(`Are m3 and m4 same? Ans: ${Motorbike_v4.areSame(m3,m4)}`);
console.log(`Is m3 and m3 similar? Ans: ${Motorbike_v4.areSame(m3,m3)}`);



// Inheritance
class Shape {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    printCoord() {
        console.log(`X = ${this.x}  Y = ${this.y}`);
    }
}


class Square extends Shape {

    constructor(x, y, side){
        
        super(x,y);
        this.side = side;

    }

    printArea() { 
        console.log(`Area = ${this.side * this.side}`);
    }
}

let s1;
s1 = new Square(19,19,10);
s1.printCoord();
s1.printArea();


// Object properties.
// For an object o and a property x, o.hasOwnProperty(x) returns true if the object o has
// property x. It returns false if the property isn't defined or is defined in the
// prototype chain


// toString()

class Complex {

    constructor(real, img) {
        this.real = real;
        this.img = img;
    }

    toString() {
        console.log(this.real);
        console.log(this.img);        

        if(this.img < 0) { return `${this.real} - ${this.img}j`;}

        if(this.img > 0) { return `${this.real} + ${this.img}j`; }

        return `${this.real}`; 
        
    }
}

let c1;
c1 = new Complex(1,5);
console.log(c1.toString());


// Mixins
// Javascript is technically a single inhertiance language but it is possible to
// have something similar to multiple inheritance via mixins.

function makeColored(o) {
    o.setRGB = function(r,b,g){
        this.red = r;
        this.blue = b;
        this.green = g;
    };

    o.gotColor = function() {
        return true;
    };
}

makeColored(Shape.prototype);
//makeColored(Shape.__proto__);

s1 = new Shape(1,1);
s1.setRGB(55,55,55);

//Mixins has a problem - name collisions.
// One way to avoid collisions is to use Symbols.

const SET_RGB = Symbol();
const GOT_COLOR = Symbol();


function makeColored_v2(o) {
    o[SET_RGB] = function(r,b,g){
        this.red = r;
        this.blue = b;
        this.green = g;
    };

    o[GOT_COLOR] = function() {
        return true;
    };
}
