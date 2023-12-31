import React, { useCallback, useRef, useState } from 'react'

function B03TodoList() {
  const [todoList, setTodoList] = useState([
    { id: 1, text: '첫번째 할 일', done: true },
    { id: 2, text: '두번째 할 일', done: false },
    { id: 3, text: '세번째 할 일', done: true },
    { id: 4, text: '네번째 할 일', done: false },
    { id: 5, text: '다섯번째 할 일', done: true },
  ]);
  const [txt, setTxt] = useState('');

  const deleteTodo = useCallback((id) => {
    setTodoList((todoList) => {
      const todos = todoList.filter((todo) => {
        if (todo.id === id) return false;
        else return true;
      });
      return todos;
    });
  }, []);

  const updateTodo = useCallback((id) => {
    setTodoList((todoList) => {
      const todos = todoList.map((todo) => {
        if (todo.id === id) return { ...todo, done: !todo.done };
        else return todo;
      });
      return todos;
    })
  }, []);

  const cnt = useRef(6);
  const txtRef = useRef(null);

  const addTodo = (evt, txt) => {
    evt.preventDefault();
    const todo = { id: cnt.current++, text: txt, done: false };
    setTodoList(todoList.concat(todo));
    setTxt('');
    // document.querySelector('[name="txt"]').focus();
    txtRef.current.focus();
  }
  const changeTxt = useCallback((evt) => {
    setTxt(evt.target.value);
  }, []);

  return (
    <div className="mb-5">
      <h3>B02TodoList</h3>

      <form className="mb-3">
        <div className="input-group mb-3">
          <input type="text" name="txt" className="form-control" ref={txtRef}
            value={txt} onChange={changeTxt} />
          <button type="submit" className="btn btn-warning" onClick={(evt) => addTodo(evt, txt)}>SEND</button>
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
          {todoList.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.text}</td>
              <td><button className="btn btn-primary" onClick={(evt) => updateTodo(todo.id)}>수정</button></td>
              <td><button className="btn btn-danger" onClick={(evt) => deleteTodo(todo.id)}>삭제</button></td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default B03TodoList