// KEY 참조 오타를 방지하기 위새 상수로 정의
const COUNT_INCREASE = 'COUNT_INCREASE';
const COUNT_DECREASE = 'COUNT_DECREASE';

// action => countStore에 반영될 로직이 구현된 메서드
// 정의된 countStore를 호출하면서 action에 리턴 값을 전달한다.
export const increase = (num) => {
  return { type: COUNT_INCREASE, payload: num }
}
export const decrease = () => {
  return { type: COUNT_DECREASE }
}

const init = {
  count: 0,
  storeName: 'Count Store'
};

const countStore = (state = init, action) => {
  switch (action.type) {
    case COUNT_INCREASE:
      return { ...state, count: state.count + action.payload };
    case COUNT_DECREASE:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
export default countStore;
