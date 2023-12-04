import React from 'react'
import 'components/todolist/css/todos.css'
import TodoItem from 'components/todolist/TodoItem'

function TodoTable(props) {
  const { todoList, updateTodo, deleteTodo } = props;

  return (
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
        {todoList.map(todo => (
          <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        ))}
      </tbody>
    </table>
  )
}

export default TodoTable