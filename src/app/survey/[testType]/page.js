import TestContainer from '@/survey/containers/TestContainer';
import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
export default function TestPage({ params }) {
  return (
    <MemberOnlyContainer>
      <TestContainer params={params} />
    </MemberOnlyContainer>
  );
}
