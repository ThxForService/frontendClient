'use client';
import React from 'react';
import status from '../constants/status';
import styled from 'styled-components';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { StyledButton } from '@/commons/components/StyledButton';

const CounselingComplete = ({ counseling, onChange, className }) => {
  const { t } = useTranslation();
  return (
    <div className={className}>
      {counseling && ( // programs가 null이 아닐 때만 렌더링
        <>
          <h1>{counseling.cSeq}</h1>
          <p>
            <strong>설명:</strong> {counseling.rDate}
          </p>
          <p>
            <strong>일시:</strong>{' '}
            {new Date(counseling.rTime).toLocaleString('ko-KR', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              weekday: 'long', // 요일 표시
              hour: 'numeric',
              minute: 'numeric',
              hour12: true, // 12시간제
            })}
          </p>
          <p>
            <strong>정원:</strong> {counseling.studentNo}
          </p>
          <p>
            <strong>신청 가능 기간:</strong> {counseling.ccase} ~{' '}
            {counseling.creason}
          </p>
          <p>
            <strong>접수 상태:</strong>{' '}
            {status[counseling.status] || '상태 미정'}
          </p>
          <Link href={`/counseling/list`} passHref>
            <StyledButton type="button" variant="primary">
              {t('목록으로 돌아가기')}
            </StyledButton>
          </Link>
        </>
      )}
    </div>
  );
};

const StyledViewItems = styled(ViewItems)`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;

  h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    color: #555;
    margin-bottom: 10px;

    strong {
      color: #0070f3;
    }
  }

  a {
    text-decoration: none;
  }

  button {
    margin-top: 15px;
  }
`;

export default StyledViewItems;
