const path = require('path');
const url = require('url');
const fs = require('fs');

// 동적 파일 위치
const views = path.join(__dirname, '..', 'views');

const login = (req, res, next) => {
  const query = url.parse(req.url, true).query;
  // console.log(query);
  if (query.username && query.username.trim() !== '') {
    res.writeHead(303, { Location: '/chat?username=' + encodeURIComponent(query.username) });
  } else {
    res.writeHead(303, { Location: '/' });
  }
  res.end();
}
const logout = (req, res, next) => {
  // 혹시 query에 username이 남아 있으면 지우고 / 로 이동
  const query = url.parse(req.url, true).query;
  if (query.username && query.username.trim() !== '') query.username = '';

  res.writeHead(303, { Location: '/' });
  res.end();
}

const chat = (req, res, next) => {
  const { username } = url.parse(req.url, true).query;

  const fileName = path.join(views, 'chat.html');
  fs.readFile(fileName, (err, data) => {
    if (err) {
      next();
    } else {
      res.writeHead(200, { 'content-type': 'text/html;charset=UTF-8' });
      data = data.toString().replace('<%=username%>', decodeURIComponent(username));
      res.end(data);
    }
  });
}

const router = (req, res, next) => {
  const pathName = url.parse(req.url, true).pathname;
  // console.log(pathName.pathname);

  switch (pathName) {
    case '/login':
      login(req, res, next);
      break;
    case '/logout':
      logout(req, res, next);
      break;
    case '/chat':
      chat(req, res, next);
      break;
    default:
      next();
      break;
  }
}
module.exports = router;
