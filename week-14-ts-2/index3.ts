//abstract classes

abstract class User1 {
    name: string;

    constructor ( name: string){
        this.name = name;
    }

    abstract greet(): string;
    //you cant have default implementation in interfaces 
    //This is the default implementation 
    hello(){
        console.log("HI There")
    }
}

class Employee1 extends User1 {
    name: string;

    constructor(name: string){
        super(name);
        this.name = name;
    }

    greet(){
        return "hi " + this.name ;
    }
}
