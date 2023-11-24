const COUNTER_INCREASE = 'COUNTER_INCREASE';
const COUNTER_DECREASE = 'COUNTER_DECREASE';

export const increaseAction = (num) => {
  return { type: COUNTER_INCREASE, payload: num };
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
