import { useEffect, useState } from 'react';
import ChatComponent from '@/chat/components/ChatComponent';

const useWebSocket = (url) => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => {
      console.log('WebSocket 연결 성공');
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    ws.onclose = () => {
      console.log('WebSocket 연결 종료');
    };

    ws.onerror = (error) => {
      console.error('WebSocket 오류:', error);ChatComponent

    };

    setSocket(ws);

    return () => {
      ws.close(); // 컴포넌트 언마운트 시 WebSocket 연결 닫기
    };
  }, [url]);

  const sendMessage = (message) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(message));
    }
  };

  return { messages, sendMessage };
};

export default useWebSocket;
