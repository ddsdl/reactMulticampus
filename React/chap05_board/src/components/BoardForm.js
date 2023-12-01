import React from 'react'

function BoardForm() {
  return (
    <form className="mb-3">
      <div className="input-group mb-1">
        <span className="input-group-text">이 &nbsp; 름</span>
        <input type="text" id="username" name="username" className="form-control" />
      </div>
      <div className="input-group mb-1">
        <span className="input-group-text">타이틀</span>
        <input type="text" id="title" name="title" className="form-control" />
      </div>
      <div className="input-group mb-1">
        <span className="input-group-text">내 &nbsp; 용</span>
        <textarea id="content" name="content" rows={5} className="form-control"></textarea>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">작성일</span>
        <input type="date" id="regdate" name="regdate" className="form-control" />
      </div>
      <div className="form-group mb-3 text-end">
        <button type="submit" className="btn btn-danger">ADD</button>
      </div>
    </form>
  )
}

export default BoardForm
