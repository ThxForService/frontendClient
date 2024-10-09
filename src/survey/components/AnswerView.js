import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledButton } from '@/commons/components/StyledButton';
import Link from 'next/link';

const AnswerWrapper = styled.div`
  display: flex;
  min-width: 1000px;
  flex-direction: column; /* 세로 방향으로 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  margin: 100px auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const Range = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  color: #555;
`;

const Content = styled.div`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`;
const AnswerGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  marginbottom: 100px;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start; /* 버튼을 왼쪽 정렬 */
  width: 100%;
  margin-top: 100px; /* 버튼과 내용 사이의 여백 */
  
 & > * {
    margin-right: 10px; /* 각 버튼 사이에 50px 간격을 줌 */
  }

  /* 마지막 버튼의 오른쪽 마진은 없앰 */
  button:last-child {
    margin-right: 0;
  }
`;

const AnswerView = ({ data }) => {

  const {
    result: { title, range, content },
  } = data;

  return (
    <AnswerWrapper>
      <AnswerGroup>
        <Title>{title}</Title>
        <Range>{range}</Range>
        <Content>{content}</Content>
      </AnswerGroup>
      <ButtonGroup>
        <Link href="/survey/list" passHref>
          <StyledButton>리스트</StyledButton>
        </Link>
        <Link href="/myPage" passHref>
          <StyledButton>마이페이지</StyledButton>
        </Link>
      </ButtonGroup>
    </AnswerWrapper>
  );
};

export default React.memo(AnswerView);
