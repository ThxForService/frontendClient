'use client';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { StyledButton } from '@/commons/components/StyledButton';
import Status from '../constants/status';

const MyListItem = ({ items, onCancel }) => {
  const { t } = useTranslation();

  return (
    <ul className="MyListItem">
      {items && items.length > 0 ? (
        items.map(({ pgmSeq, pgmNm, description, status }) => (
          <li key={pgmSeq}>
            <p>
              <strong>{t('프로그램명:')}</strong> {pgmNm}
            </p>
            <p>
              <strong>{t('프로그램 설명:')}</strong> {description}
            </p>
            <p>
              <strong> {t('접수 상태 :')}</strong>{' '}
              {Status[status] || '상태 미정'}
            </p>
            <StyledButton type="button" onClick={() => onCancel(pgmSeq)}>
              {t('신청 취소')}
            </StyledButton>
          </li>
        ))
      ) : (
        <li>{t('신청 내역이 없습니다.')}</li>
      )}
    </ul>
  );
};

const StyledMyListItem = styled(MyListItem)`
  .my-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .list-item {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 16px;
    margin-bottom: 10px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #e9e9e9;
    }
  }

  p {
    margin: 5px 0;
  }

  strong {
    color: #333;
  }

  button {
    margin-top: 10px;
  }
`;

export default StyledMyListItem;
