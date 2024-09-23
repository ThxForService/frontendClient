'use client';
import React from 'react';
import { getCommonStates } from '@/commons/contexts/CommonContext';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

const Menus = styled.nav`
  background: ${({ theme }) => theme.colors.black};
  .inner {
    display: flex;
    height: 45px;
    a {
      line-height: 45px;
      fontsize: ${({ theme }) => theme.fontSizes.mediumLarge}px;
      color: ${({ theme }) => theme.colors.white};
      padding: 0 35px;
    }
    a.on,
    a:hover {
      background: ${({ theme }) => theme.colors.gray};
    }
  }
`;

const MainMenu = () => {
  const { showMainMenu, menuCode } = getCommonStates();
  const { t } = useTranslation();

  return (
    showMainMenu && (
      <Menus>
        <div className="layout-width inner">
        <a
          href="/board/list/1"
          className={classNames({ on: menuCode === 'board' })}
        >
          {t('공지사항')}
        </a>
          <a href="#">{t('메뉴2')}</a>
        </div>
      </Menus>
    )
  );
};

export default React.memo(MainMenu);
