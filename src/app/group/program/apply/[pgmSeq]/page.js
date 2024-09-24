import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import GroupCounselingApplyContainer from '@/group/containers/GroupCounselingApplyContainer';

const GroupProgramViewPage = ({ params }) => {
  return (
    <MemberOnlyContainer>
      <GroupCounselingApplyContainer params={params} />
    </MemberOnlyContainer>
  );
};

export default GroupProgramViewPage;
