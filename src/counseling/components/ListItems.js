'use client';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { StyledButton } from '@/commons/components/StyledButton';

const ListItems = ({ items, className }) => {
  const { t } = useTranslation();
  return (
    <ul className={className}>
      {items &&
        items.length > 0 &&
        items.map(({ cSeq, ccase }) => (
          <li key={cSeq}>
            <Link href={`/counseling/list/${cSeq}`}>{ccase}</Link>
            <StyledButton type="button" variant="primary">
              {t('신청하기')}
            </StyledButton>
          </li>
        ))}
    </ul>
  );
};

const StyledListItems = styled(ListItems)`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    margin-bottom: 10px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f9f9f9;
    }
  }

  flex-grow: 1;
  text-decoration: none;
  color: #0070f3;
  font-weight: bold;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export default StyledListItems;
