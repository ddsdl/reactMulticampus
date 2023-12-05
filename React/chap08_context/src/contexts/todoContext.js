import React, { createContext, useCallback, useRef, useState } from 'react'

const TodoContext = createContext({
  state: { todoList: [], txt: '' },
  action: {
    updateTodo: () => { },
    deleteTodo: () => { },
    addTodo: () => { },
    changeText: () => { },
  }
})

function TodoContextProvider(props) {
  const [todoList, setTodoList] = useState([
    { id: 1, text: '첫번째 할 일', done: false },
    { id: 2, text: '두번째 할 일', done: true },
    { id: 3, text: '세번째 할 일', done: false },
  ]);
  const [txt, setText] = useState('');

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
  const changeText = useCallback((text) => {
    setText(text)
  }, []);

  const value = {
    state: { todoList, txt },
    action: { updateTodo, deleteTodo, addTodo, changeText }
  }

  return (
    <TodoContext.Provider value={value}>
      {props.children}
    </TodoContext.Provider>
  )
}
const TodoContextConsumer = TodoContext;

export { TodoContextProvider, TodoContextConsumer }