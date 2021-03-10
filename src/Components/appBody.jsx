import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../services/authService';
import ChatSection from './chatSection';
import Contacts from './contacts';

const AppBody = () => {
  const [selectedContact, setSelectedContact] = useState('');

  const selectContact = (contact) => {
    setSelectedContact(contact);
  };

  if (!auth.getCurrentUser()) {
    return <Redirect to='/login' />;
  }

  return (
    <div className='app-body'>
      <Contacts
        selectContact={selectContact}
        currentContact={selectedContact}
      />
      <ChatSection
        user={auth.getCurrentUser()}
        currentContact={selectedContact}
      />
    </div>
  );
};

export default AppBody;
