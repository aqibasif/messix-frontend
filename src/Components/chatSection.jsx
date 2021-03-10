import React, { useEffect, useRef, useState } from 'react';
import Input from './Common/input';
import Message from './message';

const chat2 = [
  {
    user: '6047d53969675a3247d04697',
    message: 'Hi, How are you?',
    time: 'Wed Mar 10 2021 13:56:17 GMT+0500 (PKT)',
  },
  {
    user: '2',
    message: 'Hi, Im good and you?',
    time: 'Wed Mar 10 2021 13:56:17 GMT+0500 (PKT)',
  },
  {
    user: '6047d53969675a3247d04697',
    message:
      'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has?',
    time: 'Wed Mar 10 2021 13:56:17 GMT+0500 (PKT)',
  },
];

const ChatSection = ({ user, currentContact }) => {
  const [chat, setChat] = useState(chat2);
  const [message, setMessage] = useState('');
  const chatBottom = useRef(null);

  const scrollToBottom = () => {
    chatBottom.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [chat]);

  const handleChange = ({ currentTarget: input }) => {
    setMessage(input.value);
  };

  const sendMessage = () => {
    const chat2 = [...chat];
    const date = new Date();
    const obj = {
      user: user._id,
      message: message,
      time: date.toString(),
    };
    chat2.push(obj);

    setMessage('');
    setChat(chat2);
  };

  if (!currentContact)
    return (
      <div className='chat-section no-chat'>
        <p>Select any contact to start chat</p>
        <div className='free-space' ref={chatBottom} />
      </div>
    );

  return (
    <div className='chat-section'>
      <div className='contact-name'>
        <h4>{currentContact.username}</h4>
      </div>

      {chat.map((c) => (
        <Message
          key={c.time}
          _id={user._id}
          user={c.user}
          message={c.message}
          time={c.time}
        />
      ))}
      <div className='free-space' ref={chatBottom} />

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
