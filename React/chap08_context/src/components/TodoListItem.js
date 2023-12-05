import React, { useContext } from 'react';
import './css/todos.css';

import { TodoContextConsumer } from './../contexts/todoContext'

function TodoListItem(props) {
  const { todo } = props;
  const { action: { updateTodo, deleteTodo } } = useContext(TodoContextConsumer);

  return (
    <tr>
      <td>{todo.id}</td>
      <td>
        <span className={todo.done ? 'done' : ''}>{todo.text}</span>
      </td>
      <td>
        <button className="btn btn-primary" onClick={() => updateTodo(todo.id)}>Complete</button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
      </td>
    </tr>
  );
}
export default React.memo(TodoListItem);
