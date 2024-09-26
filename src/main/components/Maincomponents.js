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

// 상담문의 상자 스타일
const InquiryBox = styled.div`
  position: absolute;
  top: 60%; /* 센터의 비전 아래에 위치 */
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #95bad7;
  padding: 20px 40px;
  border-radius: 10px;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  width: 780px; /* 상자의 너비 */
  height: auto;
  overflow-y: auto; /* 내용이 많을 경우 스크롤 생성을 허용 */
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between; /* 좌우 간격을 동일하게 유지 */
  margin-top: 20px;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 텍스트 왼쪽 정렬 */
  margin: 60px;
`;

const AddressBox = styled.div`
  margin-top: -20px; /* 상단 여백 */
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2); /* 투명한 흰색 배경 */
  font-size: 1.2rem;
  color: #fff;
  width: 55px;
  margin-left: 20px;
  margin-right: auto;
`;

const PhoneBox = styled.div`
  margin-top: -20px;
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2); /* 투명한 흰색 배경 */
  font-size: 1.2rem;
  color: #fff;
  width: 55px;
  margin-left: -10px;
`;

const EmailBox = styled.div`
  margin-top: -20px; /* 상단 여백 */
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2); /* 투명한 흰색 배경 */
  font-size: 1.2rem;
  color: #fff;
  width: 70px;
  margin-left: -0px;
`;

const AddressText = styled.p`
  margin-top: 20px; /* 아래로 이동 */
  margin-left: -20px; /* 왼쪽으로 이동 */
  font-size: 1.2rem;
`;

const AddressText2 = styled.p`
  margin-top: -10px; /* 아래로 이동 */
  margin-left: 20px; /* 왼쪽으로 이동 */
  font-size: 1.2rem;
`;

const EmailText = styled.p`
  margin-top: 20px; /* 아래로 이동 */
  margin-left: -40px; /* 왼쪽으로 이동 */
  font-size: 1.2rem;
`;

const PhoneText = styled.p`
  margin-top: 20px; /* 아래로 이동 */
  margin-left: -30px; /* 왼쪽으로 이동 */
  font-size: 1.2rem;
`;

const Maincomponents = () => {
  return (
    <MainContainerWrapper>
      <BackgroundSlider>
        {/* 각 이미지마다 5초 간격으로 애니메이션 딜레이 설정 */}
        <BackgroundImage image="/images/counsel1.jpg" delay={0} />
        <BackgroundImage image="/images/counsel2.jpg" delay={5} />
        <BackgroundImage image="/images/counsel3.jpg" delay={10} />
        <BackgroundImage image="/images/counsel4.jpg" delay={15} />
      </BackgroundSlider>

      <div
        style={{
          position: 'absolute',
          color: '#fff',
          zIndex: 10,
          textAlign: 'left',
          width: '100vw',
          top: '20%',
          transform: 'translateY(-50%)',
          marginLeft: '300px',
        }}
      >
        <h1 style={{ fontSize: '2.3rem' }}>센터의 비전</h1>
        <h2 style={{ fontSize: '1.6rem' }}>
          진정성, 공감, 그리고 신뢰를 바탕으로
        </h2>
        <h2 style={{ fontSize: '1.3rem' }}>
          개인의 성장과 치유를 돕기 위해 최선의 상담 서비스를 제공합니다
        </h2>
      </div>

      <InquiryBox>
        <h3>🌿이대점 센터 상담문의🌿</h3>
        <FlexContainer>
          <BoxWrapper>
            <AddressBox>
              <strong>주소</strong>
            </AddressBox>
            <AddressText>서울 마포구 신촌로 176</AddressText>
            <AddressText2>5층 502호</AddressText2>
          </BoxWrapper>

          <BoxWrapper>
            <EmailBox>
              <strong>이메일</strong>
            </EmailBox>
            <EmailText>byby5583@gmail.com</EmailText>
          </BoxWrapper>

          <BoxWrapper>
            <PhoneBox>
              <strong>전화</strong>
            </PhoneBox>
            <PhoneText>02-777-6666</PhoneText>
          </BoxWrapper>
        </FlexContainer>
      </InquiryBox>
    </MainContainerWrapper>
  );
};

export default React.memo(Maincomponents);
