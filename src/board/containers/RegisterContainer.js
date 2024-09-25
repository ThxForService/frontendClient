'use client';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import Form from '@/board/components/Form';
import { getBoardInfo } from '@/board/apis/apiboard';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'next-i18next';

const RegisterContainer = ({ bid, seq }) => {
  const [initialValues, setInitialValues] = useState({
    bid: bid || '', // 게시판 ID
    seq: '',
    poster: '',     // 작성자
    guestPw: '',    // 비회원 비밀번호
    subject: '',    // 제목
    notice: false,  // 공지글 여부
    content: '',    // 글 내용
    num1: null,
    num2: null,
    num3: null,
    text1: '',
    text2: '',
    text3: '',
    longText1: '',
    longText2: '',
    mode: seq ? 'edit' : 'write', // 모드에 따라 작성 또는 수정
  });
  const router = useRouter();
  const { t } = useTranslation();
  const { setMainTitle } = getCommonActions();

  useLayoutEffect(() => {
    setMainTitle(t('게시판'));
  }, [setMainTitle, t]);

  const handleSubmit = async (formData) => {
    try {
      if (formData.mode === 'edit') {
        await updateBoardData({ ...formData, seq });
      } else {
        await createBoardData(formData);
      }
      // 게시글 목록 페이지로 이동
      router.replace('/board/list/1');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>{bid ? '게시글 수정' : '게시글 등록'}</h1>
      <Form initialValues={initialValues} onSubmit={handleSubmit} />
    </div>
  );
};

export default React.memo(RegisterContainer);
