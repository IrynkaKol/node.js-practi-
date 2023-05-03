const {Server} = require("socket.io");
const {createServer} = require("http") // підходить для даної задачі

const httpServer = createServer() // створюємо сервер

// створюємо webcoker server на основі httpServer і дозволити підключення всім
const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
})

io.on("connection", (socket) => {
    console.log("New frontend connect")
})

httpServer.listen(3001);