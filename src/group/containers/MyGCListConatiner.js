'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import groupApiList from '../apis/groupApiList';
import { useRouter } from 'next/navigation';
import Pagination from '@/commons/components/Pagination';
import MyListItems from '../components/MyListItems';
import { getUserStates } from '@/commons/contexts/UserInfoContext';

const MyGCListContainer = ({ searchParams }) => {
  const { userInfo } = getUserStates();
  const [programs, setPrograms] = useState([]);
  const [pagination, setPagination] = useState(null);
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        const data = await groupApiList({ searchParams, userId: userInfo.userId });
        setPrograms(data.items);
        setPagination(data.pagination);
      } catch (err) {
        setErrors(err.message);
      }
    })();
  }, [searchParams, userInfo]);
  

  const onChangePage = useCallback((p) => {
    setSearch((search) => ({ ...search, page: p }));
    window.location.hash = '#root';
  }, []);

  return (
    <div>
      <h1>{t('집단 상담 예약 내역')}</h1>
      <MyListItems items={programs} /> 
      {pagination && (
        <Pagination pagination={pagination} onClick={onChangePage} />
      )}
    </div>
  );
};

export default React.memo(MyGCListContainer);
