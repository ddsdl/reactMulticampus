export const countries = ['USD', 'EUR', 'KRW'];
export const rate = { USD: 1, EUR: 1.25, KRW: 0.00078 };
export const currencyReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_NUMBER':
      let value = Number(action.payload.value);
      if (isNaN(value)) value = '';
      return { ...state, [action.payload.name]: value };
    case 'CHANGE_CURRENCY':
      return { ...state, inCurr: action.payload };
    default:
      return state;
  }
}
