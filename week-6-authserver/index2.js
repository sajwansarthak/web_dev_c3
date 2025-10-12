//using JWT's
const express = require ("express")

const app = express();
app.use(express.json());

const users = []
//[
//   {username: "sarthak",password: "ish1234",token:""}
//
//]
//a function to return random long string as an token it can be any logic just returning the random string
function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.post("/signup",function(req,res){
    const username = req.query.username;
    const password = req.query.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You are now signed up "
    })
    console.log(users);

})

app.post("/signin",function(req,res){
    const username = req.query.username;
    const password = req.query.password;


    const userFound = users.find(function(u){
        if(u.username == username && u.password == password){
            return true ;
        } else{
            return false;
        }
    })
    if(userFound){
        const token = generateToken();
        userFound.token = token;
        res.json({
            message: token
        })
    }else{
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
    console.log(users);
})

app.get("/me",function(req,res){
    const token = req.headers.token

    const userFound = users.find(function(u){
        if(u.token = token){
            return true;
        }else{
            return false;
        }
    })
    if(userFound){
        res.json({
            username: userFound.username,
            password: userFound.password
        })
    }else{
        res.json({
            message: "Invalid Token"
        })
    }
})

app.listen(3000)