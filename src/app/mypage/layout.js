'use client';
import styled from 'styled-components';
import SubMenus from '@/mypage/components/SubMenus';

const Wrapper = styled.div`
  display: flex;
  aside {
    width: 180px;
    margin-right: 20px;
  }

  .content {
    flex-grow: 1;
  }
`;

const MypageLayout = ({ children }) => {
  return (
    <Wrapper className="layout-width">
      <SubMenus />
      <section className="content">{children}</section>
    </Wrapper>
  );
};

export default MypageLayout;
