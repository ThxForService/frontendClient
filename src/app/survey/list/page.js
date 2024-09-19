'use client';
import MemberOnlyContainer from '@/member/containers/MemberOnlyContainer';
import styled from 'styled-components';
import {
  LLargeButton,
  LMediumButton,
  LSmallButton,
} from '@/commons/components/buttons/StyledButtonL';
import {
  LargeButton,
  MediumButton,
  SmallButton,
} from '@/commons/components/buttons/StyledButton';

const ListPage = () => {
  return (
    <>
      <h1>설문 메인</h1>
      <ButtonContainer>
        {/* Large Buttons */}
        <LargeButton variant="primary">버튼 Large </LargeButton>

        {/* Medium Buttons */}
        <MediumButton variant="primary">버튼 Medium</MediumButton>

        {/* Small Buttons */}
        <SmallButton variant="primary">버튼 Small</SmallButton>

        {/* LLarge Buttons */}
        <LLargeButton variant="primary">버튼 Light Large</LLargeButton>

        {/* LMedium Buttons */}
        <LMediumButton variant="primary">버튼 Light Medium</LMediumButton>

        {/* LSmall Buttons */}
        <LSmallButton variant="primary">버튼 Light Small</LSmallButton>
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
