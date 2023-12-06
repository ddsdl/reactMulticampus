import React, { useCallback } from 'react'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'

import { changeContact, changeLoading, changeError } from '@stores/contactR';
import axios from 'axios';

function AddContact() {
  const { loading, error, contact } = useSelector(state => state.contactR);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const addContact = useCallback(async (data) => {
    dispatch(changeLoading(true));
    try {
      await axios.post(process.env.REACT_APP_CONTACT_URL, data);
      dispatch(changeLoading(false));
      navigate('/list');
    } catch (error) {
      dispatch(changeLoading(false));
      dispatch(changeError(error))
    }

  }, [navigate, dispatch]);

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h3>Add Contact</h3>

      Name: <input type="text" className="form-control" name="name"
        value={contact.name} onChange={(evt) => dispatch(changeContact(evt))} />
      Tel: <input type="text" className="form-control" name="tel"
        value={contact.tel} onChange={(evt) => dispatch(changeContact(evt))} />
      Address: <input type="text" className="form-control" name="address"
        value={contact.address} onChange={(evt) => dispatch(changeContact(evt))} />
      <br />
      <button className="btn btn-outline-primary" onClick={() => addContact(contact)}>ADD</button>
    </div>
  )
}

export default AddContact
