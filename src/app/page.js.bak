'use client';
import React, { useLayoutEffect, useEffect, useState } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import LoginContainer from '@/member/containers/LoginContainer';
import GuestOnlyContainer from '@/member/containers/GuestOnlyContainer';
import { OuterBox } from '@/commons/layouts/StyledWrapper';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/images/logo.png';

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
        if (prev === 'bg3') return 'bg4';
        if (prev === 'bg4') return 'bg5';
        if (prev === 'b5') return 'bg6';
        if (prev === 'b6') return 'bg7';
        if (prev === 'b7') return 'bg8';
        return 'bg1';
      });
    }, 4000); // 4초마다 배경 변경

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="outer-box">
      <div className={`background ${bgClass}`} />{' '}
      {/* 배경 이미지 애니메이션이 적용될 div */}
      <GuestOnlyContainer className="no-zoom">
        <div className="login-logobox">
          {' '}
          {/* 새로 추가한 클래스 */}
          <Link href="/" passHref>
            <div className="login-header">
              <Image
                className="hover-effect"
                src={logo}
                alt="로고 이미지"
                width={100}
                height={100}
              />
              <span className="hover-effect">당신의, 당신에 의한,</span>
              <span className="hover-effect">당신을 위한 상담합니다!</span>
            </div>
          </Link>
          <OuterBox>
            <LoginContainer searchParams={searchParams} />
          </OuterBox>
        </div>
      </GuestOnlyContainer>
    </div>
  );
}
