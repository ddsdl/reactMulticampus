import axios from "axios";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const baseURL = process.env.REACT_APP_CONTACT_PATH;

function AddContact() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [contact, setContact] = useState({ no: '', name: '', address: '', tel: '', photo: '' });

  const changeContact = useCallback((evt) => {
    setContact((contact) => ({ ...contact, [evt.target.name]: evt.target.value }));
  }, []);

  const addContact = useCallback(async (data) => {
    setIsLoading(true);
    try {
      // if(data.name.trim().length !== 0 && ....)
      await axios.post(baseURL, data);
      setIsLoading(false);
      navigate('/contactList');
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }, [navigate]);

  if (isLoading) return <div>Loading.....</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h3>Add Contact</h3>
      Name: <input type="text" className="form-control" name="name"
        value={contact?.name} onChange={changeContact} />
      Tel: <input type="text" className="form-control" name="tel"
        value={contact?.tel} onChange={changeContact} />
      Address: <input type="text" className="form-control" name="address"
        value={contact?.address} onChange={changeContact} />
      <br />
      <button className="btn btn-outline-primary" onClick={() => addContact(contact)}>ADD</button>
    </div>
  );
}

export default AddContact;
