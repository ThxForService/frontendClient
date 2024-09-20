import React from 'react';
import styled from 'styled-components';
import fontSizes from '@/theme/fontSizes';
import colors from '@/theme/colors';

const { small } = fontSizes;

const MessageBox = styled.div`
  text-align: center;
  padding: 7px 10px;
  font-size: ${small};
  border-radius: 3px;
  color: ${colors.black};

  & + & {
    margin-top: 5px;
  }

  ${({ color: c }) =>
    c &&
    css`
      color: ${color[c]};
      box-shadow: 2px 2px 5px ${color[c]};
    `}
`;

export default function StyledMessage({ children }) {
  if (!children) return;

  const messages = Array.isArray(children) ? children : [children];
  return messages.map((message) => (
    <MessageBox key={Date.now() + '_' + message}>{message}</MessageBox>
  ));
}
