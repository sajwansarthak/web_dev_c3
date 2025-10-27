const { Router } = require("express")
const{ userModel, purchaseModel } = require("../db")
const jwt = require("jsonwebtoken")
const { JWT_USER_SECRET } = require("../config")
const { userMiddleware } = require("../middlewares/user")

const userRouter = Router();



userRouter.post("/signup", async  function(req,res){
    const { email,password,firstName,lastName } = req.body //zod to validate the user
    //TODO - hash the password so that plane password should not be stored in the db
    //TODO - put inside a try catch block


    await userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })
    res.json({
        message:"signup endpoint"
    })
})
userRouter.post("/signin", async function(req,res){
    const{ email , password } = req.body;
    //TODO - ideally the passowrd should be hashed , and hence you cant compare the user provided password and the database password
    const user = await userModel.findOne({ //this will return either the user or undefined
        email: email,
        password: password,
    });
    if(user){
        const token = jwt.sign({
            id: user._id
        },JWT_USER_SECRET)

        // DO cookies
        res.json({
            token : token 
        })
    }else{
        res.status(403).json({
            message: " Invalid credentials"
        })
    }
})
userRouter.get("/purchases",userMiddleware, async function(req,res){
    const userId = req.userId

    const purchases = await purchaseModel.find({
        userId,
    })
    res.json({
        purchases
    })
})
module.exports ={
    userRouter: userRouter
}