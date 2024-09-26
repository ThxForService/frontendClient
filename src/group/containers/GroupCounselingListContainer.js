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
  const [showIframe, setShowIframe] = useState(false);
  const [iframeSrc, setIframeSrc] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const data = await groupApiProgramList(searchParams);
        setPrograms(data.items);
        setPagination(data.pagination);
      } catch (err) {
        console.error(err.message);
      }
    })();
  }, [searchParams]);

  const onChangePage = useCallback((p) => {
    // 페이지 변경 처리
  }, []);

  const onChange = useCallback(
    (pgmSeq) => {
      setIframeSrc(`/group/program/info/${pgmSeq}`);
      setShowIframe(true);
    },
    []
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
        await groupApiApply(pgmSeq, form);
        alert(`${pgmSeq} 프로그램에 신청했습니다!`);
        router.replace('/counseling/list');
      } catch (error) {
        const message = error.message.global
          ? error.message.global[0]
          : error.message;
        alert(message);
      }
    },
    [userInfo, router],
  );

  return (
    <div>
      <h1 style={{ marginTop: '30px', textAlign: 'center' }}>{t('집단 상담 프로그램 목록')}</h1>
      <ListItems items={programs} onApply={onApply} onChange={onChange} />
      {pagination && (
        <Pagination pagination={pagination} onClick={onChangePage} />
      )}
    </div>
  );
};

export default React.memo(GroupListContainer);
