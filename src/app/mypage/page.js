"use client"
import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import MypageContainer from '@/mypage/containers/MypageContainer';
import { OuterBox } from '@/commons/layouts/StyledWrapper';
import styled from 'styled-components';
import { colors } from '@/theme/colors';

const MypageMainbox = styled(OuterBox)`

  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);
              
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
