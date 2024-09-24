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

  return (
    <div>
      <h1>집단 상담 프로그램 목록</h1>
      <ul>
        {programs &&
          programs.length > 0 &&
          programs.map(({ pgmSeq, pgmNm }) => (
            <li key={pgmSeq}>
              {pgmNm}
              <Link href={`/group/apply`}>
                <StyledButton type="button" variant="primary">
                  {t('신청하기')}
                </StyledButton>
              </Link>
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
