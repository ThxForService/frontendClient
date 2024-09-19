import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
const MypagePage = () => {
  return (
    <MemberOnlyContainer>
      <h1>마이페이지 메인</h1>
    </MemberOnlyContainer>
  );
};

export default MypagePage;
