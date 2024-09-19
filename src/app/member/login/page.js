import LoginContainer from '@/member/containers/LoginContainer';
import GuestOnlyContainer from '@/member/containers/GuestOnlyContainer';
const LoginPage = ({ searchParams }) => {
  return (
    <GuestOnlyContainer>
      <LoginContainer searchParams={searchParams} />
    </GuestOnlyContainer>
  );
};

export default LoginPage;
