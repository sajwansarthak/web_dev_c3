"use strict";
//abstract classes
class User1 {
    constructor(name) {
        this.name = name;
    }
    //you cant have default implementation in interfaces 
    //This is the default implementation 
    hello() {
        console.log("HI There");
    }
}
class Employee1 extends User1 {
    constructor(name) {
        super(name);
        this.name = name;
    }
    greet() {
        return "hi " + this.name;
    }
}
