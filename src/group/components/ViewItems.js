'use client';
import React from 'react';
import programStatus from '../constants/programStatus';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const ViewItems = ({ programs, className }) => {
  const { t } = useTranslation();
  return (
    <div className={className}>
      {programs && (
        <>
          <h1>{programs.pgmNm}</h1>
          <p>
            <strong>설명:</strong> {programs.description}
          </p>
          <p>
            <strong>일시:</strong>{' '}
            {new Date(programs.pgmStartDate).toLocaleString('ko-KR', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              weekday: 'long',
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            })}
          </p>
          <p>
            <strong>정원:</strong> {programs.capacity}
          </p>
          <p>
            <strong>신청 가능 기간:</strong> {programs.startDate} ~{' '}
            {programs.endDate}
          </p>
          <p>
            <strong>접수 상태:</strong>{' '}
            {programStatus[programs.status] || '상태 미정'}
          </p>
        </>
      )}
    </div>
  );
};

const StyledViewItems = styled(ViewItems)`
  padding: 20px;
  background-color: #ffffff; 
  border-radius: 8px;
  margin: 20px 0;
  text-align: center; 

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
      color: #333; 
    }
  }

  a {
    text-decoration: none;
  }
`;


export default StyledViewItems;
