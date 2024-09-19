'use client';
import React, { useLayoutEffect } from 'react';
import { getUserStates } from '@/commons/contexts/UserInfoContext';
import { useRouter } from 'next/navigation';

const GuestOnlyContainer = ({ children }) => {
  const { isLogin } = getUserStates();
  const router = useRouter();

  useLayoutEffect(() => {
    if (isLogin) {
      router.back();
    }
  }, [isLogin, router]);

  return children;
};

export default React.memo(GuestOnlyContainer);
