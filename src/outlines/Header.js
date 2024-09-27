import React, { useCallback, useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import cookies from 'react-cookies';
import { useTranslation } from 'react-i18next';
import { getCommonStates } from '../commons/contexts/CommonContext';
import { getUserContext } from '@/commons/contexts/UserInfoContext';
import { BiLock, BiLockOpen, BiUserPlus, BiWinkSmile } from 'react-icons/bi';
import CounselorOnlyContainer from '@/member/containers/CounselorOnlyContainer';
import Link from 'next/link';
import { colors } from '@/theme/colors';

const { sora, white, gray } = colors;

const HeaderBox = styled.header`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  background: ${sora};
  height: 50px;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 0 20px;

  .site-top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .layout-width {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
  }

  a {
    color: ${white};
    text-decoration: none;
    padding: 0 20px;
    transition: color 0.3s;

    &:hover {
      color: ${gray};
    }
  }
`;

const Header = () => {
  const { t } = useTranslation();
  const { showHeader } = getCommonStates();
  const [login, setLogin] = useState(false);
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

  useEffect(() => {
    setLogin(isLogin);
  }, [isLogin]);

  const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL;

  return (
    showHeader && (
      <HeaderBox>
        <section className="site-top">
          <div className="layout-width">
            {isLogin ? (
              <>
                {/* 로그인 상태 */}
                <CounselorOnlyContainer>
                  <Link href="/chat/list" passHref>
                    {t('채팅관리')}
                  </Link>
                </CounselorOnlyContainer>
                <Link href="/mypage" passHref>
                  {t('마이페이지')}
                </Link>
                {isAdmin && (
                  <a href={adminUrl} target="_blank" rel="noopener noreferrer">
                    {t('사이트관리')}
                  </a>
                )}
                <a onClick={onLogout} style={{ cursor: 'pointer' }}>
                  <BiLockOpen className="icon" />
                  {t('로그아웃')}
                </a>
              </>
            ) : (
              <>
                <Link href="/member/join">
                  <BiUserPlus className="icon" />
                  {t('회원가입')}
                </Link>
                <Link href="/member/login">
                  <BiLock className="icon" />
                  {t('로그인')}
                </Link>
              </>
            )}
          </div>
        </section>
      </HeaderBox>
    )
  );
};
export default React.memo(Header);
