/* eslint-disable new-cap */
const multer = require('multer');           // file upload module
const path = require('path');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', cnt: req.cookies.cnt || 0 });
});

// /cookie
router.get('/cookie', (req, res) => {
  // cookieParser()이 req.cookies를 만들어서 관리
  let cnt = req.cookies.cnt || 0;
  cnt++;

  // 접속한 클라이언트에서 cnt 라는 이름으로 쿠키 생성
  res.cookie('cnt', cnt, {
    maxAge: 1000 * 20,        // 20초 유지. 10초 후에 삭제됨
    domain: 'localhost',
    path: '/',                // / => 전체 사이트, /chat => chat 폴더에서만 해당 쿠키 사용 가능
    httpOnly: true,
    secure: false,            // https에서만 사용 => true
  })

  res.render('index', { title: 'Express', cnt })
});


// 파일업로드 처리
router.get('/upload', (req, res, next) => {
  // res.send('Upload');
  res.render('upload')
});

// multer 기본 설정 
const upload = multer({
  dest: path.join(__dirname, '..', 'files'),      // upload 폴더 위치
  limits: { fileSize: 1204 * 1024 * 3 }           // 최대 업로드 가능한 파일 크기
});

// 업로드 파일의 이름을 정해서 올림
const uploadName = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.join(__dirname, '..', 'files')),
    filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`)
  }),
  limits: { fileSize: 1024 * 1024 * 3 }
})

// multipart/form-data
// 단일 업로드 => upload.single
router.post('/uploadFile', upload.single('attachment'), (req, res, next) => {
  console.log(req.file);
  console.log(req.body)
  res.render('uploadConfirm', { file: req.file, files: req.files });
});

// 다중 업로드 => upload.array
router.post('/uploadFiles', upload.array('attachments'), (req, res, next) => {
  console.log(req.file);
  res.render('uploadConfirm', { file: req.file, files: req.files });
});

// 파일 이름
router.post('/uploadName', uploadName.single('attachment'), (req, res, next) => {
  console.log(req.file);
  res.render('uploadConfirm', { file: req.file, files: req.files });
});

// 다중 업로드 => upload.array
router.post('/uploadNames', uploadName.array('attachments'), (req, res, next) => {
  console.log(req.file);
  res.render('uploadConfirm', { file: req.file, files: req.files });
});

module.exports = router;
