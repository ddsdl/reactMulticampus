import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Abc from './App';
import reportWebVitals from './reportWebVitals';

// 프로젝트 전체의 기본 설정을 할 파일
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Abc />
  </React.StrictMode>
);

reportWebVitals();
