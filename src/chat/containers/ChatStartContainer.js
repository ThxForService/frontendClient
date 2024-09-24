'use client';

import React, { useCallback } from 'react';
import { startChat } from '@/chat/apis/apiChat';
import ChatStartComponent from '@/chat/components/ChatStartComponent';

const ChatStartContainer = () => {
  const handleStartChat = useCallback(async () => {
    try {
      await startChat();
      console.log('채팅방 생성 성공');
    } catch (err) {
      console.error('채팅방 생성 오류', err);
    }
  }, []);

  return (
    <div>
      <ChatStartComponent onCreateChat={handleStartChat} />
    </div>
  );
};

export default ChatStartContainer;
