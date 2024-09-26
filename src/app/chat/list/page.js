'use client';

import ChatContainer from '@/chat/containers/ChatContainerCounselor';
import { OuterBox } from '@/commons/layouts/StyledWrapper';

const ChatPage = () => {
  return (
    <OuterBox>
      <ChatContainer/>
    </OuterBox>
  );
};

export default ChatPage;
