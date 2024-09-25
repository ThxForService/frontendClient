'use client';
import React, { useEffect, useState } from 'react';
import AnswerView from '../components/AnswerView';
import { getAnswer } from '../apis/apiAnswer';
import styled from 'styled-components';

const SurveyListWrapper = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

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

const MySurveyAnswerContainer = ({ resultIds }) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const answers = await Promise.all(resultIds.map(id => getAnswer(id)));
        setDataList(answers);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAnswers();
  }, [resultIds]);

  return (
    <SurveyListWrapper>
      <SurveyList>
        {dataList.map((data, index) => (
          <SurveyItem key={index}>
            <AnswerView data={data} />
          </SurveyItem>
        ))}
      </SurveyList>
    </SurveyListWrapper>
  );
};
export default React.memo(MySurveyAnswerContainer);