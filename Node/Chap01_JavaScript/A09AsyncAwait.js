// A09AsyncAwait.js
const one = (ms) => {
  const result = new Promise((resolve, reject) => {
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

// 함수 기반으로 정의해서 사용한다.
const callOne = async () => {
  try {
    // const resp01 = one(1500);        // pending => 성공, 실패가 결정되지 않은 상태
    const resp01 = await one(1500); // 성공 또는 실패의 값이 올때까지 대기 => await
    console.log(resp01);

    const resp02 = await one(3000); // 성공 또는 실패의 값이 올때까지 대기 => await
    console.log(resp02);

    const resp03 = resp02 + 3000;
    console.log(resp03);
  } catch (err) {
    console.error(err);
  }
};
callOne();
