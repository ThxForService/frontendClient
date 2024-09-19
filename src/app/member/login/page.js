import LoginContainer from '@/member/containers/LoginContainer';
import GuestOnlyContainer from '@/member/containers/GuestOnlyContainer';
const LoginPage = () => {
  return (
    <GuestOnlyContainer>
      <LoginContainer />
    </GuestOnlyContainer>
  );
};

export default LoginPage;
