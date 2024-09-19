import React from 'react';
import { getCommonStates } from '../commons/contexts/CommonContext';

const Footer = () => {
  const { showFooter } = getCommonStates();
  return showFooter && <h1>푸터</h1>;
};

export default React.memo(Footer);
