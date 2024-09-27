'use client';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCommonStates } from '../commons/contexts/CommonContext';
import { colors } from '@/theme/colors';
import { useTranslation } from 'react-i18next';
import { getUserContext } from '@/commons/contexts/UserInfoContext';
import cookies from 'react-cookies';
import { useRouter } from 'next/navigation';

const { white, gray } = colors;

const FooterBox = styled.footer`
  min-height: 270px;
  background: ${gray};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterWrap = styled.div`
  width: 1440px;
  display: flex;
`;

const Address = styled.div`
  width: 100%;
  font-size: 16px;
  margin-left: 100px;
  margin-bottom: 30px;
  margin-top: 10px;
  font-weight: bold;

  span {
    color: ${white};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Information = styled.div`
  width: 100%;
  font-size: 13px;
  margin-left: 100px;
  margin-bottom: 20px;
  line-height: 1.5;
  color: ${white};
`;

const Information2 = styled.div`
  width: 100%;
  font-size: 13px;
  margin-left: 100px;
  line-height: 1.5;
  color: ${white};
`;

const FooterContentBox = styled.div`
  margin-bottom: 20px;
`;

const FooterImageBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-left: 500px;
  margin-top: 180px;
`;

const Footer = () => {
  const { t } = useTranslation();
  const { showFooter } = getCommonStates();
  const router = useRouter(); // 컴포넌트 최상단에서 호출.

  const [isMounted, setIsMounted] = useState(false); // 클라이언트 사이드 여부 확인

  useEffect(() => {
    setIsMounted(true); // 컴포넌트가 마운트되면 클라이언트 사이드임을 설정.
  }, []);

  const {
    states: { isLogin, userInfo, isAdmin },
    actions: { setIsLogin, setIsAdmin, setUserInfo },
  } = getUserContext();

  const onLogout = useCallback(() => {
    setIsLogin(false);
    setIsAdmin(false);
    setUserInfo(null);
    cookies.remove('token', { path: '/' });
  }, [setIsLogin, setIsAdmin, setUserInfo]);

  const handlePrivacyPolicyClick = () => {
    if (isMounted) {
      router.push('/privacypolicy'); // 페이지 이동
    }
  };

  return (
    showFooter && (
      <FooterBox>
        <FooterWrap>
          <FooterContentBox>
            <Address>
              <span onClick={handlePrivacyPolicyClick}>개인정보처리방침</span>
            </Address>

            <Information2>
              주소(이대센터) : (04104) 서울 마포구 신촌로 176 이메일
              :qwer1234@thx.or.kr
              <br />
              전화 :02-222-3333
              <br />
              주소(강남센터) : (06134) 서울 강남구 테헤란로7길 7 에스코빌딩 6층
              이메일 :JH.K77@thx.or.kr
              <br />
              전화: 02-444-5555
              <br />
              <br />
              Copyrights (c) 2024 THX Counseling Center. All rights reserved.
            </Information2>
          </FooterContentBox>
          <FooterImageBox></FooterImageBox>
        </FooterWrap>
      </FooterBox>
    )
  );
};

export default React.memo(Footer);
