import React from 'react';
import styled from 'styled-components';
import { IoChatbubbleEllipses } from "react-icons/io5";

const ButtonContainer = styled.div`
    position: fixed;
    bottom: 30px; 
    right: 30px;   
    z-index: 2000;
`;

const OpenModalButton = styled.button`
    background-color: #1aa7ec; 
    color: white; 
    border: none;
    height: 60px;
    width: 60px;
    border-radius: 24px;
    padding: 10px 15px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const ModalButton = ({ onClick }) => {
  return (
    <ButtonContainer>
      <OpenModalButton onClick={onClick}>
        <IoChatbubbleEllipses size="30"/>
      </OpenModalButton>
    </ButtonContainer>
  );
};

export default ModalButton;
