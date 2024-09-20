'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiList } from '../apis/apiList'; //km?  // API 경로에 맞춰서 수정 필요
import ItemsBox from '../components/ItemBox';
import Pagination from '../../commons/components/Pagination'; //km?  // 페이지네이션 컴포넌트
import Loading from '../../commons/components/Loading';

const SurveyListContainer = () => {
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearch] = useSearchParams();

  /* 페이지 변경 함수 */
  const onChangePage = useCallback((p) => {
    setSearch((search) => ({ ...search, page: p }));
  }, []);

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
    return <Loading />;
  }

  // 에러 처리
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <ItemsBox items={items} />
      {items.length > 0 && (
        <Pagination onClick={onChangePage} pagination={pagination} />
      )}
    </>
  );
};

export default React.memo(SurveyListContainer);
