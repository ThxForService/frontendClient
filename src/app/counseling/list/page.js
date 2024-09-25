import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import CounselingListContainer from '@/counseling/containers/CounselingListContainer';

const CounselingView = ({ params }) => {
  return (
    <MemberOnlyContainer>
      <CounselingListContainer params={params} />
    </MemberOnlyContainer>
  );
};

export default CounselingView;
