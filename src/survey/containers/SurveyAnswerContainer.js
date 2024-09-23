'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { getInfo } from '../apis/apiInfo';

const SurveyAnswerContainer = ({ params }) => {
  const { sNo } = params;
  const [data, setData] = useState(null);
  const [form, setForm] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const data = await getInfo(sNo);
        setData(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [sNo]);

  return <></>;
};

export default React.memo(SurveyAnswerContainer);
