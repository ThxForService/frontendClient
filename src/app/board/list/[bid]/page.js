'use client';

import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import ListContainer from '@/board/containers/ListContainer';
import { OuterBox } from '@/commons/layouts/StyledWrapper';

const ListPage = ({ params }) => {
  const { bid } = params;
  return (
    <MemberOnlyContainer>
      <OuterBox>
        <ListContainer bid={bid} />
      </OuterBox>
    </MemberOnlyContainer>
  );
};

export default ListPage;
