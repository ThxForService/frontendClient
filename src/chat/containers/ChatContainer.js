'use client';
import React, { useEffect, useState } from 'react';
import useWebSocket from '@/chat/hooks/useWebSocket';
import { sendMessageAPI, chatHistory } from '@/chat/apis/apiChat';
import ChatComponent from '@/chat/components/ChatComponent';

const ChatContainer = ({ roomNo }) => {
  const [form, setForm] = useState({ message: '' });
  const [errors, setErrors] = useState({});
  const [messages, setMessages] = useState([]);
  const { messages: socketMessages, sendMessage } = useWebSocket('ws://52.78.186.242:5006/chat');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const dbMessages = await chatHistory(roomNo);
        setMessages(dbMessages);
      } catch (error) {
        console.error('메시지 불러오기 오류:', error);
      }
    };

    fetchMessages();
  }, [roomNo]);

  useEffect(() => {
    if (socketMessages && socketMessages.length > 0) {
      setMessages((prevMessages) => [...prevMessages, ...socketMessages]);
    }
  }, [socketMessages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!form.message.trim()) {
      setErrors({ message: '메세지를 입력하세요' });
      return;
    }

    sendMessage({ message: form.message });

    try {
      await sendMessageAPI(form); // API 전송
    } catch (error) {
      console.error('메시지 저장 중 오류 발생:', error);
    }

    setForm({ message: '' });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <ChatComponent
      messages={messages}
      form={form}
      onChange={handleChange}
      onSubmit={handleSendMessage}
      errors={errors}
    />
  );
};

export default React.memo(ChatContainer);
