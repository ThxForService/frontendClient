'use client';
import styled from 'styled-components';
import SubMenus from '@/counseling/components/SubMenus';
const Wrapper = styled.div`
  display: flex;
  aside {
    width: 180px;
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
