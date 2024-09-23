'use client';
import React, { useState, useEffect} from 'react';
import List from '@/chat/components/ChatHistoryComponent';
import { chatHistory } from '@/chat/apis/apiChat';

const ChatHistoryContainer = () => {
  const [items, setItems] = useState([]);

  // 게시판 목록 조회
  const fetchChatHistoryList = async () => {
    try {
      const result = await chatHistory();
      setItems(result);
    } catch (err) {
    }
  };


  // 컴포넌트 마운트 시 목록 조회
  useEffect(() => {
    fetchChatHistoryList();
  }, []);


  return (
    <section>
      <h1>채팅 목록</h1>

      <List
        items={items}
      />
    </section>
  );
};

export default React.memo(ChatHistoryContainer);
