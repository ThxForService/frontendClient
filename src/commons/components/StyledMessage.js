import React from 'react';
import styled from 'styled-components';

const MessageBox = styled.div``;

export default function StyledMessage({ children }) {
  if (!children) return;

  const messages = Array.isArray(children) ? children : [children];
  return messages.map((message) => (
    <MessageBox key={Date.now() + '_' + message}>{message}</MessageBox>
  ));
}
