// npm i styled-components
// npm i reactstrap
// npm i react-icons

import React from "react";
import { MyBox, MyButton } from './css/A04CustomTag'
/*
import styled from 'styled-components'

// styled-components => 기존의 HTML + CSS를 적용한 리엑트 컴퍼넌트 태그를 생성해 준다
// 이 내부는 SCSS 방식 (CSS 방식)
const MyBox = styled.div`
  background-color: lightgray;
  color: ${props => props.color || 'white'};
  font-size: ${props => props.size || '20pt'};
  font-weight: bold;
  padding: 10px;
`;
const MyButton = styled.button`
  background-color: lightgray;
  color: ${props => props.color || 'white'};
  border: 1px solid gray;
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;

  &:hover {
    background-color: black;
    color: white;
  }
`;
*/

function A04StyledComponent() {
  return (
    <div>
      <h3>A04 Styled Component</h3>

      <MyBox color="orange">
        <h5>MyBox</h5>
        <div>
          This is Content 01<br />

          <MyButton>CLICK</MyButton>
          <MyButton>SEND</MyButton>
        </div>
      </MyBox>
      <MyBox size="18pt">
        <h5>MyBox</h5>
        <div>
          This is Content 02
        </div>
      </MyBox>

      <MyButton>SEND</MyButton>
    </div>
  );
}

export default A04StyledComponent;
