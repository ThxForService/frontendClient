'use client';
import styled from 'styled-components';
import { StyledButton } from '@/commons/components/buttons/StyledButton';

const ListPage = () => {
  return (
    <>
      <h1>설문 메인</h1>
      <ButtonContainer>
        {/* Large Button */}
        <StyledButton size="large" variant="primary">
          Primary large
        </StyledButton>

        {/* Medium Button */}
        <StyledButton size="medium" variant="primary">
          Primary medium
        </StyledButton>

        {/* Small Button */}
        <StyledButton size="small" variant="primary">
          Primary small
        </StyledButton>
      </ButtonContainer>
    </>
  );
};

// 버튼 정렬을 위한 컨테이너 스타일
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // 좌측 정렬
  gap: 16px; // 버튼 간격
  width: 100%; // 컨테이너가 전체 너비 차지
`;

export default ListPage;
