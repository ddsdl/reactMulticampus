const path = require('path');

const static = require('./middleware/static')(path.join(__dirname, 'public'));
const logger = require('./middleware/logger')({ target: 'file', dirName: path.join(__dirname) })

const app = (req, res) => {
  // static 함수 처리 후에 logger 함수를 실행
  static(req, res, () => logger(req, res));
  // logger(req, res);
}
module.exports = app;
