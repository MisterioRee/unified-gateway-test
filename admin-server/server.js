const http = require('http');
const app = require('./app');
const SocketService = require('./api/socket/socketService');

const server = http.createServer(app); 

app.set('socketService', new SocketService(server));


const port = process.env.port || 5000;
server.listen(port, () => console.log(`Server listening at http://localhost:${port}`));