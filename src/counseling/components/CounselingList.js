import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import fontSize from '@/theme/fontSizes';
import { colors } from '@/theme/colors';
import { FcLandscape } from 'react-icons/fc';
import { IoTicketOutline } from 'react-icons/io5';
import { format } from 'date-fns';

const { medium, normedium, normal, extraBig } = fontSize;

//농활 체험 목록 조회
const ItemBox = ({ item, className }) => {
  const { t } = useTranslation();
  const { cSeq, studentNo, username, rdate, rTime, status } = item;
  const FormBox = styled.form`
    dl {
      display: flex;
      align-items: center;

      dt {
        width: 120px;
      }

      dd {
        flex-grow: 1;
      }
    }

    dl + dl {
      margin-top: 10px;
    }

    .radio {
      margin-right: 10px;
    }

    .agree {
      text-align: center;
      margin: 15px 0;

      svg {
        font-size: 1.5rem;
        vertical-align: middle;
        margin-right: 5px;
      }
    }
  `;

  const url = `/counseling/list/${cSeq}`;
  const formatDate = format(new Date(rdate), 'yyyy-MM-dd');

  return (
    <li className={className}>
      <Link to={url}>
        {studentNo(
          <FormBox
            className="studentNo"
            url={studentNo}
            width="25%"
            height="250px"
            alt={t('학번')}
          />,
        )}
        <div className="item-content">
          <div className="username">{username}</div>
          <div className="act_content">
            <div className="actNameTitle">
              <FcLandscape className="t_icon" />
              <p className="act_title">{t('이름')}</p>
            </div>
          </div>
          <div className="rsvInfo">
            <div className="rsvTitle">
              <IoTicketOutline className="icon" />
              <p className="rsv_title">{t('예약정보')}</p>
            </div>
            <div className="rsvContent">
              <div className="rsvDate">
                {t('예약일')} : {formatDate}
              </div>
              <div className="rsvTime">
                {t('예약시간')} : {rTime}
              </div>
              <div className='"rsvStatus'>
                {t('예약상태')} :{' '}
                {status === 'CANCEL' ? (
                  <span className="sCancel">{t('취소완료')}</span>
                ) : (
                  <span className="sReserve">{t('예약확정')}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

const ItemStyledBox = styled(ItemBox)`
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ada493;
  width: 100%;

  a {
    height: 250px;
    display: flex;

    .studentNo,
    .img {
      width: 40%;
      height: 100%;
      border-radius: 5px 5px 0px 0px;
    }

    .item-content {
      width: 100%;
      word-break: break-all;
      padding: 5px 20px 5px 30px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: ${normal};

      .userName {
        font-size: ${extraBig};
        font-weight: bold;
        text-align: center;
        line-height: 1;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
      }

      .actNameTitle {
        font-size: ${medium};
        font-weight: bold;
        margin-bottom: 10px;
        display: flex;
        align-items: center;

        .act_title {
          margin: 0;
        }

        .t_icon {
          margin-right: 10px;
        }
      }

      .rsvTitle {
        font-size: ${medium};
        font-weight: bold;
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        .rsv_title {
          margin: 0;
        }

        .icon {
          margin-right: 10px;
          color: red;
        }
      }

      .rsvContent {
        display: flex;
        padding: 5px 0;
        position: relative;

        > div {
          margin-right: 15px;
          font-size: ${normedium};
        }
      }

      .rsvStatus {
        display: flex;
        align-items: center;
      }

      .sCancel {
        color: red;
      }
      .sReserve {
        color: red;
      }

      .act_content {
        height: 35%;
        margin-bottom: 20px;
      }

      .activityName {
        font-size: ${medium};
        line-height: 170%;
        width: 100%;
        overflow: hidden; //글자 넘치는 부분 감추기
        text-overflow: ellipsis; //숨겨지는 영역 끝에 말줄임표 생성
        white-space: normal; //줄바꿈
        text-align: left; //텍스트 윈쪽 정렬
        word-wrap: break-word; //단어 단위로 줄바꿈
        display: -webkit-box; //영역을 box형태로 지정
        -webkit-line-clamp: 2; //해당 영역 내 텍스트 최대 라인수
        -webkit-box-orient: vertical; //박스 방향 설정(가로)
      }

      .doroAddress {
        font-size: ${medium};
        color: red;
        height: 15%;
        margin-top: 10px;
        padding-top: 5px;
        display: flex;
        align-items: center;
        border-top: 1px solid;

        .addr {
          margin: 0;
        }

        .icon {
          color: red;
          margin-right: 10px;
        }
      }
    }
  }
`;

const NoData = styled.li`
  font-size: 1.3em;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemsBox = ({ items }) => {
  const { t } = useTranslation();

  return (
    <>
      {items && items.length > 0 ? (
        items.map((item) => <ItemStyledBox key={item.cSeq} item={item} />)
      ) : (
        <NoData>{t('조회된_예약_내역이_없습니다')}</NoData>
      )}
    </>
  );
};

export default React.memo(ItemsBox);
