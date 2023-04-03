import React from 'react';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import IconButton from '@material-ui/core/IconButton';

import '../../../css/ChatInput.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="chat_input_form d-flex">
    <input
      className="chat_input_input mr-auto"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <IconButton className="chat_input_ml-auto" color="primary" onClick={e => sendMessage(e)} title="Send">
      <SendRoundedIcon/>
    </IconButton>
    {/* <button className="chat_input_sendButton" onClick={e => sendMessage(e)}>Send</button> */}
  </form>
)

export default Input;