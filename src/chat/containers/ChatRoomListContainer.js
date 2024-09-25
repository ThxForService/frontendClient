import React, { useState, useEffect, useCallback } from 'react';
import List from '@/chat/components/ChatRoomList';
import { chatList, startChat } from '@/chat/apis/apiChat';

const ChatRoomListContainer = ({ onChatRoomClick }) => {
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

  // 채팅 시작 버튼 눌렀을 때 roomNo를 받아서 부모 컴포넌트로 전달
  const handleStartChat = useCallback(async () => {
    try {
      const res = await startChat();
      const { roomNo } = res;
      console.log('채팅방 생성 성공');
      onChatRoomClick(roomNo);  // 생성된 roomNo를 부모 컴포넌트로 전달하여 UI 전환
    } catch (err) {
      console.error('채팅방 생성 오류', err);
    }
  }, [onChatRoomClick]);

  useEffect(() => {
    fetchChatList();
  }, []);

  return (
    <section>
      <List items={items} onChatRoomClick={onChatRoomClick} onCreateChat={handleStartChat} />
    </section>
  );
};

export default React.memo(ChatRoomListContainer);
