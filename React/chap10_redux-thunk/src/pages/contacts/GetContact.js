import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContactAction } from '@stores/contactR';
import { useNavigate, useParams } from 'react-router-dom';

function GetContact() {
  const { no } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, error, contact } = useSelector(state => state.contactR);

  useEffect(() => {
    dispatch(getContactAction(no));
  }, [dispatch, no]);

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h3>Get Contact</h3>

      <div>
        Name: <input type="text" className="form-control" disabled value={contact?.name} />
        Tel: <input type="text" className="form-control" disabled value={contact?.tel} />
        Address: <input type="text" className="form-control" disabled value={contact?.address} />
      </div>
      <br />
      <button className="btn btn-outline-primary" onClick={() => navigate('/update')}>수정</button>
      <button className="btn btn-outline-primary">삭제</button>
    </div>
  );
}

export default GetContact;
