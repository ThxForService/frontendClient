'use client';
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
const ListItems = styled.ul``;

const ListItem = ({ item, className }) => {
  return <li className={className}></li>;
};

const StyledListItem = styled(ListItem)``;

const MySurvey = ({ items }) => {
  const { t } = useTranslation();
  return (
    <ListItems>
      {items && items.length > 0 ? (
        items.map((item, i) => <StyledListItem key={`item_${i}`} item={item} />)
      ) : (
        <li>{t('참여한_설문이_없습니다.')}</li>
      )}
    </ListItems>
  );
};

export default React.memo(MySurvey);
