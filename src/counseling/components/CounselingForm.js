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
      <div></div>
      <div>
        <dt>{t('상담_날짜')}</dt>
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
