'use client';

import ChatContainer from '@/chat/containers/ChatContainer';

const ChatPage = ({ params }) => {
  const { roomNo } = params;
  return (
    <>
      <ChatContainer roomNo={roomNo} />
    </>
  );
};

export default ChatPage;
