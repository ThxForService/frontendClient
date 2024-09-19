'use client';
import React from 'react';
import LoginContainer from './LoginContainer';
import { getUserStates } from '@/commons/contexts/UserInfoContext';

const MemberOnlyContainer = ({ children }) => {
  const { isLogin } = getUserStates();
  return isLogin ? children : <LoginContainer />;
};

export default React.memo(MemberOnlyContainer);
