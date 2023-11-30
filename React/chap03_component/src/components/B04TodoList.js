import React, { useCallback, useRef, useState } from 'react'
import { produce } from 'immer'

function B04TodoList() {
  const [data, setData] = useState({
    todoList: [
      { id: 1, text: '첫번째 할 일', done: true },
      { id: 2, text: '두번째 할 일', done: false },
      { id: 3, text: '세번째 할 일', done: true },
      { id: 4, text: '네번째 할 일', done: false },
      { id: 5, text: '다섯번째 할 일', done: true },
    ],
    txt: '',
  })

  const deleteTodo = useCallback((id) => {
    /*
    setData((data) => {
      const todos = data.todoList.filter((todo) => (todo.id === id) ? false : true);
      return { ...data, todoList: todos };
    });
    */
    setData((data) => {
      const index = data.todoList.findIndex((todo) => todo.id === id);
      return produce(data, draft => {
        delete draft.todoList.splice(index, 1)
      });
    });
  }, []);

  const updateTodo = useCallback((id) => {
    /*
    setData((data) => {
      const todos = data.todoList.map((todo) => {
        return (todo.id === id) ? { ...todo, done: !todo.done } : todo;
      });
      return { ...data, todoList: todos };
    });
    */
    setData((data) => {
      const index = data.todoList.findIndex((todo) => todo.id === id);
      return produce(data, draft => {
        draft.todoList[index].done = !draft.todoList[index].done;
      });
    });
  }, []);

  const cnt = useRef(6);
  const txtRef = useRef(null);

  const addTodo = useCallback((evt, txt) => {
    evt.preventDefault();
    const todo = { id: cnt.current++, text: txt, done: false };

    setData((data) => {
      return produce(data, draft => {
        // 한 줄로 기술하면 이 구문의 값을 리턴 값으로 취급해서 에러 발생
        draft.todoList.push(todo);
      })
    });
    setData((data) => ({ ...data, txt: '' }));
    /*
    setData((data) => ({ ...data, todoList: data.todoList.concat(todo) }));
    */

    txtRef.current.focus();
  }, []);

  const changeTxt = useCallback((evt) => {
    /*
    setData((data) => ({ ...data, txt: evt.target.value }));
    */
    setData((data) => {
      return produce(data, draft => {
        draft.txt = evt.target.value;
      })
    })
  }, []);

  return (
    <div className="mb-5">
      <h3>B04TodoList</h3>

      <form className="mb-3">
        <div className="input-group mb-3">
          <input type="text" name="txt" className="form-control" ref={txtRef}
            value={data.txt} onChange={changeTxt} />
          <button type="submit" className="btn btn-warning" onClick={(evt) => addTodo(evt, data.txt)}>SEND</button>
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
          {data.todoList.map((todo) => (
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

export default B04TodoList;
