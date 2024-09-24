'use client';
import React, { useState, useCallback, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import UserInfoContext from '@/commons/contexts/UserInfoContext';
import { updateProfile } from '../apis/apiMypage';
import ProfileForm from '../components/ProfileForm';
import ProfileImage from '../components/ProfileImage';
import { getProfessors } from '@/member/apis/apiInfo';

const MypageProfileContainer = () => {
  const {
    states: { userInfo },
    actions: { setUserInfo },
  } = useContext(UserInfoContext);

  const initialForm = userInfo;
  delete initialForm.password;

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [professors, setProfessors] = useState([]);
  const [skey, setSkey] = useState('');

  const { t } = useTranslation();
  const router = useRouter();

  const onChange = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'skey') {
      setSkey(value);
    } else {
      setForm((form) => ({ ...form, [name]: value }));
    }
  }, []);

  const onToggle = useCallback((name, value) => {
    setForm((form) => ({ ...form, [name]: value }));
  }, []);


  useEffect(() => {
    (async () => {
      try {
        const professors = await getProfessors(skey);
        setProfessors(professors);
        if (professors && professors.length > 0) {
          setForm((form) => ({ ...form, professor: professors[0].seq }));
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [skey]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const _errors = {};
      let hasErrors = false;

      /**
       * 필수항목 검증
       * 1. 회원명(이름)
       * 2. 비밀번호(선택), 있는 경우 confirmPassword(필수), password, confirmPassword 일치여부
       */
      const requiredFields = {
        username: t('회원명을_입력하세요'),
      };
      if (form?.password?.trim()) {
        requiredFields.confirmPassword = t('비밀번호를_확인하세요.');
      }

      for (const [field, message] of Object.entries(requiredFields)) {
        if (!form[field] || !form[field].trim()) {
          _errors[field] = _errors[field] ?? [];

          _errors[field].push(message);
          hasErrors = true;
        }
      }

      // 비밀번호가 입력된 경우 비밀번호 확인 일치여부 체크
      if (!hasErrors && form.password !== form.confirmPassword) {
        _errors.confirmPassword = _errors.confirmPassword ?? [];
        _errors.confirmPassword.push(t('비밀번호가_일치하지_않습니다.'));
        hasErrors = true;
      }

      setErrors(_errors);
      if (hasErrors) {
        return;
      }

      // 회원정보 수정 처리 S
      (async () => {
        try {
          const res = await updateProfile(form);
          console.log('Res', res);
          // 회원 정보 수정 완료 후 -> context api 쪽 정보 업데이트
          // form 초기화, 마이페이지 메인으로 이동
          setUserInfo(res);
          const newForm = res;
          delete newForm.password;
          setForm(newForm);

          router.replace('/mypage');
        } catch (err) {
          console.error(err);
          const messages = err.message.global
            ? err.message
            : { global: [err.message] };
          setErrors(messages);
        }
      })();
      // 회원정보 수정 처리 E
    },
    [t, form, router, setUserInfo],
  );

  const fileUploadCallback = useCallback(
    (files) => {
      if (files.length === 0) {
        return;
      }

      const file = files[0];
      const profileImage = `${file.thumbUrl}?seq=${file.seq}&width=300&height=400`;
      setForm((form) => ({ ...form, profileImage }));
      setUserInfo((userInfo) => ({ ...userInfo, profileImage: files[0] }));
    },
    [setUserInfo],
  );

  return (
    <>
      <ProfileImage
        gid={form?.gid}
        fileUploadCallback={fileUploadCallback}
        profileImage={form?.profileImage}
      />
      <ProfileForm
        form={form}
        onSubmit={onSubmit}
        onChange={onChange}
        onToggle={onToggle}
        errors={errors}
        skey={skey}
        professors={professors}
      />
    </>
  );
};

export default React.memo(MypageProfileContainer);
