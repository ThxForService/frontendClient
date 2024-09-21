'use client';
import React, { useEffect, useState, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReservationForm from '../components/ReservationForm';
import Loading from '../../commons/components/Loading';
import UserInfoContext from '../../member/modules/UserInfoContext';
import apiGetPrograms from '../apis/apiGetPrograms'; // 프로그램 목록 가져오기 API
import apiApply from '../apis/apiApply';
import _useConfirm from '../../commons/hooks/useConfirm';

const GroupCounselingApplyContainer = ({ setPageTitle }) => {
  const {
    states: { userInfo },
  } = useContext(UserInfoContext);

  const [programs, setPrograms] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: userInfo?.userName || '',
    email: userInfo?.email || '',
    mobile: userInfo?.mobile || '',
    rDate: null,
    time: null,
  });
  
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrograms = async () => {
      const res = await apiGetPrograms(); // 프로그램 목록 가져오기
      setPrograms(res);
      setPageTitle(t('집단상담신청'));
    };
    fetchPrograms();
  }, [setPageTitle, t]);

  const onProgramChange = useCallback((program) => {
    setSelectedProgram(program);
    // 프로그램에 따라 예약 가능일과 시간 가져오는 로직 추가
  }, []);

  const onDateChange = useCallback((date) => {
    const rDate = date; // 선택한 날짜
    setForm((form) => ({ ...form, rDate }));
    // 필요에 따라 예약 가능 시간 데이터를 가져오는 로직 추가
  }, []);

  const onTimeChange = useCallback((selectedTime) => {
    setForm((form) => ({ ...form, time: selectedTime }));
  }, []);

  const onChange = useCallback((e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.trim(),
    }));
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    let _errors = {};
    let hasErrors = false;

    setErrors({});

    const requiredFields = {
      program: t('프로그램을_선택하세요'),
      rDate: t('예약일을_선택하세요'),
      time: t('시간을_선택하세요'),
      name: t('예약자명을_입력하세요'),
      email: t('예약자_이메일을_입력하세요'),
      mobile: t('예약자_전화번호를_입력하세요'),
    };

    if (!selectedProgram) {
      _errors.program = [_errors.program ?? [], requiredFields.program];
      hasErrors = true;
    }

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
      return;
    }

    _useConfirm(t('정말_신청하시겠습니까'), () => {
      (async () => {
        try {
          const res = await apiApply({ ...form, programId: selectedProgram.id });
          navigate(`/counseling/complete/${res.seq}`, { replace: true });
        } catch (err) {
          console.error(err);
          setErrors({ global: [err.message] });
        }
      })();
    });
  }, [t, form, navigate, selectedProgram]);

  if (!programs.length) {
    return <Loading />;
  }

  return (
    <GroupCounselingApplyContainer
      programs={programs}
      selectedProgram={selectedProgram}
      form={form}
      errors={errors}
      onProgramChange={onProgramChange}
      onDateChange={onDateChange}
      onTimeChange={onTimeChange}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
};

export default React.memo(GroupCounselingApplyContainer);
