'use client';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { StyledButton } from '@/commons/components/buttons/StyledButton';

const Home = () => {
  const MainPageBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-left: 5px;
    margin-top: 1.8px;
  `;

  // const Image = styled.div`
  //   width: 150px;
  //   height: auto;
  //   object-fit: contain;
  // `;

  return (
    <MainPageBox>
      <Image src="/images/kuromi.jpg" alt="1" width={1920} height={1080} />
    </MainPageBox>
  );
};

export default Home;
