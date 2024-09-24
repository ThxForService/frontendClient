'use client';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { StyledInput } from '@/commons/components/StyledInput';
import { StyledButton } from '@/commons/components/StyledButton';
import StyledMessage from '@/commons/components/StyledMessage';


const JoinForm = ({ form, errors, onSubmit, onChange }) => {
  const { t } = useTranslation();

  return (
    <button onSubmit={onSubmit} autoComplete="off">
      <dl>
        <dt>{t('메세지')}</dt>
        <dd>
          <StyledInput
            type="text"
            name="message"
            value={form?.message ?? ''}
            onChange={onChange}
          />
          <StyledMessage variant="danger">{errors?.message}</StyledMessage>
        </dd>
      </dl>
      {/* 다른 폼 필드 추가 가능 */}

      <StyledButton type="submit">{t('제출')}</StyledButton>
    </button>
  );
};

export default React.memo(JoinForm);
