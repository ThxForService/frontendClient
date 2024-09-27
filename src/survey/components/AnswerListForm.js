'use client';
import React from 'react';
import AnswerView from '../components/AnswerView';
import styled from 'styled-components';
import Link from 'next/link';

const SurveyList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SurveyItem = styled.li`
  margin-bottom: 15px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AnswerListForm = ({ items, loading }) => {
  if (loading) {
    return <div>로딩 중...</div>; // 로딩 중 메시지 추가
  }

  if (!items || items.length === 0) {
    return <div>설문 결과가 없습니다.</div>; // 데이터가 없을 때 메시지
  }

  return (
    <SurveyList>
      {items.map((data) => {
        // 각 데이터가 유효한지 확인
        if (!data || !data.id || !data.resultId) {
          console.error('잘못된 데이터:', data);
          return null; // 잘못된 데이터가 있으면 아무것도 렌더링하지 않음
        }

        return (
          <SurveyItem key={data.id}>
            {' '}
            {/* 고유 ID 사용 */}
            <Link href={`/survey/answer/${data.resultId}`}>
              {' '}
              {/* 항목 클릭 시 URL 변경 */}
              <AnswerView data={data} />
            </Link>
          </SurveyItem>
        );
      })}
    </SurveyList>
  );
};

export default React.memo(AnswerListForm);
