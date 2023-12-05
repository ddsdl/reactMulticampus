import { createContext } from 'react'

// 데이터, 메서드의 구조만 정의한다. 값은 Provider를 기술할때 정의
const colorBoxContext = createContext({
  color: '',
  contextName: 'ColorBox Ctx',
});
export default colorBoxContext;
