const http = require('http');
const path = require('path');
const nodeStatic = require('node-static');
const dotenv = require('dotenv');
dotenv.config();

// npm i node-static

const port = process.argv[2] || process.env.PORT || 3501;
const staticServer = new nodeStatic.Server(path.join(__dirname));

http.createServer((req, res) => {
  staticServer.serve(req, res);
}).listen(port, () => console.log(`server started on port ${port}`));
