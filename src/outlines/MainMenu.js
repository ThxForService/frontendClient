import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';

const MenuBox = styled.nav`
  background: white;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
`;

const MenuItem = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 10px;

  a {
    color: dark;
    text-decoration: none;
    &:hover {
      color: midGreen;
    }
  }

  &:hover .sub-menu {
    display: block;
  }
`;

const SubMenu = styled.div`
  position: absolute;
  background: white;
  display: none;
  width: 200px;
  z-index: 1000;
  a {
    color: dark;
    &:hover {
      background: lightGreen;
    }
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;

  img {
    width: 180px;
    height: auto;
  }
`;

const MainMenu = () => {
  const { t } = useTranslation();

  return (
    <MenuBox>
      <MenuItem>
        <a href="/counseling/reserve">{t('예약')}</a>
        <SubMenu className="sub-menu">
          <a href="/counseling/reserve">{t('예약 신청')}</a>
          <a href="/counseling/list">{t('나의 예약 현황')}</a>
        </SubMenu>
      </MenuItem>
      <MenuItem>
        <a href="/menu2">{t('메뉴2')}</a>
        <SubMenu className="sub-menu">
          <a href="/submenu3">{t('서브 메뉴3')}</a>
          <a href="/submenu4">{t('서브 메뉴4')}</a>
        </SubMenu>
      </MenuItem>
      <Logo>
        <Link href="/">로고</Link>
      </Logo>
    </MenuBox>
  );
};

export default MainMenu;
