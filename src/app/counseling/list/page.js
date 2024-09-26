import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import CounselingListContainer from '@/counseling/containers/CounselingListContainer';

const CounselingView = ({ searchParams }) => {
  return (
    <MemberOnlyContainer>
      <CounselingListContainer searchParams={searchParams} />
    </MemberOnlyContainer>
  );
};

export default CounselingView;
