import { useState } from 'react';
import A01ClassState from './components/A01ClassState'
import A02ClassProps from './components/A02ClassProps'
import A02Children from './components/A02Children'
import A02LifeCycle from './components/A02LifeCycle'
import A03FuncState from './components/A03FuncState'
import A04FuncProps from './components/A04FuncProps'
import A05FuncEvent from './components/A05FuncEvent'
import A06CreateDOM from './components/A06CreateDOM'
import A07Hook from './components/A07Hook'
import A08Hook from './components/A08Hook'
import B01Currency from './components/B01Currency'
import B02Currency from './components/B02Currency'

// import B03TodoList from './components/B03TodoList'

function Header() {
  return <div className="display-5 mb-3">Chap03 Component</div>
}

function App() {
  // 일반 변수
  let num = 100;
  const arr = [10, 20];
  const user = { name: '놀부', age: 40 };
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  // 함수형 컴포넌트에서 상태 변수를 정의하는 법
  const [address, setAddress] = useState('Seoul');

  const changeNum = () => num = 200;
  const changeAddress = () => setAddress('부산');

  return (
    <div className="m-3">
      {/* <div className="display-5 mb-3">Chap03 Component</div> */}
      {/* <Header></Header> */}
      {Header()}



      <B02Currency></B02Currency>
      <B01Currency></B01Currency>

      <A08Hook></A08Hook>

      <A07Hook></A07Hook>

      <A06CreateDOM></A06CreateDOM>

      <A05FuncEvent></A05FuncEvent>

      <A04FuncProps name="홍길동" age={30} num={num} add={address} arr={arr} user={user}
        onAdd={onAdd} changeNum={changeNum} changeAddress={changeAddress}>
        <div>이 요소를 자식 요소에서 출력하도록 전달 - Good Morning</div>
      </A04FuncProps>

      <A03FuncState></A03FuncState>

      <A02LifeCycle title="A02 LifeCycle"></A02LifeCycle>

      <A02Children></A02Children>

      {/* App가 A02ClassProps 컴퍼넌트의 부모 컴퍼넌트(컨테이너)가 된다. 값 전달은 속성으로 전달
        부모 컴포넌트가 리 렌더링되면 자식 컴포넌트로 리 렌더링된다. => 값 다시 전달 => 바뀐 값으로 화면 갱신
      */}
      <A02ClassProps name="홍길동" age={30} num={num} add={address} arr={arr} user={user}
        onAdd={onAdd} changeNum={changeNum} changeAddress={changeAddress}>
        <div>이 요소를 자식 요소에서 출력하도록 전달 - Good Morning</div>
      </A02ClassProps>

      <A02ClassProps name="홍길동" age={30} num={num} add={address} arr={arr} user={user}
        onAdd={onAdd} changeNum={changeNum} changeAddress={changeAddress}>
        <h3>이 요소를 자식 요소에서 출력하도록 전달 - Hello World</h3>
      </A02ClassProps>

      <A01ClassState></A01ClassState>
    </div>
  );
}

export default App;
