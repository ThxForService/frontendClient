'use client';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import Form from '@/board/components/Form';
import { useRouter, useParams } from 'next/navigation';
import { useTranslation } from 'next-i18next';
import { getInfo, createBoardData, updateBoardData } from '@/board/apis/apiboard';

const RegisterContainer = ({ bid, seq }) => {
  const [form, setForm] = useState({
    bid: bid || '',
    seq: '',
    poster: '',
    subject: '',
    notice: false,
    content: '',
    num1: null,
    num2: null,
    num3: null,
    text1: '',
    text2: '',
    text3: '',
    longText1: '',
    longText2: '',
    mode: seq ? 'edit' : 'write',
  });

  const router = useRouter();
  const { t } = useTranslation();
  const { setMainTitle } = getCommonActions();

  useLayoutEffect(() => {
    setMainTitle(t('게시판'));
  }, [setMainTitle, t]);

  useEffect(() => {
    const fetchBoardData = async () => {
      if (seq) {
        try {
          const boardData = await getInfo(seq);
          setForm({
            ...boardData,
            mode: 'edit',
          });
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchBoardData();
  }, [seq]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setForm({ ...form, content: data });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.mode === 'edit') {
        await updateBoardData({ ...form, seq });
        router.replace(`/board/view/${seq}`);
      } else {
        await createBoardData(form);
        router.replace(`/board/list/${bid}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>{seq ? '게시글 수정' : '게시글 등록'}</h1>
      <Form
        form={form}
        handleChange={handleChange}
        handleEditorChange={handleEditorChange}
        handleSubmit={handleSubmit}
        bid={bid}
      />
    </div>
  );
};

export default React.memo(RegisterContainer);
