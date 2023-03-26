import React from 'react'
import "./css/Chat.css";

function Chat() {
  return (
    <div class="chat_card">
    <div class="chat-header">Chat</div>
      <div class="chat-window">
        <ul class="chat_message-list"></ul>
      </div>
      <div class="chat-input">
          <input type="text" class="chat_message-input" placeholder="Type your message here" />
          <button class="chat_send-button">Send</button>
      </div>
    </div>

  )
}

export default Chat