// TodoContainer.js
import React, { useState } from 'react'
import TodoInsert from './TodoInsert'
import TodoTable from './TodoTable'

function TodoContainer() {
  const [todoList, setTodoList] = useState([
    { id: 1, text: '첫번째 할 일', done: false },
    { id: 2, text: '두번째 할 일', done: true },
    { id: 3, text: '세번째 할 일', done: false },
  ]);

  return (
    <>
      <TodoInsert></TodoInsert>
      <TodoTable></TodoTable>
    </>
  )
}

export default TodoContainer
