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
            <td>{item.email}</td>
            <td>{item.message}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="6">조회된 채팅내역이 없습니다.</td>
        </tr>
      )}
      </tbody>
    </table>
  );
};

export default List;
