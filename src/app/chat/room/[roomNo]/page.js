'use client';

import ChatContainer from '@/chat/containers/ChatContainer';
import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';

const ChatPage = ({ params }) => {
  const { roomNo } = params;
  return (
    <MemberOnlyContainer>
      <ChatContainer roomNo={roomNo} />
    </MemberOnlyContainer>
  );
};

export default ChatPage;
