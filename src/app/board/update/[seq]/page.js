import MemberOnlyContainer from "@/member/containers/MemberOnlyContainer";
import RegisterContainer from "@/board/containers/RegisterContainer";

const UpdatePage = ({params}) => {
  const {seq} = params
  return (
    <MemberOnlyContainer>
      <RegisterContainer seq={seq}/>
    </MemberOnlyContainer>
  );
};

export default UpdatePage;
