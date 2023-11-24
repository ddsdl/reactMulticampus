import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ContactHeader from './Contact/ContactHeader';
import ContactHome from './Contact/ContactHome';
import AddContact from './Contact/AddContact';
import UpdateContact from './Contact/UpdateContact';
import GetContact from './Contact/GetContact';
import GetContactList from './Contact/GetContactList';

function ContactApp() {
  return (
    <div>
      <ContactHeader />
      <br />

      <Routes>
        <Route path="/" element={<ContactHome />} />
        <Route path="/getContactList" element={<GetContactList />} />
        <Route path="/getContact" element={<GetContact />} />
        <Route path="/addContact" element={<AddContact />} />
        <Route path="/updateContact" element={<UpdateContact />} />
        <Route path="*" element={<h3>Not Found</h3>} />
      </Routes>
    </div>
  );
}

export default ContactApp;
