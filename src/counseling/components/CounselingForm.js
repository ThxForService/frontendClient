import React from 'react';
import Calendar from 'react-calendar';
import { StyledInput } from '@/commons/components/StyledInput';
import {
  StyledButton,
  StyledTimeButton,
} from '@/commons/components/StyledButton';
import StyledMessage from '@/commons/components/StyledMessage';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ccase from '../constants/cCase';
import creason from '../constants/cReason';
import { IoIosRadioButtonOn, IoIosRadioButtonOff } from 'react-icons/io';
// const FormBox = styled.form`
//   dl {
//     display: flex;
//     align-items: center;
//     dt {
//       width: 120px;
//     }
//     dd {
//       flex-grow: 1;
//     }
//   }
//   dl + dl {
//     margin-top: 10px;
//   }
//   .radio {
//     margin-right: 10px;
//   }
//   .agree {
//     text-align: center;
//     margin: 15px 0;
//     svg {
//       font-size: 1.5rem;
//       vertical-align: middle;
//       margin-right: 5px;
//     }
//   }
//   .react-calendar {
//     width: 95%;
//     height: 500px;
//     padding: 15px;
//     border-radius: 20px;
//     align-content: center;
//     display: flex;
//     flex-direction: column;
//   }

//   /* 네비게이션 가운데 정렬 */
//   .react-calendar__navigation {
//     justify-content: center;
//     align-content: center;
//   }

//   // 연도 옮기는 버튼 없애기
//   .react-calendar__navigation__next2-button,
//   .react-calendar__navigation__prev2-button {
//     display: none;
//   }

//   /* 네비게이션 비활성화 됐을때 스타일 */
//   .react-calendar__navigation button:disabled {
//     background-color: ${({ theme }) => theme.colors.white};
//     color: ${({ theme }) => theme.colors.gray};
//   }

//   /* 년/월 상단 네비게이션 칸 크기 줄이기 */
//   .react-calendar__navigation__label {
//     flex-grow: 0 !important;
//   }

//   //hover 했을 때, 선택한 날짜 색상 변경
//   .react-calendar__navigation__label:hover,
//   .react-calendar__navigation button:enabled:hover {
//     background: ${({ theme }) => theme.colors.lightGreen};
//     border-radius: 40px;
//   }

//   .react-calendar__viewContainer {
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//   }

//   /* 요일 밑줄 제거 */
//   .react-calendar__month-view__weekdays abbr {
//     text-decoration: none;
//     font-weight: bold;
//   }

//   .react-calendar__navigation button:focus {
//     background-color: ${({ theme }) => theme.colors.white};
//   }

//   .react-calendar__tile:disabled {
//     background-color: ${({ theme }) => theme.colors.gray};
//   }

//   .react-calendar__navigation__label > span {
//     // 달력 상단 년/월 글씨 커스텀
//     font-size: ${({ theme }) => theme.colors.normedium};
//     font-weight: bold;
//     line-height: 140%;
//   }

//   /* 주말에만 빨간 폰트 */
//   .react-calendar__month-view__weekdays__weekday--weekend {
//     color: #red;
//   }

//   .react-calendar__month-view__weekdays__weekday {
//     padding: 15px;
//     font-size: ${({ theme }) => theme.colors.medium};
//     font-weight: bold;
//     border-bottom: solid 1px ${({ theme }) => theme.colors.dark};
//     margin-bottom: 5px;
//   }

//   //hover 했을 때, 선택한 날짜 색상 변경
//   .react-calendar__tile:enabled:hover {
//     background: ${({ theme }) => theme.colors.lightGreen};
//     border-radius: 40px;
//   }
//   .react-calendar__tile:enabled:focus,
//   .react-calendar__tile--active {
//     background: ${({ theme }) => theme.colors.darkGreen};
//     color: ${({ theme }) => theme.colors.white};
//     border-radius: 40px;
//   }

//   .react-calendar__tile--now {
//     // 오늘 날짜 하이라이트 커스텀
//     background: ${({ theme }) => theme.colors.white};
//     color: ${({ theme }) => theme.colors.midGreen};
//   }

//   /* 네비게이션 현재 선택한 월 스타일 적용 */
//   .react-calendar__tile--hasActive {
//     abbr {
//       color: ${({ theme }) => theme.colors.primary};
//     }
//   }

//   /* 네비게이션 월, 연도 스타일 적용 */
//   .react-calendar__year-view__months__month,
//   .react-calendar__decade-view__years__year,
//   .react-calendar__century-view__decades__decade {
//     flex: 0 0 calc(33.3333% - 10px) !important;
//     margin-inline-start: 5px !important;
//     margin-inline-end: 5px !important;
//     margin-block-end: 10px;
//     font-weight: bold;
//     border-radius: 10px;
//     background-color: ${({ theme }) => theme.colors.lightGreen};
//   }

//   /* 일 날짜 간격 */
//   .react-calendar__tile {
//     position: relative;
//     text-align: center;
//     height: 60px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     font-size: ${({ theme }) => theme.colors.normedium};
//   }
// `;

const FormBox = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  dl {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    dt {
      width: 150px;
      font-weight: bold;
      font-size: 16px;
      color: #333;
    }

    dd {
      flex-grow: 1;
      margin: 0;
    }

    input[type='text'],
    input[type='email'],
    input[type='tel'],
    select {
      width: 100%;
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #ccc;
      font-size: 14px;
      box-sizing: border-box;
    }
  }

  /* Input fields 간격 및 구분 */
  dl + dl {
    margin-top: 15px;
  }

  /* 상담 경위 라디오 버튼 스타일 */
  .radio {
    margin-right: 10px;
    display: inline-flex;
    align-items: center;

    label {
      margin-left: 5px;
    }

    input[type='radio'] {
      margin-right: 5px;
    }
  }

  /* 상담 경위 스타일 */
  .agree {
    text-align: center;
    margin: 20px 0;
    svg {
      font-size: 1.5rem;
      vertical-align: middle;
      margin-right: 5px;
    }
  }

  /* 상담 날짜, 시간, 유형 선택 */
  .select-group {
    display: flex;
    justify-content: space-between;
    gap: 15px;

    .select-item {
      flex: 1;

      label {
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 5px;
        display: block;
      }

      select {
        width: 100%;
        padding: 10px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
    }
  }

  /* 제출 버튼 스타일 */
  .submit-button {
    width: 100%;
    padding: 12px;
    background-color: #28a745;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px;
  }

  .submit-button:hover {
    background-color: #218838;
  }
`;

const RadioLabel = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  span {
    margin-left: 8px;
  }
`;
const RadioWrapper = styled.div`
  margin-top: 15px;
`;
const CounselingForm = ({
  form,
  errors,
  onSubmit,
  onChange,
  selectedDate,
  handleTimeSelect,
  onDateChange,
}) => {
  const { t } = useTranslation();
  const times = {
    morning: ['09:00', '10:00', '11:00', '12:00'],
    afternoon: ['13:00', '14:00', '15:00', '16:00', '17:00'],
  };

  const options = Object.keys(ccase).map((key) => ({
    value: key,
    label: ccase[key],
  }));

  return (
    <FormBox onSubmit={onSubmit} autoComplete="off">
      <div>
        <dt>{t('학번')}</dt>
        <StyledInput
          type="text"
          name="studentNo"
          value={form?.studentNo}
          onChange={onChange}
        />
      </div>
      <div>
        <dt>{t('이름')}</dt>
        <StyledInput
          type="text"
          name="username"
          value={form?.username}
          onChange={onChange}
        />
      </div>
      <div>
        <dt>{t('이메일')}</dt>
        <StyledInput
          type="text"
          name="email"
          value={form?.email}
          onChange={onChange}
        />
        {errors?.email && (
          <StyledMessage color="danger" messages={errors.email} />
        )}
      </div>
      <div>
        <dt>{t('전화번호')}</dt>
        <StyledInput
          type="text"
          name="mobile"
          value={form?.mobile}
          onChange={onChange}
        />
        {errors?.mobile && (
          <StyledMessage color="danger" messages={errors.mobile} />
        )}
      </div>
      <div>
        <dt>{t('상담_날짜')}</dt>
        {/* 예약 가능한 날짜 범위 설정 */}
        <Calendar onChange={onDateChange} value={selectedDate} />{' '}
        {errors?.rDate && (
          <StyledMessage color="danger" messages={errors.rDate} />
        )}
      </div>
      <RadioWrapper>
        <dt>{t('상담_경위')}</dt>
        <dd>
          <RadioLabel
            onClick={() =>
              onChange({ target: { name: 'creason', value: 'VOLUNTARY' } })
            }
          >
            {form?.creason === 'VOLUNTARY' ? (
              <IoIosRadioButtonOn />
            ) : (
              <IoIosRadioButtonOff />
            )}
            <span>{creason.VOLUNTARY}</span>
          </RadioLabel>
          <RadioLabel
            onClick={() =>
              onChange({ target: { name: 'creason', value: 'RECOMMENDED' } })
            }
          >
            {form?.creason === 'RECOMMENDED' ? (
              <IoIosRadioButtonOn />
            ) : (
              <IoIosRadioButtonOff />
            )}
            <span>{creason.RECOMMENDED}</span>
          </RadioLabel>
          {errors?.creason && (
            <StyledMessage color="danger" messages={errors.creason} />
          )}
        </dd>
      </RadioWrapper>
      <div>
        <dt>{t('상담_시간')}</dt>
        <div>
          <h4>{t('오전')}</h4>
          {times.morning.map((time) => (
            <StyledTimeButton
              type="button"
              key={time}
              selected={form.rTime === time} // form.rTime이 선택된 시간인지 확인
              onClick={(e) => handleTimeSelect(time, e)}
            >
              {time}
            </StyledTimeButton>
          ))}
        </div>
        <div>
          <h4>{t('오후')}</h4>
          {times.afternoon.map((time) => (
            <StyledTimeButton
              type="button"
              key={time}
              selected={form.rTime === time} // form.rTime이 선택된 시간인지 확인
              onClick={(e) => handleTimeSelect(time, e)}
            >
              {time}
            </StyledTimeButton>
          ))}
        </div>
        {errors?.rTime && (
          <StyledMessage color="danger" messages={errors.rTime} />
        )}
      </div>
      <div>
        <dt>{t('상담_유형')}</dt>
        <select name="ccase" value={form.ccase} onChange={onChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {form?.ccase === 'OTHER' && (
          <div>
            <label>{t('기타 내용')}</label>
            <input
              type="text"
              name="customCase"
              value={form.customCase}
              onChange={onChange}
              placeholder={t('하고싶은_말을_전달해보세요')}
            />
          </div>
        )}
      </div>
      <StyledButton type="submit">{t('예약하기')}</StyledButton>
    </FormBox>
  );
};
export default CounselingForm;
