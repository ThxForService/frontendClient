import BoardContainer from '@/mypage/containers/BoardContainer';
import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import MypageProfileContainer from '@/mypage/containers/MypageProfileContainer';
import MyHistoryContainer from '@/mypage/containers/MyHistoryContainer';
import MySurveyContainer from '@/mypage/containers/MySurveyContainer';

const MypageModePage = ({ params, searchParams }) => {
  const { mode } = params;

  let Container = null;
  switch (mode) {
    case 'board':
      Container = BoardContainer;
      break;
    case 'MyHistory':
      Container = MyHistoryContainer;
      break;
    case 'survey':
      Container = MySurveyContainer;
      break;
    default:
      Container = MypageProfileContainer;
  }

  return (
    <MemberOnlyContainer>
      <Container searchParams={searchParams} />
    </MemberOnlyContainer>
  );
};

export default MypageModePage;
