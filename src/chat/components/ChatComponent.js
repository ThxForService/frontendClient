import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';
import { StyledInput } from '@/commons/components/StyledInput';
import { StyledButton } from '@/commons/components/StyledButton';
import StyledMessage from '@/commons/components/StyledMessage';
import { getUserContext } from '@/commons/contexts/UserInfoContext';
import { ChatBox, ChatMessageBox, ChatMessageSendBox } from '@/commons/layouts/StyledWrapper';
import styled from 'styled-components';

const MessageBox = styled.form`
    height: 500px;
    overflow-y: auto;
    .chat-message {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 10px;
    }

    .chat-message.right {
        justify-content: flex-end;
    }

    .message-text {
        padding: 10px;
        border-radius: 15px;
        max-width: 60%;
        background-color: #5697cc;  // 기본 수신 메시지 색상
        &.sender {
            background-color: #5697cc;  // 발신 메시지 색상
        }
    }
`;

const ChatComponent = ({ messages, form, onChange, onSubmit, errors }) => {
  const { t } = useTranslation();
  const { states: { userInfo } } = getUserContext();
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div>
      <ChatBox>
        <ChatMessageBox>
          <MessageBox>
            <div>
              <ul>
                {messages.map((msg, index) => (
                  <li
                    key={index}
                    className={`chat-message ${msg.senderEmail === userInfo?.email || msg.email === userInfo?.email ? 'right' : ''}`}
                  >
                    <div key={index}
                         className={`message-text ${msg.senderEmail === userInfo?.email || msg.email === userInfo?.email ? 'sender' : 'receiver'}`}>
                      {msg.message}
                    </div>
                  </li>
                ))}
                <div ref={messageEndRef} />
              </ul>
            </div>
          </MessageBox>
        </ChatMessageBox>
        <ChatMessageSendBox>
          <form onSubmit={onSubmit}>
            <StyledInput type="text" name="message" value={form.message} onChange={onChange} placeholder={t('메시지를 입력하세요')} />
            <StyledButton type="submit">{t('제출')}</StyledButton>
            {errors.message && <StyledMessage variant="danger">{errors.message}</StyledMessage>}
          </form>
        </ChatMessageSendBox>
      </ChatBox>
    </div>
  );
};

export default React.memo(ChatComponent);
