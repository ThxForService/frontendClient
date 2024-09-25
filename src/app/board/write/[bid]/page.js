import MemberOnlyContainer from "@/member/containers/MemberOnlyContainer";
import RegisterContainer from "@/board/containers/RegisterContainer";

const WritePage = () => {
  return (
    <MemberOnlyContainer>
      <RegisterContainer />
    </MemberOnlyContainer>
  );
};

export default WritePage;
