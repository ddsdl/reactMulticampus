import React from "react";
import Todolist from "./TodoList";
import TodoForm from "./TodoForm";
import { useSelector } from "react-redux";

const TodoTemplate = () => {
  const { count } = useSelector(state => state.countStore);

  return (
    <div>
      <h3>Todo List: {count}</h3>
      <div>
        <TodoForm></TodoForm>
        <br />
        <Todolist></Todolist>
      </div>
    </div>
  );
};
export default TodoTemplate;
