import React from 'react'

function TodoInsert() {
  return (
    <form className="mb-3">
      <div className="input-group mb-3">
        <input type="text" name="txt" className="form-control" />
        <button type="submit" className="btn btn-warning">SEND</button>
      </div>
    </form>
  )
}

export default TodoInsert