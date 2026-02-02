import { WebSocketServer,WebSocket } from 'ws';

const wss = new WebSocketServer({ port:8080 })

//let userCount = 0
//creating all sockets to store all the connected sockets
//let allSockets: WebSocket[] = [];


//global array for room chat broadcast
interface User {
    socket: WebSocket
    room: string
}


let allSockets: User[] =[];
//user connecting to the server 
wss.on("connection",(socket) =>{
    //allSockets.push(socket)


    //userCount = userCount + 1;
    //console.log("user connected #")

    //To receive any message from user side
    socket.on("message",(message) =>{
        //console.log("message received " + message.toString())

        //Making all the connected clients see the data
        // for(const s of allSockets){
        //     s.send(message.toString() + ":sent from the server")
        // }
        //OR
        // allSockets.forEach(s =>{
        //     s.send(message.toString() + ": This is from the server")
        // })

        //Message send from the server
            //socket.send(message.toString() + ": sent from the server")
            
            
        //chat app logic -->
        const parsedMessage = JSON.parse(message as unknown as string);

        //message will be a string here we are converting the string to object and checking if the user want to join
        if(parsedMessage.type === "join"){
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            })
        }
    })

    //If a client disconnect we should not send message to them disconnect logic
//     socket.on("disconnect", () =>{
//         allSockets = allSockets.filter(x => x != socket)
//     })
})

//Express
// app.post("/signup",(req,res) =>{

// })