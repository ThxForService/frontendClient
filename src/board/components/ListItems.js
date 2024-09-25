import React from 'react';
import { useRouter } from 'next/navigation';

const ListItems = ({ items }) => {
  const router = useRouter();

  const handleRowClick = (seq) => {
    router.push(`/board/view/${seq}`);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>조회수</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item.seq} onClick={() => handleRowClick(item.seq)}>
            <td>{index + 1}</td>
            <td>{item.subject}</td>
            <td>{item.poster}</td>
            <td>{item.viewCount}</td>
            <td>{new Date(item.createdAt).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default React.memo(ListItems);
