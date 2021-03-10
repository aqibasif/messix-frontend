import React from 'react';
import { Redirect } from 'react-router-dom';
import auth from '../services/authService';
import ChatSection from './chatSection';
import Contacts from './contacts';

const AppBody = () => {
  if (!auth.getCurrentUser()) {
    return <Redirect to='/login' />;
  }

  return (
    <div className='app-body'>
      <Contacts />
      <ChatSection user={auth.getCurrentUser()} />
    </div>
  );
};

export default AppBody;
