const fs = require('fs');
const path = require('path');
const url = require('url');
const mime = require('mime');

let baseDir = 'public';

const static = (req, res, next) => {

  if (req.url === '/') req.url = '/index.html';

  const mimeType = mime.getType(req.url);
  const parseURL = url.parse(req.url, true);
  // console.log(__dirname);
  const fileName = path.join(baseDir, parseURL.pathname);

  fs.readFile(fileName, (err, data) => {
    if (err) {
      res.writeHead(404, { 'content-type': 'text/html;charset=UTF-8' });
      res.end(`<h1>${req.url} 파일을 찾을 수 없습니다.</h1>`);
    } else {
      res.writeHead(200, { 'content-type': + mimeType + ';charset=UTF-8' });
      res.end(data);
      next();
    }
  });

  // next();
}

const changeBaseDir = (folderName) => {
  // console.log(folderName);
  baseDir = folderName;
  return static;
}
module.exports = changeBaseDir;
