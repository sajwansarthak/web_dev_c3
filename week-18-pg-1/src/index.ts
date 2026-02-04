import express from "express"
import { Client } from 'pg';


const app = express();
app.use(express.json());

// const pgClient = new Client('postgresql://neondb_owner:npg_HAC30GsgzRVh@ep-steep-bonus-ai4h60jj-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require')

//initalizing a fresh client
const pgClient = new Client({
    user: "neondb_owner",
    password: "npg_HAC30GsgzRVh",
    port: 5432,
    host: "ep-steep-bonus-ai4h60jj-pooler.c-4.us-east-1.aws.neon.tech",
    database: "neondb",
    ssl: true
})
pgClient.connect()

//Connecting to the database
//It is an async function it takes time to connect
// async function main(){
//     pgClient.connect()
//     //const response = await pgClient.query("SELECT * FROM users")
//     const response = await pgClient.query("UPDATE users SET username='sarthak' WHERE id=3")
//     console.log(response.rows)
// }
// main()

app.post("/signup", async(req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    //SQL injection when someone try to exployt your database they will send an entire sql queery in passwords to avoid this we will not directly update the querry to database

    //If you append user given values directly to the database it can lead to sql injection 

    try{
        //here we are directly updating the database
        // const response = await pgClient.query(`INSERT INTO users (username, email, password) VALUES ('${username}','${email}','${password}')`)
        //solution 
        const insertQuery = `INSERT INTO users (username,email,password) VALUES ($1,$2,$3)`

        const response = await pgClient.query(insertQuery,[username,email,password])

    res.json({
        message: "You have signed up"
    })
    }catch(e){
        res.json({
            message: "Error while siging up"
        })
    }

    
})
app.listen(3000)