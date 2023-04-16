const {Server} = require('socket.io');

class SocketService {
   constructor(server) {
     this.io = new Server(server, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
        }
    });
     this.io.on('connection', socket => {
       console.log('user connected')
   });
 } 

  emiter(event, body) {
    if(body)
      this.io.emit(event, body);
  }
}

module.exports = SocketService;