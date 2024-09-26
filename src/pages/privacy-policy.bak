import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../outlines/Footer'; // Footer 컴포넌트
import Information from '../privacy/Information'; // 개인정보처리방침 내용

// 모달 배경
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// 모달 창
const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

// 닫기 버튼
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const PrivacyPolicy = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태

  const openModal = () => setIsModalOpen(true); // 모달 열기
  const closeModal = () => setIsModalOpen(false); // 모달 닫기

  return (
    <>
      {/* Footer에서 모달을 열 수 있는 함수 전달 */}
      <Footer onOpenModal={openModal} />

      {/* 모달이 열렸을 때 표시 */}
      {isModalOpen && (
        <ModalBackdrop onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <Information /> {/* 개인정보처리방침 내용 */}
          </ModalContent>
        </ModalBackdrop>
      )}
    </>
  );
};

export default PrivacyPolicy;
