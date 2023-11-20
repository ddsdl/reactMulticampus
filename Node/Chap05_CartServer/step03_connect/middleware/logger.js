const fs = require('fs');
const path = require('path');
const os = require('os');

const logger = (options) => {
  let logFile = '';

  if (options && options.target === 'file') {
    logFile = fs.createWriteStream(path.join(__dirname, 'chat.log'), { flags: 'a' });
  }

  return (req, res) => {
    if (logFile) {
      logFile.write(`[${new Date().toLocaleString()}] [${req.socket.remoteAddress}] ${req.url} ${os.EOL}`);
    } else {
      console.log(`[${new Date().toLocaleString()}] [${req.socket.remoteAddress}] ${req.url}`);
    }
  }
}
module.exports = logger;
