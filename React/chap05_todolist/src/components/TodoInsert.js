import React, { useState, useCallback } from 'react'

function TodoInsert(props) {
  const { /*txt, changeText,*/ addTodo } = props;

  const [txt, setTxt] = useState('');
  const changeText = useCallback((evt) => setTxt(evt.target.value), []);

  const sendData = useCallback((evt) => {
    evt.preventDefault();
    if (txt.trim().length !== 0) {
      addTodo(txt);
    }
  }, [addTodo, txt])


  return (
    <form className="mb-3">
      <div className="input-group mb-3">
        <input type="text" name="txt" className="form-control"
          value={txt} onChange={changeText} />
        <button type="submit" className="btn btn-warning" onClick={sendData}>SEND</button>
      </div>
    </form>
  )
}

export default TodoInsert