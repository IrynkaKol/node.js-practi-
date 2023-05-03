const ws = new require('ws');

const wsServer = new ws.Server({port: 5000})  // створили WebSocket Server, який працює на 5000 порту

const socketList = []

// вішаємо на сервер слухач події
// on аналог addEventListener
// socket - той, хто тільки що підключився
wsServer.on("connection", (socket) => {
socketList.push(socket)

    setTimeout(()=> {
        socket.send("Welcome to web-socket server") // відправляє повідомлення з бекенду на фронтенд, з яким повязаний socket
    }, 3000)
    // console.log('New frontend connection')

    socketList.forEach(item => {
        if(item !== socket) {
            item.send("New member connect")
        }

    })
})

