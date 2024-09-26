import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { TiInfoLarge } from 'react-icons/ti';
import { colors } from '@/theme/colors';
import { theme } from '@/theme';
import { StyledButton } from '@/commons/components/StyledButton';

const FlatWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  font-weight: bolder;

  .completion_message {
    font-size: ${({ theme }) => theme.fontSizes.medium}px;
    color: ${({ theme }) => theme.colors.white};
    color: #4caf50;
    font-weight: lighter;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn_group {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    .rsv_but {
      display: flex;
      margin: 0 20px;
      justify-content: center;
      align-items: center;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      width: 30%;
    }
    .btn_right {
      display: flex;
      margin-left: 50px;
      justify-content: center;
      align-items: center;
      border: 1px solid #e0e0e0;
      border-radius: 6px;
      width: 20%;
    }
  }

  h2 {
    color: ${({ theme }) => theme.colors.white};
    color: #4caf50;
    margin-bottom: 20px;
  }

  .info_section {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e0e0e0;
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
    width: 100%;

    dl {
      margin-top: 20px;
      dt {
        color: ${({ theme }) => theme.colors.white};
      }
      dd {
        margin-top: 3px;
        white-space: normal;
        word-wrap: break-word;
        word-break: keep-all;
        line-height: 20px;
        font-weight: lighter;
      }
    }
  }

  .toggle_btn {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .toggle_btn button {
    background: #e2f7dd;
    border: 1px solid #ccc;
    border-radius: 100px;
    width: 300px;
    padding: 5px 10px;
    cursor: pointer;
    font-weight: bolder;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .arrow {
    background: white;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    align-content: center;
    position: absolute;
    right: 5px;

    svg {
      height: 20px;
      width: 20px;
    }
  }
`;

const CompleteForm = ({ data }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const formatMobile = (mobile) => {
    if (mobile.length === 11) {
      return mobile.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    }
    return mobile; // 만약 전화번호가 11자리가 아닌 경우, 원래 문자열을 그대로 반환
  };

  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };
  const {
    cSeq,
    studentNo,
    username,
    ccase,
    rDate,
    rTime,
    status,
    email,
    mobile,
  } = data;
  return (
    <FlatWrapper>
      <div className="completion_message">
        {t('예약이 성공적으로 완료되었습니다!')}
      </div>
      <h2>{t('예약 완료')}</h2>
      <div className="info_section">
        <p>
          {t('예약자명')} : {username}
        </p>
        <p>
          {t('이메일')} : {email}
        </p>
        <p>
          {t('전화번호')} : {formatMobile(mobile)}
        </p>
      </div>

      <div className="info_section">
        <p>
          {t('예약일')} : {rDate}
        </p>
        <p>
          {t('예약시간')} : {rTime}
        </p>
        <p>
          {t('상담유형')} : {ccase}
        </p>
        <p>
          {t('학번')} : {studentNo}
        </p>
      </div>
      <div className="btn_group">
        <StyledButton
          className="rsv_but"
          color="midGreen"
          as={Link}
          to="/myreservation/list"
        >
          {t('나의 예약 현황')}
        </StyledButton>
        <StyledButton
          className="rsv_but"
          color="midGreen"
          as={Link}
          to="/reservation/list"
        >
          {t('농촌체험_예약')}
        </StyledButton>
      </div>
    </FlatWrapper>
  );
};

export default React.memo(CompleteForm);
