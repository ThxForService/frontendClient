'use client';
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { StyledButton } from '@/commons/components/StyledButton';
import PopupView from '@/commons/components/PopupView';
import ViewItems from './ViewItems';
const ListItems = ({ items, onApply, onChange, className }) => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleChange = (program) => {
    setSelectedProgram(program);
    setVisible(true);
  };

  return (
    <>
      <ul className={className}>
        {items &&
          items.length > 0 &&
          items.map(({ pgmSeq, pgmNm, pgmStartDate, capacity, ...rest }) => (
            <li key={pgmSeq}>
               {pgmNm}
              <p>
                <strong>일시:</strong>{' '}
                {new Date(pgmStartDate).toLocaleString('ko-KR', {
                  month: 'numeric',
                  day: 'numeric',
                  weekday: 'short',
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: false,
                })}
              </p>
              <p>
                <strong>정원:</strong> {capacity}
              </p>
              <ButtonContainer>
                <StyledButton onClick={() => handleChange({ pgmNm, ...rest })}>
                  {t('상세 보기')}
                </StyledButton>
                <StyledButton
                  type="button"
                  variant="primary"
                  onClick={() => onApply(pgmSeq)}
                >
                  {t('신청 하기')}
                </StyledButton>
              </ButtonContainer>
            </li>
          ))}
      </ul>

      {visible && (
        <PopupView visible={visible}>
          <ViewItems programs={selectedProgram} />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '15px',
            }}
          >
            <StyledButton onClick={() => setVisible(false)} type="button">
              {t('목록으로 돌아가기')}
            </StyledButton>
          </div>
        </PopupView>
      )}
    </>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledListItems = styled(ListItems)`
  list-style: none;
  padding: 0;
  max-width: 1000px;
  margin: 30px auto 0;

  li {
  color: #000;
  font-weight: bold;
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
`;

export default StyledListItems;
