// privacy.js
import React from 'react';
import Information from '../privacy/Information'; // Information 파일에서 법률 정보 가져오기
import styled from 'styled-components';
import { useRouter } from 'next/router'; // useRouter 훅 추가
import { colors } from '@/theme/colors';


const { border } = colors;


const Container = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  background-color: ${border};
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
   border-radius: 20px;
  cursor: pointer;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: all 0.3s ease;

  // 기본 그림자 추가
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:focus {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${colors.gray};
    color: ${colors.white};
`;




const PrivacyPolicyPage = () => {
  const router = useRouter();

  // 홈으로 돌아가는 함수
  const goToHome = () => {
    router.push('/');
  };
  return (
    <Container>
      <Title>개인정보 처리방침</Title>
      <Information /> {/* Information 파일에서 법률 정보를 불러와 렌더링 */}
      <StyledButton onClick={goToHome}>홈으로</StyledButton>
    </Container>
  );
};

export default PrivacyPolicyPage;
