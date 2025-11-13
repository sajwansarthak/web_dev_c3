//Some simple code in typeScript

// function greet (name:string):string{
//     return "hello " + name;
// }

// function isEven (num: number):boolean{
//     if(num % 2 == 0 ){
//         return true;
//     }else{
//         return false;
//     }
// }

// const greeting = greet("sarthak");
// console.log(greeting)

//Concept of Interfaces and Types 

//Interfaces are used to define the type of an custom complex object 
//An interface can take another interface as an input 


interface Address {
    city: string;
    country: string;
    pincode: number;
    houseNumber: string;
}
interface User {
    name: string;
    age: number;
    address: Address
    //To make address or something optional we can use ?
    // address?:{
    //     city: string;
    //     country: string;
    //     pincode: number;
    // };
}
interface Office {
    address: Address
}

let user: User ={
    name:"sarthak",
    age: 20,
    address:{
        city: "dehradun",
        country: "India" ,
        pincode: 248001,
        houseNumber: "yoyo",
    },
}

function isLegal (user:User):boolean{
    if(user.age > 18) return true;
    return false;
}

const ans = isLegal(user)
if(ans){
    console.log("i am legal")
}else{
    console.log("You are not legal")
}