import React from 'react';

const MessageList = ({ messages, currentUser }) => {
  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>
          {message.sender.id === currentUser.id ? 'You: ' : `${message.sender.name}: `}
          {message.content}
        </li>
      ))}
    </ul>
  );
};

export default MessageList;
