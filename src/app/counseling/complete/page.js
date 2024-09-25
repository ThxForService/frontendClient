import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';

const CounselingComplete = ({ params }) => {
  return (
    <MemberOnlyContainer>
      {/* <CounselingCompleteContainer params={params} /> */}
    </MemberOnlyContainer>
  );
};

export default CounselingComplete;
