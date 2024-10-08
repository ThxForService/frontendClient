import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';
import { getUserContext } from '@/commons/contexts/UserInfoContext';
import { ChatBox2, ChatHeader, ChatFooter, ChatMessageBox, ChatMessageSendBox } from '@/commons/layouts/StyledWrapper';
import styled from 'styled-components';

const MessageBox = styled.form`
    overflow-y: auto;

    .chat-message {
        display: flex;
        flex-direction: column; /* 수직 정렬 */
        justify-content: flex-start;
        margin-bottom: 10px;
    }

    .chat-message.right {
        justify-content: flex-end;
        align-items: flex-end; /* 오른쪽 정렬 시 시간도 오른쪽 정렬 */
    }

    .message-text {
        font-size: 15px;
        color: #FFFFFFCC;
        padding: 10px;
        border-radius: 15px;
        max-width: 60%;
        background-color: rgba(255, 255, 255, 0.08); // 기본 수신 메시지 색상

        &.sender {
            margin-right: 10px;
        }

        &.receiver {
            margin-left: 10px;
        }
    }

    .time-text {
        font-size: 12px;
        color: #cccccc;
        margin-top: 5px; /* 메시지와 시간 사이 여백 */
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit(e); // onSubmit 호출
    }
  };

  return (
    <div>
      <ChatBox2>
        <ChatHeader>
          <header>
          </header>
        </ChatHeader>
        <ChatMessageBox>
          <MessageBox>
            <div>
              <ul>
                {messages.map((msg, index) => (
                  <li
                    key={index}
                    className={`chat-message ${msg.senderEmail === userInfo?.email || msg.email === userInfo?.email ? 'right' : ''}`}
                  >
                    <div
                      className={`message-text ${msg.senderEmail === userInfo?.email || msg.email === userInfo?.email ? 'sender' : 'receiver'}`}>
                      {msg.message}
                    </div>
                    <div
                      className={`time-text ${msg.senderEmail === userInfo?.email || msg.email === userInfo?.email ? 'sender' : 'receiver'}`}>
                      {msg.createdAt ? msg.createdAt.split(' ')[1]?.slice(0,5) : new Date().toTimeString().slice(0, 5)}
                    </div>
                  </li>
                ))}
                <div ref={messageEndRef} />
              </ul>
            </div>
          </MessageBox>
        </ChatMessageBox>
        <ChatFooter>
          <form onSubmit={onSubmit}>
            <ChatMessageSendBox type="text" autoComplete="off" name="message" value={form.message} onChange={onChange}
                                onKeyPress={handleKeyPress}
                                placeholder={t('메시지를 입력하세요')} />
          </form>
        </ChatFooter>
        <footer>
        </footer>
      </ChatBox2>
    </div>
  );
};

export default React.memo(ChatComponent);
