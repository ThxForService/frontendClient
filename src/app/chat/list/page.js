'use client';

import ChatStartContainer from '@/chat/containers/ChatStartContainer';
import { OuterBox } from '@/commons/layouts/StyledWrapper';
import ListContainer from '@/chat/containers/ChatRoomListContainer';

const ChatPage = () => {
  return (
    <OuterBox>
      <ListContainer />
      <ChatStartContainer /> {/* ChatContainer는 API 호출만 수행 */}
    </OuterBox>
  );
};

export default ChatPage;
