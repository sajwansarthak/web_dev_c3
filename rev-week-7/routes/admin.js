const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require('../db')
const jwt = require("jsonwebtoken")
const { JWT_ADMIN_SECRET } = require("../config")
const { adminMiddleware } = require("../middlewares/admin");
const admin = require("../middlewares/admin");
//adminRouter.use(adminMiddleware);


//brcypt - to hash the passsword
//zod - to validate the user 
//jsonwebtoken - to create the jwt for the user
 
adminRouter.post("/signup", async function(req,res){
    const { email,password,firstName,lastName } = req.body //zod to validate the user
    //TODO - hash the password so that plane password should not be stored in the db
    //TODO - put inside a try catch block


    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })
    res.json({
        message:"signup endpoint"
    })
})
adminRouter.post("/signin", async function(req,res){
    const{ email , password } = req.body;
    //TODO - ideally the passowrd should be hashed , and hence you cant compare the user provided password and the database password
    const admin = await adminModel.findOne({ //this will return either the user or undefined
        email: email,
        password: password,
    });
    if(admin){
        const token = jwt.sign({
            id: admin._id
        },JWT_ADMIN_SECRET )

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


//watch creating a web3 saas in 6 hours to know how the user can upload image url 
adminRouter.post("/course",adminMiddleware, async function(req,res){
    const adminId = req.userId;

    const { title,description,imageUrl,price } = req.body;
    
    const course = await courseModel.create({
        title: title,
        description : description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminId
    })
    res.json({
        message:"Course created",
        courseId: course._id
    })
})
adminRouter.put("/course",adminMiddleware, async function(req,res){
    const adminId = req.userId;

    const { title,description,imageUrl,price } = req.body;
    
    const course = await courseModel.updateOne({
        _id: courseId,
        creatorId: adminId

    },{
        title: title,
        description : description,
        imageUrl: imageUrl,
        price: price,
    })
    res.json({
        message:"Course Updated",
        courseId: course._id
    })
})

adminRouter.get("/course/bulk",adminMiddleware, async function(req,res){
    const adminId = req.userId;
    
    const courses = await courseModel.find({
        creatorId: adminId
    
    })
    res.json({
        message:"All courses",
        courses
    })
})
module.exports = {
    adminRouter: adminRouter
}