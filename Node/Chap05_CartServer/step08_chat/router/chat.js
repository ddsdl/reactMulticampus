const url = require('url');

const login = (req, res, next) => {
  const body = req.body;                                // POST

  req.session.username = body.username;

  if (body.username && body.username.trim() !== '') {
    res.writeHead(303, { Location: '/chat' });
  } else {
    res.writeHead(303, { Location: '/' });
  }
  res.end();
}
const logout = (req, res, next) => {
  req.session.destroy();    // 세션에 있는 모든 값 삭제

  res.writeHead(303, { Location: '/' });
  res.end();
}

const chat = (req, res, next) => {
  const username = req.session.username;

  if (!username) {
    res.writeHead(303, { Location: '/' });
    res.end();
  } else {
    res.render('chat', { title: '채팅 페이지', username: username });
  }
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
