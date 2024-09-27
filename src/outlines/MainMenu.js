import React from 'react';
import { colors } from '@/theme/colors';
import { getCommonStates } from '@/commons/contexts/CommonContext';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Mainlogo from '../main/components/Mainlogo';

const { dark, white, lightGreen } = colors;

const MenuContainer = styled.nav`
    position: relative;
    left: 0;
    width: 100%;
    height: 100px;
    z-index: 1000;
    display: flex;
    justify-content: space-around; // 메뉴 항목들 사이에 고르게 배치
    padding: 10px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const MenuList = styled.ul`
    display: flex;
    justify-content: space-between; /* 전체 메뉴의 배치를 컨트롤 */
    width: 75%; /* 메뉴 전체가 차지하는 너비 */
    padding: 0 10px; /* 좌우 패딩으로 여유를 줄 수 있음 */
`;

const MenuItem = styled.li`
    position: relative;
    display: inline-block;
    margin: 0 -40px;
    padding: 0 10px; /* 각 메뉴 아이템의 내부 패딩 */

    a {
        color: ${dark}; // dark 사용
        line-height: 100px;
        width: 200px;
        padding: 0 20px;
        font-size: medium;
        text-decoration: none;
        text-align: center;
        display: block;
        font-size: 1.5em;
        font-weight: bold;
    }

    &:hover .sub-menu {
        display: flex;
        opacity: 1;
        pointer-events: auto;
    }
`;

const SubMenu = styled.div`
    position: absolute;
    top: 80px;
    background: ${white};
    flex-direction: column;
    width: 200px;
    height: auto;
    z-index: 1000;
    opacity: 0; /* 서브메뉴를 처음에 보이지 않게 설정 */
    transform: translateY(-20px); /* 처음에는 약간 위쪽에 위치 */
    transition: opacity 0.5s ease, transform 0.5s ease; /* 부드러운 애니메이션 효과 추가 */
    border-radius: 20px; /* 박스를 둥글게 설정 */
    pointer-events: none; /* 서브메뉴가 안보일 때는 클릭 불가 */

    a {
        padding: 0 20px;
        color: ${dark};
        font-size: 1.3em;
        text-decoration: none;
        transition: background 0.3s ease;

        &:hover {
            background: ${lightGreen};
            border-radius: 10px; /* 링크 호버 시 박스도 둥글게 유지 */
        }
    }

    ${MenuItem}:hover & {
        display: flex;
        opacity: 1; /* 서브메뉴가 나타나도록 설정 */
        transform: translateY(0); /* 원래 위치로 이동 */
        pointer-events: auto;
    }
`;

const MainMenu = () => {
  const { showMainMenu } = getCommonStates();
  const { t } = useTranslation();

  return (
    showMainMenu && (
      <>
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
                <a href="/counseling/reserve">{t('개인 상담 신청')}</a>
                <a href="/counseling/group">{t('집단 상담 프로그램')}</a>
                <a href="/counseling/list">{t('나의 상담 현황')}</a>
              </SubMenu>
            </MenuItem>

            <MenuItem>
              <Mainlogo />
            </MenuItem>

            <MenuItem>
              <a>{t('자가 진단')}</a>
              <SubMenu className="sub-menu">
                <a href="/survey/answer">{t('answer')}</a>
                <a href="/survey/list">{t('list')}</a>
                <a href="/survey/register">{t('register')}</a>
                <a href="/survey/view">{t('view')}</a>
              </SubMenu>
            </MenuItem>

            <MenuItem>
              <a>{t('게시판')}</a>
              <SubMenu className="sub-menu">
                <a href="/board/list/1">{t('공지사항')}</a>
                <a href="/board/list/2">{t('QnA')}</a>
              </SubMenu>
            </MenuItem>
          </MenuList>
        </MenuContainer>
      </>
    )
  );
};

export default React.memo(MainMenu);
