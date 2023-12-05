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

const baseURL = 'http://localhost:8080/contacts/';
const baseLONG = 'http://localhost:8080/contacts_long/';

// Action

const init = {
  loading: false,
  contactList: null,
  contact: null,
  error: null,
};
const contactR = (state = init, action) => {
  switch (action.type) {
    case GET_CONTACTLIST:
      return state;
    case GET_CONTACTLIST_SUCCESS:
      return state;
    case GET_CONTACTLIST_FAILURE:
      return state;
    case GET_CONTACT:
      return state;
    case GET_CONTACT_SUCCESS:
      return state;
    case GET_CONTACT_FAILURE:
      return state;
    case ADD_CONTACT:
      return state;
    case ADD_CONTACT_SUCCESS:
      return state;
    case ADD_CONTACT_FAILURE:
      return state;
    default:
      return state;
  }
};
export default contactR;
