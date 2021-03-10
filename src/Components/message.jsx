import React from 'react';
import moment from 'moment';

const Message = ({ _id, user, message, time }) => {
  return (
    <div className={_id === user ? 'message sender' : 'message receiver'}>
      <div
        className={
          _id === user
            ? 'message-box sender-message-box'
            : 'message-box receiver-message-box'
        }
      >
        {message}
      </div>
      <p className='time'>{moment(time).format('LT')}</p>
    </div>
  );
};

export default Message;
