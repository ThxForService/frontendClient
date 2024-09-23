'use client';
import React, { useEffect, useState } from 'react';
import { getList } from '../apis/apiInfo';

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
          setItems(data.pagination);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [page]);

  return <></>;
};

export default React.memo(SurveyListContainer);
