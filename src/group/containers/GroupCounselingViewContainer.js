'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import { groupApiProgramInfo } from '../apis/groupApiProgramInfo';
import { useRouter } from 'next/navigation';
import programStatus from '../constants/programStatus';

const GroupCounselingViewContainer = ({ params }) => {
  const { setMenuCode, setSubMenuCode } = getCommonActions();
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
      {/* **프로그램 세부 정보 표시** */}
      {programs && ( // programs가 null이 아닐 때만 렌더링
        <>
          <h1>{programs.pgmNm}</h1>
          <p>
            <strong>설명:</strong> {programs.description}
          </p>
          <p>
            <strong>일시:</strong>{' '}
            {new Date(programs.pgmStartDate).toLocaleString('ko-KR', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              weekday: 'long', // 요일 표시
              hour: 'numeric',
              minute: 'numeric',
              hour12: true, // 12시간제
            }).replace(/(\d{4})\.(\s*\d{1,2})\.(\s*\d{1,2})/, '$1. $2. $3')}
          </p>
          <p>
            <strong>정원:</strong> {programs.capacity}
          </p>
          <p>
            <strong>신청 가능 기간:</strong> {programs.startDate} ~{' '}
            {programs.endDate}
          </p>
          <p>
            <strong>접수 상태:</strong>{' '}
            {programStatus[programs.status] || '상태 미정'}
          </p>
          <button onClick={onChange}>목록으로 돌아가기</button>{' '}
          {/* 목록으로 돌아가기 버튼 */}
        </>
      )}
    </div>
  );
};

export default React.memo(GroupCounselingViewContainer);
