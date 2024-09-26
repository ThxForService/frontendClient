'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { apiList, apiCancel } from '../apis/apiInfo';
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
        console.log('cSeq가 안와', data);
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

  const onCancel = useCallback(
    async (cSeq) => {
      try {
        await apiCancel(cSeq);
        alert(`예약이 취소되었습니다`);
        const updatedPrograms = programs.filter(
          (program) => program.cSeq !== cSeq,
        );
        setPrograms(updatedPrograms);
        router.reload(); // 페이지 새로 고침
      } catch (err) {
        alert(`예약 취소 오류: ${err.message}`);
      }
    },
    [programs, router],
  );

  return (
    <div>
      <h1>{t('나의_상담_현황')}</h1>
      <StyledListItems items={programs} onCancel={onCancel} />
      {pagination && (
        <Pagination pagination={pagination} onClick={onChangePage} />
      )}
    </div>
  );
};
export default React.memo(CounselingListContainer);
