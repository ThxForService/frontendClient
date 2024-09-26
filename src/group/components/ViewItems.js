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
  position: relative; /* 부모 요소에 상대 위치 설정 */
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  text-align: center; 
  overflow: hidden; /* 자식 요소가 부모를 벗어나지 않게 함 */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/images/groupPopup.jpg'); /* public 폴더를 기준으로 경로 설정 */
    background-size: cover; /* 이미지 크기 조정 */
    background-position: center; /* 중앙 정렬 */
    opacity: 0.6; /* 투명도 설정 */
    z-index: 0; /* 배경이 글씨 뒤에 오도록 설정 */
  }

  h1, p {
    position: relative; /* 텍스트가 흐리게 처리된 배경 위에 위치하도록 설정 */
    z-index: 1; /* 텍스트가 배경 위에 오도록 설정 */
  }

h1 {
  font-size: 24px;
  color: #333;
  font-weight: bold; /* 텍스트를 더 진하게 설정 */
  margin-bottom: 15px;
}

p {
  font-size: 16px;
  line-height: 1.5;
  color: #555;
  margin-bottom: 10px;
  font-weight: 1000; 

  strong {
    color: #555; /* 강조된 텍스트 색상도 검은색으로 설정 */
    font-weight: bold; /* 강조된 텍스트를 더 진하게 설정 */
  }
}
`;

export default StyledViewItems;
