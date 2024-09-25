import MemberOnlyContainer from "@/member/containers/MemberOnlyContainer";
import RegisterContainer from "@/board/containers/RegisterContainer";

const UpdatePage = () => {
  return (
    <MemberOnlyContainer>
      <RegisterContainer />
    </MemberOnlyContainer>
  );
};

export default UpdatePage;
