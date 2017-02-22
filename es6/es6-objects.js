

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

let m2 = new Motorbike();
