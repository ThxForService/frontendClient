import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import CounselingListContainer from '@/counseling/containers/CounselingListContainer';

const CounselingComplete = ({ params }) => {
  return (
    <MemberOnlyContainer>
      {/* <CounselingCompleteContainer params={params} /> */}
      {/* <CounselingListContainer /> */}
    </MemberOnlyContainer>
  );
};

export default CounselingComplete;
