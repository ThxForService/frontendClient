'use client';

import ChatMessageContainer from '@/chat/containers/ChatContainer';

const ChatPage = ({ params }) => {
  const { roomNo } = params;
  return (
    <>
      <ChatMessageContainer roomNo={roomNo} />
    </>
  );
};

export default ChatPage;
