// npm i bootstrap jquery

// node_module는 생략한 패스를 기술한다
import 'bootstrap/dist/css/bootstrap.min.css'

// 내가 만든 외부 자바스크립트 모듈
// 확장자는 생략 가능
import { name, age, check, arr, user, add } from './A11ExportOne';
import two, { x, y } from './A11ExportTwo';

// 외부 라이브러리 import
import $ from 'jquery';


const dom = `<div>
  <h3>Hello World</h3>

  Name: ${name}<br>
  age: ${age}<br>
  address: ${check}<br>
  arr: ${arr[0]} / ${arr[1]} / ${arr[10]}<br>
  user: ${user.name} / ${user.age} / ${user.address}<br>
  onAdd: ${add(10, 20)}<br>

  <hr>

  getName: ${two.name()}<br>
  getTotal: ${two.total(100, 90)}<br>
  getAvg: ${two.getAvg(190, 2)}<br>
  X, Y: ${x} / ${y}
</div>
`

document.querySelector('#root').innerHTML = dom;

// jQuery 방식
$('#app').html(dom);