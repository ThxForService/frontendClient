import React from 'react';
import { useTranslation } from 'next-i18next';
import { StyledInput } from '@/commons/components/StyledInput';
import { StyledButton } from '@/commons/components/StyledButton';
import StyledMessage from '@/commons/components/StyledMessage';
import { getUserContext } from '@/commons/contexts/UserInfoContext';
import { ChatBox, ChatMessageBox, ChatMessageSendBox } from '@/commons/layouts/StyledWrapper';
import styled from 'styled-components';


const MessageBox = styled.form`
    .chat-message {
        display: flex;
        justify-content: flex-start; /* 기본적으로 왼쪽 정렬 */
        margin-bottom: 10px;
    }

    .chat-message.right {
        justify-content: flex-end; /* 오른쪽 정렬 */
    }

    .message-text {
        padding: 10px;
        border-radius: 15px;
        max-width: 60%;
    }

    .message-text.sender {
        background-color: #5697cc;
    }

    .message-text.receiver {
        background-color: #5697cc;
    }
`;

const ChatComponent = ({ messages, form, onChange, onSubmit, errors }) => {
  const { t } = useTranslation();
  const { states: { userInfo } } = getUserContext();


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
              </ul>
            </div>
          </MessageBox>
        </ChatMessageBox>
        <ChatMessageBox>
          <form onSubmit={onSubmit}>
            <dl>
              <dt></dt>
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
        </ChatMessageBox>
      </ChatBox>
    </div>
  )
    ;
};

export default React.memo(ChatComponent);
