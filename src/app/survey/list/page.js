'use client';
import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import styled from 'styled-components';
import { StyledButtonL } from '@/commons/components/buttons/StyledButtonL';
import { StyledButton } from '@/commons/components/buttons/StyledButton';

const ListPage = () => {
  return (
    <>
      <h1>설문 메인</h1>
      <ButtonContainer>
        <StyledButton size="large" variant="primary">
          버튼 Large
        </StyledButton>

        <StyledButton size="medium" variant="primary">
          버튼 Medium
        </StyledButton>

        <StyledButton size="Small" variant="primary">
          버튼 Small
        </StyledButton>

        <StyledButtonL size="large" variant="primary">
          버튼 Large
        </StyledButtonL>

        <StyledButtonL size="medium" variant="primary">
          버튼 Medium
        </StyledButtonL>

        <StyledButtonL size="Small" variant="primary">
          버튼 Small
        </StyledButtonL>
      </ButtonContainer>
    </>
  );
};

// 버튼 정렬을 위한 컨테이너 스타일
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px; // 버튼 간격을 주기 위해 사용
  span {
    margin-top: 4px; // 텍스트와 버튼 간의 간격
  }
`;

export default ListPage;
