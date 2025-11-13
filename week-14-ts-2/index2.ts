interface People{
    name: string,
    age: number,
    //greet: () => string,
}

let person: People ={
    name: "Rohan",
    age: 21,
    // greet: () =>{
    //     return "hi"
    // }
}

// let greeting = person.greet()
// console.log(greeting)


//Implementing Interfaces on Classes 
//Writting classes in ts
class Manager1 implements People {
    name: string;
    age: number;
    number: string;

    constructor(name: string , age: number,number: string){
        this.name = name;
        this.age = age;
        this.number = number;
    }
}

let user3 = new Manager1 ("john",21,"hey")
console.log(user3.age)


//mainly u need to know that you implement interfaces as classes but you cannot do it with types (interview question)
