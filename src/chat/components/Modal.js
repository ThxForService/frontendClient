import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 1050;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1050;
  width: 90%;
  max-width: 450px;
  //position: relative;
    position: fixed;
    bottom: 110px;  /* 페이지 하단에서의 거리 */
    right: 30px;   /* 페이지 우측에서의 거리 */
    
`;

const ModalCloseButton = styled.button`
  position: absolute;
  bottom: 10px; /* Position it at the bottom */
  right: 10px;  /* Position it at the right */
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const Modal = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        {children}
        <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default Modal;
