'use client';
import React, { useState, useEffect } from 'react';
import List from '@/chat/components/ChatHistoryComponent';
import { chatHistory } from '@/chat/apis/apiChat';

const ChatHistoryContainer = ({ roomNo }) => {
  const [items, setItems] = useState([]);

  // 채팅 내역 조회
  const fetchChatHistoryList = async () => {
    try {
      if (roomNo) { // roomNo가 있을 때만 호출
        const result = await chatHistory(roomNo); // roomNo 전달
        console.log(result);
        setItems(result);
      }
    } catch (err) {
      console.error('채팅 내역 조회 오류:', err);
    }
  };

  // roomNo가 변경될 때마다 목록 조회
  useEffect(() => {
    fetchChatHistoryList();
  }, [roomNo]);

  return (
    <section>
      <h1>채팅 목록</h1>
      <List items={items} />
    </section>
  );
};

export default React.memo(ChatHistoryContainer);
