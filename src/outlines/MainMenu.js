import React from 'react';
import { buttonColor } from '@/theme/colors';
import fontSizes from '@/theme/fontSizes';
import fontWeight from '@/theme/fontWeight';
import { getCommonStates } from '@/commons/contexts/CommonContext';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const { dark, light, midGreen, white, lightGreen } = buttonColor;

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
`;

const MenuItem = styled.li`
  position: relative;
  display: inline-block;
  margin: 0 10px;

  a {
    color: dark;
    line-height: 100px;
    width: 200px;
    padding: 0 20px;
    font-size: medium;
    text-decoration: none;
    text-align: center;
    display: block;
    font-size: 1.5em;
    font-weight: bold;

    &:hover {
      background: white;
      text-decoration-line: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 10px;
      color: midGreen;
    }
  }

  &:hover .sub-menu {
    display: flex; 
  }
`;

const SubMenu = styled.div`
  position: absolute;
  top: 80px;
  background: ${white};
  display: none; 
  flex-direction: column;
  width: 200px;
  height: auto;
  z-index: 1000;

  a {
    padding: 0 20px;
    color: ${dark};
    font-size: 1.3em;
    text-decoration: none;

    &:hover {
      background: ${lightGreen};
    }
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
`;

const MainMenu = () => {
  const { showMainMenu } = getCommonStates();
  const { t } = useTranslation();

  return (
    showMainMenu && (
      <MenuContainer>
        <MenuList>
          <MenuItem>
            <a>{t('심리상담센터 소개')}</a>
            <SubMenu className="sub-menu">
              <a href="/introduce/center">{t('센터 소개')}</a>
              <a href="/introduce/member">{t('구성원 소개')}</a>
              <a href="/introduce/business">{t('센터업무 및 이용안내')}</a>
              <a href="/introduce/directions">{t('오시는 길')}</a>
            </SubMenu>
          </MenuItem>
          <MenuItem>
            <a>{t('상담신청')}</a>
            <SubMenu className="sub-menu">
              <a href="/counseling/reserve">{t('상담')}</a>
              <a href="/group/program/info">{t('집단 상담')}</a>
              <a href="/counseling/list">{t('나의 상담 현황')}</a>
            </SubMenu>
          </MenuItem>
          {/* Main 뺴고 넣을 예정 S */}
          {/* <Image src="/images/counsel1.jpg" alt="1" width={60} height={20} /> */}
          {/* Main 뺴고 넣을 예정 E */}
          <MenuItem>
            <a href="/">{t('Main')}</a>
            <SubMenu className="sub-menu">
              <a href="/">{t('로고넣고싶어')}</a>
              <a href="/">{t('메롱')}</a>
            </SubMenu>
          </MenuItem>
          <MenuItem>
            <a>{t('자가 진단')}</a>
            <SubMenu className="sub-menu">
              <a href="/survey/list">{t('심리 검사')}</a>
            </SubMenu>
          </MenuItem>
          <MenuItem>
            <a>{t('게시판')}</a>
            <SubMenu className="sub-menu">
              <a href="/board/list">{t('공지사항')}</a>
              <a href="/board/list">{t('QnA')}</a>
            </SubMenu>
          </MenuItem>
        </MenuList>
      </MenuContainer>
    )
  );
};

export default React.memo(MainMenu);
