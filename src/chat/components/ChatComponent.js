import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';
import { getUserContext } from '@/commons/contexts/UserInfoContext';
import { ChatBox, ChatHeader, ChatFooter, ChatMessageBox, ChatMessageSendBox } from '@/commons/layouts/StyledWrapper';
import styled from 'styled-components';

const MessageBox = styled.form`
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
        font-size: 15px;
        color: #FFFFFFCC;
        padding: 10px;
        border-radius: 15px;
        max-width: 60%;
        background-color: rgba(255, 255, 255, 0.08);
        &.sender {
            margin-right: 10px;
        }
        &.receiver{
            margin-left: 10px;
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit(e);
    }
  };

  return (
    <div>
      <ChatBox>
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
                    <div className={`time-text ${msg.senderEmail === userInfo?.email || msg.email === userInfo?.email ? 'sender' : 'receiver'}`}>
                      {msg.createdAt ? msg.createdAt.split(' ')[1].slice(0, 5) : new Date().toTimeString().slice(0, 5)}
                    </div>
                    <div className={`message-text ${msg.senderEmail === userInfo?.email || msg.email === userInfo?.email ? 'sender' : 'receiver'}`}>
                      {msg.message}
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
      </ChatBox>
      <footer>
      </footer>
    </div>
  );
};

export default React.memo(ChatComponent);
