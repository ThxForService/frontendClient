import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import RegisterContainer from '@/board/containers/RegisterContainer';

const WritePage = ({ params }) => {
  const { bid } = params;

  return <RegisterContainer bid={bid} />;

  
};

export default WritePage;
