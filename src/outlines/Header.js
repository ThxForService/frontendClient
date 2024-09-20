import React, { useCallback } from 'react';
import styled from 'styled-components';
import cookies from 'react-cookies';
import { useTranslation } from 'react-i18next';
import { getCommonStates } from '../commons/contexts/CommonContext';
import { getUserContext } from '@/commons/contexts/UserInfoContext';
const HeaderBox = styled.header`
  .site-top {
    background: #f8f8f8;
    border-bottom: 1px solid #d5d5d5;
    height: 35px;

    div {
      text-align: right;

      a {
        display: inline-block;
        line-height: 34px;
        margin-left: 10px;
        font-size: ${({ theme }) => theme.fontSizes.normal};

        &.on {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }

  .logo-search {
    div {
      display: flex;
      justify-content: space-between;
      height: 150px;
      align-items: center;

      form {
        display: flex;
        height: 45px;
        width: 380px;

        button {
          width: 45px;
          background: ${({ theme }) => theme.colors.dark};
          border: 0;
          cursor: pointer;

          svg {
            color: ${({ theme }) => theme.colors.gray};
            font-size: 1.75rem;
          }
        }

        input[type='text'] {
          flex-grow: 1;
          border: 5px solid ${({ theme }) => theme.colors.dark};
          padding: 0 10px;
        }
      }
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

  return (
    showHeader && (
      <HeaderBox>
        <section className="site-top">
          <div className="layout-width">
            {isLogin ? (
              <>
                {/* 로그인 상태 */}
                <span>
                  {userInfo?.username}({userInfo?.email}){t('님_로그인')}
                </span>
                <span onClick={onLogout}>{t('로그아웃')}</span>
              </>
            ) : (
              <>
                <a href="/member/join">{t('회원가입')}</a>
                <a href="/member/login">{t('로그인')}</a>
              </>
            )}
          </div>
        </section>
      </HeaderBox>
    )
  );
};

export default React.memo(Header);
