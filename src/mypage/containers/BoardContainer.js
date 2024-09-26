// BoardContainer.js
'use client';
import React, {
  useLayoutEffect,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import MyPosts from '../components/MyPosts';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import { listBoardData } from '../apis/apiBoardinfo';
import Loading from '@/commons/components/Loading';
import { useRouter } from 'next/navigation';
import apiConfig from '@/board/apis/apiConfig';
import Pagination from '@/commons/components/Pagination';
import List from '@/board/components/List';

function getQueryString(query) {
  const qs = { limit: 10, page: 1 };
  for (const key in query) {
    if (query.hasOwnProperty(key)) {
      qs[key] = query[key];
    }
  }
  return qs;
}

const BoardContainer = () => {
  const { t } = useTranslation();
  const { setMainTitle } = getCommonActions();
  const router = useRouter();

  // 상태 관리
  const [search, setSearch] = useState(() => getQueryString(router.query));
  
  const [items, setItems] = useState(null);
  const [board, setBoard] = useState(null);
  const [pagination, setPagination] = useState(null);

  useLayoutEffect(() => {
    setMainTitle(t('마이페이지'));
  }, [setMainTitle, t]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
       
        const { items, pagination } = await listBoardData(search);
        setItems(items);
        setPagination(pagination);
        console.log(items)
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [search]);

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setSearch((prevSearch) => {
        const updatedSearch = { ...prevSearch, [name]: value };
        router.push({ pathname: router.pathname, query: updatedSearch });
        return updatedSearch;
      });
    },
    [router],
  );

  const onSubmitSearch = useCallback(
    (e) => {
      e.preventDefault();
      setSearch((prevSearch) => {
        const updatedSearch = { ...prevSearch, page: 1 };
        router.push({ pathname: router.pathname, query: updatedSearch });
        return updatedSearch;
      });
    },
    [router],
  );

  const onChangePage = useCallback(
    (p) => {
      setSearch((prevSearch) => {
        const updatedSearch = { ...prevSearch, page: p };
        router.push({ pathname: router.pathname, query: updatedSearch });
        window.location.hash = '#root';
        return updatedSearch;
      });
    },
    [router],
  );

  const handleRowClick = useCallback(
    (seq) => {
      router.push(`/board/view/${seq}`);
    },
    [router],
  );

  if (!items) {
    return <Loading />;
  }

  return (
    <>
      <MyPosts
        items={items}
        search={search}
        onChange={onChange}
        onSubmit={onSubmitSearch}
        onRowClick={handleRowClick}
        pagination={pagination} // 페이지네이션 데이터 전달
      />
     
      
    </>
  );
};

export default React.memo(BoardContainer);
