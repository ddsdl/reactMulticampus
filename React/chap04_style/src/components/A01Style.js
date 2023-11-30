import React from 'react';
import './css/A01Style.css'
import './css/A01Style.scss'

// npm i sass   => 1.XX
// 반드시 설치 후 리스타트
function A01Style() {
  const myStyle = {
    background: 'lightgray',
    fontSize: '24pt',
    fontWeight: 'bold',
    padding: '10px'
  }
  const styleName = 'title color';

  return (
    <div className="mb-5">
      <h3 style={{ background: 'lightgray', fontSize: '24pt', padding: '10px' }}>A01 Style</h3>
      <h3 style={myStyle}>A01 Style</h3>

      <h3 className="title color">A01 Style</h3>
      <h3 className={"title color"}>A01 Style</h3>
      <h3 className={styleName}>A01 Style</h3>
      <h3 className="scssTitle">A01 Style</h3>
    </div>
  );
}

export default A01Style;
