import React from 'react';
import { useTranslation } from 'next-i18next';
import { StyledInput } from '@/commons/components/StyledInput';
import { StyledButton } from '@/commons/components/StyledButton';
import StyledMessage from '@/commons/components/StyledMessage';

const ChatComponent = ({ messages, form, onChange, onSubmit, errors }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg.email}: {msg.message}</li>
          ))}
        </ul>
      </div>

      <form onSubmit={onSubmit}>
        <dl>
          <dt>{t('메세지')}</dt>
          <dd>
            <StyledInput
              type="text"
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder={t('메시지를 입력하세요')}
            />
            <StyledMessage variant="danger">{errors?.message}</StyledMessage>
          </dd>
        </dl>
        <StyledButton type="submit">{t('제출')}</StyledButton>
      </form>
    </div>
  );
};

export default React.memo(ChatComponent);
