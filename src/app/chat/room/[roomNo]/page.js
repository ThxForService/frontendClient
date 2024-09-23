'use client';

import ChatHistoryContainer from '@/chat/containers/ChatHistoryContainer';
import ChatMessageContainer from '@/chat/containers/ChatMessageContainer';
import { OuterBox } from '@/commons/components/layouts/StyledWrapper';

const ChatPage = ({params}) => {
  const {roomNo} = params;
  return (
    <OuterBox>
      <ChatHistoryContainer />
      <ChatMessageContainer roomNo={roomNo}/>
    </OuterBox>
  );
};

export default ChatPage;
