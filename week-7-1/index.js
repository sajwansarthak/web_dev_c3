const express = require ("express")
const { UserModel,TodoModel} = require("./db")
const jwt = require ("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const JWT_SECRET = "sarthak1234";

mongoose.connect("mongodb+srv://sardbuser:sardbuserpassword@cluster0.4tnlc.mongodb.net/todo-sarthak-222")

const app = (express())
app.use(express.json())

app.post("/signup",async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name

    await UserModel.create({
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: "You are now logged in "
    })
})

app.post("/signin",async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })
    console.log(user)

    if(user){
        const token = jwt.sign({
            id: user._id.toString()
        },JWT_SECRET)
        res.json({
            token: token
        })
    }else{
        res.status(403).json({
            message: "Wrong Credentials"
        })
    }
})
function auth(req,res,next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token,JWT_SECRET)

    if(decodedData){
        req.userID = decodedData.id
        next()
    }
    else{
        res.status(403).json({
            message:"Invalid credentials"
        })
    }
}

app.get("/todo", auth,async function(req,res){
    const userID = req.userID
    const title = req.body.title
    const done = req.body.done

    await TodoModel.create({
        userID,
        title,
        done
    })

    res.json({
        message: "Todo created"
    })
})

app.get("/todos",auth,async function(req,res){
    const userID = req.userID
    
    const todos = await TodoModel.find({
        userID
    })

    res.json({
        todos
    })
})

app.listen(3000)