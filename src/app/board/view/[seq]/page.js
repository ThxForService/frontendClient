'use client';


import MemberOnlyContainer from "@/member/containers/MemberOnlyContainer";
import ViewContainer from "@/board/containers/ViewContainer";
import { OuterBox } from '@/commons/layouts/StyledWrapper';

const ViewPage = () => {
  return (
      <MemberOnlyContainer>
      <OuterBox>
      <ViewContainer />
      </OuterBox>
    </MemberOnlyContainer>
  );
};

export default ViewPage;
