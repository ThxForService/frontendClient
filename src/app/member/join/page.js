import JoinContainer from '@/member/containers/JoinContainer';
import GuestOnlyContainer from '@/member/containers/GuestOnlyContainer';
const JoinPage = () => {
  return (
    <GuestOnlyContainer>
      <JoinContainer />
    </GuestOnlyContainer>
  );
};

export default JoinPage;
