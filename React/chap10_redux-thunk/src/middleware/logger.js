const logger = (store) => {
  return (next) => {
    return (dispatch) => {
      console.group('----- one in -----')
      console.log('리덕스 값 변경 전', store.getState());
      console.log('Action', dispatch);

      let result = next(dispatch);

      console.log('리덕스 값 변경 후', store.getState());
      console.log(`result`, result);
      console.log('----- one out -----')
      console.groupEnd();

      return result;
    }
  }
}
export default logger;
