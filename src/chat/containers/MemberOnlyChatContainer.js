'use client';
import React from 'react';
import { getUserStates } from '@/commons/contexts/UserInfoContext';

const MemberOnlyContainer = ({ children }) => {
  const { isStudent } = getUserStates();
  return isStudent ? children : <></>;
};

export default React.memo(MemberOnlyContainer);
