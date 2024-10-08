'use client';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const SubMenuBox = styled.aside`
  height: 650px;
  min-width: 200px;
  width: 200px;

  background-size: 100% 40px;
  border-radius: 5px;
  padding: 20px 15px;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.4);
  position: relative;
  top: 60px;

  background: ${({ theme }) => theme.colors.white};
  a {
    display: block;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSizes.medium}px;
    padding: 15px 20px;
  }
  a:hover {
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
  a + a {
    border-top: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

const SubMenus = () => {
  const { t } = useTranslation();
  return (
    <SubMenuBox>
      <a href="/mypage/info">{t('개인상담_조회')}</a>
      <a href="/counseling/group/list">{t('집단상담_조회')}</a>
    </SubMenuBox>
  );
};

export default React.memo(SubMenus);
