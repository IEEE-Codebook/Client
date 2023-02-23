import React from 'react'

function Chat() {
  return (
    <div class="card">
    <div class="chat-header">Chat</div>
      <div class="chat-window">
        <ul class="message-list"></ul>
      </div>
      <div class="chat-input">
          <input type="text" class="message-input" placeholder="Type your message here" />
          <button class="send-button">Send</button>
      </div>
    </div>

  )
}

export default Chat