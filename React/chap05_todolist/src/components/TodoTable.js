import React from 'react'

function TodoTable() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>번호</th>
          <th>할일</th>
          <th>수정</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td><button className="btn btn-primary">수정</button></td>
          <td><button className="btn btn-danger">삭제</button></td>
        </tr>
      </tbody>
    </table>
  )
}

export default TodoTable