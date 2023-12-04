import React, { memo } from 'react'

function TodoItem(props) {
  const { todo, updateTodo, deleteTodo } = props;

  return (
    <tr>
      <td>{todo.id}</td>
      <td className={todo.done ? 'done' : ''}>{todo.text}</td>
      <td><button className="btn btn-primary" onClick={() => updateTodo(todo.id)}>수정</button></td>
      <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>삭제</button></td>
    </tr>
  )
}

// memo => chap03 A09HigherOrderComponent
// memo => 가상돔에 있는 이전 컴퍼넌트가 변경되지 않으면 새롭게 작성하지 않고 이전 컴퍼넌트를 그대로 사용
//  단 "이전 컴퍼넌트가 변경되지 않으면" 이라는 조건은 받은 props의 값이 변경되지 않음을 의미한다
export default memo(TodoItem)
