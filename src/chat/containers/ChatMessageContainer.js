// ChatMessageContainer.js
'use client';
import React, { useLayoutEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import ChatMessageForm from '@/chat/components/ChatMessageForm';
import { sendMessage } from '@/chat/apis/apiChat';
import ChatComponent from '@/chat/components/ChatComponent';

const ChatMessageContainer = ({ roomNo }) => { // roomNo를 props로 받습니다.
  const { t } = useTranslation();
  const { setMainTitle } = getCommonActions();
  const router = useRouter();
  const [form, setForm] = useState({ message: '', roomNo }); // roomNo를 포함한 상태 초기화
  const [errors, setErrors] = useState({});

  useLayoutEffect(() => {
    setMainTitle(t('채팅'));
  }, [t, setMainTitle]);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const _errors = {};
      let hasErrors = false;

      // 필수 항목 검증
      const requiredFields = {
        message: t('메세지를_입력하세요'),
      };

      for (const [field, message] of Object.entries(requiredFields)) {
        if (!form[field] || !form[field]?.trim()) {
          _errors[field] = _errors[field] ?? [];
          _errors[field].push(message);
          hasErrors = true;
        }
      }

      setErrors(_errors);
      if (hasErrors) {
        return;
      }

      // 메시지 전송 처리
      try {
        await sendMessage(form); // roomNo와 message 모두 포함된 상태
        // 메시지 전송 후 처리 (예: 화면 갱신 등)
      } catch (err) {
        const messages =
          typeof err.message === 'string'
            ? { global: [err.message] }
            : err.message;

        for (const [field, _messages] of Object.entries(messages)) {
          _errors[field] = _errors[field] ?? [];
          _errors[field].push(_messages);
        }
        setErrors({ ..._errors });
      }
    },
    [form, router, t],
  );

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  return (
    <>
      <ChatComponent />
      <ChatMessageForm
        form={form}
        onSubmit={onSubmit}
        onChange={onChange}
        errors={errors}
      />
    </>
  );
};

export default React.memo(ChatMessageContainer);
