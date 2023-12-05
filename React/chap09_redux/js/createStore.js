const init = {
  count: 0,
  storeName: 'Count Store'
};

const countStore = (state = init, action) => {
  switch (action.type) {
    case 'COUNT_INCREASE':
      return { ...state, count: state.count + action.payload };
    case 'COUNT_DECREASE':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

const increase = (num) => {
  return { type: 'COUNT_INCREASE', payload: num };
}
const decrease = () => {
  return { type: 'COUNT_DECREASE' }
}


const createStore = (reducer) => {
  let state = reducer(undefined, {});    // 기본 값으로 초기화

  // getter
  const getState = () => {
    return { ...state };
  }

  // setter
  const dispatch = (action) => {
    state = reducer(state, action);

    // 이 리덕스를 참조하는 컴포넌트의 값 전달 후 리 렌더링...
  }

  return { getState, dispatch }
}

const store = createStore(countStore);
console.log(store.getState());

// store.dispatch({ type: 'COUNT_INCREASE', payload: 2 });
store.dispatch(increase(3));
console.log(store.getState());
