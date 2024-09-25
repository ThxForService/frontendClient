'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { myApiGet } from '../apis/apiInfo';
import { useRouter } from 'next/navigation';
import Pagination from '@/commons/components/Pagination';
import ListItems from '../components/ListItems';
import { getUserStates } from '@/commons/contexts/UserInfoContext';

function getQueryString(searchParams) {
  const qs = { limit: 9 };
  if (searchParams.size > 0) {
    for (const [k, v] of searchParams) {
      qs[k] = v;
    }
  }
  return qs;
}

const CounselingListContainer = ({ searchParams }) => {
  const { userInfo } = getUserStates();

  const [programs, setPrograms] = useState([]);
  const [pagination, setPagination] = useState(null);
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        const data = await myApiGet(searchParams);
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
    (cSeq) => {
      // 프로그램 상세, 수정 페이지로 이동
      router.replace(`/counseling/complete`);
    },
    [router],
  );

  return (
    <div>
      <h1>{t('이진표리스트')}</h1>
      <ListItems items={programs} />
      {pagination && (
        <Pagination pagination={pagination} onClick={onChangePage} />
      )}
    </div>
  );
};

export default React.memo(CounselingListContainer);
