const TODOLIST_ADDTODO = 'TODOLIST/ADDTODO';
const TODOLIST_UPDATETODO = 'TODOLIST/UPDATETODO';
const TODOLIST_DELETETODO = 'TODOLIST/DELETETODO';
const TODOLIST_CHANGETEXT = 'TODOLIST/CHANGETEXT';

// action
// state에 적용하기 전까지 작업을 여기서 처리 => 비동기 처리가 안된다
export const updateTodo = (id) => {
  return { type: TODOLIST_UPDATETODO, payload: id };
}
export const deleteTodo = (id) => {
  return { type: TODOLIST_DELETETODO, payload: id };
}
export const changeText = (text) => {
  // if (text.trim().length !== 0) { }
  return { type: TODOLIST_CHANGETEXT, payload: text };
}
export const addTodo = (txt) => {
  const todo = { id: cnt++, text: txt, done: false };
  return { type: TODOLIST_ADDTODO, payload: todo };
}


const makeTodo = () => {
  const todos = [];
  for (var i = 1; i <= 5; i++) {
    todos.push({ id: i, text: `${i}번째 할 일 `, done: false })
  }
  return todos;
};

// store는 메모리에 등록되어 있는 상태. 따라서 변수는 메모리상에서 계속 유지되고 있는 상태
let cnt = 6;

const init = {
  todoList: makeTodo(),
  text: ''
}
const todoStore = (state = init, action) => {
  switch (action.type) {
    case TODOLIST_UPDATETODO:
      const updateTodos = state.todoList.map((todo) => {
        if (todo.id === action.payload) return { ...todo, done: !todo.done }
        else return todo;
      })
      return { ...state, todoList: updateTodos }
    case TODOLIST_DELETETODO:
      const deleteTodos = state.todoList.filter((todo) => {
        if (todo.id === action.payload) return false;
        else return true;
      })
      return { ...state, todoList: deleteTodos };
    case TODOLIST_ADDTODO:
      return { ...state, todoList: state.todoList.concat(action.payload) }
    case TODOLIST_CHANGETEXT:
      return { ...state, text: action.payload }
    default:
      return state
  }
}
export default todoStore;