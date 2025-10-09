const express = require ("express")

const app = express();

app.get("/sum/:a/:b",function(req,res){
    //to get the input parameter we can use query to get it
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        answer: a + b
    })
})

// app.get("/multiply",function(req,res){

// })

app.listen(3000);