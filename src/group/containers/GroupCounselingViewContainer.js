'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { groupApiProgramInfo } from '../apis/groupApiProgramInfo';
import { useRouter } from 'next/navigation';
import ViewItems from '../components/ViewItems';

const GroupCounselingViewContainer = ({ params }) => {
  const router = useRouter();

  const { pgmSeq } = params; // URL 파라미터에서 pgmSeq 가져오기

  const [programs, setPrograms] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await groupApiProgramInfo(pgmSeq);
        setPrograms(response.data); // 응답에서 data 속성 가져오기
      } catch (err) {
        setErrors(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [pgmSeq]);

  const onChange = useCallback(() => {
    // 프로그램 목록으로 이동
    router.replace(`/group/program/info`);
  }, [router]);

  // **로딩 상태 체크**
  if (loading) {
    return <div>로딩 중...</div>; // 로딩 중 메시지
  }

  // **오류 처리**
  if (errors.global) {
    return <div>오류: {errors.global.join(', ')}</div>; // 오류 메시지 표시
  }

  return (
    <div>
      <ViewItems programs={programs} onChange={onChange} />
    </div>
  );
};

export default React.memo(GroupCounselingViewContainer);
