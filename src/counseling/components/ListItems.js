'use client';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { StyledButton } from '@/commons/components/StyledButton';

const ListItems = ({ items, className, onCancel }) => {
  const { t } = useTranslation();
  return (
    <ul className={className}>
      {items && items.length > 0 ? (
        items.map(
          ({ cSeq, studentNo, username, ccase, rDate, rTime, status }) => (
            <li key={cSeq}>
              <div>
                <p>
                  <strong>{t('상담 번호')}:</strong> {cSeq}
                </p>
                <p>
                  <strong>{t('학번')}:</strong> {studentNo}
                </p>
                <p>
                  <strong>{t('이름')}:</strong> {username}
                </p>
                <p>
                  <strong>{t('상담 유형')}:</strong> {ccase}
                </p>
                <p>
                  <strong>{t('예약 날짜')}:</strong> {rDate}
                </p>
                <p>
                  <strong>{t('예약 시간')}:</strong> {rTime}
                </p>
                <p>
                  <strong>{t('예약 상태')}:</strong>{' '}
                  {status === 'CANCEL' ? t('취소') : t('확정')}
                </p>
              </div>
              <div>
                {status !== 'CANCEL' && (
                  <StyledButton
                    type="button"
                    variant="primary"
                    onClick={() => onCancel(cSeq)}
                  >
                    {t('신청 취소')}
                  </StyledButton>
                )}
              </div>
            </li>
          ),
        )
      ) : (
        <li>{t('신청 내역이 없습니다.')}</li>
      )}
    </ul>
  );
};
{
  /* <Link href={`/counseling/list/${cSeq}`}>
  <StyledButton>{t('상세 보기')}</StyledButton>
</Link> */
}

const StyledListItems = styled(ListItems)`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    margin-bottom: 10px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f9f9f9;
    }

    div {
      flex: 1;
    }

    p {
      margin: 0;
      font-size: 14px;
    }

    strong {
      font-weight: bold;
    }
  }

  a {
    text-decoration: none;
    color: #0070f3;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export default StyledListItems;
