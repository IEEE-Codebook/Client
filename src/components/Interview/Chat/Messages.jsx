import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';

import '../../../css/ChatMessages.css';

const Messages = ({ messages, nameOfUser }) => (
  <ScrollToBottom className="messages" style={{minHeight:"70vh"}}>
    {messages.map((message, i) => <div key={i}><Message message={message} nameOfUser={nameOfUser}/></div>)}
  </ScrollToBottom>
);

export default Messages;