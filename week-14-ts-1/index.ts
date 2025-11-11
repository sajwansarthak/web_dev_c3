// let x: number = 1;

import { StringMappingType } from "typescript"

// console.log(x)


//1st question
function greet2 (firstName: string){
    console.log("hello " + firstName)
}
greet2("sarthak")


//number, string, any are the few types in typescript 
//avoid any 
//if you want to give two types use (fistname: string | number)

//2nd 
function sum (a:number,b: number): number{ //this will tell that the function will only return a number but ts compiler knows that if both the number are number then the return type will also be a number automatically 
    return a+b
}
console.log(sum(9,5))


//3rd
function isLeagal(age:number){
    if(age > 18){
        return true
    }else{
        return false
    }
}
console.log(isLeagal(3))


//4th - A function that takes another function as an input and returns it after 1 second

function delayedCall(fn: () => void){ //empty arguments returns nothing so we will use void
    setInterval(fn,1000)
}

delayedCall(function(){
    console.log(9)
})
function greet (user:{
    name: string,
    age: number
}){
    console.log("hello " + user.name)
}
greet({
    name: "sarthak",
    age: 20
})



//interface 
interface Usertype{
    firstName: string,
    lastName: String,
    age: number
}


function greet3(user: Usertype){
    console.log("hello " + user.firstName +user.lastName +"my age is " + user.age)
}

let user: Usertype ={
    firstName: "sarthak",
    lastName:"sajwan",
    age:20,
}