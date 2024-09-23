import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  .loading2 {
    width: 130px;
    height: 23px;
    margin: 150px 0 10px 0;
    opacity: 0.3;
  }

  img {
    width: 60px;
    height: 20px;
    display: block;
  }
`;

const Loading = () => {
  return (
    <Wrapper>
      <Image
        src="/images/loading.gif"
        alt="1"
        width={60}
        height={20}
        unoptimized
      />
    </Wrapper>
  ); //km unoptimized // 최적화를 비활성화합니다.
};

export default React.memo(Loading);
