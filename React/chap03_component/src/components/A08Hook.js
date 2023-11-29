import React, { useCallback, useEffect, useMemo, useReducer, useState } from "react";

// 화면 리 렌더링과 전여 상관없는 함수
const reducerFunc = (state, action) => {
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case 'CHANGE_STRING':
      return { ...state, str: action.payload };
    case 'CHANGE_NUMBER':
      // action.payload => evt.target
      let result = Number(action.payload.value);
      if (isNaN(result)) result = '';
      return { ...state, [action.payload.name]: result };
    case 'CHANGE_TODAY':
      return { ...state, today: new Date() };
    case 'ADD_LIST':
      return { ...state, list: state.list.concat(state.avg) };
    default:
      return state;
  }

}

function A08Hook() {
  const [data, setData] = useState({
    count: 0,
    num: '',
    str: 'Hello ',
    avg: 0,
    list: [],
    today: new Date(),
  });

  /* 무한 반복
  // data 변경 => 화면 리 렌더링 => useEffect가 data의 의존관게가 있으므로 재 실행 
  // => data 변경 => 화면 리 렌더링 => useEffect가 data의 의존관게가 있으므로 재 실행 을 무한반복
  useEffect(() => {
    setData({ ...data, str: 'Hello World' });
  }, [data]);
  */
  useEffect(() => {
    // setData({ ...data, str: 'Hello World' });
    setData((prevData) => ({ ...prevData, str: 'Hello World' }));
  }, []);

  const increase = useCallback(() => {
    // setter 함수는 실행 방법이 2가지 가 있다. 
    // 1. setter에 바로 값 대입 => setData({ ...data, count: data.count + 1 }); => 값이 기본형인 경우만 사용
    // 2. 실행함수 (콜백함수)를 전달하는 방식 => setData( (getter의 현재값) => { 실행구문 } );
    setData({ ...data, count: data.count + 1 });
    setData({ ...data, count: data.count + 1 });
  }, [data]);

  const decrease = useCallback(() => {
    setData((beforeData) => {
      console.log('1=>', beforeData);
      return { ...beforeData, count: beforeData.count - 1 };
    });
    setData((beforeData) => {
      console.log('2=>', beforeData);
      return { ...beforeData, count: beforeData.count - 1 };
    });
  }, []);

  // useReducer 훅을 이용

  // const [getter, 함수를 호출하는 함수명] = useReducer(함수명, 초기값)
  // value => useReducer 함수에서 지정한 reducerFunc 함수가 리턴하는 값
  // dispatch => useReducer에 지정한 reducerFunc 함수를 호출
  // { 초기값 } => 컴퍼넌트가 시작하면 reducerFunc 함수의 첫번째 state 변수에 전달 할 값

  // value는 상태변수다. 즉 값이 변경되면 그 값 기반으로 화면 리렌더링 한다
  const [value, dispatch] = useReducer(reducerFunc, {
    count: 0,
    num: '',
    str: '',
    avg: 0,
    list: [],
    today: new Date(),
  });

  const changeString = useCallback((evt) => {
    // 이 내부에서 value에 관련된 어떤 변수도 참조하지 않음. 따라서 useCallback 의존관계 []가 있을 수 없다
    // 이는 이 changeString 이벤트 핸들러가 최초 1번 작성되면 두번 다시 생성(만들어)되지 않는다

    // dispatch는 reducerFunc 함수를 호출하면서 두번째 매개변수 action에 이 값을 전달한다.
    dispatch({ type: 'CHANGE_STRING', payload: evt.target.value });
  }, []);
  const changeNumber = useCallback((evt) => {
    dispatch({ type: 'CHANGE_NUMBER', payload: evt.target });
  }, []);
  const addList = useCallback(() => {
    dispatch({ type: 'ADD_LIST' });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'CHANGE_TODAY' });
    }, 3000);
  }, []);

  // 일반 함수
  const getAverage = (arr) => {
    // console.log('계산중...');
    if (arr.length === 0) return 0;

    const total = arr.reduce((sum, item) => sum + item, 0);
    return total / arr.length;
  };
  const getAverageMemo = useMemo(() => {
    return getAverage(value.list)
  }, [value.list])

  return (
    <div>
      <h3>A08. Reducer</h3>

      <div className="mb-2">
        Count: {data.count}<br />
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>

      <div>
        Num: {value.num}
        <input type="text" name="num" className="form-control" onChange={changeNumber} /><br />
        Str: {value.str}
        <input type="text" name="str" className="form-control" value={value.str} onChange={changeString} /><br />

        Today: {value.today.toLocaleString()}<br />
        <br />

        Avg: {value.avg} / {value.list.join(' - ')} / {getAverageMemo}
        <div className="input-group">
          <input type="text" name="avg" className="form-control" onChange={changeNumber} />
          <button className="btn btn-outline-primary btn-sm" onClick={addList}>ADD</button>
        </div>
      </div>
    </div>
  );
}
export default A08Hook;
