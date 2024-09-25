'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { StyledButton } from '@/commons/components/StyledButton';
import status from '../constants/status';

const MyListItem = ({ items, onCancel, onUpdate }) => {
  const { t } = useTranslation();

  return (
    <ul>
      {items && items.length > 0 ? (
        items.map(({ pgmSeq, pgmNm }) => (
          <li key={pgmSeq}>
            <Link href={`/group/program/info/${pgmSeq}`}>{pgmNm}</Link>
            <p>{description}</p>
            <p>
              <strong> {t('접수 상태 :')}</strong>{' '}
              {status[items.status] || '상태 미정'}
            </p>
            <StyledButton type="button" onClick={() => onUpdate(pgmSeq)}>
              {t('신청 수정')}
            </StyledButton>
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

export default MyListItem;
