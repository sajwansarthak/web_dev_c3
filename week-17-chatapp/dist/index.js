import { WebSocketServer, WebSocket } from 'ws';
const wss = new WebSocketServer({ port: 8080 });
let userCount = 0;
let allSockets = [];
//user connecting to the server 
wss.on("connection", (socket) => {
    allSockets.push(socket);
    userCount = userCount + 1;
    console.log("user connected #" + userCount);
    //To receive any message from user side
    socket.on("message", (message) => {
        console.log("message received " + message.toString());
        //Making all the connected clients see the data
        for (const s of allSockets) {
            s.send(message.toString() + ":sent from the server");
        }
        //Message send from the server
        //socket.send(message.toString() + ": sent from the server")        
    });
});
//Express
// app.post("/signup",(req,res) =>{
// })
//# sourceMappingURL=index.js.map