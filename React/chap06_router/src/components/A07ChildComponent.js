import React from "react";
import { Link, Outlet } from "react-router-dom";

function A07ChildComponent() {
  return (
    <div>
      <h5>Children Component</h5>
      <div>This is Children Component</div>
      <br />

      <div>
        <Link to="/A07Child">ONE</Link> | {' '}
        <Link to="/A07Child/two"> TWO</Link> |{' '}
        <Link to="/A07Child/three"> THREE</Link>
      </div>

      <hr />

      {/* 자식 라우터가 표시될 영역. Outlet 태그 내부에 표시된다 */}
      <Outlet></Outlet>
    </div>
  );
};
export default A07ChildComponent;
