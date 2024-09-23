'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { apiList } from '../apis/apiList'; // apiList 경로에 맞게 수정
import ItemsBox from '../components/ItemBox';
import Pagination from '../../commons/components/Pagination'; // 페이지네이션 컴포넌트 경로 수정
import Loading from '../../commons/components/Loading'; // 로딩 컴포넌트
import styled from 'styled-components';
import { StyledButton } from '@/commons/components/StyledButton'; // 버튼 컴포넌트

const SurveyListContainer = ({ searchParams }) => {
  const [surveys, setSurveys] = useState([]); // setSurvey에서 setSurveys로 변경
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* 페이지 변경 함수 */
  const onChangePage = useCallback(
    (p) => {
      setSearch((search) => ({ ...search, page: p }));
    },
    [],
  );

  // API 호출 함수
  const fetchSurveys = async () => {
    setLoading(true);
    try {
      const response = await apiList.surveys(); // API 호출
      setItems(response.data); // API 응답에서 데이터 가져오기
      setPagination(response.pagination); // 응답에서 페이지 정보 가져오기
    } catch (err) {
      setError(err.message); // 에러 처리
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSurveys(); // 컴포넌트 마운트 시 API 호출
  }, [searchParams]); // 검색 파라미터가 변경될 때마다 호출

  // 로딩 처리
  if (loading) {
    return <Loading />; // 로딩 중일 때 로딩 컴포넌트 렌더링
  }

  // 에러 처리
  if (error) {
    return <div>Error: {error}</div>; // 에러 메시지 렌더링
  }

  return (
    <>
      <ItemsBox items={items} />
      {items.length > 0 && (
        <Pagination onClick={onChangePage} pagination={pagination} />
      )}
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

export default React.memo(SurveyListContainer); // 메모이제이션을 통해 성능 최적화
