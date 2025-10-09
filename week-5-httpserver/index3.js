const express = require("express");

const app = express();

function loggerMiddleware(req,res,next){
    console.log("Method is" +req.method);
    console.log("Host is" +req.hostname);
    console.log("route is" +req.url);
    console.log(new Date());


    next();
}
app.use(loggerMiddleware)
app.get("/sum", function(req, res) {

});

app.get("/multiply", function(req, res) {
    
});

app.get("/divide", function(req, res) {
    

});

app.get("/subtract", function(req, res) {

});

app.listen(3000);