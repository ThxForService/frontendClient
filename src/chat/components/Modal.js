import React from 'react';
import styled from 'styled-components';
import { MdOutlineCancel } from "react-icons/md";

const ModalBackdrop = styled.div`
    position: fixed;
    top: 30px;
    left: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    z-index: 1050;
`;

const ModalContainer = styled.div`
    width: 390px;
    height: 690px;
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1050;
    position: fixed;
    bottom: 110px;
    right: 30px;
`;

const ModalCloseButton = styled.button`
    position: absolute;
    right: 10px;
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
        <ModalCloseButton onClick={onClose}><MdOutlineCancel size={30} color="#fff"/></ModalCloseButton>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default Modal;
