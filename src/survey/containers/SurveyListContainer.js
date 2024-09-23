'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { getList } from '../apis/apiInfo';
import ListItems from '../components/ListItems';
import Pagination from '@/commons/components/Pagination';
import Loading from '@/commons/components/Loading';

const SurveyListContainer = ({ searchParams }) => {
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(searchParams?.page ?? 1);

  useEffect(() => {
    (async () => {
      try {
        const data = await getList(page);
        if (data) {
          setItems(data.items);
          setPagination(data.pagination);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [page]);

  if (!items || items.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <ListItems items={items} />
      <Pagination pagination={pagination} onClick={setPage} />
    </>
  );
};

export default React.memo(SurveyListContainer);
