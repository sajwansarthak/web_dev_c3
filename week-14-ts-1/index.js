"use strict";
// let x: number = 1;
// console.log(x)
//1st question
function greet2(firstName) {
    console.log("hello " + firstName);
}
greet2("sarthak");
//number, string, any are the few types in typescript 
//avoid any 
//if you want to give two types use (fistname: string | number)
//2nd 
function sum(a, b) {
    return a + b;
}
console.log(sum(9, 5));
//3rd
function isLeagal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLeagal(3));
//4th - A function that takes another function as an input and returns it after 1 second
function delayedCall(fn) {
    setInterval(fn, 1000);
}
delayedCall(function () {
    console.log("Hi There");
});
