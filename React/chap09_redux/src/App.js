import Counter from '@comps/Counter';
import TodoTemplate from '@comps/todolist/TodoTemplate';
import BoardContainer from '@comps/board/BoardContainer';

// npm i redux react-redux
function App() {
  return (
    <div className="m-3">
      <BoardContainer></BoardContainer><br />
      <TodoTemplate /><br />
      <Counter />
    </div>
  );
}

export default App;
