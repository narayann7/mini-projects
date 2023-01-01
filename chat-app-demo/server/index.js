const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "OPTIONS"],
  },
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("join_room", (data) => {
    console.log(data.roomid);
    socket.join(data.roomid);
  });

  socket.on("send_message", (data) => {
    console.log("data", data);
    socket.emit("receive_message", data);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
