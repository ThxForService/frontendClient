// pages/privacy-policy.js
import React from 'react';
import Information from '@/app/main/components/Information'; // Information.js 파일을 불러옴
import styled from 'styled-components';

const PrivacyPolicyContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const PrivacyPolicy = () => {
  return (
    <PrivacyPolicyContainer>
      <Title>개인정보처리방침</Title>
      <Information /> {/* 불러온 Information 컴포넌트를 출력 */}
    </PrivacyPolicyContainer>
  );
};

export default PrivacyPolicy;
