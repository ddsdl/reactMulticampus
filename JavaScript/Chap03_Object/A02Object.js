console.log('---------------- [335] Object -----------------');
const obj = {
  // 속성(프로퍼티): 값(value)
  name: 'NolBu',
  address: 'Seoul',
  info: function () {
    console.log(this.name + ' / ' + this.address);
  },
};
console.log(obj);

// 추가
obj.tel = '010-1234-5678';
obj.view = function () {
  console.log(this.name + ' / ' + this.address);
}
obj.view();
console.log(obj);

// 변경
obj.address = '부산';
console.log(obj);

// 삭제
delete obj.tel;
console.log(obj);
console.log('');

// 순환
for (const key in obj) {
  // console.log(key);
  // console.log(obj[key]);
  // console.log(typeof obj[key]);
  if (typeof obj[key] === 'function') {
    obj[key]();
  } else {
    console.log(obj[key]);
  }
}

const arr = [10, 11, 100];
for (const key in arr) {
  // console.log(key);
  console.log(arr[key]);
};
