import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import GroupCounselingListContainer from '@/group/containers/GroupCounselingListContainer';

const GroupProgramViewPage = ({ params }) => {
  return (
    <MemberOnlyContainer>
      <GroupCounselingListContainer params={params} />
    </MemberOnlyContainer>
  );
};

export default GroupProgramViewPage;
