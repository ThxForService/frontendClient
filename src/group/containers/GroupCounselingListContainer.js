'use client';
import React, {
  useLayoutEffect,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import groupApiProgramList from '../apis/groupApiProgramList';
import { useRouter } from 'next/navigation';
import Pagination from '@/commons/components/Pagination';
import Link from 'next/link';
import { StyledButton } from '@/commons/components/StyledButton';
import { groupApiApply } from '../apis/groupApiApply';

const GroupListContainer = ({ searchParams }) => {
  const { setMenuCode, setSubMenuCode } = getCommonActions();

  //   useLayoutEffect(() => {
  //     setMenuCode('counseling');
  //     setSubMenuCode('group');
  //   }, [setMenuCode, setSubMenuCode]);

  const [programs, setPrograms] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [errors, setErrors] = useState({});
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
      router.replace(`/counseling/group/${pgmSeq}`);
    },
    [router],
  );

  const onApply = useCallback(async (pgmSeq) => {
    console.log(pgmSeq);
    try {
      await groupApiApply(pgmSeq); // 신청하기 API 호출
      alert(`${pgmSeq} 프로그램에 신청했습니다!`); // 성공 메시지
    } catch (error) {
      setErrors(error.message); // 에러 처리
      alert('신청에 실패했습니다.'); // 에러 메시지
    }
  }, []);

  return (
    <div>
      <h1>집단 상담 프로그램 목록</h1>
      <ul>
        {programs &&
          programs.length > 0 &&
          programs.map(({ pgmSeq, pgmNm }) => (
            <li key={pgmSeq}>
              <Link href={`/group/program/info/${pgmSeq}`}>{pgmNm}</Link>
              <StyledButton
                type="button"
                variant="primary"
                onClick={() => onApply(pgmSeq)}
              >
                {t('신청하기')}
              </StyledButton>
            </li>
          ))}
      </ul>
      {pagination && (
        <Pagination pagination={pagination} onClick={onChangePage} />
      )}
    </div>
  );
};

export default React.memo(GroupListContainer);
