import React from "react";
import { increase, decrease } from '@stores/countStore'
import { useDispatch, useSelector } from "react-redux";

function Counter(props) {
  // store로 부터 값 추출
  const { count, storeName } = useSelector(state => state.countStore);
  // store의 action 호출
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{storeName}: {count}</h3>
      <button onClick={() => dispatch(increase(2))}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
    </div>
  );
}
export default Counter;
