import React from 'react'

function B02TodoList() {
  const todoList = [
    { id: 1, text: '첫번째 할 일', done: true },
    { id: 2, text: '두번째 할 일', done: false },
    { id: 3, text: '세번째 할 일', done: true },
    { id: 4, text: '네번째 할 일', done: false },
    { id: 5, text: '다섯번째 할 일', done: true },
  ]

  return (
    <div className="mb-5">
      <h3>B02TodoList</h3>

      <form className="mb-3">
        <div className="input-group mb-3">
          <input type="text" name="txt" className="form-control" />
          <button type="submit" className="btn btn-warning">SEND</button>
        </div>
      </form>

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
            <td>번호</td>
            <td>할일</td>
            <td><button className="btn btn-primary">수정</button></td>
            <td><button className="btn btn-danger">삭제</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default B02TodoList