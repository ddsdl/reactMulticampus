console.log('----------------- [128] Operator -----------------');
const x = 10;
const y = 3;

// 이항 산술 연산자
let result = x + y;
console.log(x + ' + ' + y + ' = ' + result);

result = x - y;
console.log(x + ' - ' + y + ' = ' + result);

// 곱하기
result = x * y;
console.log(x + ' * ' + y + ' = ' + result);

// 나누기
result = x / y;
console.log(x + ' / ' + y + ' = ' + result);

// 나머지
result = x % y;
console.log(x + ' % ' + y + ' = ' + result);
console.log('');

console.log('----------------- 단항 산술 연산자. ++, -- -----------------');
let count = 0;

count = count + 1;
console.log(count);

count = count + 1;
console.log(count);
console.log('');

count = 0;

count++;    // count = count + 1;
console.log(count);

count++;
console.log(count);
console.log('');

count = 0;
++count;
console.log(count);

++count;
console.log(count);
console.log('');

// 대입의 경우는 다르다
count = 0;

// ++이 뒤 => 선 대입, 후 증가
result = count++;
console.log(`result: ${result}, count: ${count}`);

count = 0;
result = 0;
// ++이 앞 => 선 증가, 후 대입
result = ++count;
console.log(`result: ${result}, count: ${count}`);

let one = 10;
let two = 20;

result = ++one + two++;
console.log(`result: ${result}, one: ${one} two: ${two}`);
console.log('');

one = 10;
two = 20;
result = --one + two--;
console.log(`result: ${result}, one: ${one} two: ${two}`);
console.log('');

console.log('----------------- 할당 연산자. +=, -=, *=, /=, %= -----------------');
one = 10;
two = 20;

one = one + 1;    // one++
two = two + 10;
console.log('');

one = 10;
two = 20;

one += 10;        // one = one + 10;
console.log(one);

one -= 10;        // one = one - 10;
console.log(one);

one /= 3;        // one = one / 10;
console.log(one);

two %= 3;         // two = two % 3;
console.log(two);
