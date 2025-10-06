//creating an http server 
//express
//node default library => no

//always write this 
// const express = require ("express");

// function sum(n){
//     let ans = 0 ;
//     for(let i = 0 ; i < n; i++){
//         ans = ans + i;
//     }
//     return ans
// }
// const app = express()

// app.get("/", function(req,res){
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send("hi your answer is " + ans )
// })
const express = require("express")
const app = express()



let users = [{
    name : "'john",
    kidneys :[{
        healthy : false
    }]
}]
app.use(express.json());
app.get("/", function(req, res){
    //write logic 
    const johnKidneys = users[0].kidneys;
    const numberOfkindneys = johnKidneys.length;
    const numberOfHealthyKid = 0;
    for( let i =0 ; i < johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKid = numberOfHealthyKid + 1;
        }
    }
    const numberOfUnhealthyKid = numberOfkindneys - numberOfHealthyKid;
    res.json({
        johnKidneys,
        numberOfHealthyKid,
        numberOfUnhealthyKid
    })
})

app.post("/",function(req,res){
    let isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg : "Done!!"
    })
})

app.listen(3000)