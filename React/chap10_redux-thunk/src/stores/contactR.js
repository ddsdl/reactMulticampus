import axios from 'axios';

const GET_CONTACTLIST = 'CONTACT/GET_CONTACTLIST';
const GET_CONTACTLIST_SUCCESS = 'CONTACT/GET_CONTACTLIST_SUCCESS';
const GET_CONTACTLIST_FAILURE = 'CONTACT/GET_CONTACTLIST_FAILURE';

const GET_CONTACT = 'CONTACT/GET_CONTACT';
const GET_CONTACT_SUCCESS = 'CONTACT/GET_CONTACT_SUCCESS';
const GET_CONTACT_FAILURE = 'CONTACT/GET_CONTACT_FAILURE';

const ADD_CONTACT = 'CONTACT/ADD_CONTACT';
const ADD_CONTACT_SUCCESS = 'CONTACT/ADD_CONTACT_SUCCESS';
const ADD_CONTACT_FAILURE = 'CONTACT/ADD_CONTACT_FAILURE';

const CHANGE_CONTACT = 'CONTACT/CHANGE_CONTACT';
const CHANGE_LOADING = 'CONTACT/CHANGE_LOADING';
const CHANGE_ERROR = 'CONTACT/CHANGE_ERROR';

const baseURL = process.env.REACT_APP_CONTACT_URL;
const baseLONG = 'http://localhost:8000/contacts_long/' // process.env.REACT_APP_CONTACT_LONG_URL;

// Action
export const getContactListAction = (no, size) => async (dispatch) => {
  dispatch({ type: GET_CONTACTLIST });    // 작업 시작 통보
  try {
    const resp = await axios.get(baseLONG, { params: { pageno: no, pagesize: size } });
    dispatch({ type: GET_CONTACTLIST_SUCCESS, payload: resp.data });
  } catch (error) {
    dispatch({ type: GET_CONTACTLIST_FAILURE, payload: error });
  }
}

export const getContactAction = (no) => async (dispatch) => {
  dispatch({ type: GET_CONTACT });    // 작업 시작 통보
  try {
    const resp = await axios.get(baseURL + no);
    dispatch({ type: GET_CONTACT_SUCCESS, payload: resp.data });
  } catch (error) {
    dispatch({ type: GET_CONTACT_FAILURE, payload: error });
  }
}


// data 수정
export const changeContact = (evt) => {
  return { type: CHANGE_CONTACT, payload: evt.target }
}
export const changeLoading = (check) => {
  return { type: CHANGE_LOADING, payload: check }
}
export const changeError = (error) => {
  return { type: CHANGE_ERROR, payload: error }
}


const init = {
  loading: false,
  contactList: { pageno: 1, pagesize: 10, totalcount: 0, contacts: [] },
  contact: { no: '', name: '', address: '', tel: '', photo: '' },
  error: null,
};
const contactR = (state = init, action) => {
  switch (action.type) {
    // getContactList
    case GET_CONTACTLIST:
      return {
        ...state,
        loading: true,
        contactList: { pageno: 1, pagesize: 10, totalcount: 0, contacts: [] },
        error: null,
      };
    case GET_CONTACTLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        contactList: action.payload
      };
    case GET_CONTACTLIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // GetContact
    case GET_CONTACT:
      return {
        ...state,
        loading: true,
        contact: { no: '', name: '', address: '', tel: '', photo: '' },
        error: null,
      };
    case GET_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        contact: action.payload,
      };
    case GET_CONTACT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_CONTACT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        // contact: { no: '', name: '', address: '', tel: '', photo: '' },
      };
    case ADD_CONTACT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CHANGE_CONTACT:
      return {
        ...state,
        contact: {
          ...state.contact,
          [action.payload.name]: action.payload.value
        }
      }
    case CHANGE_LOADING:
      return { ...state, loading: action.payload }
    case CHANGE_ERROR:
      return { ...state, error: action.payload }
    default:
      return state;
  }
};
export default contactR;
