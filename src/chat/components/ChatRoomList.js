import React from 'react';

const List = ({ items }) => {
  return (
    <table>
      <thead>
      <tr>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {items && items.length > 0 ? (
        items.map((item, index) => (
          <tr key={index}>
            <td>
              <a href={`/chat/room/${item.roomNo}`}>
                {item.roomNm}
              </a>
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
  );
};

export default List;
