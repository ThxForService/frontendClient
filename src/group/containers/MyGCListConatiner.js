'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import groupApiList from '../apis/groupApiList';
import { groupApiCancel } from '../apis/groupApiCancel';
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
        const data = await groupApiList({
          searchParams,
          userId: userInfo.userId,
        });
        setPrograms(data.items);
        setPagination(data.pagination);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [searchParams, userInfo]);

  const onChangePage = useCallback((p) => {
    setSearch((search) => ({ ...search, page: p }));
    window.location.hash = '#root';
  }, []);

  const onCancel = useCallback(
    async (pgmSeq) => {
      try {
        await groupApiCancel(pgmSeq);
        alert(`예약이 취소되었습니다`);
        const updatedPrograms = programs.filter(
          (program) => program.pgmSeq !== pgmSeq,
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
      <h1 style={{ marginTop: '30px', textAlign: 'center' }}>
        {t('집단 상담 예약 내역')}
      </h1>
      <MyListItems items={programs} onCancel={onCancel} />
      {pagination && (
        <Pagination pagination={pagination} onClick={onChangePage} />
      )}
    </div>
  );
};

export default React.memo(MyGCListContainer);
