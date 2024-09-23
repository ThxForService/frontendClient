'use client';

import ChatContainer from '@/chat/containers/ChatContainer';
import { OuterBox } from '@/commons/components/layouts/StyledWrapper';
import ListContainer from '@/chat/containers/ChatListContainer';

const ChatPage = () => {
  return (
    <OuterBox>
      <ListContainer />
      <ChatContainer /> {/* ChatContainer는 API 호출만 수행 */}
    </OuterBox>
  );
};

export default ChatPage;
