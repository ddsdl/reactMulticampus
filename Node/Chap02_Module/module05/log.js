// M05Middleware.js
const fs = require('fs');
const os = require('os');

module.exports = (options) => {
  let logFile;

  if (options && options.target === 'file') {
    logFile = fs.createWriteStream('./login.log', { flags: 'a' });
  }

  const log = (msg) => {
    if (logFile) {
      logFile.write(`[LOG] [${new Date().toLocaleString()}] ${msg}${os.EOL}`)
    } else {
      console.log(`[LOG] [${new Date().toLocaleString()}] ${msg}${os.EOL}`)
    }
  }
  const debug = (msg) => {
    if (logFile) {
      logFile.write(`[DEBUG] [${new Date().toLocaleString()}] ${msg}${os.EOL}`)
    } else {
      console.log(`[DEBUG] [${new Date().toLocaleString()}] ${msg}${os.EOL}`)
    }
  }

  return { log, debug }
}