import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import CounselingForm from '@/counseling/components/CounselingForm';
import Loading from '@/commons/components/Loading';
import { apiGetAvailableTimes, apiSubmitCounselingForm } from '@/counseling/apis/counselingApi';
import { useTranslation } from 'react-i18next';

const CounselingApplyContainer = ({ userInfo, setPageTitle }) => {
  const [form, setForm] = useState({
    studentNo: userInfo?.studentNo || '',
    username: userInfo?.username || '',
    email: userInfo?.email || '',
    mobile: userInfo?.mobile || '',
    rDate: '',
    rTime: '',
    cCase: 'FAMILY', // 기본 상담 유형
  });
  const [errors, setErrors] = useState({});
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { t } = useTranslation();

  // 예약 가능한 시간대 가져오기
  useEffect(() => {
    const fetchAvailableTimes = async () => {
      try {
        const result = await apiGetAvailableTimes();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching available times:', error);
        setLoading(false);
      }
    };
    fetchAvailableTimes();
  }, []);

  // 페이지 타이틀 설정
  useEffect(() => {
    if (setPageTitle) {
      setPageTitle(t('상담 예약'));
    }
  }, [setPageTitle, t]);

  // 입력 값 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // 날짜 변경 처리
  const handleDateChange = (date) => {
    setForm((prevForm) => ({
      ...prevForm,
      rDate: date,
    }));
  };

  // 시간 선택 처리
  const handleTimeChange = (time) => {
    setForm((prevForm) => ({
      ...prevForm,
      rTime: time,
    }));
  };

  // 폼 제출 처리
  const handleSubmit = async (e) => {
    e.preventDefault();
    const _errors = {};

    // 필수 입력 항목 검증
    if (!form.email) _errors.email = t('이메일을 입력해주세요.');
    if (!form.mobile) _errors.mobile = t('전화번호를 입력해주세요.');
    if (!form.rDate) _errors.rDate = t('날짜를 선택해주세요.');
    if (!form.rTime) _errors.rTime = t('시간을 선택해주세요.');

    if (Object.keys(_errors).length > 0) {
      setErrors(_errors);
      return;
    }

    try {
      await apiSubmitCounselingForm(form);
      router.push('/counseling/complete'); // 성공 시 완료 페이지로 이동
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ global: t('제출 중 오류가 발생했습니다. 다시 시도해주세요.') });
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <CounselingForm
      form={form}
      data={data}
      errors={errors}
      onChange={handleChange}
      onDateChange={handleDateChange}
      onTimeChange={handleTimeChange}
      onSubmit={handleSubmit}
    />
  );
};

export default CounselingApplyContainer;