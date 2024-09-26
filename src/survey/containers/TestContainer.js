'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { produce } from 'immer';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { getTest } from '../apis/apiInfo';
import answer from '../apis/apiAnswer';
import TestForm from '../components/TestForm';

const TestContainer = ({ params }) => {
  const { testType } = params;
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    testType,
    answers: {},
  });
  const [errors, setErrors] = useState({});

  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const items = await getTest(testType);
        setItems(items);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [testType]);

  const onClick = useCallback((questionId, score) => {
    setForm(
      produce((draft) => {
        draft.answers[questionId] = score;
      }),
    );
  }, []);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      /* 유효성 검사 */
      let hasErrors = false;
      setErrors({});
      const { answers } = form;
      const answered = Object.values(answers).length;
      if (answered < items.length) {
        setErrors({ global: t('모든_문항에_답변하세요.') });
        hasErrors = true;
      }

      if (hasErrors) {
        // 검증 실패시 처리 X
        return;
      }

      // 설문지 저장 처리
      try {
        const res = await answer(form);
        router.replace(`/survey/answer/${res.resultId}`);
      } catch (err) {
        console.error(err);
        const message = err.message;
        setErrors(typeof message === 'string' ? { global: message } : message);
      }
    },
    [form, items, t, router],
  );

  return (
    <>
      <TestForm
        items={items}
        form={form}
        errors={errors}
        onClick={onClick}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default React.memo(TestContainer);
