import styled from 'styled-components';

export const StyledWrapper = styled.div``;

export const OuterBox = styled.div`
  max-width: 900px;
  min-width: 700px;
  padding: 25px 50px;
  margin: 50px auto;
`;

export const PageNavWrap = styled.div`
  //이 부분은 정렬을 위해 추가
  box-sizing: border-box;
  padding: 48px 20px 20px;
  border-bottom: solid 1.5px rgb(221, 221, 221);
  max-width: 1300px;
  position: relative;
  margin: 0 auto 20px;
`;

export const PageNav = styled.div`
  line-height: normal;

  padding-left: 20px; //이 부분은 정렬을 위해 추가
`;

export const PageTitle = styled.div`
  margin-top: 20px;
  font-size: 20px;

  padding-left: 20px;
`;

export const ContentBox = styled.div`
  box-sizing: border-box;
  width: 1300px;
  min-height: 700px;
  padding: 0 20px 50px 20px;
  margin: 0 auto;
`;

export const ContentBox2 = styled.div`
  box-sizing: border-box;
  width: 1300px;
  min-height: 700px;
  padding: 0 0 50px 0;
  margin: 0 auto;
`;

export const ContentBox3 = styled.div`
  box-sizing: border-box;
  width: 800px;
  min-height: 700px;
  padding: 10px 0 30px 0;
  margin: 0 auto;
`;

export const ChatBox = styled.div`
    box-sizing: border-box;
    width: 450px;
    padding: 10px 0 30px 0;
    margin: 0 auto;
    border-radius: 3px;
`;

export const ChatMessageBox = styled.div`
    overflow-y: scroll;
    height: 350px;
`;

export const ChatMessageSendBox = styled.div`
    padding: 10px 0 30px 0;
`;
