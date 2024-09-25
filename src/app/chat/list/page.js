'use client';

import { OuterBox } from '@/commons/layouts/StyledWrapper';
import ChatRoomListContainer from '@/chat/containers/ChatRoomListContainer';

const ChatPage = () => {
  return (
    <OuterBox>
      <ChatRoomListContainer />
    </OuterBox>
  );
};

export default ChatPage;
