import React from 'react';
import './Chat.css';

const ChatRoomList = ({ items, onRoomSelect }) => {
  return (
    <div className="chat-room-list">
      <table>
        <thead>
        <tr>
          <th>채팅방 목록</th>
        </tr>
        </thead>
        <tbody>
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <tr key={index} onClick={() => onRoomSelect(item.roomNo)} className="chat-room-item">
              <td>{item.roomNm}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td>조회된 채팅방이 없습니다.</td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(ChatRoomList);
