import { Socket } from "dgram";
import { WebSocketServer,WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 })

interface User {
    socket: WebSocket,
    room: string
}


//Global array to store all socket and room id
let allSockets: User[] = [];


//any message i will receive from user will be string i have to convert it into object 
wss.on("connection",(socket) =>{

    socket.on("message", (message) =>{
        // @ts-ignore
        const parsedMessage = JSON.parse(message)
        //check wheather user want to join the room or send message
        if(parsedMessage.type === "join"){
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            })
        }

        if(parsedMessage.type === "chat"){
            //short way to write
            //const currentUserRoom = allSockets.findLast((x) => x.socket === socket)?.room
            let currentUserRoom = null
            //finding room of currentUser 
            for( let i = 0 ; i < allSockets.length; i++){
                if(allSockets[i]?.socket == socket){
                    currentUserRoom = allSockets[i]?.room
                }
            }
            //finding other users in the same room and sending them the message
            for(let i = 0 ; i<allSockets.length; i++){
                // @ts-ignore
                if(allSockets[i].room == currentUserRoom){
                    allSockets[i]?.socket.send(parsedMessage.payload.message)
                }
            }
        }
    })

})