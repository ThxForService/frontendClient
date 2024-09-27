'use client';
import React, {
  useLayoutEffect,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import { useTranslation } from 'react-i18next';
import { getMyAnswers } from '../apis/apiSurvey';
import Pagination from '@/commons/components/Pagination';
import MySurvey from '../components/MySurvey';
import Loading from '@/commons/components/Loading';

const MySurveyContainer = ({ searchParams }) => {
  const { t } = useTranslation();
  const { setMainTitle } = getCommonActions();
  const [items, setItems] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(searchParams?.page ?? 1);
  useLayoutEffect(() => {
    setMainTitle(t('나의_설문_목록'));
  }, [setMainTitle, t]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getMyAnswers(page);
        if (data) {
          setItems(data.items);
          setPagination(data.pagination);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [page]);

  const onPageClick = useCallback((page) => {
    setPage(page);
  }, []);

  if (!items || items.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <h1>{t('나의_설문_목록')}</h1>
      <MySurvey items={items} />
      <Pagination pagination={pagination} onClick={onPageClick} />
    </>
  );
};

export default React.memo(MySurveyContainer);
