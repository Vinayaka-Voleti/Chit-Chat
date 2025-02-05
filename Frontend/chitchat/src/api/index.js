let socket = new WebSocket('ws://localhost:3000/ws');
let connect = (cb)=>{
    console.log("connectingbruh")

    socket.onopen = ()=>{
        console.log("Websocket connected sucessfully");

    }
    socket.onmessage = (msg)=>{
        console.log("mess from socket", msg)
        cb(msg);
    }

    socket.onclose = (event)=>{
        console.log("websocket connection closed", event);

    }
    socket.onerror=(error)=>{
        console.log("websocket error ", error);
    }
};

let sendMsg =(msg)=>{
    console.log("msg send:- ", msg);
    socket.send(msg);
}

export{connect, sendMsg};