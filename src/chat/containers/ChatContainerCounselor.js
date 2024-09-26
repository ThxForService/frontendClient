// ChatContainer.js
'use client';
import React, { useEffect, useState } from 'react';
import { sendMessageAPI, chatHistory, chatList } from '@/chat/apis/apiChat';
import ChatComponent from '@/chat/components/ChatComponentCounselor';
import ChatRoomList from '@/chat/components/ChatRoomListCounselor';
import useWebSocket from '@/chat/hooks/useWebSocket';
import { getUserContext } from '@/commons/contexts/UserInfoContext';
import { OuterBox } from '@/commons/layouts/StyledWrapper';

const ChatContainer = () => {
  const [form, setForm] = useState({ message: '' });
  const [errors, setErrors] = useState({});
  const [messages, setMessages] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedRoomNo, setSelectedRoomNo] = useState(null);
  const { states: { userInfo } } = getUserContext();
  const { messages: socketMessages, sendMessage } = useWebSocket(selectedRoomNo ? `ws://52.78.186.242:5006/chat/room/${selectedRoomNo}` : null);

  // 채팅방 목록 가져오기
  useEffect(() => {
    const fetchChatList = async () => {
      try {
        const result = await chatList();
        setItems(result);
      } catch (err) {
        console.error('채팅방 목록 조회 실패:', err);
      }
    };

    fetchChatList();
  }, []);

  // 선택된 채팅방의 메시지 가져오기
  useEffect(() => {
    const fetchMessages = async () => {
      if (selectedRoomNo) {
        try {
          const dbMessages = await chatHistory(selectedRoomNo);
          setMessages(dbMessages);
        } catch (error) {
          console.error('메시지 불러오기 오류:', error);
        }
      }
    };

    fetchMessages();
  }, [selectedRoomNo]);

  // 소켓 메시지 수신 처리
  useEffect(() => {
    if (socketMessages && socketMessages.length > 0) {
      const lastMessage = socketMessages[socketMessages.length - 1];
      setMessages((prevMessages) => [...prevMessages, lastMessage]);
    }
  }, [socketMessages]);

  // 채팅방 선택 시 처리
  const handleRoomSelect = (roomNo) => {
    setSelectedRoomNo(roomNo);
    setMessages([]); // 새로운 방을 선택할 때 이전 메시지 초기화
  };

  // 메시지 전송 처리
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!form.message.trim()) {
      setErrors({ message: '메세지를 입력하세요' });
      return;
    }

    const socketMessageData = {
      message: form.message,
      senderEmail: userInfo?.email,
      createdAt: new Date().toISOString(),
      roomNo: selectedRoomNo,
    };

    sendMessage(socketMessageData);

    try {
      await sendMessageAPI({ message: form.message, roomNo: selectedRoomNo });
    } catch (error) {
      console.error('메시지 저장 중 오류 발생:', error);
    }

    setForm({ message: '' });
  };

  // 입력 처리
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <OuterBox>
      <h1>채팅방 목록</h1>
      <ChatRoomList items={items} onRoomSelect={handleRoomSelect} />
      <ChatComponent
        messages={messages}
        form={form}
        onChange={handleChange}
        onSubmit={handleSendMessage}
        errors={errors}
      />
    </OuterBox>
  );
};

export default React.memo(ChatContainer);
