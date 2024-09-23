import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import cookies from 'react-cookies';
import { useTranslation } from 'react-i18next';
import { getCommonStates } from '../commons/contexts/CommonContext';
import { getUserContext } from '@/commons/contexts/UserInfoContext';
import { colors } from '@/theme/colors';
import { BiLock, BiLockOpen, BiUserPlus, BiWinkSmile } from 'react-icons/bi';
import { GrUserManager } from 'react-icons/gr';
import Link from 'next/link';

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

  const adminUrl = 'https://www.youtube.com/';

  return (
    showHeader && (
      <HeaderBox>
        <section className="site-top">
          <div className="layout-width">
            {isLogin ? (
              <div>
                {isAdmin && (
                  //컴포넌트를 교체하는 방식인데 a태그로 새 창 이동해서 페이지 교체
                  <a href={adminUrl} target="_blank">
                    <GrUserManager className="icon" />
                    {t('사이트_관리')}
                  </a>
                )}
                <Link href="/mypage" passHref>
                  {t('마이페이지')}
                </Link>
                <a onClick={onLogout}>
                  <BiLockOpen className="icon" />
                  {t('로그아웃')}
                </a>
              </div>
            ) : (
              <div>
                <Link href="/member/join">
                  <BiUserPlus className="icon" />
                  {t('회원가입')}
                </Link>
                <Link href="/member/login">
                  <BiLock className="icon" />
                  {t('로그인')}
                </Link>
              </div>
            )}
          </div>
        </section>
      </HeaderBox>
    )
  );
};

export default React.memo(Header);
