const express = require("express")

const app = express();

let requestCount = 0;


function requestIncreaser(req,res){
    requestCount = requestCount + 1;
    console.log(`total number of requests = ${requestCount}`)
}
//instead of writting code in both gets we can create middleware 
app.get("/sum",function(req,res){
    //requestCount = requestCount + 1;
    //console.log(`total number of requests = ${requestCount}`)

    requestIncreaser(req,res);

    //main logic
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)


    res.json({
        ans: a+b
    })
})

app.get("/multiply",function(req,res){
    //requestCount = requestCount + 1;
    //console.log(`total number of requests = ${requestCount}`)


    requestIncreaser(req,res);


    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a*b
    })
})

app.listen(3000);