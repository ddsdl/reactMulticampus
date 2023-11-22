/* eslint-disable new-cap */
const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// /prod/
router.get('/', (req, res, next) => {
  const dom = `<html>
    <head><title>Product</title></head>
    <body>
      <h1>Product Main Page</h1>
    </body>
  </html>
  `;
  res.send(dom);
});

// /prod/tv
router.get('/tv', (req, res, next) => {
  const fileName = path.join(__dirname, '..', 'public', 'product', 'tv.html');
  fs.readFile(fileName, (err, data) => {
    if (err) {
      err.status = 404;
      next(err);
    } else {
      res.send(data.toString());
    }
  })
});

// GET  => req.query          주소줄 ?name=Value
// POST => req.body
// PATH => req.params         주소줄 /파일명/:변수명/:변수명...

// http://localhost:3500/prod/phone/LG/5000 => { name: 'LG', price: '5000' }
router.get('/phone/:name/:price', (req, res, next) => {
  const params = req.params;
  console.log(params)
  res.render('product/phone', { phoneName: params.name, phonePrice: params.price })
});

module.exports = router;
