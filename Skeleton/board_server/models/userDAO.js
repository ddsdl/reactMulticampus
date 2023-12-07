const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_USER_URL,
  port: process.env.DB_USER_PORT,
  user: process.env.DB_USER_USER,
  password: process.env.DB_USER_PASSWORD,
  database: process.env.DB_USER_DATABASE,
  connectionLimit: 10,
});
if (pool) console.log(`database connected...`);

const sql = {
  checkId: 'SELECT * FROM user WHERE email = ?',
  signup: 'INSERT INTO user(name, email, password) VALUES(?, ?, ?)',
  login: 'SELECT * FROM user WHERE email = ? AND password = ?',
};

const userDAO = {
  checkEmail: async (item) => {
    let conn = null;
    try {
      conn = await pool.getConnection();
      return { status: 200, message: 'OK' };
    } catch (error) {
      return { status: 500, message: '유저 입력 실패', };
    } finally {
      if (conn !== null) conn.release(); // DB 접속 해제
    }
  },
  signup: async (item) => {
    // console.log('userDAO=> ', data);
    const { name, email, password } = item;

    let conn = null;
    try {
      conn = await pool.getConnection(); // DB 접속
      const [resp] = await conn.query(sql.signup, [name, email, password]);
      // console.log(data);
      // console.log('-- 입력 완료 --');

      // Promise로 리턴된다...
      return { status: 200, message: 'OK', data: resp };
    } catch (error) {
      // console.log(error);
      // Promise로 리턴된다...
      return { status: 500, message: '유저 입력 실패', error: error };
    } finally {
      if (conn !== null) conn.release(); // DB 접속 해제
    }
  },
  login: async (item) => {
    // console.log('userDAO login=> ', item);
    const { email, password } = item;
    let conn = null;
    try {
      conn = await pool.getConnection();
      const [resp] = await conn.query(sql.login, [email, password]);
      // console.log(data[0]);
      return { status: 200, message: 'OK', data: { name: resp[0].name, email: resp[0].email } };
    } catch (error) {
      return { status: 500, message: '로그인 실패', error: error };
    } finally {
      if (conn !== null) conn.release();
    }
  }
};

module.exports = userDAO;
