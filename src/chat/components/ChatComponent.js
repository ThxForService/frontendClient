import React, { useState } from 'react';
import useWebSocket from '@/chat/hooks/useWebSocket';

const ChatComponent = () => {
  const [message, setMessage] = useState('');
  const { messages, sendMessage } = useWebSocket('ws://52.78.186.242:5006/chat'); // 백엔드 WebSocket URL

  const handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage({ message });
    setMessage(''); // 메시지 전송 후 입력 필드 초기화
  };

  return (
    <div>
      <div>
        <h3>채팅 내역</h3>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg.message}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="메시지를 입력하세요"
        />
        <button type="submit">전송</button>
      </form>
    </div>
  );
};

export default ChatComponent;
