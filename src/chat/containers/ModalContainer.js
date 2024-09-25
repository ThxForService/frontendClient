import React, { useState } from 'react';
import Modal from '@/chat/components/Modal';
import ModalButton from '@/chat/components/ModalButton';
import ChatRoomListContainer from '@/chat/containers/ChatRoomListContainer';
import ChatContainer from '@/chat/containers/ChatContainer';

const Page = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentContent, setCurrentContent] = useState('list'); // 모달 내부 컨텐츠 상태
  const [roomNo, setRoomNo] = useState(null); // roomNo 상태 관리

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentContent('list'); // 모달이 닫힐 때 리스트로 돌아가도록 설정
    setRoomNo(null); // 모달 닫힐 때 roomNo 초기화
  };

  // ChatRoomList에서 채팅방 클릭 시 채팅방 페이지로 이동
  const handleChatRoomClick = (roomNo) => {
    setRoomNo(roomNo);
    setCurrentContent('chat');
  };

  // 채팅방에서 뒤로가기 버튼 눌렀을 때 채팅방 리스트로 돌아가기
  const handleBackToList = () => {
    setCurrentContent('list');
    setRoomNo(null); // roomNo 초기화
  };

  return (
    <div>
      <ModalButton onClick={openModal} />  {/* 모달 열기 버튼 */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {currentContent === 'list' ? (
          <ChatRoomListContainer onChatRoomClick={handleChatRoomClick} />
        ) : (
          <ChatContainer roomNo={roomNo} onBack={handleBackToList} />
          )}
      </Modal>
    </div>
  );
};

export default Page;
