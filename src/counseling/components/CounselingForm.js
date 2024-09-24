import React from 'react';
import Calendar from 'react-calendar';
import { StyledInput } from '@/commons/components/StyledInput';
import { StyledButton } from '@/commons/components/StyledButton';
import StyledMessage from '@/commons/components/StyledMessage';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
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
const CounselingForm = ({
  form,
  errors,
  onSubmit,
  onChange,
  selectedDate,
  selectedTime,
  handleTimeSelect,
  selectChange,
  onDateChange,
}) => {
  const { t } = useTranslation();
  const times = {
    morning: ['09:00', '10:00', '11:00', '12:00'],
    afternoon: ['13:00', '14:00', '15:00', '16:00', '17:00'],
  };
  const options = [
    { value: 'FAMILY', label: '가족' },
    { value: 'ACADEMIC', label: '학업/진로' },
    { value: 'RELATIONSHIPS', label: '대인관계' },
    { value: 'EMOTIONAL', label: '심리정서' },
    { value: 'BEHAVIOR', label: '생활습관 및 행동문제' },
    { value: 'ROMANCE_SEX', label: '연애와 성' },
    { value: 'LIFE_VALUES', label: '삶과 가치' },
    { value: 'PERSONALITY', label: '성격' },
    { value: 'OTHER', label: '기타' },
  ];

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
        <Calendar onChange={onDateChange} value={selectedDate} />{' '}
        {errors?.rDate && (
          <StyledMessage color="danger" messages={errors.rDate} />
        )}
      </div>

      <div>
        <dt>{t('상담_시간')}</dt>
        <div>
          <h4>{t('오전')}</h4>
          {times.morning.map((time) => (
            <button
              key={time}
              onClick={() => handleTimeSelect(time)}
              style={{
                backgroundColor: selectedTime === time ? 'green' : 'white',
                color: selectedTime === time ? 'white' : 'black',
                padding: '10px',
                margin: '5px',
                border: '1px solid gray',
                borderRadius: '5px',
              }}
            >
              {time}
            </button>
          ))}
        </div>
        <div>
          <h4>{t('오후')}</h4>
          {times.afternoon.map((time) => (
            <button
              key={time}
              onClick={() => handleTimeSelect(time)}
              style={{
                backgroundColor: selectedTime === time ? 'green' : 'white',
                color: selectedTime === time ? 'white' : 'black',
                padding: '10px',
                margin: '5px',
                border: '1px solid gray',
                borderRadius: '5px',
              }}
            >
              {time}
            </button>
          ))}
        </div>
        {errors?.rTime && (
          <StyledMessage color="danger" messages={errors.rTime} />
        )}
      </div>

      <div>
        <dt>{t('상담_유형')}</dt>
        <select name="cCase" value={form.cCase} onChange={onChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          <option value="FAMILY">{t('가족')}</option>
          <option value="ACADEMIC">{t('학업/진로')}</option>
          <option value="RELATIONSHIPS">{t('대인관계')}</option>
          <option value="EMOTIONAL">{t('심리정서')}</option>
          <option value="BEHAVIOR">{t('생활습관 및 행동문제')}</option>
          <option value="ROMANCE_SEX">{t('연애와 성')}</option>
          <option value="LIFE_VALUES">{t('삶과 가치')}</option>
          <option value="PERSONALITY">{t('성격')}</option>
          <option value="OTHER">{t('기타')}</option>
        </select>
        {form?.cCase === 'OTHER' && (
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
