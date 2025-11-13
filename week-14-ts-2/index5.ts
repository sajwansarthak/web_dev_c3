//interfaces vs types 

import { AmdDependency } from "typescript";

//Create two types called User and Admin,
//Create a function that takes either user or admin as an input and return a string saying "Welcom ,[name]"


interface Admin{
    name: string;
    permission: string;
}

interface User {
    name: string;
    age: number ;
}

type UserOrAdmin = User | Admin

function greet ( user: UserOrAdmin){
    console.log("welcom " + user.name)
}


let user7: User ={
    name:"sarthak",
    age: 21,
}
let admin2: Admin ={
    name: "rohan",
    permission: "acc",
}

const greeting2 = greet(user7);
console.log(greeting2);