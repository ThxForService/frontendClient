'use client';

import ChatContainer from '@/chat/containers/ChatContainer';
import { ChatBox, ChatMessageBox } from '@/commons/layouts/StyledWrapper';

const ChatPage = ({ params }) => {
  const { roomNo } = params;
  return (
    <>
      <ChatContainer roomNo={roomNo} />
    </>
  );
};

export default ChatPage;
