const express = require('express')
const app = express()


// This function returns of the age of the person in 14 or not 
function isOldEnough(age){
    if(age>=14){
        return true;
    }else{
        return false;
    }
}
// this is how we use middlewares in express 
function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;
    if(age>=14){
        next();
    }else{
        res.json({
            msg:"sorry you are not of age yet"
        })
    }
}
// and if you want to use only one middleware for all routes we can write like this 
// app.use(isOldEnoughMiddleware);
//route handlers 
app.get('/ride1',isOldEnoughMiddleware, function (req, res) {
        res.json({
            msg: "you have successfully riden the ride-1"
          })
  
})
app.get('/ride2',isOldEnoughMiddleware, function (req, res) {
        res.json({
            msg: "you have successfully riden the ride-1"
          })
  
})


app.listen(3000) // which port u want to listen 