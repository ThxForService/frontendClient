'use client';

import React from 'react';
import { StyledButton } from '@/commons/components/StyledButton'
import { FaPaperPlane } from "react-icons/fa";

const ChatStartComponent = ({ onCreateChat }) => {
  return (
    <section>
      {/* 버튼 클릭 시 onCreateChat 호출 */}
      <StyledButton type="submit" variant="primary" onClick={onCreateChat}>
        채팅시작
        <FaPaperPlane />
      </StyledButton>
    </section>
  );
};

export default ChatStartComponent;
