import React from 'react'

function BoardTable() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>번호</th>
          <th>타이틀</th>
          <th>작성자</th>
          <th>작성일자</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>게시물 1</td>
          <td>홍길동</td>
          <td>2013-12-25</td>
          <td><button className="btn btn-danger btn-sm">DELETE</button></td>
        </tr>
      </tbody>
    </table>
  )
}
export default BoardTable
