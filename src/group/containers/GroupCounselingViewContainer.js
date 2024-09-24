'use client';
import React, {
  useLayoutEffect,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import groupApiProgramList from '../apis/groupApiProgramList';
import { useRouter } from 'next/navigation';

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
        const data = await groupApiProgramList(pgmSeq);
        setPrograms(data);
      } catch (err) {
        setErrors(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [pgmSeq]);

  const onChange = useCallback(
    (pgmSeq) => {
      // 프로그램 목록으로 이동
      (async () => {
        try {
          router.replace(`/group/program/info`);
        } catch (error) {
          const message = error.message;
          setErrors(
            typeof message === 'string' ? { global: [message] } : message,
          );
        }
      })();
    },
    [router],
  );

  return (
    <div>
      <h1>{programs.pgmNm}</h1>
      <p>
        <strong>설명:</strong> {programs.description}
      </p>
      <p>
        <strong>일시:</strong>{' '}
        {new Date(programs.programStartDate).toLocaleDateString()}
      </p>
      <p>
        <strong>정원:</strong> {programs.capacity}
      </p>
      <button onClick={onChange}>목록으로 돌아가기</button>
    </div>
  );
};

export default React.memo(GroupCounselingViewContainer);
