import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { StyledInput } from '@/commons/components/StyledInput'; // 커스텀 스타일을 사용한다면 임포트
import { StyledButton } from '@/commons/components/StyledButton';
import StyledMessage from '@/commons/components/StyledMessage';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

const CounselingForm = ({ form, errors, handleChange, handleDateChange, handleTimeChange, handleSubmit, selectedDate }) => {
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>학번</label>
        <StyledInput type="text" value={form.studentNo} readOnly />
      </div>
      <div>
        <label>이름</label>
        <StyledInput type="text" value={form.username} readOnly />
      </div>
      <div>
        <label>이메일</label>
        <StyledInput
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <StyledMessage>{errors.email}</StyledMessage>}
      </div>
      <div>
        <label>전화번호</label>
        <StyledInput
          type="text"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
        />
        {errors.mobile && <StyledMessage>{errors.mobile}</StyledMessage>}
      </div>
      <div>
        <label>상담 날짜</label>
        <Calendar onChange={handleDateChange} value={selectedDate} />
        {errors.rDate && <StyledMessage>{errors.rDate}</StyledMessage>}
      </div>
      <div>
        <label>상담 시간</label>
        <StyledInput
          type="time"
          name="rTime"
          value={form.rTime}
          onChange={handleChange}
        />
        {errors.rTime && <StyledMessage>{errors.rTime}</StyledMessage>}
      </div>
      <div>
        <label>상담 유형</label>
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
      </div>
      <StyledButton type="submit">예약하기</StyledButton>
    </form>
  );
};

export default CounselingForm;
