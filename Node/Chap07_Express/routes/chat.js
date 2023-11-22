/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();

// /chat
router.get('/', (req, res, next) => {
  res.render('chatIndex', { title: '채팅방 로그인' });
});

// /chat/login
router.post('/loginProcess', (req, res, next) => {
  // POST => req.body
  const { username, add } = req.body;

  if (username && username.trim() !== '') {
    // session에 속성을 하나 추가
    req.session.username = username;
    req.session.add = add;
    res.redirect('/chat/chat');
  } else {
    res.redirect('/chat');
  }
});

// /chat/chat
router.get('/chat', (req, res) => {
  // 브라우저에서 바로 이 페이지로 진입하면 req.session에 아무런 값도 없다
  // loginProcess 페이지를 거쳐야 req.session.username 속성이 생성되고 값이 대입된다
  const username = req.session.username;
  if (!username || username.trim() === '') {
    res.redirect('/chat');
  } else {
    res.render('chat', { title: '채팅방', username });
  }
});

// /chat/logout
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');  // root 첫 페이지로 이동
})

module.exports = router;