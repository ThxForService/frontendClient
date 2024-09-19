import React from 'react';
import styled from 'styled-components';
import { getCommonStates } from '../commons/contexts/CommonContext';

const FooterContainer = styled.footer`
  color: white;
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 200px;
`;

const Footer = () => {
  const { showFooter } = getCommonStates();
  return (
    showFooter && (
      <FooterContainer>
        <h1>푸터</h1>
        <p>© 2024 Your Company. All rights reserved.</p>
      </FooterContainer>
    )
  );
};

export default React.memo(Footer);
