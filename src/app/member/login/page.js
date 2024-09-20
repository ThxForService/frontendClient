'use client';
import LoginContainer from '@/member/containers/LoginContainer';
import GuestOnlyContainer from '@/member/containers/GuestOnlyContainer';
import { OuterBox } from '@/commons/layouts/StyledWrapper';

const LoginPage = ({ searchParams }) => {
  return (
    <GuestOnlyContainer>
      <OuterBox>
        <LoginContainer searchParams={searchParams} />
      </OuterBox>
    </GuestOnlyContainer>
  );
};

export default LoginPage;
