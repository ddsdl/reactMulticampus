// A04CustomTag.js
import styled from 'styled-components'

// styled-components => 기존의 HTML + CSS를 적용한 리엑트 컴퍼넌트 태그를 생성해 준다
// 이 내부는 SCSS 방식 (CSS 방식)
export const MyBox = styled.div`
  background-color: lightgray;
  color: ${props => props.color || 'white'};
  font-size: ${props => props.size || '20pt'};
  font-weight: bold;
  padding: 10px;
`;

export const MyButton = styled.button`
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
