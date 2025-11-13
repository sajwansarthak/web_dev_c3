"use strict";
//interfaces vs types 
Object.defineProperty(exports, "__esModule", { value: true });
function greet(user) {
    console.log("welcom " + user.name);
}
let user7 = {
    name: "sarthak",
    age: 21,
};
let admin2 = {
    name: "rohan",
    permission: "acc",
};
const greeting2 = greet(user7);
console.log(greeting2);
