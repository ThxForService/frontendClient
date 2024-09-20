'use client';
import React, { useLayoutEffect, useEffect, useState } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import LoginContainer from '@/member/containers/LoginContainer';
import GuestOnlyContainer from '@/member/containers/GuestOnlyContainer';
import { OuterBox } from '@/commons/components/layouts/StyledWrapper';

import './main.scss';

export default function Home({ searchParams }) {
  const { setShowHeader, setShowFooter, setShowMainMenu } = getCommonActions();

  // 배경 클래스 상태
  const [bgClass, setBgClass] = useState('bg1');

  useLayoutEffect(() => {
    setShowHeader(false);
    setShowFooter(false);
    setShowMainMenu(false);
  }, [setShowHeader, setShowFooter, setShowMainMenu]);

  /** 배경 이미지 전환 효과 스타일 */
  useEffect(() => {
    const interval = setInterval(() => {
      setBgClass((prev) => {
        if (prev === 'bg1') return 'bg2';
        if (prev === 'bg2') return 'bg3';
        return 'bg1';
      });
    }, 4000); // 4초마다 배경 변경

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`outer-box ${bgClass}`}>
      <div className={`background ${bgClass}`} />{' '}
      {/* 배경 div에 bgClass 추가 */}
      <GuestOnlyContainer>
        <OuterBox>
          <LoginContainer searchParams={searchParams} />
        </OuterBox>
      </GuestOnlyContainer>
    </div>
  );
}
