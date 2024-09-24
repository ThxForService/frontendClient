import React from 'react';
import Calendar from 'react-calendar';
import { StyledInput } from '@/commons/components/StyledInput';
import { StyledButton } from '@/commons/components/StyledButton';
import StyledMessage from '@/commons/components/StyledMessage';
import { useTranslation } from 'react-i18next';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const CounselingForm = ({
  form,
  errors,
  handleChange,
  handleDateChange,
  handleTimeChange,
  handleSubmit,
  selectedDate,
  onChange,
}) => {
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="title">
        <BsFillPersonLinesFill />
        <h2>{t('예약자_정보_입력')}</h2>
      </div>
      <dl>
        <dt>{t('학번')}</dt>
        <dd>
          <StyledInput
            type="text"
            name="studentNo"
            value={form?.studentNo}
            onChange={onChange}
          />
          {errors?.studentNo && (
            <StyledMessage color="danger" messages={errors.name} />
          )}
        </dd>
      </dl>
      <dl>
        <dt>{t('성함')}</dt>
        <dd>
          <StyledInput
            type="text"
            name="username"
            value={form?.username}
            onChange={onChange}
          />
          {errors?.username && (
            <StyledMessage color="danger" messages={errors.name} />
          )}
        </dd>
      </dl>
      <dl>
        <dd>
          <dt>{t('이메일')}</dt>
          <StyledInput
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors?.email && (
            <StyledMessage color="danger" messages={errors.email} />
          )}
        </dd>
      </dl>
      <dl>
        <dd>
          <dt>{t('전화번호')}</dt>
          <StyledInput
            type="text"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
          />
          {errors?.mobile && (
            <StyledMessage color="danger" messages={errors.mobile} />
          )}
        </dd>
      </dl>
      <dl>
        <dd>
          <dt>{t('상담_일자')}</dt>
          <Calendar onChange={handleDateChange} value={selectedDate} />
          {errors?.rDate && (
            <StyledMessage color="danger" messages={errors.rDate} />
          )}
        </dd>
      </dl>
      <dl>
        <dd>
          <dt>{t('상담_시간')}</dt>
          <StyledInput
            type="time"
            name="rTime"
            value={form.rTime}
            onChange={handleTimeChange}
          />
          {errors?.rTime && (
            <StyledMessage color="danger" messages={errors.rTime} />
          )}
        </dd>
      </dl>
      <dl>
        <dd>
          <dt>{t('유형')}</dt>
          <select name="cCase" value={form.cCase} onChange={handleChange}>
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
          {form.cCase === 'OTHER' && (
            <div>
              <label>{t('기타 내용')}</label>
              <input
                type="text"
                name="customCase"
                value={form.customCase}
                onChange={handleChange}
                placeholder={t('원하는 상담 주제를 입력하세요')}
              />
            </div>
          )}
        </dd>
      </dl>
      <StyledButton type="submit">예약하기</StyledButton>
    </form>
  );
};

export default CounselingForm;
