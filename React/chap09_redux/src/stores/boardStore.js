import moment from 'moment';

// 상수 키 선언
const BOARD_DELETE_BOARD = 'BOARD_DELETE_BOARD';
const BOARD_FIND_BOARD = 'BOARD_FIND_BOARD';
const BOARD_CHANGE_TEXT = 'BOARD_CHANGE_TEXT';
const BOARD_ADD_BOARD = 'BOARD_ADD_BOARD';
const BOARD_CLEAR_DATA = 'BOARD_CLEAR_DATA';

// action
export const deleteBoard = (no) => ({ type: BOARD_DELETE_BOARD, payload: no });
export const findBoard = (no) => ({ type: BOARD_FIND_BOARD, payload: no });
export const changeData = (evt) => ({ type: BOARD_CHANGE_TEXT, payload: evt.target });
// data => { name: ?, title: ?, content: ?, regdate: ?}
export const addBoard = (data) => {
  const board = {
    no: cnt++,
    title: data.title,
    content: data.content,
    name: data.name,
    regdate: data.regdate || moment(new Date()).format('YYYY-MM-DD'),
  }
  return { type: BOARD_ADD_BOARD, payload: board }
}
export const clearData = () => {
  const newData = { no: '', name: '', title: '', content: '', regdate: '', };
  return { type: BOARD_CLEAR_DATA, payload: newData }
}

let cnt = 4;

const init = {
  boardList: [
    { no: 1, title: '게시물 1', content: '게시물 내용 1', name: '홍길동', regdate: '2023-12-25' },
    { no: 2, title: '게시물 2', content: '게시물 내용 2', name: '놀부', regdate: '2023-12-26' },
    { no: 3, title: '게시물 3', content: '게시물 내용 3', name: '흥부', regdate: '2023-12-20' },
  ],
  data: { no: '', name: '', title: '', content: '', regdate: '', }
}

const boardStore = (state = init, action) => {
  switch (action.type) {
    case BOARD_DELETE_BOARD:
      const boards = state.boardList.filter((board) => {
        return (board.no === action.payload) ? false : true;
      });
      return { ...state, boardList: boards };
    case BOARD_FIND_BOARD:
      const findItem = state.boardList.find((item) => item.no === action.payload);
      return { ...state, data: { ...findItem } };
    case BOARD_CHANGE_TEXT:
      return { ...state, data: { ...state.data, [action.payload.name]: action.payload.value } };
    case BOARD_ADD_BOARD:
      return { ...state, boardList: state.boardList.concat(action.payload) };
    case BOARD_CLEAR_DATA:
      return { ...state, data: action.payload }
    default:
      return state;
  }
}
export default boardStore;