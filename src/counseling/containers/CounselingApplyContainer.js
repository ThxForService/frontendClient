'use client';
import React, { useState, useEffect, useCallback, useContext } from 'react';
import { useRouter } from 'next/navigation';
import CounselingForm from '@/counseling/components/CounselingForm';
import Loading from '@/commons/components/Loading';
import { apiList } from '../apis/apiInfo';
import apiApply from '../apis/apiApply';
import { useTranslation } from 'react-i18next';
import _useConfirm from '@/commons/hooks/useConfirm';
import UserInfoContext from '@/commons/contexts/UserInfoContext';
import { useParams } from 'next/navigation';

const CounselingApplyContainer = ({ setPageTitle }) => {
  const router = useRouter();
  const { cSeq } = useParams();
  const {
    states: { userInfo },
  } = useContext(UserInfoContext);

  const [data, setData] = useState(null);
  const [errors, setErrors] = useState({});
  const [selectedTime, setSelectedTime] = useState('');

  const [form, setForm] = useState({
    studentNo: userInfo?.studentNo || '',
    ame: userInfo?.username || '',
    email: userInfo?.email || '',
    mobile: userInfo?.mobile || '',
    rDate: '',
    rTime: '',
    cCase: 'FAMILY', // 기본 상담 유형
  });

  const { t } = useTranslation();

  // 예약 가능한 시간대 가져오기
  useEffect(() => {
    (async () => {
      try {
        const res = await apiList(cSeq);
        console.log('이진표 api작업 확인중:', res); // 데이터 확인용 로그 추가
        setPageTitle(`${res.usernname} ${t('예약하기')}`);

        /* 예약 가능일 문자열 -> Date 객체  */
        const availableDates = Object.keys(res.availableDates).sort();
        res.minDate = new Date(availableDates[0]);
        res.maxDate = new Date(availableDates.pop());
        res._availableDates = availableDates;
        res._availableDates = availableDates;

        setData(res);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [cSeq, t, setPageTitle]);

  const handleTimeSelect = (time) => {
    setSelectedTime(time); // 선택된 시간 상태 업데이트
    setForm((prevForm) => ({
      ...prevForm,
      rTime: time, // form 상태에 선택된 시간을 저장
    }));
  };

  // 날짜 변경 처리
  const handleDateChange = (date) => {
    setForm((prevForm) => ({
      ...prevForm,
      rDate: date,
    }));
  };

  // 날짜 선택 처리
  const onDateChange = useCallback(
    (date) => {
      const rDate = format(date, 'yyyy-MM-dd');
      const times = data.availableDates[rDate];
      setData((data) => ({ ...data, times }));
      setForm((form) => ({ ...form, rDate }));
    },
    [data, setForm],
  );

  const onChange = useCallback((e) => {
    setForm(
      produce((draft) => {
        draft[e.target.name] = e.target.value.trim();
      }),
    );
  }, []);

  // 상담사유
  const selectChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // 폼 제출 처리
  const onSubmit = useCallback(
    //Submit = 검증
    (e) => {
      e.preventDefault();

      let _errors = {};
      let hasErrors = false;

      setErrors({});

      /* 필수 항목 검증 S */
      const requiredFields = {
        rDate: t('예약일을_선택하세요'),
        rTime: t('시간대를_선택하세요'),
        email: t('예약자_이메일을_입력하세요'),
        mobile: t('예약자_전화번호를_입력하세요'),
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
      /* 필수 항목 검증 E */

      if (hasErrors) {
        setErrors(_errors);
        return;
      }

      /* 예약 접수 처리 S */
      _useConfirm(t('정말_예약하시겠습니까'), () => {
        (async () => {
          try {
            const res = await apiApply(form);
            // 예약 접수 성공시 예약 완료 페이지 이동
            router.push(`/counseling/complete/${res.cSeq}`, { replace: true });
          } catch (err) {
            console.error(err);
            setErrors({ global: [err.message] });
          }
        })();
      });
      /* 예약 접수 처리 E */
    },
    [t, form, router],
  );

  if (!data) {
    return <Loading />;
  }

  return (
    <CounselingForm
      data={data}
      form={form}
      errors={errors}
      onSubmit={onSubmit}
      onChange={onChange}
      handleDateChange={handleDateChange}
      selectedDate={form.rDate}
      selectedTime={selectedTime}
      selectChange={selectChange}
      onDateChange={onDateChange}
      handleTimeSelect={handleTimeSelect}
    />
  );
};
export default CounselingApplyContainer;
