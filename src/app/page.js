'use client';
import React from 'react';
import MainContainer from '@/main/containers/MainContainer';
import LoginContainer from '@/member/containers/LoginContainer';
import { getUserStates } from '@/commons/contexts/UserInfoContext';

export default function Home() {
  const { isLogin } = getUserStates(); // 로그인 상태를 가져옴

  return isLogin ? <MainContainer /> : <LoginContainer />; // 로그인 상태일 때 메인 컨테이너 렌더링
}

/**
 * export default function Home({ searchParams }) {
 const { isLogin } = getUserStates();

return isLogin ? <MainContainer /> : <LoginContainer />;

 return  <MainContainer /> 
}
 *
 */
