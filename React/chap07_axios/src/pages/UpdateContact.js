import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const baseURL = process.env.REACT_APP_CONTACT_PATH;

function AddContact() {

  const { no } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [contact, setContact] = useState({ no: '', name: '', address: '', tel: '', photo: '' });

  const changeContact = useCallback((evt) => {
    setContact((contact) => ({ ...contact, [evt.target.name]: evt.target.value }));
  }, []);

  const updateContact = useCallback(async (data) => {
    setIsLoading(true);
    try {
      await axios.put(baseURL + data.no, data, { headers: { 'Content-Type': 'application/json' } });
      setIsLoading(false);
      navigate('/contactList');
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    const getContact = async () => {
      setIsLoading(true);
      try {
        const resp = await axios.get(baseURL + no);
        // console.log(resp.data);
        setContact(resp.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    getContact()
  }, [setContact, no]);

  if (isLoading) return <div>Loading.....</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h3>Update Contact</h3>

      <div>
        Name: <input type="text" className="form-control" name="name"
          value={contact && contact.name} onChange={changeContact} />
        Tel: <input type="text" className="form-control" name="tel"
          value={contact?.tel} onChange={changeContact} />
        Address: <input type="text" className="form-control" name="address"
          value={contact.address} onChange={changeContact} />
      </div>
      <br />
      <button className="btn btn-outline-primary" onClick={() => updateContact(contact)}>UPDATE</button>
    </div>
  );
}
export default AddContact;
