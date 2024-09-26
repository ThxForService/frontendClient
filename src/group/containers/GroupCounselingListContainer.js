'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import groupApiProgramList from '../apis/groupApiProgramList';
import { useRouter } from 'next/navigation';
import Pagination from '@/commons/components/Pagination';
import { groupApiApply } from '../apis/groupApiApply';
import ListItems from '../components/ListItems';
import { getUserStates } from '@/commons/contexts/UserInfoContext';

const GroupListContainer = ({ searchParams }) => {
  const { userInfo } = getUserStates();

  const [programs, setPrograms] = useState([]);
  const [pagination, setPagination] = useState(null);
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      try {
        const data = await groupApiProgramList(searchParams);
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

  const onApply = useCallback(
    async (pgmSeq) => {
      try {
        const form = {
          pgmSeq,
          studentNo: userInfo.studentNo,
          username: userInfo.username,
          grade: userInfo.grade,
          department: userInfo.department,
          email: userInfo.email,
          mobile: userInfo.mobile,
          status: 'APPLY',
        };
        console.log('form', form);
        await groupApiApply(pgmSeq, form); // 신청하기 API 호출
        alert(`${pgmSeq} 프로그램에 신청했습니다!`); // 성공 메시지
        router.replace('/counseling/list');
      } catch (error) {
        const message = error.message.global
          ? error.message.global[0]
          : error.message;
        alert(message); // 에러 메시지
      }
    },
    [userInfo, router],
  );

  return (
    <div>
      <h1>{t('집단_상담_프로그램_목록')}</h1>
      <ListItems items={programs} onApply={onApply} />
      {pagination && (
        <Pagination pagination={pagination} onClick={onChangePage} />
      )}
    </div>
  );
};

export default React.memo(GroupListContainer);
