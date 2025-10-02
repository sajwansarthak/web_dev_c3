/// this is how to write asynchronous function

const fs = require("fs")

function print(err,data){
    console.log(data)
}

fs.readFile("jsprac5.1.txt","utf-8",print)
fs.readFile("jsprac5.2.txt","utf-8",print)

console.log("Done!!")