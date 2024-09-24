'use client';
import React, { useState, useEffect} from 'react';
import List from '@/chat/components/ChatRoomList';
import {chatList } from '@/chat/apis/apiChat';

const ChatRoomListContainer = () => {
  const [items, setItems] = useState([]);

  // 채팅방 목록 조회
  const fetchChatList = async () => {
    try {
      const result = await chatList();
      setItems(result);
    } catch (err) {
      console.error('채팅 메세지 조회 실패:', err);
    }
  };


  useEffect(() => {
    fetchChatList();
  }, []);


  return (
    <section>
      <h1>채팅 메세지</h1>

      <List
        items={items}
      />
    </section>
  );
};

export default React.memo(ChatRoomListContainer);
