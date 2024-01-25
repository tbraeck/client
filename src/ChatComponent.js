import React, { useState } from 'react';
import axios from 'axios';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const sendMessageToChatGPT = async (userMessage) => {
    try {
      setIsLoading(true);

      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: userMessage },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': apiKey,
          },
        }
      );

      const botMessage = response.data.choices[0].message.content;
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'user', content: userMessage },
        { role: 'assistant', content: botMessage },
      ]);

    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'assistant', content: 'Oops! Something went wrong. Please try again.' },
      ]);

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* Render chat messages */}
      {messages.map((message, index) => (
        <div key={index} className={message.role}>
          {message.content}
        </div>
      ))}

      {/* Loading indicator */}
      {isLoading && <div>Loading...</div>}

      {/* User input */}
      <input
        type="text"
        placeholder="Type your message..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            sendMessageToChatGPT(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
};

export default ChatComponent;
