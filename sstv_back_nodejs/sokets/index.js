// const express = require("express");
// const app = express();
// const http = require("http");
// const cors = require("cors");
// const  Server  = require("socket.io");
// app.use(cors());

// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3090",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {  
//   console.log(`User Connected: ${socket.id}`);
 
//   socket.on("join_room", (data) => {
    
//     socket.join(data);
//     const clientsCount = io.sockets.adapter.rooms[data];
//     console.log("test:", clientsCount.length -1 );
    
//    console.log(`User with ID: ${socket.id} joined room: ${data} room count: ${clientsCount}`);
//   });

//   socket.on("send_message", (data) => {
//     socket.to(data.room).emit("receive_message", data);
//     console.log(` ${socket.id}가 보낸 메세지 : ${data}`);
//   });

//   socket.on("disconnect", () => {
//     //socket.leave(data);

//     //const clientsCount = io.sockets.adapter.rooms.get(data).size;
//     console.log("User Disconnected", socket.id);
//    // console.log("room size : ", clientsCount);
//   });
// });

// server.listen(3091, () => {
//   console.log("SERVER RUNNING");
// });
