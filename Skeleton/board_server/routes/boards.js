/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const boardDAO = require('./../models/boardDAO');

router.post('/insert', function (req, res, next) {
  const body = req.body;
  boardDAO.insert(body, (resp) => {
    res.json(resp);
  });
});

router.put('/update', function (req, res, next) {
  const body = req.body;
  boardDAO.update(body, (resp) => {
    res.json(resp);
  })
});

router.delete('/delete/:id', function (req, res, next) {
  const params = req.params;    // { no: 1 }
  boardDAO.delete(params, (resp) => {
    res.json(resp);
  })
});

router.get('/boardList', function (req, res, next) {
  const query = req.query;    // { no: 1, size: 10 }
  boardDAO.boardList(query, (resp) => {
    res.json(resp);
  });
});

router.get('/board/:id', function (req, res, next) {
  const params = req.params;    // { id: 5 }
  boardDAO.board(params, (resp) => {
    res.json(resp);
  })
});

module.exports = router;
