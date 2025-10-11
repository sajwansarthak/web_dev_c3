const express = require ("express")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "sarthak123"

const users = []

const app = express();
app.use(express.json());

function logger(req,res,next){
    console.log(req.method + "request came")
    next()
}
//localhost:3000
app.get("/",function(req,res){
    res.sendFile(__dirname + "/public/index.html")
})
app.post("/signup",logger,function(req,res){
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

app.post("/signin",logger,function(req,res){
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

function auth(req,res,next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token,JWT_SECRET)
    if(decodedData.username){
        req.username = decodedData.username
        next()
    }else{
        res.json({
            message:"You are not logged in"
        })
    }
}

app.get("/me",logger,auth,function(req,res){
    if(req.username){
        let foundUser = users.find(function(u){
            if(u.username == req.username){
                return true
            }else{
                return false
            }
        })

        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
})

app.listen(3000);