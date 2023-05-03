const { Server } = require("socket.io");
const { createServer } = require("http"); // підходить для даної задачі

const httpServer = createServer(); // створюємо сервер

// створюємо webcoker server на основі httpServer і дозволити підключення всім
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("chat-message", (message) => {
    socket.broadcast.emit("chat-message", message); // відправляє повідомлення всім окрім себе
  });
  //console.log("New frontend connect")
});

httpServer.listen(3000);
