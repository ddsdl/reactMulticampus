const fs = require('fs');
const path = require('path');
const url = require('url');
const mime = require('mime');

let baseDir = 'public';

const static = (req, res, next) => {

  if (req.url === '/') req.url = '/index.html';

  const mimeType = mime.getType(req.url);
  const parseURL = url.parse(req.url, true);
  const fileName = path.join(baseDir, parseURL.pathname);

  fs.stat(fileName, (err, stats) => {
    if (err) {
      next()
    } else if (stats.isDirectory()) {
      const error = new Error(`${req.url} 폴더에 접근할 수 없습니다`);
      error.status = 403;
      next(error);
    } else {
      res.writeHead(200, { 'content-type': + mimeType + ';charset=UTF-8' });
      fs.createReadStream(fileName).pipe(res);
    }
  });
}

const changeBaseDir = (folderName) => {
  baseDir = folderName;
  return static;
}
module.exports = changeBaseDir;
