import React, { useContext } from 'react';
import styled from 'styled-components';
import { PageNavWrap, PageTitle } from './StyledWrapper';
import { IoMdHome } from 'react-icons/io';
import RecommendContext from '@/commons/contexts/CommonContext';

/* 페이지속 헤더 */

const HeaderBox = styled.header`
  /* 헤더 스타일 */
`;

const StyledLink = styled.a`
  font-size: 1.3em;
  color: #000; /* 링크 색상 설정 */
  text-decoration: none; /* 밑줄 제거 */
  &:hover {
    color: #007bff; /* 호버 시 색상 변경 */
  }
`;

const Header = () => {
  const {
    states: { linkHref, linkText },
  } = useContext(RecommendContext);

  return (
    <HeaderBox>
      <PageNavWrap>
        <StyledLink href="/">
          <IoMdHome /> HOME
        </StyledLink>
        &nbsp;&nbsp; &gt; &nbsp;&nbsp;
        <StyledLink href={linkHref}>{linkText}</StyledLink>
        <PageTitle>
          <h1>{linkText}</h1>
        </PageTitle>
      </PageNavWrap>
    </HeaderBox>
  );
};

export default Header;
