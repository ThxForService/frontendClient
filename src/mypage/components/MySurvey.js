'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Pagination from '@/commons/components/Pagination';
import surveyType from '../../survey/constants/surveyType';

const ListItems = styled.ul`
  margin: 100px;
`;

const ListItem = ({ item, className }) => {
  const { t } = useTranslation();
  const {
    result: { content, title },
    score,
    testType,
  } = item;
  const surveyTypeLabel = surveyType[testType] || t('테스트 유형 없음');

  return (
    <li className={className}>
       <h1>{surveyTypeLabel}</h1>
      <div className="score">
        {t('점수')}:{score.toLocaleString()}
      </div>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </li>
  );
};

const StyledListItem = styled(ListItem)`
  box-shadow: 2px 2px 10px #333;
  padding: 20px;
  border-radius: 10px;

  & + & {
    margin-top: 10px;
  }
`;

const MySurvey = ({ items }) => {
  const { t } = useTranslation();
  const itemsPerPage = 5;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const [pagination, setPagination] = useState({
    page: 1, // 현재 페이지
    totalPages: totalPages, // 전체 페이지 수
  });

  const handlePageChange = (newPage) => {
    console.log('페이지 변경:', newPage);
    setPagination((prev) => ({
      ...prev,
      page: newPage,
    }));
  };

  const startIndex = (pagination.page - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <ListItems>
      {currentItems && items.length > 0 ? (
        currentItems.map((item, i) => (
          <StyledListItem key={`item_${item.resultId}`} item={item} />
        ))
      ) : (
        <li>{t('참여한_설문이_없습니다.')}</li>
      )}

      {totalPages > 1 && (
        <Pagination
          pagination={{
            ...pagination,
            pages: Array.from({ length: totalPages }, (_, i) => [i + 1]),
          }}
          onClick={handlePageChange}
        />
      )}
    </ListItems>
  );
};

export default React.memo(MySurvey);
