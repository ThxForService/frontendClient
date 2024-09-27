'use client';
import React, { useEffect, useState } from 'react';
import AnswerView from '../components/AnswerView';
import { getAnswer } from '../apis/apiAnswer';

const AnswerContainer = ({ params }) => {
  const { resultId } = params;
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getAnswer(resultId);
        setData(data);
        console.log('data', data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [resultId]);

  return data && <AnswerView data={data} />;
};

export default React.memo(AnswerContainer);
