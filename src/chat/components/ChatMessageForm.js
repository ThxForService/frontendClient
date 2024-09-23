// JoinForm.js
'use client';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { StyledInput } from '@/commons/components/StyledInput';
import { StyledButton } from '@/commons/components/StyledButton';
import StyledMessage from '@/commons/components/StyledMessage';

const FormBox = styled.form`
    dl {
        display: flex;
        align-items: center;

        dt {
            width: 120px;
        }

        dd {
            flex-grow: 1;
        }
    }

    dl + dl {
        margin-top: 5px;
    }
`;

const JoinForm = ({ form, errors, onSubmit, onChange }) => {
  const { t } = useTranslation();

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
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
    </FormBox>
  );
};

export default React.memo(JoinForm);
