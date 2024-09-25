import styled from 'styled-components';
import { theme } from '@/theme';

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
    width: 390px;
    height: 690px;
    padding: 0;
    margin: 0 auto;
    border-radius: 15px;
    background-color: #313234;
    color: white;
    display: flex;
    flex-direction: column;
`;

export const ChatHeader = styled.div`
    width: 370px;
    height: 40px;
    padding: 10px;
`;

export const ChatFooter = styled.div`
    width: 100%;
    height: 60px;
`;

export const ChatMessageBox = styled.div`
    overflow-y: scroll;
    height: 600px;
`;

export const ChatMessageSendBox = styled.input`
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 24px;
    padding: 10px;
    width: 370px;
    height: 45px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: rgba(255, 255, 255, 0.08);
    font-size: 15px;
    color: #FFFFFFCC;
`;
