import React, { useContext } from 'react';
import TodoListItem from './TodoListItem';

import { TodoContextConsumer } from './../contexts/todoContext'

function Todolist() {
  const { state } = useContext(TodoContextConsumer);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th style={{ width: '10%' }}>ID</th>
            <th>Todo</th>
            <th style={{ width: '10%' }}>Complete</th>
            <th style={{ width: '10%' }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {state?.todoList?.map((todo) => <TodoListItem key={todo.id} todo={todo} />)}
        </tbody>
      </table>
    </div>
  );
}
export default Todolist;
