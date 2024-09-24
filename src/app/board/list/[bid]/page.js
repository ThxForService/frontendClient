import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import ListContainer from '@/board/containers/ListContainer';

const ListPage = ({ params }) => {
  const { bid } = params;
  return (
    <MemberOnlyContainer>
      <ListContainer bid={bid} />
    </MemberOnlyContainer>
  );
};

export default ListPage;
