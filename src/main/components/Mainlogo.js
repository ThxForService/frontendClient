import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import smilelogo from '/public/images/logo.png'; // 이미지 경로

// LogoContainer: 로고를 포함하는 컨테이너
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; // 중앙 정렬
    height: 100%; // MenuContainer의 높이와 같게 설정
`;

// 로고 이미지 스타일링
const LogoImage = styled(Image)`
    width: 85px;
    height: auto;
    cursor: pointer;
    margin-top: 35px;
    &:focus,
    &:hover {
        outline: none;
    }
`;

// 외부에서 사용할 텍스트 스타일 (MainMenu에서 사용)
export const StyledLogoText = styled.a`
    color: #000000;
    font-size: 1.5em;
    font-weight: bold;
    margin-left: 10px;
    text-decoration: none;
    line-height: 100px;
    margin-top: 0px;

    &:focus,
    &:hover {
        outline: none;
    }
`;

const Mainlogo = () => {
  return (
    <LogoContainer>
      <a
        href="/"
        target="_self"
        style={{ outline: 'none' }}
      >
        <LogoImage src={smilelogo} alt="Smile Logo" width={85} height={85} />
      </a>
    </LogoContainer>
  );
};

export default Mainlogo;
