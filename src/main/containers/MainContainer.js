import React from 'react';
import styled, { keyframes } from 'styled-components';

// 페이드 인/아웃 및 크기 조정 애니메이션 정의
const fadeInOut = keyframes`
  0% { opacity: 0; transform: scale(1.05); }
  10% { opacity: 1; transform: scale(1); }
  30% { opacity: 1; transform: scale(1); }
  40% { opacity: 0; transform: scale(1.05); }
  100% { opacity: 0; transform: scale(1.05); }
`;

// 슬라이드 컨테이너
const BackgroundSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

// 각 배경 이미지를 스타일링 (이미지 크기 및 투명도 조정)
const BackgroundImage = styled.div`
  position: absolute;
  top: 0; /* 상단에 고정 */
  left: 0; /* 왼쪽에 고정 */
  width: 100%; /* 이미지가 가로 전체를 차지하도록 설정 */
  height: 50vh; /* 화면 높이의 50%를 차지하도록 설정 */
  background-size: cover; /* 이미지가 배너에 맞게 크기 조정 */
  background-position: center; /* 이미지를 상단에 맞추고 가운데 정렬 */
  background-image: url(${(props) => props.image});
  opacity: 0.5; /* 이미지 자체의 투명도 조정 */
  animation: ${fadeInOut} 20s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  filter: brightness(0.5);
`;

// 메인 컨테이너
const MainContainerWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const MainContainer = () => {
  return (
    <MainContainerWrapper>
      <BackgroundSlider>
        {/* 각 이미지마다 5초 간격으로 애니메이션 딜레이 설정 */}
        <BackgroundImage image="/images/counsel1.jpg" delay={0} />
        <BackgroundImage image="/images/counsel2.jpg" delay={5} />
        <BackgroundImage image="/images/counsel3.jpg" delay={10} />
        <BackgroundImage image="/images/counsel4.jpg" delay={15} />
      </BackgroundSlider>
      <h1 style={{ position: 'absolute', color: '#fff', zIndex: 1 }}></h1>
    </MainContainerWrapper>
  );
};

export default React.memo(MainContainer);
