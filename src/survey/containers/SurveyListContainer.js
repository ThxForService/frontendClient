import React, { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { apiList } from '../apis/apiInfo'; //km?
import ItemsBox from '../components/ItemsBox';
import Pagination from '../../../commons/components/Pagination'; //km?
import Loading from '../../../commons/components/Loading';

const SurveyListContainer = () => {

  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);


  
  /* 페이지 변경 함수 */
  const onChangePage = useCallback((p) => {
    setSearch((search) => ({ ...search, page: p }));
  }, []);

  // 로딩 처리
  if (loading) {
    return <Loading />;
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
