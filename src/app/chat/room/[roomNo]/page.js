'use client';

import ChatHistoryContainer from '@/chat/containers/ChatHistoryContainer';
import ChatMessageContainer from '@/chat/containers/ChatMessageContainer';

const ChatPage = ({ params }) => {
  const { roomNo } = params;
  return (
    <>
      <ChatHistoryContainer  roomNo={roomNo}/>
      <ChatMessageContainer roomNo={roomNo} />
    </>
  );
};

export default ChatPage;
