'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { apiList } from '../apis/apiInfo';
import { useRouter } from 'next/navigation';
import Pagination from '@/commons/components/Pagination';
import StyledListItems from '../components/ListItems';
import { useTranslation } from 'react-i18next';

const CounselingListContainer = ({ searchParams }) => {
  const [programs, setPrograms] = useState([]);
  const [pagination, setPagination] = useState(null);
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        const data = await apiList(searchParams);
        setPrograms(data.items);
        setPagination(data.pagination);
      } catch (err) {
        setErrors(err.message);
      }
    })();
  }, [searchParams]);

  const onChangePage = useCallback((p) => {
    setSearch((search) => ({ ...search, page: p }));
    window.location.hash = '#root';
  }, []);

  const onChange = useCallback(
    (pgmSeq) => {
      // 프로그램 상세, 수정 페이지로 이동
      router.replace(`/counseling/complete`);
    },
    [router],
  );

  return (
    <div>
      <h1>{t('나의_상담_현황')}</h1>
      <StyledListItems items={programs} />
      {pagination && (
        <Pagination pagination={pagination} onClick={onChangePage} />
      )}
    </div>
  );
};
export default React.memo(CounselingListContainer);
