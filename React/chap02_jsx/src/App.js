// JSX => JavaScript XML
// 1. 단일 요소만 리턴되어야 한다. 즉 ROOT 요소에 모두 묶어서 반환해야 한다
// 2. 모든 태그는 종료 태그가 있어야 한다. 또는 <태그명 /> 형태로 사용
//    EX] <br> => <br></br> OR <br />
//        <img src..> => <img src...></img> OR <img src... />
// 3. 태그의 속성은 JavaScript의 객체 속성명을 따른다 
//    EX] class => className, for => htmlFor
// 4. HTML 형태로 사용. 값은 문자열이 아닌 HTML 객체형태로 정의
/*
function Abc() {
  return <h1>Hello World 01</h1>
}
export default Abc;
*/


/*
// 변수에 대입되는 JSX도 요소만 기술
const greet = <h1>Hello World 02</h1>
function Abc() {
  return greet;
}
export default Abc;
*/

/*
// 한 개의 요소만 리턴할 수 있따. 따라서 하나로 묶어야 한다..
function Abc() {
  return <div>
    <h1>Hello World 03</h1>
    <div>
      This is Content
    </div>
  </div>
}
export default Abc;
*/

/*
const elem = <div>
  <h1>Hello World 04</h1>
  <div>
    This is Content
  </div>
</div>

function Abc() {
  return elem;
}
export default Abc;
*/

/*
function Abc() {
  return (
    <div>
      <h1>Hello World 05</h1>
      <div>
        This is Content
      </div>
    </div>
  );
}
export default Abc;
*/

/*
const elem = (
  <div>
    <h1>Hello World 07</h1>
    <div>
      This is Content
    </div>
  </div>
);

function Abc() {
  return elem;
}
export default Abc;
*/


// 이렇게 만들어진 View 조각을 컴포넌트(Component)라 한다
import { useState } from "react";
import A01Class from './components/A01Class'
import A02Func from './components/A02Func'
import A03Fragment from './components/A03Fragment'
import A04Library from './components/A04Library'

function App() {

  // 일반 변수 => 값이 변경되도 리엑트는 아무런 동작을 하지 않는다
  let name = '흥부';
  const age = 20;
  const arr = [10, 20];
  const user = { name: '홍길동', age: 30 };
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  // 상태 변수 => 이 상태 변수 값이 변경되면 리엑트는 변경된 값을 감지하고 화면을 리 렌더링해서
  // 변경된 값으로 화면을 갱신한다
  // const [getter, setter]
  const [count, setCount] = useState(0);

  const changeName = () => name = 'HungBu';
  const increase = () => setCount((count) => count + 1);
  const decrease = () => setCount((count) => count - 1);

  return (
    <div className="m-3">

      <A04Library></A04Library>

      <A03Fragment></A03Fragment>

      <A02Func></A02Func>

      {/* 사용자 정의 컴퍼넌트에 기술한 class는 무시된다 */}
      <A01Class className="mb-3"></A01Class>

      {/* JSX 내부에서의 주석 */}
      <h1>Chap02 JSX</h1>

      <div className="mb-3">
        {/* 보간법, 바인딩 표현식 => 식은 표현할 수 있다 */}
        Name: {name}<br />
        Age: {age}<br />

        {/* undefined, null, boolean 값은 화면에 표시되지 않는다 */}
        Array: {arr[0]} / {arr[1]} / {arr[2]}<br />
        User: {user.name} / {user.age} / {user.addrss}<br />
        onAdd: {onAdd(10, 20)}<br />
        <button onClick={changeName}>Name</button>
      </div>

      <div>
        Count: {count}<br />
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>

      <img src="images/tree.jpg" alt="나무 이미지" />
    </div>
  );
}

export default App;
