// A02ArrayObject.js
const clazz = [
  { name: '놀부', kor: 100, eng: 90, total: 0, avg: 0 },
  { name: '흥부', kor: 90, eng: 90, total: 0, avg: 0 },
  { name: '방자', kor: 80, eng: 90, total: 0, avg: 0 },
  { name: '향단', kor: 70, eng: 90, total: 0, avg: 0 },
  { name: '길동', kor: 60, eng: 90, total: 0, avg: 0 },
];

for (let i = 0; i < clazz.length; i++) {
  const item = clazz[i];  // item => { name: '놀부', kor: 100, eng: 90, total: 0, avg: 0 },
  item.total = item.kor + item.eng;
  item.avg = item.total / 2;
  console.log(`${item.name}님의 총점은 ${item.total} / ${item.avg}`);
}
console.log('');

const one = {
  className: '3학년 1반',
  students: 5,
  jumsu: [
    { name: '놀부', kor: 100, eng: 90, total: 0, avg: 0 },
    { name: '흥부', kor: 90, eng: 90, total: 0, avg: 0 },
    { name: '방자', kor: 80, eng: 90, total: 0, avg: 0 },
    { name: '향단', kor: 70, eng: 90, total: 0, avg: 0 },
    { name: '길동', kor: 60, eng: 90, total: 0, avg: 0 },
  ],
  info() {
    console.log(`${this.className}의 총 인원은 ${this.students}입니다`)
  },
  view() {
    return `${this.className}의 총 인원은 ${this.students}입니다`
  }
}

one.info();
for (let i = 0; i < one.jumsu.length; i++) {
  const item = one.jumsu[i];
  item.total = item.kor + item.eng;
  item.avg = item.total / 2;
  console.log(`${item.name}님의 총점은 ${item.total} / ${item.avg}`);
}
console.log('');




// -------------- HTML 문서에 추가 -------------------
const app = document.querySelector('#app');
const h1 = document.createElement('h3');
h1.append(one.view());
app.appendChild(h1);

const tbody = document.querySelector('tbody');

for (let i = 0; i < one.jumsu.length; i++) {
  const item = one.jumsu[i];                  // { name: '놀부', kor: 100, eng: 90, total: 0, avg: 0 },

  const tr = document.createElement('tr');

  const keys = Object.keys(one.jumsu[0]);     // ['name', 'kor', 'eng', 'total', 'avg']

  for (let k = 0; k < keys.length; k++) {
    const td = document.createElement('td');        // <td></td>
    const key = keys[k];

    const text = document.createTextNode(item[key]);  // '놀부'
    td.appendChild(text);                           // <td>놀부</td>
    tr.appendChild(td);                             // <tr><td>놀부</td></td>
    tbody.appendChild(tr)
  }

}
