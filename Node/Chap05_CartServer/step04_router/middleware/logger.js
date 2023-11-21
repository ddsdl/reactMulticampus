const fs = require('fs');
const os = require('os');

const logger = (options) => {
  let logFile = '';

  if (options && options.target === 'file') {
    const fileName = `${options.dirName}/chat.log`;
    logFile = fs.createWriteStream(fileName, { flags: 'a' });
  }

  return (req, res, next) => {
    if (logFile) {
      logFile.write(`[${new Date().toLocaleString()}] [${req.socket.remoteAddress}] ${req.url} ${os.EOL}`);
    } else {
      console.log(`[${new Date().toLocaleString()}] [${req.socket.remoteAddress}] ${req.url}`);
    }
    next();
  }
}
module.exports = logger;
