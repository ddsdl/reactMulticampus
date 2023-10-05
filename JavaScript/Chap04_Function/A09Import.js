console.log('---------------- Module  -----------------');
const str = `X: ${app1.x}<br>
  Name: ${app2.name} / ${app2.getName()}
`
// 기존 방식
const root = document.querySelector('#root');
root.innerHTML = `<div>${str}</div>`;


// ESM => ECMA Module
// ES2015에 정의된 자바스크립트 표준 모듈(module) 방식

/*
import { name, age, check, arr, user as obj, add } from './A09ExportOne.js'
const oneStr = `${name}, ${age}, ${check}, ${arr[0]}, ${obj.name}, ${add(10, 20)}`
*/

/*
import * as app3 from './A09ExportOne.js'
const oneStr = `${app3.name}, ${app3.age}, ${app3.heck}, 
  ${app3.arr[0]}, ${app3.user.name}, ${app3.add(10, 20)}`
*/

import { name, age } from './A09ExportOne.js'
import * as app3 from './A09ExportOne.js'
const oneStr = `${name}, ${age}, ${app3.check}, 
  ${app3.arr[0]}, ${app3.user.name}, ${app3.add(10, 20)}`

const app = document.querySelector('#app');
app.innerHTML = oneStr;


// default
// default는 { } 없이 중복되지 않는 임의의 이름으로 정의한다.
/*
import app4 from './A09ExportTwo.js';
import { x, y } from './A09ExportTwo.js'
*/
import app4, { x, y } from './A09ExportTwo.js';

// console.log(app4);
const app4Str = `${app4.progName} / ${app4.getName()}, 
                      ${app4.getTotal(100, 90)}, ${app4.getAvg(190, 2)}, ${x}, ${y}`;
const jumsu = document.querySelector('#jumsu');
jumsu.innerHTML = app4Str;