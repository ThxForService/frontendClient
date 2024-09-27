import React from 'react';
import styled from 'styled-components';

const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  margin: 100px auto;
  min-height: 200px;
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

const AnswerView = ({ data }) => {
  const {
    result: { title, range, content },
  } = data;

  return (
    <AnswerWrapper>
      <Title>{title}</Title>
      <Range>{range}</Range>
      <Content>{content}</Content>
    </AnswerWrapper>
  );
};

export default React.memo(AnswerView);


