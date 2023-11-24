import logo from './logo.svg';
import './App.css';

// JSX => JavaScript XML
// 2. 모든 태그는 종료 태그가 있어야 한다. 또는 <태그명 /> 형태로 사용
//    EX] <br> => <br></br> OR <br />
//        <img src..> => <img src...></img> OR <img src... />
// 3. 태그의 속성은 JavaScript의 객체 속성명을 따른다 
//    EX] class => className, for => htmlFor
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
