/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();

const userDAO = require('./../models/userDAO');

/*
  브라우저로 온 요청을 받아 처리하는 파일 => 라우터
  DB 관련 처리는 받은 데이터를 userDAO에 넘겨 처리 결과를 리턴받아 JSON으로 브라우저에 출력한다
  브라우저 요청(데이터?) => 라우터 => DAO => 라우터 => 브라우저 결과 출력
*/
router.post('/checkEmail', (req, res, next) => {
  const body = req.body;
  res.send('email check');
});

router.post('/signup', async (req, res, next) => {
  const data = req.body;

  try {
    const user = await userDAO.signup(data);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  const body = req.body;
  // console.log(body);
  try {
    const user = await userDAO.login(body);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.get('/logout', function (req, res, next) {
  res.send('로그아웃');
});

module.exports = router;
