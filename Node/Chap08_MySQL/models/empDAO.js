// DAO => Data Access Object
// npm i mysql2
// get the client
const mysql = require('mysql2/promise');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DBNAME,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});
if (pool) console.log('database connected...')


const sql = {
  empList: `SELECT e.*, d.deptName
            FROM emp e INNER JOIN dept d ON e.deptId = d.deptId
            ORDER BY e.empId DESC
            LIMIT 1, 10`,
  emp: `SELECT * FROM emp WHERE empId = ?`,
  deleteEmp: `DELETE FROM emp WHERE empId = ?`
}

const empDAO = {
  empList: async (callback) => {
    const conn = await pool.getConnection();  // 10개중 사용하지 않는 연결을 취득
    try {
      // eslint-disable-next-line no-unused-vars
      const [data, fieldset] = await conn.query(sql.empList, []);
      // console.log(data, fieldset);
      callback({ status: 200, message: 'OK', data: data });
    } catch (error) {
      // console.log(err);
      callback({ status: 500, message: '사원 목록 조회에 실패하였습니다', error });
    } finally {
      if (conn) await conn.release();         // 사용한 연결 반환
    }
  },
  emp: async (empId, callback) => {
    const conn = await pool.getConnection();  // 10개중 사용하지 않는 연결을 취득
    try {
      const [data] = await conn.query(sql.emp, [empId]);
      callback({ status: 200, message: 'OK', data: data[0] });
    } catch (error) {
      callback({ status: 500, message: '사원 조회에 실패하였습니다', error });
    } finally {
      if (conn) await conn.release();         // 사용한 연결 반환
    }
  },
  insertEmp: () => {

  },
  updateEmp: () => {

  },
  deleteEmp: async (empId, callback) => {
    const conn = await pool.getConnection();  // 10개중 사용하지 않는 연결을 취득
    try {
      const [data] = await conn.query(sql.deleteEmp, [empId]);
      console.log('DELETE=> ', data)
      callback({ status: 200, message: 'OK', data: data });
    } catch (error) {
      callback({ status: 500, message: '사원 삭제에 실패하였습니다', error });
    } finally {
      if (conn) await conn.release();         // 사용한 연결 반환
    }
  }
}
module.exports = empDAO;
