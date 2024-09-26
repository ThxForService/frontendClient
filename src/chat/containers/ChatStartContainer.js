'use client';

import React, { useCallback } from 'react';
import { startChat } from '@/chat/apis/apiChat';
import ChatStartComponent from '@/chat/components/ChatStartComponent';
import { useRouter } from 'next/navigation';

const ChatStartContainer = () => {
  const router = useRouter();
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

  return (
    <div>
      <ChatStartComponent onCreateChat={handleStartChat} />
    </div>
  );
};

export default ChatStartContainer;
