import { WebSocketServer,WebSocket } from 'ws';

const wss = new WebSocketServer({ port:8080 })

//let userCount = 0
let allSockets: WebSocket[] = [];


//user connecting to the server 
wss.on("connection",(socket) =>{
    allSockets.push(socket)


    //userCount = userCount + 1;
    console.log("user connected #")

    //To receive any message from user side
    socket.on("message",(message) =>{
        console.log("message received " + message.toString())

        //Making all the connected clients see the data
        // for(const s of allSockets){
        //     s.send(message.toString() + ":sent from the server")
        // }
        //OR
        allSockets.forEach(s =>{
            s.send(message.toString() + ": This is from the server")
        })

        //Message send from the server
            //socket.send(message.toString() + ": sent from the server")        
    })

    //If a client disconnect we should not send message to them disconnect logic
    socket.on("disconnect", () =>{
        allSockets = allSockets.filter(x => x != socket)
    })
})

//Express
// app.post("/signup",(req,res) =>{

// })