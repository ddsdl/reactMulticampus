import BoardForm from './components/BoardForm'
import BoardTable from './components/BoardTable'

function App() {
  const data = [
    { no: 1, title: '게시물 1', content: '게시물 내용 1', name: '홍길동', regdate: '2023-12-25' },
    { no: 2, title: '게시물 2', content: '게시물 내용 2', name: '놀부', regdate: '2023-12-26' },
    { no: 3, title: '게시물 3', content: '게시물 내용 3', name: '흥부', regdate: '2023-12-20' },
  ]
  return (
    <div className="m-3">
      <h1>Chap05 Board</h1>

      <BoardTable></BoardTable>
      <BoardForm></BoardForm>
    </div>
  );
}

export default App;
