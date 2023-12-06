const COUNTER_INCREASE = 'COUNTER_INCREASE';
const COUNTER_DECREASE = 'COUNTER_DECREASE';

// redux-thunk, redux-saga, mobx, react-query, recoil
// dispatch(increaseAction(2)) => counter(기존state, {type: XX, payload: XX})
// dispatch(increaseAction(2)) => counter(기존state, undefined.payload) => error
export const increaseAction = (num) => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: COUNTER_INCREASE, payload: num });
  }, 2000)
  // return undefined;
};
export const decreaseAction = () => {
  return { type: COUNTER_DECREASE };
};

const init = {
  num: 0,
  storeName: 'Counter Store',
};
const counter = (state = init, action) => {
  switch (action.type) {
    case COUNTER_INCREASE:
      return { ...state, num: state.num + action.payload };
    case COUNTER_DECREASE:
      return { ...state, num: state.num - 1 }; // ++, -- 사용 불가
    default:
      return state;
  }
};
export default counter;
