import React, { useState } from 'react';
import Input from './Common/input';
import Message from './message';

const chat2 = [
  {
    user: '6047d53969675a3247d04697',
    message: 'Hi, How are you?',
    time: '10:42 AM',
  },
  { user: '2', message: 'Hi, Im good and you?', time: '10:42 AM' },
  {
    user: '6047d53969675a3247d04697',
    message:
      'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?',
    time: '10:42 AM',
  },
];

const ChatSection = ({ user }) => {
  const [chat, setChat] = useState(chat2);
  const [message, setMessage] = useState('');

  const handleChange = ({ currentTarget: input }) => {
    setMessage(input.value);
  };

  const sendMessage = () => {
    const chat2 = [...chat];
    const obj = {
      user: user._id,
      message: message,
      time: '10:AM',
    };
      chat2.push(obj);
      
      setMessage('');

    setChat(chat2);
  };

  return (
    <div className='chat-section'>
      {chat.map((c) => (
        <Message
          _id={user._id}
          user={c.user}
          message={c.message}
          time={c.time}
        />
      ))}
      <div className='free-space'></div>

      <div className='message-input'>
        <Input
          type='text'
          placeholder='Type Message...'
          name='message'
          value={message}
          onChange={handleChange}
          //   error={errors.username}
        />
        <button disabled={!message} onClick={sendMessage}>
          SEND
        </button>
      </div>
    </div>
  );
};

export default ChatSection;
