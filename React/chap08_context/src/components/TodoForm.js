import React, { useCallback, useContext, useRef } from 'react'
import { TodoContextConsumer } from './../contexts/todoContext'

function TodoForm() {
  const { state, action } = useContext(TodoContextConsumer);

  const inputFiled = useRef();

  const sendData = useCallback((evt) => {
    evt.preventDefault();
    action.addTodo(state.txt);
    inputFiled.current.focus();
    action.changeText('');
  }, [action, state.txt]);

  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control" ref={inputFiled}
          value={state.txt} onChange={(evt) => action.changeText(evt.target.value)} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary mr-1" onClick={sendData}>Submit</button>
        </div>
      </div>
    </form>
  )
}
export default TodoForm;
