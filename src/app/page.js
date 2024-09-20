'use client';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';

const Home = () => {
  const MainPageBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
  `;

  return (
    <MemberOnlyContainer>
      <MainPageBox>
        <Image
          src="/images/Kuj.gif"
          alt="1"
          width={500}
          height={500} // 높이는 비율에 맞춰 자동으로 조정됨
          layout="responsive"
        />
      </MainPageBox>
    </MemberOnlyContainer>
  );
};

export default Home;
