'use client';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { StyledButton } from '@/commons/components/StyledButton';
import Status from '../constants/status';

const MyListItem = ({ items, onCancel, className }) => {
  const { t } = useTranslation();

  return (
    <TableWrapper className={className}>
      <Table>
        <thead>
          <tr>
            <th>{t('번호')}</th>
            <th>{t('이용하고 싶은 상담 프로그램명')}</th>
            <th>{t('상담 일시')}</th>
            <th>{t('신청 일시')}</th>
            <th>{t('신청 취소')}</th>
          </tr>
        </thead>
        <tbody>
          {items && items.length > 0 ? (
            items.map(({ pgmSeq, pgmNm, pgmStartDate, createdAt }, index) => (
              <tr key={pgmSeq}>
                <td>{index + 1}</td>
                <td>{pgmNm}</td>
                <td>{pgmStartDate}</td>
                <td>{createdAt}</td>
                <td>
                  <StyledButton type="button" onClick={() => onCancel(pgmSeq)}>
                    {t('신청 취소')}
                  </StyledButton>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">{t('신청 내역이 없습니다.')}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  max-width: 1000px; 
  margin: 30px auto 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center; // 가운데 정렬
  }

  th {
    background-color: #f2f2f2;
  }

  tr {
    &:hover {
      background-color: transparent; // 테이블 행 hover 효과 제거
    }
  }
`;

export default MyListItem;
