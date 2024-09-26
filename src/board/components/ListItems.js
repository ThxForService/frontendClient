import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 14px;
  text-align: left;
  table-layout: fixed; /* Fixed layout for consistent width */
`;

const Th = styled.th`
  background-color: #fff; /* Header background color */
  padding: 10px 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-bottom: 2px solid #ddd; /* Optional: add border for visual separation */
  text-align: left; /* Align text to the left for headers */
`;

const Td = styled.td`
  padding: 10px 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left; /* Align text to the left for data cells */
`;

const Button = styled.button`
  background-color: #00a8e8;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  
  &:hover {
    background-color: #27a7d9;
  }

  &:active {
    background-color: #0056b3;
  }
`;

const ListItems = ({ items, onRowClick, bid }) => {
  const router = useRouter();
  return (
    <>
      <Table>
        <thead>
          <tr>
            <Th style={{ width: '10%' }}>번호</Th>
            <Th style={{ width: '40%' }}>제목</Th>
            <Th style={{ width: '20%' }}>작성자</Th>
            <Th style={{ width: '10%' }}>조회수</Th>
            <Th style={{ width: '20%' }}>작성일</Th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.seq} onClick={() => onRowClick(item.seq)}>
              <Td>{index + 1}</Td>
              <Td>{item.subject}</Td>
              <Td>{item.poster}</Td>
              <Td>{item.viewCount}</Td>
              <Td>{new Date(item.createdAt).toLocaleDateString()}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="links" style={{ textAlign: 'right' }}>
        <Button type="button" onClick={() => router.push(`/board/write/${bid}`)}>글 작성</Button>
      </div>
    </>
  );
};

export default React.memo(ListItems);
