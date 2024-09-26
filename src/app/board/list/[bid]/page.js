import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import ListContainer from '@/board/containers/ListContainer';

const ListPage = ({ params }) => {
  const { bid } = params;
  return (
  
      <ListContainer bid={bid} />

  );
};

export default ListPage;
