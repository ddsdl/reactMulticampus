console.log('---------------- Promise - ES2015 -----------------');

const getValue = function (ms) {
  // resolve => then()이 전달하는 함수
  // reject => catch()가 전달한 함수
  const promise = new Promise(function (resolve, reject) {
    // 시간 걸리는 작업을 여기서 기술한다...
    if (ms < 1000) reject('시간이 너무 짧습니다...');
    else {
      setTimeout(function () {
        const result = 3000;
        resolve(result);
      }, ms)
    }
  });

  return promise;
}

/*
// 반복 실행 안됨. 1번 호출되면 재 실행되지 않는다...
getValue(2000)
  .then(function (resp) {
    console.log(`Success: ${resp}`);

    // 시간 걸리는 작업이든 뒷 처리 작업이 되었던 return으로 Promise를 재 호출
    // 다음 then이 받아 처리한다
    return getValue(resp);
  })
  .then(function (resp) {
    console.log(`Second ${resp}`);

    return resp + 5000;
  })
  .then(function (resp) {
    console.log(`Last: ${resp}`)
  })
  .catch(function (error) {
    console.log(`Error: ${error}`)
  })
  .finally(
    console.log('then, catch 상관없이 항상 실행된다')
  )
*/

// ES2017
// async ~ await
// 함수 기반으로 실행된다






console.log('---------------- END -----------------');