'use client';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
const ListItems = styled.ul`
  margin: 100px;
`;

const ListItem = ({ item, className }) => {
  const { t } = useTranslation();
  const {
    result: { content, title },
    score,
  } = item;
  return (
    <li className={className}>
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
  return (
    <ListItems>
      {items && items.length > 0 ? (
        items.map((item, i) => (
          <StyledListItem key={`item_${item.resultId}`} item={item} />
        ))
      ) : (
        <li>{t('참여한_설문이_없습니다.')}</li>
      )}
    </ListItems>
  );
};

export default React.memo(MySurvey);
