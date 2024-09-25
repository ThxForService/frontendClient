'use client';
import React from 'react';
import { getUserStates } from '@/commons/contexts/UserInfoContext';

const MemberOnlyContainer = ({ children }) => {
  const { isLogin } = getUserStates();
  return isLogin ? children : <></>;
};

export default React.memo(MemberOnlyContainer);
