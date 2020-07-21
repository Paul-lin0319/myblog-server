const http = require('http');

const PORT = 31669;
const serverHandle = require('../app');

const server = http.createServer(serverHandle);

server.listen(PORT);
