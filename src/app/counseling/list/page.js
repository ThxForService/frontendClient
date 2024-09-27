import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import CounselingListContainer from '@/counseling/containers/CounselingListContainer';

const CounselingView = () => {
  return (
    <MemberOnlyContainer>
      <CounselingListContainer searchParams={searchParams} />
    </MemberOnlyContainer>
  );
};
export default React.memo(CounselingView);
