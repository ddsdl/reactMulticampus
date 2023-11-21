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

  fs.stat(fileName, (err, stats) => {
    if (err) {
      // res.writeHead(404, { 'content-type': 'text/html;charset=UTF-8' });
      // res.end(`<h1>${req.url} 파일을 찾을 수 없습니다.</h1>`);
      next()
    } else if (stats.isDirectory()) {
      // res.writeHead(403, { 'content-type': 'text/html;charset=UTF-8' });
      // res.end(`<h1>${req.url} 폴더에 접근할 수 없습니다.</h1>`);
      const error = new Error(`${req.url} 폴더에 접근할 수 없습니다`);
      error.status = 403;
      next(error);        // app.use((error, req, res, next) => { }로 이동
    } else {
      // next(new Error('Hello World'));    app.use((error, req, res, next) => { }로 이동
      res.writeHead(200, { 'content-type': + mimeType + ';charset=UTF-8' });
      fs.createReadStream(fileName).pipe(res);
      // next();
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
