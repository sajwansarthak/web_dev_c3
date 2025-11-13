"use strict";
//Arrays in ts 
function getMax(nums) {
}
function filterUsers(userss) {
    // return userss.filter((user) => user.age > 18)   we should use filter 
    let ans = [];
    for (let i = 0; i < userss.length; i++) {
        if (userss[i].age > 18) {
            ans.push(userss[i]);
        }
    }
    return ans;
}
const filteredUsers = filterUsers([{
        firstName: "sarthak",
        lastName: "sajwan",
        age: 20,
    }]);
console.log(filteredUsers);
