const one = (ms) => {
  // 시간이 걸리는 작업이 있는 경우만 사용.
  const result = new Promise((resolve, reject) => {
    // console.log(resolve);    // then에서 전달한 함수
    // console.log(reject);     // catch에서 전달한 함수
    // resolve();
    // reject();

    const errMessage = '값이 너무 짧게 지정하셨습니다.';
    if (ms < 1000) reject(errMessage);
    else {
      setTimeout(() => {
        const value = 5000;
        resolve(value);
      }, ms);
    }
  });
  return result;
};

one(2000)
  .then((x) => {
    console.log(x);

    // 1차 결과를 기반으로 새롭게 시간 걸리는 작업 요청 - Promose로 만들어서 요청한다
    // 따라서 결과는 다음 then이 받아 처리한다
    return one(3000);
  })
  .then((resp) => {
    console.log(resp);
    // 시간 걸리는 작업이 아니어도 return을 하면 프라미스로 만들어서 요청하므로 이것도 다음 then이 받는다
    return resp + 3000;
  })
  .then((resp) => {
    console.log(resp);
  })
  .catch((x) => {
    console.log(x);
  });

// 무조건 성공. 즉 then 함수 실행
const promise01 = Promise.resolve('Success 01');
const promise02 = Promise.resolve('Success 02');

// promise01.then((resp) => console.log(resp));
// 배열로 묶은 Promise 중 1개만 에러가 발생해도 전체 에러다
Promise.all([promise01, promise02])
  .then((resp) => {
    console.log(resp[0]);
    console.log(resp[1]);
  })
  .catch((err) => {
    console.error(err);
  });

// 배열로 묶은 Promise 중 1개만 가장 먼저 도착한 결과만 받아 처리한다
// 배열로 묶은 Promise 중 1개만 에러가 발생해도 전체 에러다
Promise.race([promise01, promise02])
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    console.error(err);
  });

// 실패와 성공을 나누어 처리 할 수 있다. 따라서 all은 사용하지 않고 이 allSettled를 주로 사용
Promise.allSettled([promise01, promise02])
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    console.error(err);
  });
