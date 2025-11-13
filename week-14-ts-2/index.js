"use strict";
//Some simple code in typeScript
let user = {
    name: "sarthak",
    age: 20,
    address: {
        city: "dehradun",
        country: "India",
        pincode: 248001,
        houseNumber: "yoyo",
    },
};
function isLegal(user) {
    if (user.age > 18)
        return true;
    return false;
}
const ans = isLegal(user);
if (ans) {
    console.log("i am legal");
}
else {
    console.log("You are not legal");
}
