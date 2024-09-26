'use client';
import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'next-i18next';
import Pagination from '../../commons/components/Pagination';
import List from '../components/List';
import Loading from '../../commons/components/Loading';
import apiConfig from '../apis/apiConfig';
import { getList } from '../apis/apiboard';

function getQueryString(query) {
  const qs = { limit: 10, page: 1 };
  for (const key in query) {
    if (query.hasOwnProperty(key)) {
      qs[key] = query[key];
    }
  }
  return qs;
}

const ListContainer = ({ setPageTitle, bid }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const { setMainTitle } = getCommonActions();

  const [search, setSearch] = useState(() => getQueryString(router.query));
  const _bid = search.bid || bid;
  const mode = bid ? 'view' : 'list';
  const [items, setItems] = useState(null);
  const [board, setBoard] = useState(null);
  const [pagination, setPagination] = useState(null);

  useLayoutEffect(() => {
    setMainTitle(t('게시판'));
  }, [setMainTitle, t]);

  useEffect(() => {
    if (!_bid) return;

    const fetchData = async () => {
      try {
        const res1 = await apiConfig(_bid);
        setBoard(res1);

        if (setPageTitle) {
          setPageTitle(res1.bname);
        }

        const { items, pagination } = await getList(_bid, search);
        setItems(items);
        setPagination(pagination);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [_bid, search, setPageTitle]);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setSearch((prevSearch) => {
      const updatedSearch = { ...prevSearch, [name]: value };
      if (router.pathname) {
        router.push({ pathname: router.pathname, query: updatedSearch });
      }
      return updatedSearch;
    });
  }, [router]);

  const onSubmitSearch = useCallback(
    (e) => {
      e.preventDefault();
      setSearch((prevSearch) => {
        const updatedSearch = { ...prevSearch, page: 1 };
        if (router.pathname) {
          router.push({ pathname: router.pathname, query: updatedSearch });
        }
        return updatedSearch;
      });
    },
    [router]
  );

  const onChangePage = useCallback((p) => {
    setSearch((prevSearch) => {
      const updatedSearch = { ...prevSearch, page: p };
      if (router.pathname) {
        router.push({ pathname: router.pathname, query: updatedSearch });
        window.location.hash = '#root';
      }
      return updatedSearch;
    });
  }, [router]);

  const onRowClick = useCallback((seq) => {
    router.push(`/board/view/${seq}`);
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push(`/board/write/${_bid}`);
  }, [router, _bid]);

  if (!board || !items) {
    return <Loading />;
  }

  return (
    <>
      <List
        items={items}
        search={search}
        onChange={onChange}
        onSubmit={onSubmitSearch}
        onRowClick={onRowClick}
        bid={bid}
      />
      {mode === 'list' && <button onClick={onButtonClick}>글쓰기</button>}
      <Pagination pagination={pagination} onClick={onChangePage} />
    </>
  );
};

export default React.memo(ListContainer);
