// A11Import.js

// 개별 export 된 요소를 import
import { name, age, check, arr, user, add } from './A11ExportOne.js';   // 확장자 필수
console.log(`Name: ${name}, Age: ${age}, Check: ${check}`);
console.log(`Array: ${arr[0]} / ${arr[10]}, User: ${user.name}, Check: ${user.address}`);
console.log(`onAdd: ${add(10, 20)}`);

// default가 붙은 export는 불러오는 곳에서 임의의 이름으로 정의해 사용 가능
// import two from './A11ExportTwo.js'
// import { x, y } from './A11ExportTwo.js';

// import 할 요소의 이름이 사용되고 있다면 as로 변경해서 사용할 수 있다
import two, { x, y as twoY } from './A11ExportTwo.js'
// console.log(two);
console.log(`Name: ${two.name()}, onTotal: ${two.total(100, 80)}, onAvg: ${two.getAvg(180, 2)}`);
console.log(`X: ${x}, Y: ${twoY}`);

const dom = `
  <div>
    Name: ${name}, Age: ${age}, Check: ${check} <br>
    Array: ${arr[0]} / ${arr[10]}, User: ${user.name}, Check: ${user.address} <br>
    onAdd: ${add(10, 20)} <br>

    <hr>

    Name: ${two.name()}, onTotal: ${two.total(100, 80)}, onAvg: ${two.getAvg(180, 2)}<br>
    X: ${x}, Y: ${twoY}
  </div>
`;
document.querySelector('#root').innerHTML = dom;
