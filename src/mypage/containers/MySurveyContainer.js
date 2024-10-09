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
import MySurvey from '../components/MySurvey';
import Loading from '@/commons/components/Loading';
import styled from 'styled-components';

const TitleContainer = styled.div`
  text-align: center; /* 제목을 가운데 정렬 */
  margin: 50px 0; /* 상하 여백 추가 */
`;


const MySurveyContainer = ({ searchParams }) => {
  const { t } = useTranslation();
  const { setMainTitle } = getCommonActions();
  const [items, setItems] = useState(null);
  const [page, setPage] = useState(searchParams?.page ?? 1);


  useLayoutEffect(() => {
    setMainTitle(t('나의 설문 목록'));
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
        <TitleContainer>
        <h1>{t('나의 설문 목록')}</h1> {/* 제목을 TitleContainer로 감싸서 스타일 적용 */}
      </TitleContainer>
      <MySurvey items={items} />
     
    </>
  );
};

export default React.memo(MySurveyContainer);
