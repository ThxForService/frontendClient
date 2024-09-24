"use client"
import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import MypageContainer from '@/mypage/containers/MypageContainer';
import { OuterBox } from '@/commons/layouts/StyledWrapper';
import styled from 'styled-components';

const MypageMainbox = styled(OuterBox)`
  
`

const MypagePage = () => {
  return (
    <MemberOnlyContainer>
      <MypageMainbox>
      <MypageContainer/>
      </MypageMainbox>
    </MemberOnlyContainer>
  );
};

export default MypagePage;
