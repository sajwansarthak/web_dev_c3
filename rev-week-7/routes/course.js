const { Router } = require("express")
const { userMiddleware } = require("../middlewares/user")
const { purchaseModel, courseModel } = require("../db")
const courseRouter = Router();

courseRouter.post("/purchases",userMiddleware,async function(req,res){
    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchaseModel.create({
        userID,
        courseID
    })
    res.json({
        message:"You have successfully bought the coursen "
    })
})

courseRouter.get("/preview", async function(req,res){

    const courses = await courseModel.find({

    })
    res.json({
        courses
    })
})
module.exports = {
    courseRouter: courseRouter
}