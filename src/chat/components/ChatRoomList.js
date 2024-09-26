import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { ChatBox, ChatFooter, ChatHeader, ChatListBox} from '@/commons/layouts/StyledWrapper';
import { MdAccountCircle } from 'react-icons/md';
import styled from 'styled-components';


export const ChatListButton = styled.button`
    border-radius: 12px;
    cursor: pointer;
    border: none;
    display: inline-flex;
    align-items: center;
    font-weight: bold;
    transition: all 0.3s ease;
    background: none;
    color: #FFFFFFCC;
    margin-bottom: 10px;
    width: 390px;

    &:hover {
        background: rgba(255, 255, 255, 0.1); /* Light background on hover */
        color: #FFFFFF; /* Change text color to full white */
        transform: scale(1.05); /* Slightly enlarge the button on hover */
    }
`;

export const ChatStartButton = styled.button`
    border-radius: 12px;
    cursor: pointer;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    transition: all 0.3s ease;
    background: rgb(0, 0, 0);
    color: #FFFFFFCC;
    margin-bottom: 10px;
    width: 390px;
    height: 40px;
    font-size: 15px;

    &:hover {
        background: rgba(255, 255, 255, 0.1); /* Light background on hover */
        color: #FFFFFF; /* Change text color to full white */
    }
`;



const ChatRoomList = ({ items, onChatRoomClick, onCreateChat }) => {
  return (
    <ChatBox>
      <ChatHeader><h1>대화</h1></ChatHeader>
      <ChatListBox>
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <tr key={index}>
              <td>
                <ChatListButton onClick={() => onChatRoomClick(item.roomNo)}>
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
      </ChatListBox>
      <ChatFooter>
        <ChatStartButton type="button" variant="primary" onClick={onCreateChat}>
          새 문의하기
          <FaPaperPlane />
        </ChatStartButton>
      </ChatFooter>
    </ChatBox>
  );
};

export default ChatRoomList;
