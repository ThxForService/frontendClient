'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import List from '@/chat/components/ChatRoomList';
import ChatStartComponent from '@/chat/components/ChatStartComponent';
import { chatList, startChat } from '@/chat/apis/apiChat';

const ChatRoomListContainer = () => {
  const [items, setItems] = useState([]);
  const router = useRouter();

  // 채팅방 목록 조회
  const fetchChatList = async () => {
    try {
      const result = await chatList();
      setItems(result);
    } catch (err) {
      console.error('채팅 메세지 조회 실패:', err);
    }
  };

  // 채팅 시작
  const handleStartChat = useCallback(async () => {
    try {
      const res = await startChat();
      const { roomNo } = res;
      console.log('채팅방 생성 성공');
      router.replace('/chat/room/' + roomNo);
    } catch (err) {
      console.error('채팅방 생성 오류', err);
    }
  }, []);


  useEffect(() => {
    fetchChatList();
  }, []);


  return (
    <section>
      <List
        items={items}
      />
      <ChatStartComponent onCreateChat={handleStartChat} />
    </section>
  );
};

export default React.memo(ChatRoomListContainer);
