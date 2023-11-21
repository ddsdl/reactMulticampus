const http = require('http');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const app = require('./../app');

const server = http.createServer((req, res) => {
  app(req, res);
});

const port = process.env.PORT || 3001;
server.on('listening', () => console.log(`server started on port ${port}`));
server.listen(port);
