import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const baseURL = process.env.REACT_APP_CONTACT_PATH;

function AddContact() {
  const { no } = useParams();
  const navigate = useNavigate();
  // console.log(no);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [contact, setContact] = useState({ no: '', name: '', address: '', tel: '', photo: '' });

  const deleteContact = useCallback(async (no) => {
    setIsLoading(true);
    try {
      await axios.delete(baseURL + no);
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
      <h3>Get Contact</h3>

      <div>
        Name: <input type="text" className="form-control" disabled value={contact && contact.name} />
        Tel: <input type="text" className="form-control" disabled value={contact?.tel} />
        Address: <input type="text" className="form-control" disabled value={contact.address} />
      </div>
      <br />
      <button className="btn btn-outline-primary" onClick={() => navigate(`/update/${contact.no}`)}>수정</button>
      <button className="btn btn-outline-primary" onClick={() => deleteContact(contact.no)}>삭제</button>
    </div>
  );
}
export default AddContact;
