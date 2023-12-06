import React, { useCallback } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { changeContact } from '@stores/contactR'
import { useNavigate } from 'react-router-dom';


function UpdateContact(props) {
  const { contact } = useSelector(state => state.contactR);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const updateContact = useCallback(async (data) => {
    try {
      const resp = await axios.put(process.env.REACT_APP_CONTACT_URL + data.no, data);
      if (resp.data.status === 'success') navigate('/list');
    } catch (error) {
      console.error(error);
    }
  }, [navigate]);

  return (
    <div>
      <h3>Update Contact</h3>

      <div>
        Name: <input type="text" className="form-control" name="name"
          value={contact?.name} onChange={(evt) => dispatch(changeContact(evt))} />
        Tel: <input type="text" className="form-control" name="tel"
          value={contact?.tel} onChange={(evt) => dispatch(changeContact(evt))} />
        Address: <input type="text" className="form-control" name="address"
          value={contact?.address} onChange={(evt) => dispatch(changeContact(evt))} />
      </div>
      <br />
      <button className="btn btn-outline-primary" onClick={() => updateContact(contact)}>ADD</button>
    </div>
  );
}

export default UpdateContact;
