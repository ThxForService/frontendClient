'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation'; // 페이지 이동
import CounselingForm from '../components/CounselingForm'; // CounselingForm import
import apiApply from '../apis/apiApply'; // API 요청 함수
import { StyledWrapper } from '@/commons/layouts/StyledWrapper'; // Wrapper 컴포넌트
import { useTranslation } from 'react-i18next';

const initialForm = {
  studentNo: '',
  username: '',
  email: '',
  mobile: '',
  rDate: null, // 날짜 초기값
  rTime: '', // 시간 초기값
  cCase: 'FAMILY', // 기본 상담 유형
  customCase: '',
};

const CounselingApplyContainer = () => {
  const [form, setForm] = useState(initialForm); // 폼 상태 관리
  const [errors, setErrors] = useState({}); // 오류 상태 관리
  const router = useRouter(); // 페이지 이동을 위한 useRouter
  const { t } = useTranslation();

  // 폼 데이터 변경 처리
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  // 상담 유형 선택 처리
  const onCaseChange = useCallback((e) => {
    const { value } = e.target;
    setForm((form) => ({ ...form, cCase: value })); // 상담 유형 선택 시 상태 업데이트
  }, []);

  // 날짜 선택 처리
  const onDateChange = (date) => {
    const formattedDate = date.toISOString().split('T')[0]; // 날짜 부분만 추출 (YYYY-MM-DD)
    setForm((form) => ({ ...form, rDate: formattedDate }));
  };

  // 시간 선택 처리
  const onTimeSelect = useCallback((time) => {
    setForm((form) => ({ ...form, rTime: time }));
  }, []);

  const handleTimeSelect = (time, e) => {
    e.preventDefault(); // 폼 제출 방지
    setForm((form) => ({ ...form, rTime: time }));
  };

  // 유효성 검사 함수
  const validateForm = () => {
    const _errors = {};
    let hasErrors = false;

    const requiredFields = {
      studentNo: t('학번을 입력하세요.'),
      username: t('이름을 입력하세요.'),
      email: t('이메일을 입력하세요.'),
      mobile: t('전화번호를 입력하세요.'),
      rDate: t('예약 날짜를 선택하세요.'),
      rTime: t('예약 시간을 선택하세요.'),
    };

    for (const [field, message] of Object.entries(requiredFields)) {
      if (
        (typeof form[field] === 'string' && !form[field].trim()) ||
        (typeof form[field] !== 'string' && !form[field])
      ) {
        _errors[field] = _errors[field] ?? [];
        _errors[field].push(message);
        hasErrors = true;
      }
    }

    if (hasErrors) {
      setErrors(_errors);
    }

    return hasErrors;
  };

  // 폼 제출 처리
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const hasErrors = validateForm();
      if (hasErrors) return; // 유효성 검사를 통과하지 못하면 종료

      // API 요청을 통한 예약 처리
      (async () => {
        try {
          await apiApply(form);
          router.replace('/counseling/complete'); // 예약 성공 후 페이지 이동
        } catch (err) {
          // 오류 처리
          const apiErrors =
            typeof err.message === 'string'
              ? { global: [err.message] }
              : err.message;
          setErrors((prevErrors) => ({ ...prevErrors, ...apiErrors }));
        }
        console.log('예약확인으로가야되는데');
      })();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [form, router],
  );

  return (
    <StyledWrapper>
      <CounselingForm
        form={form}
        errors={errors}
        onChange={onChange}
        onCaseChange={onCaseChange}
        onSubmit={onSubmit}
        onDateChange={onDateChange}
        onTimeSelect={onTimeSelect}
        handleTimeSelect={handleTimeSelect}
      />
    </StyledWrapper>
  );
};

export default CounselingApplyContainer;
