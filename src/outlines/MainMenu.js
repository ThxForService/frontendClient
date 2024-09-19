import React from 'react';
import { colors } from '@/theme/colors';
import fontSizes from '@/theme/fontSizes';
import fontWeight from '@/theme/fontWeight';
import { getCommonStates } from '@/commons/contexts/CommonContext';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
const { dark, white, midGreen, lightGreen } = colors;

const MenuContainer = styled.nav`
  position: relative;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const MenuList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const MenuItem = styled.li`
  position: relative;
  display: inline-block;
  margin: 0 10px;

  a {
    color: ${dark};
    line-height: 100px;
    width: 200px;
    padding: 0 20px;
    font-size: 1.5em;
    text-decoration: none;
    text-align: center;
    display: block;
    font-weight: bold;
    transition: color 0.3s, background 0.3s;

    &:hover {
      background: ${white};
      text-decoration-line: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 10px;
      color: ${midGreen};
    }

    &.on {
      // Define styles for active link if needed
    }
  }

  &:hover .sub-menu {
    display: flex;
  }
`;

const SubMenu = styled.div`
  position: absolute;
  top: 100px; /* Adjust based on your layout */
  background: ${white};
  display: none;
  flex-direction: column;
  width: 200px;
  z-index: 1000;

  a {
    padding: 0 20px;
    color: ${dark};
    font-size: 1.3em;
    text-decoration: none;
    transition: background 0.3s;

    &:hover {
      background: ${lightGreen};
    }
  }
`;

const MainMenu = () => {
  const { showMainMenu } = getCommonStates();
  const { t } = useTranslation();

  return (
    showMainMenu && (
      <MenuContainer>
        <MenuList>
          <MenuItem>
            <a href="#">{t('qwe')}</a>
            <SubMenu className="sub-menu">
              <a href="/mypage/info">{t('qwe')}</a>
              <a href="/mypage/info">{t('asd')}</a>
              <a href="/mypage/info">{t('zxc')}</a>
            </SubMenu>
          </MenuItem>
          <MenuItem>
            <a href="#">{t('asd')}</a>
            <SubMenu className="sub-menu">
              <a href="/mypage/info">{t('qwe')}</a>
              <a href="/mypage/info">{t('asd')}</a>
              <a href="/mypage/info">{t('zxc')}</a>
            </SubMenu>
          </MenuItem>
          <MenuItem>
            <a href="#">{t('zxc')}</a>
            <SubMenu className="sub-menu">
              <a href="/mypage/info">{t('qwe')}</a>
              <a href="/mypage/info">{t('asd')}</a>
              <a href="/mypage/info">{t('zxc')}</a>
            </SubMenu>
          </MenuItem>
          <MenuItem>
            <a href="#">{t('qaz')}</a>
            <SubMenu className="sub-menu">
              <a href="/mypage/info">{t('qwe')}</a>
              <a href="/mypage/info">{t('asd')}</a>
              <a href="/mypage/info">{t('zxc')}</a>
            </SubMenu>
          </MenuItem>
        </MenuList>
      </MenuContainer>
    )
  );
};

export default React.memo(MainMenu);
