/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();

const empDAO = require('./../models/empDAO');

// 전체목록 표시 => empList
router.get('/empList', (req, res, next) => {
  const empListResult = (resp) => {
    if (resp.status === 500) {
      console.log(`${resp.status}: ${resp.message} - ${resp.error.message}`);
      res.json({ resp });
    } else {
      res.json({ resp });
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
      // next(resp.error);
      res.json({ resp })
    } else {
      // res.render('emp/emp', { title: '사원 상세', resp, moment });
      res.json({ resp })
    }
  };

  empDAO.emp(id, empResult);
});

// 수정 => 처리 로직
router.post('/updateEmp', (req, res, next) => {
  const updateResult = (resp) => {
    if (resp.status === 500) {
      console.log(`${resp.status}: ${resp.message} - ${resp.error.message}`);
      // next(resp.error);
      res.json({ title: 'UPDATE Error', resp });
    } else {
      // res.redirect('/emp/empList');
      res.json({ title: 'UPDATE Success', resp })
    }
  };
  empDAO.updateEmp(req.body, updateResult)
});


// 입력
// GET에서 전달한 값을 받아 처리할 페이지 => View는 없음
router.post('/insertEmp', (req, res, next) => {
  const insertResult = (resp) => {
    if (resp.status === 500) {
      console.log(`${resp.status}: ${resp.message} - ${resp.error.message}`);
      // next(resp.error);
      res.json({ title: 'INSERT Error', resp });
    } else {
      // res.redirect('/emp/empList');
      res.json({ title: 'INSERT Success', resp });
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
      res.json({ title: 'DELETE Error', resp });
    } else {
      res.json({ title: 'DELETE Success', resp });
    }
  };

  empDAO.deleteEmp(empId, deleteResult);
});


module.exports = router;
