import React from 'react'

import { increaseAction, decreaseAction } from './../store/counterR'
import { useSelector, useDispatch } from 'react-redux'

function Counter() {

  const { storeName, num } = useSelector(state => state.counterR);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{storeName} - Counter: {num}</h3>
      <button onClick={() => dispatch(increaseAction(2))}>+</button>
      <button onClick={() => dispatch(decreaseAction())}>-</button>
    </div>
  )
}
export default Counter;

