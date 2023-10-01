console.log('----------------- [335] Object -----------------');
const nolbu = 'NolBu';
const kor = 100;
const eng = 80;
const total = kor + eng;
const avg = total / 2;
console.log(nolbu + '님의 총점은 ' + total + '이고 평균은 ' + avg + '입니다');
console.log(`${nolbu}님의 총점은 ${total}이고 평균은 ${avg}입니다.`);
console.log('');

// 배열 객체을 이용
const hungbu = ['흥부', 90, 80, 0, 0];
hungbu[3] = hungbu[1] + hungbu[2];
hungbu[4] = hungbu[3] / 2;
console.log(`${hungbu[0]}님의 총점은 ${hungbu[3]}이고 평균은 ${hungbu[4]}입니다.`);

// 배열의 방 번호 대신 이름(key)로 바꾸어 사용
// 오브젝트 객체
// 배열 => 배열명[방번호], 객체명.key
const bangJa = {
  name: '방자',
  kor: 90,
  eng: 90,
  total: 0,
  avg: 0
}
bangJa.total = bangJa.kor + bangJa.eng;
bangJa.avg = bangJa.total / 2;
console.log(`${bangJa.name} / ${bangJa.total} / ${bangJa.avg}`);
console.log('');

// new를 이용해 생성
const hangDan = new Object();    // const hangDan = {};
hangDan.name = '향단';            // hangDan = { name: '향단' }
hangDan.kor = 100;               // hangDan = { name: '향단', kor: 100 }
hangDan.eng = 70;                // hangDan = { name: '향단', kor: 100, eng: 70 }
hangDan.total = hangDan.kor + hangDan.eng;
hangDan.avg = hangDan.total / 2;
console.log(`${hangDan.name} / ${hangDan.total} / ${hangDan.avg}`);
console.log('');

// ***************** 중요함 ********************
// key에 변수가 포함 또는 연산이 되면 반드시 []로 묶어야 한다
const i = 100;
const user = {
  _name: '홍길동',
  address: 'Seoul',
  'tel-num': '010-1234-5678',
  [`hello${i}`]: 'Hello World',
  ["hello" + (i + 1)]: 'Hello World 1',
  [0]: 100,
  1: 101,
}

// 참조
console.log(user._name, user.address);
console.log(user['tel-num']);
console.log(user['hello100']);
console.log(user['hello101']);
console.log(user[0]);
console.log(user[1]);

// 오브젝트의 key 값을 변수가 가지고 있는 경우는 반드시 "오브젝트명[변수명]" 형태가 된다
const x = 'hello100';
console.log(user[x]);     // user['hello100']
console.log('');

const obj = {
  name1: '오브젝트 객체',
  kor1: 90,
  eng1: 90,
  // 메서드
  info: function () {
    console.log(`${this.name1} / ${this.kor1} / ${this.eng1}`);
  },
  view() {
    console.log(`${this.name1} / ${this.kor1} / ${this.eng1}`);
  }
}
console.log(obj.name1, obj.kor1, obj.eng1);
obj.info();
obj.view();



