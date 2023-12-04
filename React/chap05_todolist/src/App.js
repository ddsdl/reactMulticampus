import BoardContainer from 'components/board/BoardContainer';
import TodoContainer from 'components/todolist/TodoContainer'

function App() {
  return (
    <div className="m-3">
      <h1>Chap05 TodoList</h1>

      <BoardContainer></BoardContainer>

      <hr />

      <TodoContainer></TodoContainer>

    </div>
  );
}

export default App;
