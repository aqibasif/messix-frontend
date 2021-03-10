import React from 'react';

const Message = ({_id, user, message, time}) => {
    return (
        
        <div
        className={
          _id === user ? 'message sender' : 'message receiver'
        }
      >
        <div
          className={
            _id === user
              ? 'message-box sender-message-box'
              : 'message-box receiver-message-box'
          }
        >
          {message}
        </div>
        <p className='time'>{time}</p>
      </div>
     );
}
 
export default Message;