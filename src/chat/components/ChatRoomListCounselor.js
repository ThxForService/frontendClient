import React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { ChatListButton } from '@/chat/components/ChatRoomList';
import { ChatBox2} from '@/commons/layouts/StyledWrapper';


const ChatRoomList = ({ items, onRoomSelect }) => {
  return (
    <ChatBox2>
      <table>
        <tbody>
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <tr key={index}>
              <td>
                <ChatListButton onClick={() => onRoomSelect(item.roomNo)}>
                  <MdAccountCircle size={45} />
                  {item.roomNm}
                </ChatListButton>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>조회된 채팅방이 없습니다.</td>
          </tr>
        )}
        </tbody>
      </table>
    </ChatBox2>
  );
};

export default React.memo(ChatRoomList);
