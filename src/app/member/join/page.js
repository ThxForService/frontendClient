'use client';
import JoinContainer from '@/member/containers/JoinContainer';
import GuestOnlyContainer from '@/member/containers/GuestOnlyContainer';
import { OuterBox } from '@/commons/components/layouts/StyledWrapper';

const JoinPage = () => {
  return (
    <GuestOnlyContainer>
      <OuterBox>
      <JoinContainer />
      </OuterBox>
    </GuestOnlyContainer>
  );
};

export default JoinPage;
