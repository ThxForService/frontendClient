'use client';
import React from 'react';
import Page2 from '../centerintroduce/Page2';
import Header from '@/commons/layouts/Header';
import { OuterBox, ContentBox2 } from '@/commons/layouts/StyledWrapper';

const center = () => {
  //컨테이너에서 데이터 불러와서 사용.

  return (
    <OuterBox>
      <Header />
      <ContentBox2>
        <h1></h1>
        <Page2 />
      </ContentBox2>
    </OuterBox>
  );
};
export default React.memo(center);
