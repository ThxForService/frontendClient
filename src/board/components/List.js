import React from 'react';

const List = ({ items, onCheckItem, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>게시판 ID</th>
          <th>게시판 이름</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items && items.length > 0 ? (
          items.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  value={index}
                  onChange={() => onCheckItem(index)}
                />
              </td>
              <td>{item.bid}</td>
              <td>{item.bname}</td>
              <td>
                <a href={`/board/update/${item.bid}`}>수정하기</a>
                <a href={`/board/list/${item.bid}`} target="_blank">
                  미리보기
                </a>
                <button onClick={() => onDelete(item.bid)}>삭제하기</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">조회된 게시판이 없습니다.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default List;
