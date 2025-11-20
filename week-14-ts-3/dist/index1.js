"use strict";
;
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "taro", age: 20 }, { name: "rohan", age: 23 });
console.log(age);
