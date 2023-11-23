import Counter from './components/Counter';
import TodoTemplate from './components/TodoTemplate';

// npm i redux react-redux

function App() {
  return (
    <div className="m-3">
      <TodoTemplate />
      <br />

      <Counter />
    </div>
  );
}

export default App;
