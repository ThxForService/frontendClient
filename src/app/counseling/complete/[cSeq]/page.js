import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import CounselingListContainer from '@/counseling/containers/CounselingListContainer';

const CounselingComplete = ({ searchParams }) => {
  return (
    <MemberOnlyContainer>
      {/* <CounselingListContainer searchParams={searchParams} /> */}
    </MemberOnlyContainer>
  );
};

export default CounselingComplete;
