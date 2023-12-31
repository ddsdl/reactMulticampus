/* eslint-disable new-cap */
const moment = require('moment');       // npm i moment
const express = require('express');
const router = express.Router();


const empDAO = require('./../models/empDAO');

// 전체목록 표시 => empList
router.get('/empList', (req, res, next) => {
  // res.send('사원 목록 표시 페이지');
  // DB 접속해서 DB 자료 참조 후 페이지에 속성으로 전달
  const empListResult = (resp) => {
    // console.log(resp);
    if (resp.status === 500) {
      console.log(`${resp.status}: ${resp.message} - ${resp.error.message}`);
      next(resp.error);     // app.use(function (err, req, res, next) { }로 이동해서 에러페이지 표시..
    } else {
      res.render('emp/empList', { title: '사원 리스트', resp, moment })
    }
  };

  empDAO.empList(empListResult);
});

// 상세보기
// req.query => 주소줄, req.body => post, req.params => /:변수명
router.get('/emp/:id', (req, res, next) => {
  const { id } = req.params;

  const empResult = (resp) => {
    if (resp.status === 500) {
      console.log(`${resp.status}: ${resp.message} - ${resp.error.message}`);
      next(resp.error);
    } else {
      // console.log(resp);
      // res.send('사원 상세 표시 페이지');
      res.render('emp/emp', { title: '사원 상세', resp, moment });
    }
  };

  empDAO.emp(id, empResult);
});

// 수정 => View
router.get('/updateEmp/:id', (req, res, next) => {
  const { id } = req.params;

  const empResult = (resp) => {
    if (resp.status === 500) {
      console.log(`${resp.status}: ${resp.message} - ${resp.error.message}`);
      next(resp.error);
    } else {
      res.render('emp/updateEmp', { title: '사원정보 수정', resp, moment });
    }
  };

  empDAO.emp(id, empResult);
  // res.send('사원 수정 페이지');
});
// 수정 => 처리 로직
router.post('/updateEmp', (req, res, next) => {
  // console.log(req.body);
  // res.send('UPDATE');

  const updateResult = (resp) => {
    if (resp.status === 500) {
      console.log(`${resp.status}: ${resp.message} - ${resp.error.message}`);
      next(resp.error);
    } else {
      res.redirect('/emp/empList');
    }
  };
  empDAO.updateEmp(req.body, updateResult)
});


// 입력
router.get('/insertEmp', (req, res, next) => {
  // res.send('사원 입력 페이지');
  res.render('emp/insertEmp', { title: '사원정보 입력' })
});
// GET에서 전달한 값을 받아 처리할 페이지 => View는 없음
router.post('/insertEmp', (req, res, next) => {
  const insertResult = (resp) => {
    if (resp.status === 500) {
      console.log(`${resp.status}: ${resp.message} - ${resp.error.message}`);
      next(resp.error);
    } else {
      res.redirect('/emp/empList');
    }
  };
  empDAO.insertEmp(req.body, insertResult);
});


// 삭제
router.get('/deleteEmp', (req, res, next) => {
  // query 방식으로 삭제할 데이터를 받음  
  const { empId } = req.query;

  const deleteResult = (resp) => {
    if (resp.status === 500) {
      console.log(`${resp.status}: ${resp.message} - ${resp.error.message}`);
      next(resp.error);
    } else {
      // res.render('emp/emp', { title: '사원 상세', resp, moment });
      res.redirect('/emp/empList');
    }
  };

  empDAO.deleteEmp(empId, deleteResult);
});


module.exports = router;
