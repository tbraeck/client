import React, { useState } from 'react';

const MessageForm = ({ sendMessage, handleSend }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(content);
    setContent('');
   handleSend()
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" >SEND</button>
    </form>
  );
};

export default MessageForm;
