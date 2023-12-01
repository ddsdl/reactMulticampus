// index에 세팅이 있어야 한다(여기서 해도 되기는 함)
// npm i react-router-dom
// npm i react-loader-spinner
// npm i p-min-delay
import { lazy, Suspense } from 'react'
import { Link, NavLink, Route, Routes } from "react-router-dom";
import pMinDelay from 'p-min-delay'
import { Radio, Bars, Triangle } from 'react-loader-spinner'

import A02FuncState from './components/A02FuncState'
import A03Currency from './components/A03Currency'
import A01FuncProps from './components/A01FuncProps'
import A05Param from './components/A05Param'
import A06Args from './components/A06Arguments'
import NotFound from './components/NotFoundComponent'

// import A04History from './components/A04History'
// import A07Child from './components/A07ChildComponent'
// import A08Redirect from './components/A08Redirect'

// 1. lazy로 지연 import
// 2. 아래 Route에서 element에 Suspense 처리를 한다(로드되는 동안 표시할 대체 컴퍼넌트 지정)
const A04History = lazy(async () => await pMinDelay(import('./components/A04History'), 2000));
const A07Child = lazy(async () => await pMinDelay(import('./components/A07ChildComponent'), 2000));
const A08Redirect = lazy(async () => await pMinDelay(import('./components/A08Redirect'), 2000));

function App() {
  const user = { name: 'HungBu', age: 20 };
  const ary = ['a', 'b', 'c'];
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  const activeLink = (props) => {
    // console.log(props)
    return props.isActive ? { color: 'orange', fontWeight: 'bold' } : undefined;
  };

  return (
    <div className="m-3">
      <h1>Chap06 Router</h1>

      <NavLink to="/" style={(props) => activeLink(props)}>Index | </NavLink>
      <NavLink to="/A02State" style={(props) => activeLink(props)} >A02State | </NavLink>
      <Link to="/A03Currency">A03Currency | </Link>
      <Link to="/A01Props">A01Props | </Link>
      <Link to="/A05Param/1/nolbu">A05Param 1 | </Link>
      <Link to="/A05Param/2/흥부">A05Param 2 | </Link>
      <Link to="/A06Args?id=3&name=향단&address=전주#ONE">A06Args 3 | </Link>
      <Link to="/A06Args?id=4&name=방자&address=남원#TWO">A06Args 4 | </Link>
      <Link to="/A04History">A04History | </Link>
      <Link to="/A07Child">A07Child | </Link>
      <Link to="/A07Child/two">TWO | </Link>
      <Link to="/A08Redirect">A08Redirect | </Link>
      <Link to="/ABC">ABC | </Link>

      <hr />

      <Routes>
        <Route path="/" element={<h3>Index Page</h3>} />
        <Route path="/A02State" element={<A02FuncState />} />
        <Route path="/A03Currency" element={<A03Currency />} />

        {/* 속성으로 데이터 전달 */}
        <Route path="/A01Props"
          element={<A01FuncProps name="놀부" age={20} arr={ary} user={user} onAdd={onAdd} isChecked />} />
        {/* 패스를 이용해서 데이터 전달 */}
        <Route path="/A05Param/:id/:name" element={<A05Param />} />
        {/* 주소줄의 파라메터 ?key=value&key=value..#hash 값을 이용해 값 전달 */}
        <Route path="/A06Args" element={<A06Args />} />



        {/* 버튼등을 이용한 페이지 이동 */}
        <Route path="/A04History" element={<Suspense fallback={<Triangle />}>
          <A04History />
        </Suspense>} />

        {/* 하위 라우터 구성
          A07Child 내부에 하위 링크와 자식 라우터가 표시될 영역을 지정할 필요가 있다
        */}
        <Route path="/A07Child" element={<Suspense fallback={<Radio />}><A07Child /></Suspense>}>
          <Route path="/A07Child" element={<h4>ONE Component</h4>} />
          <Route path="two" element={<h4>TWO Component</h4>} />
          <Route path="/A07Child/three" element={<h4>THREE Component</h4>} />
        </Route>

        {/* 조건에 따라 바로 다른 페이지로 이동 */}
        <Route path="/A08Redirect" element={<Suspense fallback={<Bars />}>
          <A08Redirect isChecked={true} />
        </Suspense>} />

        {/* 위의 모든 조건이 매칭되지 않는 경우 표시할 컴퍼넌트 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
