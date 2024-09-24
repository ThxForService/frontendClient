import MemberOnlyContainer from "@/member/containers/MemberOnlyContainer";
import ViewContainer from "@/board/containers/ViewContainer";

const ViewPage = () => {
  return (
    <MemberOnlyContainer>
      <ViewContainer />
    </MemberOnlyContainer>
  );
};

export default ViewPage;
