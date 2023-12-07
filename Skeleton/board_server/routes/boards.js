/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();

router.get('/getBoardList', function (req, res, next) {
  res.send('전체 게시물 조회');
});

router.get('/getBoard', function (req, res, next) {
  res.send('게시물 상세');
});

router.get('/insertBoard', function (req, res, next) {
  res.send('게시물 입력');
});

router.get('/updateBoard', function (req, res, next) {
  res.send('게시물 수정');
});

router.get('/deleteBoard', function (req, res, next) {
  res.send('게시물 삭제');
});

module.exports = router;
