const http = require('http');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') })

const app = require('./../app');

const server = http.createServer((req, res) => {
  app(req, res);
})
const port = process.env.PORT || 4000;

server.on('listening', () => console.log(`server started on port ${port}`))
server.listen(port);
