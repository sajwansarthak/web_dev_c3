//whole wrokflow of JWts
const express = require ("express")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "sarthak123"

const users = []

const app = express();
app.use(express.json());


app.post("/signup",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username,
        password
    })

    res.json({
        message: "You are now signed up"
    })
    console.log(users)
})

app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = users.find(function(u){
        if(u.username == username && u.password == password){
            return true 
        }else{
            return false
        }
    })
    if(!foundUser){
        res.json({
            message: "User not found"
        })
    }else{
        const token = jwt.sign({
            username
        },JWT_SECRET)
        res.json({
            token: token
        })
    }
    console.log(users)
})
