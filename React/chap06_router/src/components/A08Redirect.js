import React from 'react'
import { Navigate } from 'react-router-dom';

function A08Redirect(props) {
  const { isChecked } = props;

  if (!isChecked) {
    // 조건에 따라 페이지를 바로 이동. replace가 True면 history에 남지 않는다.
    return <Navigate to="/" replace={true} />
  }

  return (
    <div>
      <h1>A08Redirect</h1>
    </div>
  )
}

export default A08Redirect