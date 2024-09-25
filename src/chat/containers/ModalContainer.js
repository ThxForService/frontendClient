import React, { useState } from 'react';
import Modal from '@/chat/components/Modal';
import ModalButton from '@/chat/components/ModalButton';
import ChatRoomListContainer from '@/chat/containers/ChatRoomListContainer';

const Page = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>채팅 페이지</h1>
      <ModalButton onClick={openModal} />  {/* 모달 열기 버튼 */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ChatRoomListContainer/>
      </Modal>
    </div>
  );
};

export default Page;
