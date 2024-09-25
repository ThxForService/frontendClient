import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import GroupCounselingViewContainer from '@/group/containers/GroupCounselingViewContainer';

const GroupProgramViewPage = ({ params }) => {
  return (
    <MemberOnlyContainer>
      <GroupCounselingViewContainer params={params} />
    </MemberOnlyContainer>
  );
};

export default GroupProgramViewPage;
