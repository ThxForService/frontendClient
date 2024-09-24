'use client';
import AnswerContainer from '@/survey/containers/AnswerContainer';
import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import { getUserStates } from '@/commons/contexts/UserInfoContext';

const ResultPage = ({ params }) => {
  const { isStudent } = getUserStates();
  return (
    <MemberOnlyContainer>
      {isStudent && <AnswerContainer params={params} />}
    </MemberOnlyContainer>
  );
};

export default ResultPage;
