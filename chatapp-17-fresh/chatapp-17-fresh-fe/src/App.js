import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import './App.css';
//This is a bad practise to initalize it outside always initialize it inside use effect
//const ws = new WebSocket("http://localhost:3000");
function App() {
    const [messages, setMessages] = useState(['hi there', 'hello']);
    //generated a ref to store a value that dosent need to re-render the website
    //@ts-ignore
    const wsRef = useRef();
    useEffect(() => {
        //this is how we connect to the server 
        const ws = new WebSocket("http://localhost:8080");
        //this is how we receive message
        ws.onmessage = (event) => {
            //this will hold all the ...m=> text that are already present and event.data it will add new text in the array
            //here m is the inital set of message the final will be a array which will contain all the inital message and all the new message from the server
            setMessages(m => [...m, event.data]);
        };
        wsRef.current = ws;
        ws.onopen = () => {
            ws.send(JSON.stringify({
                type: "join",
                payload: {
                    roomId: "red"
                }
            }));
        };
    }, []);
    return (
    //flex flex-col
    //2nd div this is how we render an array in react
    _jsxs("div", { className: 'h-screen bg-black', children: [_jsx("br", {}), _jsx("br", {}), _jsx("br", {}), _jsx("div", { className: 'h-[85vh]', children: messages.map(message => _jsx("div", { className: 'm-8', children: _jsx("span", { className: 'bg-white text-black rounded p-4', children: message }) })) }), _jsxs("div", { className: 'w-full bg-white flex p-4 ', children: [_jsx("input", { id: "message", className: "flex-1 p-4 border border-gray-400 rounded", placeholder: 'You can type here' }), _jsx("button", { onClick: () => {
                            //sending the input message to the server
                            const message = document.getElementById("message")?.value;
                            //we will convert the message to string
                            wsRef.current.send(JSON.stringify({
                                type: "chat",
                                payload: {
                                    message: message
                                }
                            }));
                        }, className: 'bg-blue-600 text-white rounded m-2', children: "Send Message" })] })] }));
}
export default App;
//# sourceMappingURL=App.js.map