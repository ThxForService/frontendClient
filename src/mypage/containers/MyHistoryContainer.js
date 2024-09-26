'use client';
import React, { useLayoutEffect, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MyHistory from '../components/MyHistory';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import { apiList } from '@/counseling/apis/apiInfo';
import Loading from '@/commons/components/Loading';
import Pagination from '@/commons/components/Pagination';

const MyHistoryContainer = () => {
  const { t } = useTranslation();
  const [error, setErrors] = useState(null);
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(false);

  const { setMainTitle } = getCommonActions();
  useLayoutEffect(() => {
    setMainTitle(t('마이페이지'));
  }, [setMainTitle, t]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { items, pagination } = await apiList(search);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [search]);

  // 로딩 처리
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <MyHistory items={items} />
      {items.length > 0 && (
        <pagination onClick={onChangePage} pagination={pagination} />
      )}
    </>
  );
};

export default React.memo(MyHistoryContainer);
