import React from 'react';
import Calendar from 'react-calendar';
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
import { getUserStates } from '@/commons/contexts/UserInfoContext';
import { InputBox } from '@/commons/components/StyledInput';

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
  .react-calendar {
    width: 100%;
    height: 300px;
    padding: 15px;
    border-radius: 20px;
    align-content: center;
    display: flex;
    flex-direction: column;
  }
  // 연도 옮기는 버튼 없애기
  .react-calendar__navigation__next2-button,
  .react-calendar__navigation__prev2-button {
    display: none;
  }
  .title {
    display: flex;
    align-items: center;

    svg {
      font-size: 10px;
      margin-right: 10px;
    }
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
  const { userInfo } = getUserStates();
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
      <div className="title">
        <h2>{t('학번')}</h2>
      </div>
      <InputBox
        type="text"
        name="studentNo"
        value={userInfo.studentNo}
        onChange={onChange}
      />
      <div className="title">
        <h2>{t('이름')}</h2>
      </div>
      <InputBox
        type="text"
        name="username"
        value={userInfo.username}
        onChange={onChange}
      />
      <div className="title">
        <h2>{t('이메일')}</h2>
      </div>
      <InputBox
        type="text"
        name="email"
        value={form?.email}
        onChange={onChange}
      />
      {errors?.email && (
        <StyledMessage color="danger" messages={errors.email} />
      )}
      <div className="title">
        <h2>{t('전화번호')}</h2>
      </div>
      <InputBox
        type="text"
        name="mobile"
        value={form?.mobile}
        onChange={onChange}
      />
      {errors?.mobile && (
        <StyledMessage color="danger" messages={errors.mobile} />
      )}
      <div className="title">
        <h2>{t('상담_날짜')}</h2>
      </div>
      {/* 예약 가능한 날짜 범위 설정 */}
      <Calendar onChange={onDateChange} value={selectedDate} />{' '}
      {errors?.rDate && (
        <StyledMessage color="danger" messages={errors.rDate} />
      )}
      <div className="footer">
        <div className="title">
          <h3>{t('상담_경위')}</h3>
        </div>
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
      </div>
      <div>
        <div className="title">
          <h3>{t('상담_시간')}</h3>
        </div>
        <div className="timeStyled">
          <RadioLabel>{t('오전')}</RadioLabel>
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
        <div className="timeStyled">
          <RadioLabel>{t('오후')}</RadioLabel>
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
        <div className="title">
          <h3>{t('상담_유형')}</h3>
        </div>
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
      <br />
      <StyledButton type="submit">{t('예약하기')}</StyledButton>
    </FormBox>
  );
};
export default CounselingForm;
