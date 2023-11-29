import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
// React 16.8 버전부터 추가된 기능
function A07Hook() {
  // 1. 변경된 값 유지
  // 2. 값이 변경되면 View를 변경된 값으로 리 렌더링
  const [data, setData] = useState({
    num: '',
    str: '',
    avg: 0,
    list: [],
  });
  const [today, setToday] = useState(new Date());

  // useRef
  // 1. 값 유지 => 값이 변경되도 화면 리 렌더링 하지 않음
  // 2. JSX 요소와 연결 => document.querySelector(요소지정) 과 동일한 역할
  // 값은 항상 변수명.current로 첨조한다
  const cnt = useRef(1)
  const numRef = useRef(null);

  // Event Handler도 리 렌더링 될때마다 새롭게 생성된다.
  // 메모이제이션 -> 캐쉬 사용
  // useCallback(이벤트핸들러, []);         => 의존 관계 없음 (가능하면 이렇게 만들도록 구현)
  // useCallback(이벤트핸들러, [상태변수, 훅을 사용한 함수..])
  const changeString = useCallback((evt) => {
    setData({ ...data, str: evt.target.value })
    // 의존관계가 []면 setData의 data 객체는 항상 최초 실행되는 시점의 값을 기반으로 계산한다
    // setData( { num: '', str: ''} , str: evt.target.value })

    // 의존관계가 [data]면 setData는 실행 시점의 실시간 data 값을 가져와 가져온 값 기반으로 계산한다
    // setData( { num: 10, str: '놀부'} , str: evt.target.value })
  }, [data]);

  const changeNumber = useCallback((evt) => {
    setData({ ...data, [evt.target.name]: Number(evt.target.value) })
  }, [data]);

  const addList = useCallback(() => {
    setData({ ...data, list: data.list.concat(data.avg) });

    // [] 면 실행될때 항상 avg 값은 0, list의 값은 []로 계산한다
  }, [data]);

  // LifeCycle Hook
  // []에 따라 실행 시점이 결정된다
  // useEffect(() => { });            => 리 렌더링 될때마다 실행된다
  // useEffect(() => { }, []);        => 처음 마운트(화면에 표시)될때 딱 1번만 실행된다 (componentDidMounted)
  // useEffect(() => { }, [상태변수명 or Hook을 사용한 함수, ..]);  => 지정한 변수, 함수가 변경된 경우만 실행(componentDidUpdat)
  useEffect(() => {
    setTimeout(() => {
      setToday(new Date());
    }, 2000);
  }, [data.str]);

  useEffect(() => {
    document.querySelector('input[name="str"]').style.background = 'lightgray';
    // numRef.current => JavaScript 객체
    numRef.current.style.background = 'lightgray';
  }, []);

  // 일반 함수
  const getAverage = (arr) => {
    console.log('계산중...');
    if (arr.length === 0) return 0;

    const total = arr.reduce((sum, item) => sum + item, 0);
    return total / arr.length;
  };

  // useMemo => 특정 값이 변경된 경우만 일반 함수를 재 실행하고자 하는 경우
  // getter와 같이 View 에서 사용은 프로퍼티 형태로 사용한다
  // []의 의존관계의 값이 변경되는 경우만 재 호출된다
  const getAverageMemo = useMemo(() => {
    return getAverage(data.list)
  }, [data.list]);

  return (
    <div className="mb-5">
      <h3>A07. useState, useEffect</h3>

      <div>
        Num:
        <input type="number" name="num" className="form-control" onChange={changeNumber} ref={numRef} /><br />
        Str: {data.str}
        <input type="text" name="str" className="form-control" value={data.str} onChange={changeString} /><br />

        Today: {today.toLocaleString()}<br />
        <br />

        Avg: {data.avg} / {data.list.join(' - ')} / {getAverageMemo}
        <div className="input-group">
          <input type="text" name="avg" className="form-control" onChange={changeNumber} />
          <button className="btn btn-outline-primary btn-sm" onClick={addList}>ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A07Hook;
