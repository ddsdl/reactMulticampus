import React, { useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { changeText, addTodo } from '@stores/todoStore'

function TodoForm() {
  const inputFiled = useRef();

  const { text } = useSelector(state => state.todoStore);
  const dispatch = useDispatch();

  const dispatchText = (evt) => {
    dispatch(changeText(evt.target.value));
  }

  const sendData = useCallback((evt) => {
    evt.preventDefault();
    dispatch(addTodo(text));
    dispatch(changeText(''));
    // inputFiled.current.force()
  }, [dispatch, text])

  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control" ref={inputFiled}
          value={text} onChange={(evt) => dispatchText(evt)} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>Submit</button>
        </div>
      </div>
    </form>
  )
}
export default TodoForm;
