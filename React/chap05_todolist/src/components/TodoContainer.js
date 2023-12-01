// TodoContainer.js
import React, { useState, useRef, useCallback } from 'react'
import TodoInsert from './TodoInsert'
import TodoTable from './TodoTable'

const makeTodo = () => {
  const todos = [];
  for (let i = 1; i <= 5000; i++) {
    todos.push({ id: i, text: `${i}번째 할 일`, done: false });
  }
  return todos;
}

function TodoContainer() {
  // const [todoList, setTodoList] = useState([
  //   { id: 1, text: '첫번째 할 일', done: false },
  //   { id: 2, text: '두번째 할 일', done: true },
  //   { id: 3, text: '세번째 할 일', done: false },
  // ]);

  // const [txt, setTxt] = useState('');
  // const changeText = (evt) => setTxt(evt.target.value);

  const [todoList, setTodoList] = useState(makeTodo());

  const cnt = useRef(4);

  const addTodo = useCallback((text) => {
    const todo = { id: cnt.current++, text, done: false };
    setTodoList((todoList) => todoList.concat(todo))
  }, []);

  const updateTodo = useCallback((id) => {
    setTodoList((todoList) => {
      const todos = todoList.map((todo) => {
        if (todo.id === id) return { ...todo, done: !todo.done };
        else return todo;
      });
      return todos;
    });
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodoList((todoList) => {
      return todoList.filter((todo) => {
        if (todo.id === id) return false;
        else return true;
      });
    });
  }, []);

  return (
    <>
      <TodoInsert /*txt={txt} changeText={changeText}*/ addTodo={addTodo}></TodoInsert>
      <TodoTable todoList={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo}></TodoTable>
    </>
  )
}

export default TodoContainer
