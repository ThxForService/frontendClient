'use client';
import React from 'react';
import { getUserStates } from '@/commons/contexts/UserInfoContext';

const MemberOnlyContainer = ({ children }) => {
  const { isCounselor } = getUserStates();
  return isCounselor ? children : <></>;
};

export default React.memo(MemberOnlyContainer);
