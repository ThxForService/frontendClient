'use client';
import React, { useLayoutEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { getCommonActions } from '@/commons/contexts/CommonContext';
import JoinForm from '../components/JoinForm';
import { StyledWrapper } from '@/commons/components/layouts/StyledWrapper';
import { apiJoin } from '../apis/apiJoin';

const initalForm = {
  userType: 'STUDENT',
  status: 'ONCLASS',
  gender: 'FEMALE',
  agree: false,
};

const JoinContainer = () => {
  const { t } = useTranslation();
  const { setMainTitle } = getCommonActions();
  const router = useRouter();
  const [form, setForm] = useState(initalForm);
  const [errors, setErrors] = useState({});
  useLayoutEffect(() => {
    setMainTitle(t('회원가입'));
  }, [t, setMainTitle]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const _errors = {};
      let hasErrors = false;

      /* 필수 항목 검증 S */
      const requiredFields = {
        email: t('이메일을_입력하세요.'),
        password: t('비밀번호를_입력하세요.'),
        confirmPassword: t('비밀번호를_확인하세요.'),
        userName: t('회원명을_입력하세요.'),
        userType: t('가입유형을_선택하세요.'),
        zonecode: t('우편번호를_입력하세요.'),
        address: t('주소를_입력하세요.'),
        birth: t('생년월일을_입력하세요.'),
        gender: t('성별을_선택하세요.'),
      };

      if (form?.userType === 'STUDENT') {
        requiredFields.deptNm = t('학과명을_입력하세요.');
        requiredFields.deptNo = t('학과번호를_입력하세요.');
        requiredFields.stdntNo = t('학번을_입력하세요.');
        requiredFields.grade = t('학년을_입력하세요.');
        requiredFields.professor = t('지도교수를_선택하세요.');
      } else {
        requiredFields.deptNm = t('부서명을_입력하세요.');
        requiredFields.deptNo = t('부서번호를_입력하세요.');
        requiredFields.empNo = t('사번을_입력하세요.');
        requiredFields.subject = t('담당과목을_입력하세요.');
      }

      for (const [field, message] of Object.entries(requiredFields)) {
        if (!form[field] || !form[field]?.trim()) {
          _errors[field] = _errors[field] ?? [];
          _errors[field].push(message);
          hasErrors = true;
        }
      }

      if (!form.agree) {
        _errors.agree = [t('회원가입_약관에_동의하세요.')];
        hasErrors = true;
      }
      /* 필수 항목 검증 E */

      /* 비밀번호 및 비밀번호 확인 일치 여부 */
      if (form.password !== form.confirmPassword) {
        _errors.confirmPassword = [t('비밀번호가_일치하지_않습니다.')];
        hasErrors = true;
      }

      setErrors(_errors);
      if (hasErrors) {
        // 검증 실패시 회원 가입 X
        return;
      }

      // 회원 가입 처리
      (async () => {
        try {
          await apiJoin(form);
          setForm(initalForm);
          router.replace('/member/login'); // 회원가입 완료 후 페이지 이동
        } catch (err) {
          // 검증 실패, 가입 실패
          const messages =
            typeof err.message === 'string'
              ? { global: [err.message] }
              : err.message;

          for (const [field, _messages] of Object.entries(messages)) {
            _errors[field] = _errors[field] ?? [];
            _errors[field].push(_messages);
          }
          setErrors({ ..._errors });
        }
      })();
    },
    [form, router, t],
  );

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const onToggle = useCallback((name, value) => {
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  return (
    <StyledWrapper>
      <JoinForm
        form={form}
        onSubmit={onSubmit}
        onChange={onChange}
        onToggle={onToggle}
        errors={errors}
      />
    </StyledWrapper>
  );
};

export default React.memo(JoinContainer);
