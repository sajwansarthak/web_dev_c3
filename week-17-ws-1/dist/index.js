import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });
//event handler
wss.on("connection", function (socket) {
    console.log("user connected");
    // setInterval(() =>{
    //     socket.send("The current price of stock market is " + Math.random());
    // },500)
    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    });
});
//# sourceMappingURL=index.js.map