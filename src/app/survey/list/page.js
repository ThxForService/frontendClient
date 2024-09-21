'use client';
import React from 'react';
import styled from 'styled-components';
import { StyledButton } from '@/commons/components/buttons/StyledButton';
import SurveyListContainer from '@/survey/containers/SurveyListContainer';
import { apiList } from '@/survey/apis/apiList'; // apiList 임포트

const ListPage = () => {
  const [survey, setSurvey] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const data = await apiList.fetchSurveys();
        setSurveys(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSurvey(); // 페이지가 변경될 때마다 설문 리스트 가져오기
  }, []);

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
      {/* 설문 리스트 및 로딩, 오류 처리 */}
      {loading && <p>Loading surveys...</p>}
      {error && <p>Error fetching surveys: {error}</p>}
      {!loading && !error && <SurveyListContainer surveys={surveys} />}{' '}
      {/* 설문 리스트 표시 */}
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
