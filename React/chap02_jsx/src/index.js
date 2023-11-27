import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// 프로젝트 전체의 기본 설정을 할 파일
// import './index.css';     // 프로젝트 전체에서 사용할 CSS 파일 로드
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode => 잘못된 사용법 등의 경고를 출력. build하면 삭제되고 build된다
  <React.StrictMode>
    <App></App>
    {/* {App()} */}
  </React.StrictMode>
);
// 리 렌더링 시간등을 표시해 준다
// reportWebVitals(console.log);


