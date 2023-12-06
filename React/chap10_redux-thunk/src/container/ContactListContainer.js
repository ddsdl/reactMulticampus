// ContactListContainer.js
import React, { useEffect } from 'react'
import GetContactList from '@pages/contacts/GetContactList';
import { getContactListAction } from './../stores/contactR'
import { useDispatch, useSelector } from 'react-redux';

function ContactListContainer() {
  const { loading, contactList, error } = useSelector(state => state.contactR);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactListAction(1, 10));
  }, [dispatch]);

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <>
      <GetContactList contactList={contactList} />
      {/* 위의 conactList가 필요한 다른 컴포넌트가 또 있는 경우 여기에 추가하고 속성으로 전달만 하면 된다 */}
    </>
  )
}

export default ContactListContainer
