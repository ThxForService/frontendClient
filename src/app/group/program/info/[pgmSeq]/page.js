import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import GroupCounselingViewContainer from '@/group/containers/GroupCounselingViewContainer';

const GroupProgramViewPage = ({ searchParams }) => {
  return (
    <MemberOnlyContainer>
      <GroupCounselingViewContainer searchParams={searchParams} />
    </MemberOnlyContainer>
  );
};

export default GroupProgramViewPage;
